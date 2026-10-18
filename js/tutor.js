// Always-available AI tutor panel.
import { $, esc, md } from './ui.js';
import * as store from './store.js';
import * as ai from './ai.js';
import { COURSES } from './courses.js';

let history = [];      // [{role, content}]
let busy = false;
let pageName = 'Today';

const SUGGEST = {
  es: ['¿Cuándo uso el subjuntivo imperfecto?', 'Check my sentence: Si tendría tiempo, iría.', 'Diferencia entre "por" y "para" con ejemplos', 'Give me 5 Mexican vs. Spain slang pairs'],
  fr: ['When do I use être vs avoir in the past?', 'Check my sentence: Je suis 25 ans.', 'How do I pronounce the French "r"?', 'Teach me 5 phrases for a café'],
  tl: ['Explain ang / ng / sa simply', 'When do I use -um- vs mag-?', 'Check my sentence: Kumain ako ang mangga.', 'How do I use "po" politely?'],
};

export function setTutorPage(name) { pageName = name; updateCtx(); }

function updateCtx() {
  const s = store.get();
  $('#tutorCtx').textContent = `${COURSES[s.lang].name} · ${s.levels[s.lang]} · ${pageName}`;
}

function renderMsgs() {
  const box = $('#tutorMsgs');
  const lang = store.get().lang;
  if (!history.length) {
    box.innerHTML = `
      <div class="msg assistant"><p>Hi! I'm your tutor. Ask me about grammar, vocabulary, pronunciation, or paste a sentence and I'll correct it. I can see what's on your current page.</p>
      ${ai.hasKey() ? '' : '<p><b>To start:</b> add your Anthropic API key in <a href="#/settings">Settings</a>.</p>'}</div>
      <div class="suggestions">${SUGGEST[lang].map((q) => `<button type="button" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>`;
    return;
  }
  box.innerHTML = history.map((m) => `<div class="msg ${m.role}${m.err ? ' err' : ''}">${m.role === 'user' ? esc(m.content) : md(m.content)}</div>`).join('');
  box.scrollTop = box.scrollHeight;
}

async function send(text) {
  text = text.trim();
  if (!text || busy) return;
  if (!ai.hasKey()) {
    history.push({ role: 'user', content: text }, { role: 'assistant', content: 'Please add your Anthropic API key in **Settings** first — it stays in this browser only.', err: true, local: true });
    renderMsgs();
    return;
  }
  busy = true;
  history.push({ role: 'user', content: text });
  const reply = { role: 'assistant', content: '…' };
  history.push(reply);
  renderMsgs();
  const main = document.getElementById('view');
  const ctx = { lang: store.get().lang, page: pageName, content: main?.innerText?.replace(/🔊/g, '') };
  const apiHistory = history.filter((m) => m !== reply && !m.err && !m.local).map(({ role, content }) => ({ role, content }));
  const box = $('#tutorMsgs');
  try {
    await ai.tutorStream(apiHistory, ctx, (t) => {
      reply.content = t;
      const last = box.lastElementChild;
      if (last) last.innerHTML = md(t);
      box.scrollTop = box.scrollHeight;
    });
  } catch (e) {
    reply.content = ai.friendlyError(e);
    reply.err = true;
    // drop the unanswered user turn so the next request alternates roles correctly
    history.splice(history.indexOf(reply) - 1, 1);
  }
  busy = false;
  renderMsgs();
}

export function openTutor(prefill) {
  $('#tutorPanel').hidden = false;
  $('#tutorFab').hidden = true;
  updateCtx();
  renderMsgs();
  if (prefill) send(prefill);
  else $('#tutorInput').focus();
}

export function initTutor() {
  $('#tutorFab').addEventListener('click', () => openTutor());
  $('#tutorClose').addEventListener('click', () => { $('#tutorPanel').hidden = true; $('#tutorFab').hidden = false; });
  $('#tutorClear').addEventListener('click', () => { history = []; renderMsgs(); });
  $('#tutorForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = $('#tutorInput');
    const v = inp.value;
    inp.value = '';
    send(v);
  });
  $('#tutorInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('#tutorForm').requestSubmit(); }
  });
  $('#tutorMsgs').addEventListener('click', (e) => {
    const b = e.target.closest('[data-q]');
    if (b) send(b.dataset.q);
  });
}

export function resetTutorForLang() { history = []; if (!$('#tutorPanel').hidden) renderMsgs(); updateCtx(); }
