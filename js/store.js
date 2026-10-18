// Persistent progress, settings and spaced-repetition flashcards (localStorage).
const KEY = 'lingua:v1';

const defaults = () => ({
  lang: 'es',
  levels: { fr: 'beginner', es: 'beginner', tl: 'beginner', en: 'advanced' },
  onboarded: false,
  settings: { apiKey: '', model: 'claude-opus-5-5', rate: 0.9, voices: {}, theme: 'auto' },
  lessonsDone: {},     // { "fr:beginner:fr-b-1": "2026-10-18" }
  exerciseScores: {},  // { lessonKey: {correct, total, date} }
  readings: {},        // { "fr:2026-10-18": {id, score, total} }
  listening: {},       // same shape
  words: {},           // daily vocabulary quiz results, same shape
  activity: {},        // { "2026-10-18": { fr: 12, es: 4 } } — points per day
  cards: [],           // flashcards
  deletedCards: {},    // { cardId: timestamp } so deletions sync across devices
  aiCache: {},         // word lookups + generated daily content (this device only)
  updatedAt: 0,        // last local change (ms), used when syncing settings
  ownerUid: null,      // signed-in account this device's data belongs to
});

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const d = defaults();
    const s = JSON.parse(raw);
    return { ...d, ...s, levels: { ...d.levels, ...s.levels }, settings: { ...d.settings, ...s.settings } };
  } catch {
    return defaults();
  }
}

const listeners = new Set();
/** Subscribe to local changes (used by cloud sync). */
export const onChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };

/** Persist. `remote: true` means the change came from the cloud, so don't echo it back. */
export function save({ remote = false } = {}) {
  if (!remote) state.updatedAt = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { console.warn('Could not save progress', e); }
  if (!remote) listeners.forEach((fn) => fn());
}

export const get = () => state;
export function set(patch) { Object.assign(state, patch); save(); }
export function replaceAll(next) { state = { ...defaults(), ...next }; save(); }
export function resetAll() { state = defaults(); save(); }

// ---------- cloud sync helpers ----------
const LOCAL_ONLY_SETTINGS = ['apiKey', 'voices'];

/** The part of the state that goes to the cloud: no API key, voices or AI cache. */
export function syncable(s = state) {
  const { aiCache, ownerUid, ...rest } = s;
  const settings = { ...s.settings };
  for (const k of LOCAL_ONLY_SETTINGS) delete settings[k];
  return { ...rest, settings };
}

const newer = (a, b) => ((a?.updatedAt || 0) >= (b?.updatedAt || 0) ? a : b);

/** Merge two progress snapshots so nothing studied on either device is lost. Order-independent. */
export function merge(a, b) {
  const d = defaults();
  a = { ...d, ...a }; b = { ...d, ...b };
  const prefs = newer(a, b);
  const union = (k) => ({ ...a[k], ...b[k], ...prefs[k] });
  const activity = {};
  for (const day of new Set([...Object.keys(a.activity), ...Object.keys(b.activity)])) {
    const x = a.activity[day] || {}, y = b.activity[day] || {};
    activity[day] = {};
    for (const l of new Set([...Object.keys(x), ...Object.keys(y)])) activity[day][l] = Math.max(x[l] || 0, y[l] || 0);
  }
  const deletedCards = { ...a.deletedCards, ...b.deletedCards };
  const byKey = new Map();
  for (const c of [...a.cards, ...b.cards]) {
    if (deletedCards[c.id] && deletedCards[c.id] >= (c.updatedAt || 0)) continue;
    const k = `${c.lang}|${c.front.trim().toLowerCase()}`;
    const prev = byKey.get(k);
    if (!prev || (c.updatedAt || 0) > (prev.updatedAt || 0) || ((c.updatedAt || 0) === (prev.updatedAt || 0) && c.reps > prev.reps)) byKey.set(k, c);
  }
  return {
    ...d,
    lang: prefs.lang, onboarded: a.onboarded || b.onboarded,
    levels: { ...d.levels, ...prefs.levels },
    settings: { ...d.settings, ...prefs.settings },
    lessonsDone: union('lessonsDone'), exerciseScores: union('exerciseScores'),
    readings: union('readings'), listening: union('listening'), words: union('words'),
    activity, cards: [...byKey.values()], deletedCards,
    updatedAt: Math.max(a.updatedAt || 0, b.updatedAt || 0),
  };
}

