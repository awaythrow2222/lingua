// The popup shown when a word is clicked: definition, conjugations, examples, mnemonic, audio.
import { $, esc, tl, toast } from './ui.js';
import * as store from './store.js';
import * as speech from './speech.js';
import * as ai from './ai.js';
import { COURSES } from './courses.js';
import { openTutor } from './tutor.js';

const popup = () => $('#wordPopup');
let current = null;   // { word, lang, sentence, anchor }
let reqId = 0;
const indexes = {};

function index(lang) {
  if (indexes[lang]) return indexes[lang];
  const map = new Map();
  for (const [lemma, entry] of Object.entries(COURSES[lang].dictionary)) {
    const key = norm(lemma);
    map.set(key, { lemma, entry });
    for (const f of entry.forms || []) if (!map.has(norm(f))) map.set(norm(f), { lemma, entry });
  }
  return (indexes[lang] = map);
}
const norm = (s) => s.toLowerCase().replace(/’/g, "'").trim();

/** Candidate spellings to try: whole token, minus French elision, hyphen parts. */
function candidates(word, lang) {
  const w = norm(word);
  const out = [w];
  for (const e of COURSES[lang].elisions) if (w.startsWith(e) && w.length > e.length) out.push(w.slice(e.length));
  if (w.includes('-')) out.push(...w.split('-').filter(Boolean));
  return [...new Set(out)];
}

export function localEntry(word, lang) {
  const idx = index(lang);
  for (const c of candidates(word, lang)) if (idx.has(c)) return idx.get(c);
  return null;
}

