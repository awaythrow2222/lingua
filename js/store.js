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
  aiCache: {},         // word lookups + generated daily content
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

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { console.warn('Could not save progress', e); }
}

export const get = () => state;
export function set(patch) { Object.assign(state, patch); save(); }
export function replaceAll(next) { state = { ...defaults(), ...next }; save(); }
export function resetAll() { state = defaults(); save(); }

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
    added: today(), due: today(), interval: 0, ease: 2.5, reps: 0, lapses: 0, last: null,
  };
  state.cards.push(card);
  save();
  return card;
}
export function deleteCard(id) { state.cards = state.cards.filter((c) => c.id !== id); save(); }
export function updateCard(id, patch) { Object.assign(state.cards.find((c) => c.id === id) || {}, patch); save(); }
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
  save();
  logActivity(c.lang, 1);
}
export const intervalLabel = (d) => (d === 0 ? '<1d' : d < 30 ? `${d}d` : d < 365 ? `${Math.round(d / 30)}mo` : `${(d / 365).toFixed(1)}y`);