/** Replace local progress with a cloud snapshot, keeping this device's key, voices and cache. */
export function applyRemote(remote, uid) {
  const keep = { apiKey: state.settings.apiKey, voices: state.settings.voices };
  state = { ...defaults(), ...remote, settings: { ...defaults().settings, ...remote.settings, ...keep }, aiCache: state.aiCache, ownerUid: uid };
  save({ remote: true });
}
export function setOwner(uid) { state.ownerUid = uid; save({ remote: true }); }

/** Does this device hold any real progress? */
export const hasProgress = (s = state) => s.cards.length > 0 || Object.keys(s.lessonsDone).length > 0 || Object.keys(s.activity).length > 0;

// ---------- dates ----------
export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function dayNumber(dateStr = today()) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
}
export function addDays(dateStr, n) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + n));
  return dt.toISOString().slice(0, 10);
}

// ---------- activity / streak ----------
export function logActivity(lang, points = 1) {
  const t = today();
  state.activity[t] ??= {};
  state.activity[t][lang] = (state.activity[t][lang] || 0) + points;
  save();
}
export function streak() {
  let n = 0;
  let d = today();
  if (!state.activity[d]) d = addDays(d, -1); // today not started yet doesn't break the streak
  while (state.activity[d]) { n++; d = addDays(d, -1); }
  return n;
}

// ---------- lessons ----------
export const lessonKey = (lang, level, id) => `${lang}:${level}:${id}`;
export function markLesson(lang, level, id, correct, total) {
  const k = lessonKey(lang, level, id);
  const first = !state.lessonsDone[k];
  state.lessonsDone[k] = today();
  state.exerciseScores[k] = { correct, total, date: today() };
  save();
  logActivity(lang, first ? 10 : 4);
}

// ---------- daily reading / listening ----------
export function recordDaily(kind, lang, id, score, total) {
  state[kind][`${lang}:${today()}`] = { id, score, total };
  save();
  logActivity(lang, 8);
}
export const dailyResult = (kind, lang, date = today()) => state[kind][`${lang}:${date}`];

// ---------- flashcards (simplified SM-2) ----------
const norm = (s) => s.trim().toLowerCase();

export function addCard(lang, front, back, note = '', source = 'manual') {
  if (!front?.trim()) return null;
  const existing = state.cards.find((c) => c.lang === lang && norm(c.front) === norm(front));
  if (existing) return existing;
  const card = {
    id: Math.random().toString(36).slice(2, 10),
    lang, front: front.trim(), back: (back || '').trim(), note, source,
    added: today(), due: today(), interval: 0, ease: 2.5, reps: 0, lapses: 0, last: null, updatedAt: Date.now(),
  };
  state.cards.push(card);
  save();
  return card;
}
export function deleteCard(id) { state.cards = state.cards.filter((c) => c.id !== id); state.deletedCards[id] = Date.now(); save(); }
export function updateCard(id, patch) { Object.assign(state.cards.find((c) => c.id === id) || {}, patch, { updatedAt: Date.now() }); save(); }
export const hasCard = (lang, front) => state.cards.some((c) => c.lang === lang && norm(c.front) === norm(front));

export function dueCards(lang) {
  const t = today();
  return state.cards.filter((c) => c.lang === lang && c.due <= t).sort((a, b) => a.due.localeCompare(b.due));
}
export const cardsAddedOn = (lang, date) => state.cards.filter((c) => c.lang === lang && c.added === date);

// grade: 0 again, 1 hard, 2 good, 3 easy
export function previewInterval(card, grade) {
  if (grade === 0) return 0;
  if (card.reps === 0) return [0, 1, 1, 3][grade];
  if (card.reps === 1) return [0, 2, 3, 6][grade];
  const mult = [0, 1.2, card.ease, card.ease * 1.35][grade];
  return Math.max(card.interval + 1, Math.round(card.interval * mult));
}
export function reviewCard(id, grade) {
  const c = state.cards.find((x) => x.id === id);
  if (!c) return;
  const iv = previewInterval(c, grade);
  if (grade === 0) { c.lapses++; c.reps = 0; c.ease = Math.max(1.3, c.ease - 0.2); }
  else { c.reps++; c.ease = Math.max(1.3, c.ease + [0, -0.15, 0, 0.15][grade]); }
  c.interval = iv;
  c.due = addDays(today(), iv);
  c.last = today();
  c.updatedAt = Date.now();
  save();
  logActivity(c.lang, 1);
}
export const intervalLabel = (d) => (d === 0 ? '<1d' : d < 30 ? `${d}d` : d < 365 ? `${Math.round(d / 30)}mo` : `${(d / 365).toFixed(1)}y`);