async function wiktionary(word, lang) {
  const res = await wiktionaryRaw(word, lang);
  // "third-person singular preterite indicative of olvidar" → also fetch the root word
  const m = res?.senses?.[0]?.defs?.[0]?.match(/\bof ([\p{L}\p{M}'-]+)\s*$/u);
  if (m && norm(m[1]) !== norm(res.lemma)) {
    const root = await wiktionaryRaw(m[1], lang);
    if (root) return { lemma: root.lemma, formNote: res.senses[0].defs[0], senses: root.senses };
  }
  return res;
}

async function wiktionaryRaw(word, lang) {
  for (const c of candidates(word, lang)) {
    try {
      const r = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(c)}?redirect=true`);
      if (!r.ok) continue;
      const data = await r.json();
      const entries = data[lang] || (lang === 'tl' ? data.fil : null);
      if (!entries?.length) continue;
      const strip = (h) => {
        const body = new DOMParser().parseFromString(h, 'text/html').body;
        body.querySelectorAll('style, script, link, sup, ol, ul, dl, .reference, [style*="display:none"], [style*="display: none"]').forEach((n) => n.remove());
        return body.textContent.replace(/\s+/g, ' ').trim();
      };
      return {
        lemma: c,
        senses: entries.slice(0, 3).map((e) => ({
          pos: e.partOfSpeech,
          defs: e.definitions.map((d) => strip(d.definition)).filter(Boolean).slice(0, 3),
        })),
      };
    } catch { /* offline or blocked — fall through */ }
  }
  return null;
}

function conjTables(tables) {
  return tables.filter((t) => t.rows?.length).map((t) => `
    <div class="table-wrap"><table class="conj"><tr><th colspan="2">${esc(t.title)}</th></tr>
    ${t.rows.map((r) => `<tr><td class="muted">${esc(r[0])}</td><td><b>${esc(r[1])}</b></td></tr>`).join('')}</table></div>`).join('');
}

function render(state) {
  const { word, lang, sentence } = current;
  const local = state.local?.entry;
  const a = state.ai;
  const w = state.wiki;
  const def = local?.def || a?.definition || '';
  const wikiDef = w?.senses?.[0]?.defs?.[0] || '';
  const pos = local?.pos || a?.pos || w?.senses?.[0]?.pos || '';
  const lemma = state.local?.lemma || a?.lemma || w?.lemma || word;
  const conj = local?.conj || a?.conjugations || [];
  const examples = local?.examples || a?.examples?.map((e) => [e.t, e.en]) || [];
  const mnemonic = local?.mnemonic || a?.mnemonic;
  const notes = local?.notes || a?.notes;
  current.def = def || wikiDef; current.lemma = lemma;
  const inDeck = store.hasCard(lang, lemma) || store.hasCard(lang, word);

  popup().innerHTML = `
    <div class="wp-head">
      <div style="flex:1">
        <div class="wp-word" id="wpWord" lang="${lang}">${esc(word)}</div>
        ${norm(lemma) !== norm(word) ? `<div class="muted small">from <b lang="${lang}">${esc(lemma)}</b></div>` : ''}
        ${pos ? `<span class="pill gray">${esc(pos)}</span>` : ''}
      </div>
      <button class="speak" data-say="${esc(word)}" aria-label="Pronounce ${esc(word)}">🔊</button>
      <button class="icon-btn" id="wpClose" aria-label="Close">✕</button>
    </div>
    ${def ? `<div class="wp-sec"><h4>Definition</h4><div>${esc(def)}</div>${notes ? `<div class="muted small" style="margin-top:4px">${esc(notes)}</div>` : ''}</div>` : ''}
    ${!local && !a && w?.senses?.length > 0 ? `<div class="wp-sec"><h4>Meaning <span style="text-transform:none;letter-spacing:0">(Wiktionary)</span></h4>${w.formNote ? `<div class="muted small" style="margin-bottom:4px">${esc(w.formNote)}</div>` : ''}${w.senses.map((s) => `<div class="small"><i>${esc(s.pos)}</i><ul>${s.defs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
    ${conj.length ? `<div class="wp-sec"><h4>Conjugations / forms</h4>${conjTables(conj)}</div>` : ''}
    ${examples.length ? `<div class="wp-sec"><h4>Examples</h4><ul class="examples">${examples.slice(0, 3).map(([t, en]) => `<li>${tl(t, lang)} <button class="speak inline" data-say="${esc(t)}" aria-label="Play example">🔊</button><span class="en">${esc(en)}</span></li>`).join('')}</ul></div>` : ''}
    ${mnemonic ? `<div class="wp-sec"><h4>Remember it</h4><div class="mnemonic">💡 ${esc(mnemonic)}</div></div>` : ''}
    ${a?.related?.length ? `<div class="wp-sec"><h4>Related</h4><div class="small">${a.related.map(esc).join(' · ')}</div></div>` : ''}
    ${state.loading ? `<div class="wp-sec muted small"><span class="spinner"></span> ${ai.hasKey() ? 'Getting conjugations, examples & a memory trick…' : 'Looking up…'}</div>` : ''}
    ${state.error ? `<div class="wp-sec small" style="color:var(--bad)">${esc(state.error)}</div>` : ''}
    ${!state.loading && !local && !ai.hasKey() ? `<div class="wp-sec notice small">Add your Claude API key in <a href="#/settings">Settings</a> to get full conjugation tables, examples and memory tricks for any word.</div>` : ''}
    ${!state.loading && !def && !wikiDef && !a ? `<div class="wp-sec small muted">No definition found offline. Try the tutor below.</div>` : ''}
    <div class="row" style="margin-top:16px">
      <button class="btn sm primary" id="wpAdd" ${inDeck ? 'disabled' : ''}>${inDeck ? '✓ In flashcards' : '＋ Add to flashcards'}</button>
      <button class="btn sm" id="wpAsk">Ask tutor</button>
      <a class="btn sm ghost" href="${speech.externalAudioUrl(word, lang)}" target="_blank" rel="noopener" title="Hear it on Google Translate">↗ Audio</a>
    </div>
    ${sentence && sentence !== word ? `<div class="muted small" style="margin-top:10px">In context: “${esc(sentence)}”</div>` : ''}`;
  position();
}

function position() {
  const el = popup();
  const anchor = current?.anchor;
  el.hidden = false;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const pw = el.offsetWidth;
  const ph = el.offsetHeight;
  if (!anchor || vw < 560) {
    el.style.left = `${(vw - pw) / 2}px`;
    el.style.top = `${Math.max(16, vh - ph - 16)}px`;
    return;
  }
  const r = anchor.getBoundingClientRect();
  let left = Math.min(Math.max(16, r.left + r.width / 2 - pw / 2), vw - pw - 16);
  let top = r.bottom + 8;
  if (top + ph > vh - 16) top = Math.max(16, r.top - ph - 8);
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

export async function openWord(word, lang, anchor = null, sentence = '') {
  document.querySelectorAll('.w.active').forEach((e) => e.classList.remove('active'));
  anchor?.classList?.add('active');
  current = { word, lang, sentence, anchor };
  const id = ++reqId;
  const state = { local: localEntry(word, lang), loading: true };
  render(state);
  speech.speak(word, lang);

  if (state.local) { state.loading = false; render(state); return; }

  const wikiP = wiktionary(word, lang).then((w) => { if (id === reqId) { state.wiki = w; render(state); } });
  if (ai.hasKey()) {
    try {
      state.ai = await ai.lookupWord(lang, word, sentence);
    } catch (e) {
      state.error = ai.friendlyError(e);
    }
  } else {
    await wikiP;
  }
  if (id !== reqId) return;
  state.loading = false;
  render(state);
}

export function closeWord() {
  popup().hidden = true;
  current = null;
  reqId++;
  document.querySelectorAll('.w.active').forEach((e) => e.classList.remove('active'));
}

function sentenceAround(el) {
  const block = el.closest('[data-sentence], li, p, .passage-sentence, .flash-face, .msg') || el.parentElement;
  return (block?.dataset.sentence || block?.innerText || '').replace(/🔊/g, '').trim().slice(0, 300);
}

export function initWordPopup() {
  document.addEventListener('click', (e) => {
    const say = e.target.closest('[data-say]');
    if (say) { e.stopPropagation(); speech.speak(say.dataset.say, say.dataset.lang || current?.lang || store.get().lang); return; }
    const w = e.target.closest('.w');
    if (w) { e.preventDefault(); openWord(w.textContent, w.dataset.lang, w, sentenceAround(w)); return; }
    if (e.target.closest('#wpClose')) { closeWord(); return; }
    if (e.target.closest('#wpAdd') && current) {
      let back = current.def;
      if (!back) back = prompt(`Meaning of "${current.word}"?`) || '';
      if (!back) return;
      store.addCard(current.lang, current.lemma || current.word, back, current.sentence, 'word');
      toast(`Added “${current.lemma || current.word}” to flashcards`);
      const btn = $('#wpAdd'); btn.disabled = true; btn.textContent = '✓ In flashcards';
      return;
    }
    if (e.target.closest('#wpAsk') && current) {
      const { word, sentence } = current;
      closeWord();
      openTutor(`Explain "${word}"${sentence ? ` as used in: "${sentence}"` : ''}. Include how to remember it.`);
      return;
    }
    if (!e.target.closest('#wordPopup') && !popup().hidden) closeWord();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup().hidden) closeWord();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('w')) { e.preventDefault(); e.target.click(); }
  });
  // Double-click any word anywhere (tutor replies, explanations) to look it up in the current language.
  document.addEventListener('dblclick', (e) => {
    if (e.target.closest('input, textarea, .w, #wordPopup')) return;
    const sel = window.getSelection()?.toString().trim();
    if (sel && sel.length < 40 && !/\s/.test(sel)) {
      openWord(sel.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ''), store.get().lang, null, sentenceAround(e.target));
    }
  });
  window.addEventListener('resize', () => { if (current) position(); });
}
