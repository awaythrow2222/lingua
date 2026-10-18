import { $, $$, esc, tl, rich, toast, checkAnswer, shuffle } from './ui.js';
import * as store from './store.js';
import * as speech from './speech.js';
import * as ai from './ai.js';
import { COURSES, LANGS, LEVELS, LEVEL_LABEL, content, has } from './courses.js';
import { initWordPopup, closeWord } from './wordpopup.js';
import { initTutor, setTutorPage } from './tutor.js';
import * as sync from './sync.js';

const S = () => store.get();
const L = () => S().lang;
const LV = () => C().onlyLevel || S().levels[L()];
const C = () => COURSES[L()];
const view = () => $('#view');
const speakBtn = (text, lang = L(), label = 'Play') => `<button class="speak inline" data-say="${esc(text)}" data-lang="${lang}" aria-label="${label}">🔊</button>`;

// ---------------------------------------------------------------- shell

function renderShell() {
  document.body.dataset.lang = L();
  $('#langSwitch').innerHTML = LANGS.map((l) => `<button role="tab" aria-selected="${l === L()}" data-setlang="${l}"><span>${COURSES[l].flag}</span><span class="ln">${COURSES[l].name}</span></button>`).join('');
  $('#levelSelect').value = LV();
  $('#levelSelect').disabled = !!C().onlyLevel;
  $('#levelSelect').title = C().onlyLevel ? `${C().name} is offered at the ${LEVEL_LABEL[C().onlyLevel]} level` : '';
  for (const f of ['reading', 'listening', 'words']) $(`#sidenav a[data-route="${f}"]`).hidden = !has(L(), f);
  $('#sidenav a[data-route="reading"]').innerHTML = `<span>📖</span> ${L() === 'en' ? 'Daily literature' : 'Daily reading'}`;
  applyTheme();
}

function applyTheme() {
  const t = S().settings.theme;
  if (t === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.dataset.theme = t;
}

function setActiveNav(route) {
  $$('#sidenav a').forEach((a) => a.classList.toggle('active', a.dataset.route === route));
  $('#sidenav').classList.remove('open');
}

// ---------------------------------------------------------------- daily picks

function dailyIndex(n, salt) { return n ? (store.dayNumber() + salt) % n : 0; }

function todaysPassage(kind) {
  if (L() === 'en' && kind === 'reading') return todaysExcerpt();
  const ck = `${kind}:${L()}:${LV()}:${store.today()}`;
  const aiP = S().aiCache[ck];
  if (aiP && !builtinOverride[kind]) return { ...aiP, id: `ai-${store.today()}`, ai: true };
  const { items, level } = content(L(), LV(), kind);
  const p = items[dailyIndex(items.length, kind === 'reading' ? 0 : 3)];
  return p ? { ...p, level } : null;
}
const builtinOverride = { reading: false, listening: false };
let excerptOffset = 0; // "Another excerpt" for this visit

/** English reading: verbatim literature. Hand-written questions offline; with a key, the larger library too. */
function todaysExcerpt() {
  const authored = C().levels.advanced.reading;
  const pool = ai.hasKey() ? shuffle([...authored, ...C().library], 0.4242) : authored;
  const p = pool[(store.dayNumber() + excerptOffset) % pool.length];
  const gen = S().aiCache[`litq:${p.id}`];
  return { ...p, level: 'advanced', literary: true, ...(gen && !p.questions ? { questions: gen.questions, vocab: gen.vocab, context: gen.context } : {}) };
}

/** Today's five words from the bank (deterministic per day). */
function todaysWords() {
  const bank = shuffle(C().wordBank, 0.1717);
  const start = (store.dayNumber() * 5) % bank.length;
  return Array.from({ length: 5 }, (_, i) => bank[(start + i) % bank.length]);
}

function nextLesson() {
  const { items, level } = content(L(), LV(), 'grammar');
  const done = S().lessonsDone;
  return items.find((l) => !done[store.lessonKey(L(), level, l.id)]) || null;
}

// ---------------------------------------------------------------- views

function viewHome() {
  setTutorPage('Today');
  const s = S();
  const lang = L();
  const c = C();
  const { items: lessons, level } = content(lang, LV(), 'grammar');
  const doneCount = lessons.filter((l) => s.lessonsDone[store.lessonKey(lang, level, l.id)]).length;
  const due = store.dueCards(lang).length;
  const deck = s.cards.filter((x) => x.lang === lang).length;
  const todayWords = store.cardsAddedOn(lang, store.today());
  const next = nextLesson();
  const readDone = store.dailyResult('readings', lang);
  const listenDone = store.dailyResult('listening', lang);
  const pts = s.activity[store.today()]?.[lang] || 0;

  const task = (href, done, title, sub) => `<a class="task ${done ? 'done' : ''}" href="${href}"><span class="check">${done ? '✓' : ''}</span><span><div class="t-title">${title}</div><div class="muted small">${sub}</div></span></a>`;

  view().innerHTML = `
    ${!s.onboarded ? onboardingCard() : ''}
    <div class="hero">
      <span class="flag">${c.flag}</span>
      <div>
        <div class="muted small">${new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
        <h1>${c.name} <span class="muted" style="font-weight:600">· ${c.native}</span></h1>
        <span class="pill">${LEVEL_LABEL[LV()]}</span>
      </div>
    </div>

    <div class="grid cols-3" style="margin-bottom:18px">
      <div class="card flat"><div class="stat">🔥 ${store.streak()}</div><div class="stat-label">day streak (all languages)</div></div>
      <div class="card flat"><div class="stat">${due}</div><div class="stat-label">flashcards due · ${deck} total</div></div>
      <div class="card flat"><div class="stat">${doneCount}/${lessons.length}</div><div class="stat-label">${LEVEL_LABEL[level]} lessons done</div></div>
    </div>

    <div class="card">
      <div class="row"><h2 style="margin:0">Today's plan</h2><span class="spacer"></span><span class="pill gray">${pts} pts today</span></div>
      <p class="muted small" style="margin-top:4px">Grammar first, then lock it in with flashcards and daily practice.</p>
      <div class="grid" style="gap:10px">
        ${task(next ? `#/grammar/${next.id}` : '#/grammar', !next, next ? `Grammar: ${esc(next.title)}` : 'All lessons at this level complete 🎉', next ? esc(next.summary) : 'Review any lesson, or try the next level.')}
        ${task('#/flashcards', due === 0, `Flashcards: ${due ? `${due} due` : 'all caught up'}`, todayWords.length ? `${todayWords.length} new word${todayWords.length > 1 ? 's' : ''} added today` : 'New words from lessons are added automatically')}
        ${task('#/reading', !!readDone, lang === 'en' ? 'Daily literature' : 'Daily reading', readDone ? `Score ${readDone.score}/${readDone.total}` : esc(todaysPassage('reading')?.title || '') + (lang === 'en' ? ` — ${esc(todaysPassage('reading')?.author || '')}` : ''))}
        ${has(lang, 'words') ? task('#/words', !!store.dailyResult('words', lang), 'Daily words', store.dailyResult('words', lang) ? `Quiz ${store.dailyResult('words', lang).score}/${store.dailyResult('words', lang).total}` : todaysWords().join(' · ')) : ''}
        ${has(lang, 'listening') ? task('#/listening', !!listenDone, 'Daily listening', listenDone ? `Score ${listenDone.score}/${listenDone.total}` : esc(todaysPassage('listening')?.title || '')) : ''}
      </div>
    </div>

    ${todayWords.length ? `<div class="card">
      <div class="row"><h2 style="margin:0">Words from today</h2><span class="spacer"></span><a class="btn sm" href="#/flashcards/today">Practice these</a></div>
      <div class="row" style="margin-top:12px;gap:8px">${todayWords.map((w) => `<span class="pill gray" style="font-size:.9rem;padding:4px 12px">${tl(w.front, lang)} — ${esc(w.back)}</span>`).join('')}</div>
    </div>` : ''}

    <div class="card flat">
      <h3 style="margin-top:0">How Lingua works</h3>
      <ul class="small muted" style="margin:0;padding-left:1.1em">
        <li><b>Click any ${c.name} word</b> to see its meaning, conjugations, examples, a memory trick and hear it. Double-click any other word to look it up too.</li>
        <li>Finishing a lesson adds its vocabulary to your <b>flashcards</b>, scheduled with spaced repetition.</li>
        <li>The <b>💬 tutor</b> (bottom right) can see your current page — ask it anything.</li>
        <li>Progress is saved in this browser. Back it up from <a href="#/settings">Settings</a>.</li>
      </ul>
    </div>`;
}

function onboardingCard() {
  return `<div class="card" style="border-color:var(--accent)">
    <h2>Welcome to Lingua 👋</h2>
    <p>Pick your level for each language — you can change it any time from the sidebar.</p>
    <div class="grid cols-3">${LANGS.filter((l) => !COURSES[l].onlyLevel).map((l) => `
      <label class="card flat" style="margin:0">
        <div style="font-size:1.6rem">${COURSES[l].flag}</div><b>${COURSES[l].name}</b>
        <select data-onb="${l}" style="width:100%;margin-top:8px">${LEVELS.map((lv) => `<option value="${lv}" ${S().levels[l] === lv ? 'selected' : ''}>${LEVEL_LABEL[lv]}</option>`).join('')}</select>
      </label>`).join('')}</div>
    <p class="small muted" style="margin-top:12px">Also included: ${COURSES.en.flag} <b>Advanced English</b> — advanced grammar, literature excerpts and daily vocabulary.</p>
    <div class="row" style="margin-top:14px">
      <label class="small">Start with:
        <select id="onbLang">${LANGS.map((l) => `<option value="${l}" ${l === L() ? 'selected' : ''}>${COURSES[l].name}</option>`).join('')}</select>
      </label>
      <span class="spacer"></span>
      <button class="btn primary" id="onbDone">Let's go</button>
    </div>
  </div>`;
}

// ----- grammar

function viewGrammar() {
  setTutorPage('Grammar lessons');
  const lang = L();
  const done = S().lessonsDone;
  view().innerHTML = `
    <h1>Grammar</h1>
    <p class="muted">Lessons are grouped by level. Your level: <b>${LEVEL_LABEL[LV()]}</b>. Explore other levels any time.</p>
    ${LEVELS.map((lv) => {
      const items = C().levels[lv]?.grammar || [];
      if (!items.length) return '';
      const n = items.filter((l) => done[store.lessonKey(lang, lv, l.id)]).length;
      return `<div class="card" style="padding:0;overflow:hidden">
        <div class="row" style="padding:16px 18px;border-bottom:1px solid var(--border)">
          <h2 style="margin:0">${LEVEL_LABEL[lv]}</h2>${lv === LV() ? '<span class="pill">Your level</span>' : ''}
          <span class="spacer"></span><span class="muted small">${n}/${items.length}</span>
        </div>
        <div class="lesson-list">${items.map((l, i) => {
          const k = store.lessonKey(lang, lv, l.id);
          const sc = S().exerciseScores[k];
          return `<a href="#/grammar/${l.id}" class="${done[k] ? 'done' : ''}"><span class="lesson-num">${done[k] ? '✓' : i + 1}</span>
            <span style="flex:1"><b>${esc(l.title)}</b><div class="muted small">${esc(l.summary)}</div></span>
            ${sc ? `<span class="pill ${sc.correct === sc.total ? 'good' : 'gray'}">${sc.correct}/${sc.total}</span>` : ''}</a>`;
        }).join('')}</div></div>`;
    }).join('')}`;
}

function findLesson(id) {
  for (const lv of LEVELS) {
    const l = C().levels[lv]?.grammar?.find((x) => x.id === id);
    if (l) return { lesson: l, level: lv };
  }
  return null;
}

function exerciseHTML(ex, i, lang) {
  if (ex.type === 'mc') {
    return `<div class="ex" data-ex="${i}"><div class="ex-q">${i + 1}. ${esc(ex.q)}</div>
      <div class="opts">${ex.options.map((o, j) => `<button class="opt" data-opt="${j}" lang="${lang}">${esc(o)}</button>`).join('')}</div>
      <div class="fb"></div></div>`;
  }
  return `<div class="ex" data-ex="${i}"><div class="ex-q">${i + 1}. ${esc(ex.q)}</div>
    <form class="fill-row" data-fill="${i}"><input type="text" lang="${lang}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer"><button class="btn">Check</button></form>
    <div class="fb"></div></div>`;
}

/** Wire up exercises inside root. onDone(correct, total) fires once all are answered. */
function bindExercises(root, exercises, onDone) {
  const results = new Array(exercises.length).fill(null);
  const finish = () => { if (results.every((r) => r !== null)) onDone(results.filter(Boolean).length, results.length); };
  root.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt');
    if (!opt) return;
    const box = opt.closest('[data-ex]');
    const i = +box.dataset.ex;
    const ex = exercises[i];
    const j = +opt.dataset.opt;
    const ok = j === ex.answer;
    if (results[i] === null) results[i] = ok;
    $$('.opt', box).forEach((b, k) => { b.disabled = true; if (k === ex.answer) b.classList.add('correct'); });
    if (!ok) opt.classList.add('wrong');
    $('.fb', box).innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}">${ok ? '✓ Correct.' : '✗ Not quite.'} ${esc(ex.explain || '')}</div>`;
    finish();
  });
  root.addEventListener('submit', (e) => {
    const f = e.target.closest('[data-fill]');
    if (!f) return;
    e.preventDefault();
    const i = +f.dataset.fill;
    const ex = exercises[i];
    const inp = $('input', f);
    if (!inp.value.trim()) return;
    const r = checkAnswer(inp.value, ex.answer);
    const box = f.closest('[data-ex]');
    if (r === 'accent') {
      $('.fb', box).innerHTML = `<div class="feedback bad">Almost — check your accents/spelling. Try again.</div>`;
      return;
    }
    const ok = r === 'ok';
    if (results[i] === null) results[i] = ok;
    inp.disabled = true; $('button', f).disabled = true;
    $('.fb', box).innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}">${ok ? '✓ Correct.' : `✗ Answer: <b>${esc(ex.answer[0])}</b>.`} ${esc(ex.explain || '')}</div>`;
    finish();
  });
}

function viewLesson(id) {
  const found = findLesson(id);
  if (!found) { location.hash = '#/grammar'; return; }
  const { lesson: l, level } = found;
  const lang = L();
  setTutorPage(`Lesson: ${l.title}`);
  const k = store.lessonKey(lang, level, l.id);
  const wasDone = !!S().lessonsDone[k];
  const items = C().levels[level].grammar;
  const idx = items.indexOf(l);
  const next = items[idx + 1];

  view().innerHTML = `
    <a href="#/grammar" class="small">← All lessons</a>
    <div class="row" style="margin:10px 0 4px"><span class="pill">${LEVEL_LABEL[level]} · Lesson ${idx + 1}</span>${wasDone ? '<span class="pill good">Completed</span>' : ''}</div>
    <h1>${esc(l.title)}</h1>
    <p class="muted">${esc(l.summary)}</p>

    <div class="card lesson-body">${rich(l.body, lang)}
      ${l.table ? `<h3>${esc(l.table.title)}</h3><div class="table-wrap"><table class="conj"><tr>${l.table.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>
        ${l.table.rows.map((r) => `<tr>${r.map((c, j) => `<td>${l.table.plain?.includes(j) ? esc(c) : tl(c, lang)}</td>`).join('')}</tr>`).join('')}</table></div>` : ''}
    </div>

    <div class="card">
      <div class="row"><h2 style="margin:0">Examples</h2><span class="spacer"></span><button class="btn sm" id="playAll">▶ Play all</button></div>
      <ul class="examples">${l.examples.map(([t, en]) => `<li data-sentence="${esc(t)}">${tl(t, lang)} ${speakBtn(t)}<span class="en">${esc(en)}</span></li>`).join('')}</ul>
    </div>

    <div class="card">
      <div class="row"><h2 style="margin:0">Vocabulary</h2><span class="spacer"></span><span class="muted small">Added to flashcards when you finish</span></div>
      <div class="table-wrap"><table class="conj">${l.vocab.map(([w, m]) => `<tr><td>${tl(w, lang)} ${speakBtn(w)}</td><td class="muted">${esc(m)}</td></tr>`).join('')}</table></div>
    </div>

    <div class="card" id="exCard">
      <h2>Practice</h2>
      <div id="exList">${l.exercises.map((ex, i) => exerciseHTML(ex, i, lang)).join('')}</div>
      <div id="exResult"></div>
    </div>`;

  $('#playAll').onclick = () => speech.speakSequence(l.examples.map((e) => e[0]), lang);
  bindExercises($('#exList'), l.exercises, (correct, total) => {
    store.markLesson(lang, level, l.id, correct, total);
    let added = 0;
    for (const [w, m] of l.vocab) if (!store.hasCard(lang, w)) { store.addCard(lang, w, m, l.title, 'lesson'); added++; }
    $('#exResult').innerHTML = `<div class="feedback ${correct / total >= 0.7 ? 'good' : 'bad'}" style="font-size:1rem">
      <b>${correct}/${total}</b> on the first try. ${correct / total >= 0.7 ? 'Nice work!' : 'Worth another look — ask the tutor about anything that tripped you up.'}
      ${added ? `<br>${added} new word${added > 1 ? 's' : ''} added to your flashcards.` : ''}</div>
      <div class="row" style="margin-top:12px">${next ? `<a class="btn primary" href="#/grammar/${next.id}">Next: ${esc(next.title)} →</a>` : ''}
      <a class="btn" href="#/flashcards/today">Review today's words</a><button class="btn ghost" id="retry">Retry exercises</button></div>`;
    $('#retry').onclick = () => viewLesson(id);
  });
}

// ----- flashcards

let fcSession = null;

function viewFlashcards(tab = 'review') {
  setTutorPage('Flashcards');
  const lang = L();
  const all = S().cards.filter((c) => c.lang === lang);
  const due = store.dueCards(lang);
  const today = store.cardsAddedOn(lang, store.today());
  const tabs = [['review', `Review (${due.length})`], ['today', `Today's words (${today.length})`], ['all', `All cards (${all.length})`], ['add', '＋ Add']];
  view().innerHTML = `
    <h1>Flashcards</h1>
    <div class="row" style="margin-bottom:18px">${tabs.map(([t, label]) => `<a class="btn sm ${t === tab ? 'primary' : ''}" href="#/flashcards/${t}">${label}</a>`).join('')}
      <span class="spacer"></span>
      <label class="small muted">Show first:
        <select id="fcDir"><option value="t">${C().name}</option><option value="e" ${S().settings.fcDir === 'e' ? 'selected' : ''}>English</option></select>
      </label>
    </div>
    <div id="fcBody"></div>`;
  $('#fcDir').onchange = (e) => { S().settings.fcDir = e.target.value; store.save(); viewFlashcards(tab); };

  if (tab === 'review') startSession(due, true, 'Nothing due right now 🎉', 'Come back later, practice today\'s words, or finish a lesson to add more.');
  else if (tab === 'today') startSession(shuffle(today), false, 'No words added today yet', 'Finish a grammar lesson or click a word and choose "Add to flashcards".');
  else if (tab === 'all') renderCardList(all);
  else renderAddCard();
}

function startSession(cards, scheduled, emptyTitle, emptySub) {
  fcSession = { queue: [...cards], scheduled, done: 0, again: 0 };
  if (!cards.length) {
    $('#fcBody').innerHTML = `<div class="card" style="text-align:center"><h2>${emptyTitle}</h2><p class="muted">${emptySub}</p>
      <div class="row" style="justify-content:center"><a class="btn" href="#/flashcards/today">Today's words</a><a class="btn primary" href="#/grammar">Go to grammar</a></div></div>`;
    return;
  }
  showCard();
}

function showCard() {
  const s = fcSession;
  const card = s.queue[0];
  const lang = L();
  if (!card) {
    $('#fcBody').innerHTML = `<div class="card" style="text-align:center"><h2>Session complete ✓</h2><p class="muted">${s.done} card${s.done === 1 ? '' : 's'} reviewed.</p>
      <div class="row" style="justify-content:center"><a class="btn primary" href="#/">Back to today</a></div></div>`;
    return;
  }
  const engFirst = S().settings.fcDir === 'e';
  const front = engFirst ? `<div class="flash-back-text">${esc(card.back)}</div>` : `<div class="flash-front-text" lang="${lang}">${esc(card.front)}</div>`;
  const back = `<div class="flash-front-text" style="font-size:1.6rem">${tl(card.front, lang)}</div>
    <div class="flash-back-text" style="margin-top:6px">${esc(card.back)}</div>
    ${card.note ? `<div class="muted small" style="margin-top:10px">${esc(card.note)}</div>` : ''}
    <button class="speak" style="margin-top:12px" data-say="${esc(card.front)}" data-lang="${lang}" aria-label="Pronounce">🔊</button>`;
  const ivs = [0, 1, 2, 3].map((g) => store.intervalLabel(store.previewInterval(card, g)));
  $('#fcBody').innerHTML = `
    <div class="muted small" style="text-align:center;margin-bottom:10px">${s.queue.length} left · ${s.scheduled ? 'spaced repetition' : 'practice mode (doesn\'t change schedule)'}</div>
    <div class="flash-wrap"><div class="flash" id="flash" tabindex="0" aria-label="Flashcard, press space to flip">
      <div class="flash-face">${front}<div class="muted small" style="margin-top:14px">tap or press space to flip</div></div>
      <div class="flash-face back">${back}</div>
    </div></div>
    <div class="rate-row" id="rateRow" style="visibility:hidden">
      <button class="btn" data-g="0">Again<small>${ivs[0]}</small></button>
      <button class="btn" data-g="1">Hard<small>${ivs[1]}</small></button>
      <button class="btn primary" data-g="2">Good<small>${ivs[2]}</small></button>
      <button class="btn" data-g="3">Easy<small>${ivs[3]}</small></button>
    </div>
    <p class="muted small" style="text-align:center;margin-top:12px">Keys: space = flip · 1–4 = rate</p>`;
  if (!engFirst) speech.speak(card.front, lang);
  const flip = () => {
    const f = $('#flash');
    f.classList.toggle('flipped');
    $('#rateRow').style.visibility = 'visible';
    if (engFirst && f.classList.contains('flipped')) speech.speak(card.front, lang);
  };
  $('#flash').addEventListener('click', (e) => { if (!e.target.closest('.w, [data-say]')) flip(); });
  $('#rateRow').onclick = (e) => { const b = e.target.closest('[data-g]'); if (b) rate(+b.dataset.g); };
  fcKeys = (e) => {
    if (e.target.closest('input, textarea, select')) return;
    if (e.key === ' ') { e.preventDefault(); flip(); }
    if (['1', '2', '3', '4'].includes(e.key) && $('#flash')?.classList.contains('flipped')) rate(+e.key - 1);
  };
}
let fcKeys = null;
document.addEventListener('keydown', (e) => { if (fcKeys && location.hash.startsWith('#/flashcards')) fcKeys(e); });

function rate(g) {
  const s = fcSession;
  const card = s.queue.shift();
  if (s.scheduled) store.reviewCard(card.id, g);
  else store.logActivity(card.lang, 1);
  s.done++;
  if (g === 0) s.queue.splice(Math.min(3, s.queue.length), 0, card); // show again soon
  showCard();
}

function renderCardList(all) {
  const lang = L();
  const byDate = {};
  for (const c of all) (byDate[c.added] ??= []).push(c);
  const dates = Object.keys(byDate).sort().reverse();
  $('#fcBody').innerHTML = all.length ? `
    <input type="text" id="fcSearch" placeholder="Search cards…" style="margin-bottom:14px">
    <div id="fcList">${dates.map((d) => `<div class="card" data-date="${d}" style="padding:14px 18px">
      <div class="row"><b>${new Date(d + 'T12:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</b><span class="muted small">${byDate[d].length} cards</span></div>
      <div class="table-wrap"><table class="conj">${byDate[d].map((c) => `<tr data-card="${c.id}" data-text="${esc((c.front + ' ' + c.back).toLowerCase())}">
        <td style="width:40%">${tl(c.front, lang)} ${speakBtn(c.front)}</td><td class="muted">${esc(c.back)}</td>
        <td class="small muted" style="white-space:nowrap">${c.reps ? `next ${c.due}` : 'new'}</td>
        <td><button class="icon-btn" data-del="${c.id}" aria-label="Delete card">🗑</button></td></tr>`).join('')}</table></div></div>`).join('')}</div>`
    : `<div class="card"><p class="muted">No cards yet.</p></div>`;
  $('#fcSearch')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    $$('[data-card]').forEach((r) => { r.hidden = q && !r.dataset.text.includes(q); });
  });
  $('#fcBody').onclick = (e) => {
    const d = e.target.closest('[data-del]');
    if (d && confirm('Delete this card?')) { store.deleteCard(d.dataset.del); viewFlashcards('all'); }
  };
}

function renderAddCard() {
  $('#fcBody').innerHTML = `<div class="card">
    <form id="addCard" class="grid" style="gap:12px">
      <label>${C().name} word or phrase<input type="text" id="acFront" lang="${L()}" required></label>
      <label>Meaning<input type="text" id="acBack" required></label>
      <label>Note / example (optional)<input type="text" id="acNote"></label>
      <div class="row"><button class="btn primary">Add card</button>${ai.hasKey() ? '<button type="button" class="btn" id="acAI">✨ Fill meaning with AI</button>' : ''}</div>
    </form></div>`;
  $('#addCard').onsubmit = (e) => {
    e.preventDefault();
    store.addCard(L(), $('#acFront').value, $('#acBack').value, $('#acNote').value);
    toast('Card added');
    e.target.reset();
    $('#acFront').focus();
  };
  $('#acAI')?.addEventListener('click', async (e) => {
    const w = $('#acFront').value.trim();
    if (!w) return;
    e.target.disabled = true; e.target.innerHTML = '<span class="spinner"></span> Thinking…';
    try {
      const r = await ai.lookupWord(L(), w);
      $('#acBack').value = r.definition;
      $('#acNote').value = r.examples?.[0] ? `${r.examples[0].t} — ${r.examples[0].en}` : r.mnemonic;
    } catch (err) { toast(ai.friendlyError(err)); }
    e.target.disabled = false; e.target.textContent = '✨ Fill meaning with AI';
  });
}

// ----- daily reading & listening

function passageHeader(kind, p) {
  const k = kind === 'reading' ? 'readings' : 'listening';
  const res = store.dailyResult(k, L());
  return `<div class="row" style="margin-bottom:6px">
      <span class="pill">${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
      <span class="pill gray">${LEVEL_LABEL[p.level || LV()]}</span>
      ${p.ai ? '<span class="pill gray">✨ AI-generated</span>' : ''}
      ${res ? `<span class="pill good">Done today · ${res.score}/${res.total}</span>` : ''}
      <span class="spacer"></span>
      ${p.literary ? '<button class="btn sm" id="nextExcerpt">📚 Another excerpt</button>' : ai.hasKey() ? (p.ai ? `<button class="btn sm" id="useBuiltin">Use built-in passage</button>` : `<button class="btn sm" id="genAI">✨ Fresh AI passage</button>`) : ''}
    </div>`;
}

function bindPassageSwitch(kind, rerender) {
  $('#useBuiltin')?.addEventListener('click', () => { builtinOverride[kind] = true; rerender(); });
  $('#genAI')?.addEventListener('click', async (e) => {
    e.target.disabled = true; e.target.innerHTML = '<span class="spinner"></span> Writing a new passage…';
    try { await ai.generateDaily(kind, L()); builtinOverride[kind] = false; rerender(); }
    catch (err) { toast(ai.friendlyError(err)); e.target.disabled = false; e.target.textContent = '✨ Fresh AI passage'; }
  });
}

function questionsToExercises(qs) { return qs.map((q) => ({ type: 'mc', q: q.q, options: q.options, answer: q.answer, explain: q.explain })); }

function vocabBlock(p, lang) {
  if (!p.vocab?.length) return '';
  return `<div class="card"><div class="row"><h2 style="margin:0">Key vocabulary</h2><span class="spacer"></span><button class="btn sm" id="addVocab">＋ Add all to flashcards</button></div>
    <div class="table-wrap"><table class="conj">${p.vocab.map(([w, m]) => `<tr><td>${tl(w, lang)} ${speakBtn(w)}</td><td class="muted">${esc(m)}</td></tr>`).join('')}</table></div></div>`;
}
function bindVocab(p, lang) {
  $('#addVocab')?.addEventListener('click', (e) => {
    let n = 0;
    for (const [w, m] of p.vocab) if (!store.hasCard(lang, w)) { store.addCard(lang, w, m, p.title, 'daily'); n++; }
    toast(n ? `${n} words added` : 'Already in your deck');
    e.target.disabled = true;
  });
}

function viewReading() {
  const lang = L();
  const p = todaysPassage('reading');
  if (!p) { view().innerHTML = '<p>No reading available.</p>'; return; }
  const lit = !!p.literary;
  setTutorPage(lit ? `Daily literature: ${p.title} by ${p.author}` : 'Daily reading');
  const needsQs = !p.questions?.length;
  view().innerHTML = `
    <h1>${lit ? 'Daily literature' : 'Daily reading'}</h1>
    ${passageHeader('reading', p)}
    <div class="card">
      <div class="row"><div><h2 style="margin:0" lang="${lang}">${lit ? `<i>${esc(p.title)}</i>` : esc(p.title)}</h2>
        ${lit ? `<div class="muted small">${esc(p.author)}, ${p.year}</div>` : ''}</div><span class="spacer"></span>
        <button class="btn sm" id="readAloud">▶ Read aloud</button>${p.translation ? '<button class="btn sm" id="toggleTr">Show translation</button>' : ''}</div>
      ${p.context ? `<p class="notice small" style="margin-top:12px">${esc(p.context)}</p>` : ''}
      <p class="muted small" style="margin:6px 0 14px">${lit ? 'Click any word for its definition, forms and a memory trick. Read slowly — then test yourself below.' : 'Click any word for its meaning. Try answering before you peek at the translation.'}</p>
      ${lit
        ? `<div class="passage literary" lang="en">${p.sentences.map((s, i) => `<p class="passage-sentence" data-sentence="${esc(s.slice(0, 300))}" data-i="${i}">${tl(s, lang)}</p>`).join('')}</div>`
        : `<div class="passage" lang="${lang}">${p.sentences.map((s, i) => `<span class="passage-sentence" data-sentence="${esc(s)}" data-i="${i}">${linkSentence(s, lang)}</span> `).join('')}</div>`}
      ${p.translation ? `<div id="tr" class="notice" style="margin-top:16px" hidden>${esc(p.translation)}</div>` : ''}
      ${lit ? '<p class="muted small" style="margin:8px 0 0">Public-domain text from Project Gutenberg.</p>' : ''}
    </div>
    <div class="card"><h2>${lit ? 'Close reading' : 'Comprehension'}</h2>
      <div id="qList">${needsQs ? '<p class="muted"><span class="spinner"></span> Writing questions for this excerpt…</p>' : questionsToExercises(p.questions).map((ex, i) => exerciseHTML(ex, i, lang)).join('')}</div><div id="qResult"></div></div>
    ${needsQs ? '' : vocabBlock(p, lang)}`;
  bindPassageSwitch('reading', viewReading);
  $('#nextExcerpt')?.addEventListener('click', () => { excerptOffset++; viewReading(); });
  bindVocab(p, lang);
  $('#toggleTr')?.addEventListener('click', (e) => { const t = $('#tr'); t.hidden = !t.hidden; e.target.textContent = t.hidden ? 'Show translation' : 'Hide translation'; });
  $('#readAloud').onclick = (e) => {
    if (e.target.dataset.playing) { speech.stopSequence(); return; }
    e.target.dataset.playing = '1'; e.target.textContent = '■ Stop';
    speech.speakSequence(p.sentences, lang, {
      onSentence: (i) => {
        $$('.passage-sentence').forEach((el) => el.style.background = +el.dataset.i === i ? 'var(--accent-soft)' : '');
        if (i === -1) { delete e.target.dataset.playing; e.target.textContent = '▶ Read aloud'; }
      },
    });
  };
  if (needsQs) {
    const shownId = p.id;
    ai.literatureQuestions(p)
      .then(() => { if (location.hash === '#/reading' && todaysPassage('reading').id === shownId) viewReading(); })
      .catch((err) => { $('#qList').innerHTML = `<p class="feedback bad">${esc(ai.friendlyError(err))}</p>`; });
    return;
  }
  bindExercises($('#qList'), questionsToExercises(p.questions), (c, t) => {
    store.recordDaily('readings', lang, p.id, c, t);
    const tip = p.translation ? ($('#tr').hidden ? 'Open the translation to check any doubts.' : '') : 'Ask the tutor about any line you want to unpack.';
    $('#qResult').innerHTML = `<div class="feedback ${c / t >= 0.7 ? 'good' : 'bad'}" style="font-size:1rem"><b>${c}/${t}</b> — saved to your progress. ${tip}</div>`;
  });
}

function viewWords() {
  setTutorPage('Daily words');
  const lang = L();
  const dict = C().dictionary;
  const words = todaysWords().map((w) => ({ word: w, pos: dict[w].pos, definition: dict[w].def, example: dict[w].examples[0][0], mnemonic: dict[w].mnemonic, note: dict[w].notes }));
  const extra = S().aiCache[`words:en:${store.today()}`] || [];
  const res = store.dailyResult('words', lang);
  const card = (w) => `<div class="card word-card">
      <div class="row"><span class="wc-word">${esc(w.word)}</span>${speakBtn(w.word, lang, `Pronounce ${w.word}`)}<span class="pill gray">${esc(w.pos)}</span><span class="spacer"></span>
        <button class="btn sm" data-addword="${esc(w.word)}" ${store.hasCard(lang, w.word) ? 'disabled' : ''}>${store.hasCard(lang, w.word) ? '✓ In flashcards' : '＋ Flashcard'}</button></div>
      <p style="margin:8px 0 6px;font-size:1.05rem">${esc(w.definition)}</p>
      <ul class="examples"><li data-sentence="${esc(w.example)}">${tl(w.example, lang)} ${speakBtn(w.example, lang)}</li></ul>
      <div class="mnemonic" style="margin-top:10px">💡 ${esc(w.mnemonic)}</div>
      ${w.note ? `<p class="muted small" style="margin:8px 0 0">${esc(w.note)}</p>` : ''}
    </div>`;
  const quizWords = [...words, ...extra];
  const quiz = quizWords.map((w, i) => {
    const others = shuffle(quizWords.filter((x) => x !== w), (store.dayNumber() % 97 + i + 1) / 101).slice(0, 3);
    const opts = shuffle([w, ...others], (store.dayNumber() % 89 + i + 7) / 97);
    return { type: 'mc', q: `Which word means: “${w.definition}”?`, options: opts.map((o) => o.word), answer: opts.indexOf(w), explain: w.example };
  });
  view().innerHTML = `<div id="wordsPage">
    <h1>Daily words</h1>
    <div class="row" style="margin-bottom:14px">
      <span class="pill">${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
      ${res ? `<span class="pill good">Quiz done · ${res.score}/${res.total}</span>` : ''}
      <span class="spacer"></span>
      <button class="btn sm" id="addAllWords">＋ Add all to flashcards</button>
    </div>
    <p class="muted">Five advanced words that educated writers actually use. Learn them, then take the quiz — they'll go into your flashcards for spaced review.</p>
    ${words.map(card).join('')}
    ${extra.length ? `<h2 style="margin-top:24px">✨ Bonus words</h2>${extra.map(card).join('')}` : ''}
    ${ai.hasKey() && !extra.length ? '<div class="row" style="margin-bottom:18px"><button class="btn" id="moreWords">✨ 5 more words (AI)</button></div>' : ''}
    <div class="card"><h2>Quiz</h2><div id="wQuiz">${quiz.map((ex, i) => exerciseHTML(ex, i, lang)).join('')}</div><div id="wResult"></div></div></div>`;

  const addWord = (w) => store.addCard(lang, w.word, w.definition, w.example, 'words');
  $('#wordsPage').addEventListener('click', (e) => {
    const b = e.target.closest('[data-addword]');
    if (!b) return;
    const w = quizWords.find((x) => x.word === b.dataset.addword);
    addWord(w); b.disabled = true; b.textContent = '✓ In flashcards';
  });
  $('#addAllWords').onclick = () => { quizWords.forEach(addWord); toast('Today\'s words added to flashcards'); viewWords(); };
  $('#moreWords')?.addEventListener('click', async (e) => {
    e.target.disabled = true; e.target.innerHTML = '<span class="spinner"></span> Choosing words…';
    const avoid = [...C().wordBank, ...S().cards.filter((c) => c.lang === 'en').map((c) => c.front)];
    try { await ai.moreWords(avoid); viewWords(); }
    catch (err) { toast(ai.friendlyError(err)); e.target.disabled = false; e.target.textContent = '✨ 5 more words (AI)'; }
  });
  bindExercises($('#wQuiz'), quiz, (c, t) => {
    store.recordDaily('words', lang, store.today(), c, t);
    quizWords.forEach(addWord);
    $('#wResult').innerHTML = `<div class="feedback ${c / t >= 0.7 ? 'good' : 'bad'}" style="font-size:1rem"><b>${c}/${t}</b> — saved. All of today's words are now in your flashcards.</div>`;
  });
}
const linkSentence = (s, lang) => tl(s, lang);

function viewListening() {
  setTutorPage('Daily listening');
  const lang = L();
  const p = todaysPassage('listening');
  if (!p) { view().innerHTML = '<p>No listening available.</p>'; return; }
  const dict = (p.dictation?.length ? p.dictation : [0, Math.min(2, p.sentences.length - 1)]).filter((i) => p.sentences[i]);
  const rate = S().settings.rate;
  const noVoice = speech.supported() && !speech.hasNativeVoice(lang);
  view().innerHTML = `
    <h1>Daily listening</h1>
    ${passageHeader('listening', p)}
    ${!speech.supported() ? '<div class="notice">Your browser does not support speech synthesis. Try Chrome, Edge or Safari.</div>' : ''}
    ${noVoice ? `<div class="notice" style="margin-bottom:14px">No ${C().name} voice is installed on this device${lang === 'tl' ? ', so a Spanish voice will read the Tagalog (spelling is close to phonetic)' : ''}. For a native voice, add one in your OS speech settings (macOS: System Settings → Accessibility → Spoken Content → System Voice → Manage Voices).</div>` : ''}
    <div class="card" style="text-align:center">
      <h2 lang="${lang}">${esc(p.title)}</h2>
      <p class="muted small">Listen first without reading. Replay as often as you like.</p>
      <div class="row" style="justify-content:center;margin:14px 0">
        <button class="btn primary" id="play" style="font-size:1.05rem;padding:12px 22px">▶ Play</button>
        <label class="small muted">Speed <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${rate}" style="vertical-align:middle"> <span id="rateV">${rate}×</span></label>
      </div>
      <div id="nowPlaying" class="muted small"></div>
    </div>
    <div class="card"><h2>1 · Comprehension</h2><div id="qList">${questionsToExercises(p.questions).map((ex, i) => exerciseHTML(ex, i, lang)).join('')}</div></div>
    <div class="card"><h2>2 · Dictation</h2><p class="muted small">Play each sentence and type exactly what you hear.</p>
      <div id="dList">${dict.map((si, k) => `<div class="ex" data-d="${k}">
        <div class="row" style="margin-bottom:8px"><button class="btn sm" data-dplay="${si}">▶ Sentence ${k + 1}</button><button class="btn sm ghost" data-dslow="${si}">🐢 Slow</button></div>
        <form class="fill-row" data-dform="${k}"><input type="text" lang="${lang}" autocomplete="off" spellcheck="false" placeholder="Type what you hear"><button class="btn">Check</button></form>
        <div class="fb"></div></div>`).join('')}</div></div>
    <div id="lResult"></div>
    <div class="card"><div class="row"><h2 style="margin:0">Transcript</h2><span class="spacer"></span><button class="btn sm" id="showT">Reveal</button></div>
      <div id="transcript" hidden style="margin-top:12px"><div class="passage">${p.sentences.map((s) => `<span data-sentence="${esc(s)}">${tl(s, lang)}</span> ${speakBtn(s)} `).join('')}</div>
      <div class="notice" style="margin-top:12px">${esc(p.translation)}</div></div></div>
    ${vocabBlock(p, lang)}`;

  bindPassageSwitch('listening', viewListening);
  bindVocab(p, lang);
  const curRate = () => +$('#rate').value;
  $('#rate').oninput = (e) => { $('#rateV').textContent = `${e.target.value}×`; S().settings.rate = +e.target.value; store.save(); };
  $('#play').onclick = (e) => {
    if (e.target.dataset.playing) { speech.stopSequence(); return; }
    e.target.dataset.playing = '1'; e.target.textContent = '■ Stop';
    speech.speakSequence(p.sentences, lang, {
      rate: curRate(),
      onSentence: (i) => {
        $('#nowPlaying').textContent = i >= 0 ? `Sentence ${i + 1} of ${p.sentences.length}` : '';
        if (i === -1) { delete e.target.dataset.playing; e.target.textContent = '▶ Play again'; }
      },
    });
  };
  $('#showT').onclick = (e) => { const t = $('#transcript'); t.hidden = !t.hidden; e.target.textContent = t.hidden ? 'Reveal' : 'Hide'; };

  let qScore = null;
  const dRes = new Array(dict.length).fill(null);
  const maybeFinish = () => {
    if (qScore === null || dRes.some((r) => r === null)) return;
    const score = qScore[0] + dRes.filter(Boolean).length;
    const total = qScore[1] + dRes.length;
    store.recordDaily('listening', lang, p.id, score, total);
    $('#lResult').innerHTML = `<div class="card"><div class="feedback ${score / total >= 0.7 ? 'good' : 'bad'}" style="font-size:1rem"><b>${score}/${total}</b> — saved to your progress. Reveal the transcript to check the details.</div></div>`;
  };
  bindExercises($('#qList'), questionsToExercises(p.questions), (c, t) => { qScore = [c, t]; maybeFinish(); });
  $('#dList').addEventListener('click', (e) => {
    const b = e.target.closest('[data-dplay],[data-dslow]');
    if (!b) return;
    const i = +(b.dataset.dplay ?? b.dataset.dslow);
    speech.speak(p.sentences[i], lang, { rate: b.dataset.dslow ? 0.6 : curRate() });
  });
  $('#dList').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target.closest('[data-dform]');
    const k = +f.dataset.dform;
    const target = p.sentences[dict[k]];
    const inp = $('input', f);
    if (!inp.value.trim()) return;
    const { html, ratio } = diffWords(target, inp.value);
    const ok = ratio >= 0.85;
    if (dRes[k] === null) dRes[k] = ok;
    $('.fb', f.closest('.ex')).innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}">${ok ? '✓ Great ear!' : 'Compare:'} <div class="dict-diff" style="margin-top:6px">${html}</div><div class="small" style="margin-top:4px">${Math.round(ratio * 100)}% of words correct</div></div>`;
    maybeFinish();
  });
}

/** Word-level LCS diff; green = matched, red underline = missed. */
function diffWords(target, input) {
  // accents are hard to hear, so dictation matching ignores them
  const norm = (w) => w.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/[’]/g, "'").replace(/[^\p{L}\d'-]/gu, '');
  const tw = target.split(/\s+/).filter(Boolean);
  const iw = input.split(/\s+/).filter(Boolean).map(norm);
  const tn = tw.map(norm);
  const dp = Array.from({ length: tn.length + 1 }, () => new Array(iw.length + 1).fill(0));
  for (let i = tn.length - 1; i >= 0; i--) for (let j = iw.length - 1; j >= 0; j--) dp[i][j] = tn[i] === iw[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Set();
  for (let i = 0, j = 0; i < tn.length && j < iw.length;) {
    if (tn[i] === iw[j]) { hit.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  return { html: tw.map((w, i) => `<span class="${hit.has(i) ? 'ok' : 'miss'}">${esc(w)}</span>`).join(' '), ratio: hit.size / tw.length };
}

// ----- progress

function viewProgress() {
  setTutorPage('Progress');
  const s = S();
  const weeks = 18;
  const start = store.addDays(store.today(), -(weeks * 7 - 1) - new Date().getDay());
  const cells = [];
  for (let i = 0; i < weeks * 7; i++) {
    const d = store.addDays(start, i);
    if (d > store.today()) { cells.push('<span style="visibility:hidden"></span>'); continue; }
    const pts = Object.values(s.activity[d] || {}).reduce((a, b) => a + b, 0);
    const l = pts === 0 ? 0 : pts < 5 ? 1 : pts < 15 ? 2 : pts < 30 ? 3 : 4;
    cells.push(`<span data-l="${l}" title="${d}: ${pts} pts"></span>`);
  }
  const activeDays = Object.keys(s.activity).length;
  const avg = (obj, lang) => {
    const r = Object.entries(obj).filter(([k]) => k.startsWith(lang + ':')).map(([, v]) => v);
    if (!r.length) return '—';
    return `${Math.round((100 * r.reduce((a, b) => a + b.score, 0)) / r.reduce((a, b) => a + b.total, 0))}% <span class="muted small">(${r.length})</span>`;
  };

  view().innerHTML = `
    <h1>Progress</h1>
    <div class="grid cols-3" style="margin-bottom:18px">
      <div class="card flat"><div class="stat">🔥 ${store.streak()}</div><div class="stat-label">current streak</div></div>
      <div class="card flat"><div class="stat">${activeDays}</div><div class="stat-label">days studied</div></div>
      <div class="card flat"><div class="stat">${s.cards.length}</div><div class="stat-label">flashcards across all languages</div></div>
    </div>
    <div class="card">
      <h2>Activity</h2>
      <div class="heatmap" role="img" aria-label="Study activity over the last ${weeks} weeks">${cells.join('')}</div>
      <div class="row small muted" style="margin-top:8px">Less <span class="heatmap" style="grid-template-rows:13px;display:inline-grid"><span></span><span data-l="1"></span><span data-l="2"></span><span data-l="3"></span><span data-l="4"></span></span> More</div>
    </div>
    ${LANGS.map((lang) => {
      const c = COURSES[lang];
      const cards = s.cards.filter((x) => x.lang === lang);
      const mature = cards.filter((x) => x.interval >= 21).length;
      const learning = cards.filter((x) => x.reps > 0 && x.interval < 21).length;
      return `<div class="card">
        <div class="row"><span style="font-size:1.6rem">${c.flag}</span><h2 style="margin:0">${c.name}</h2><span class="pill">${LEVEL_LABEL[c.onlyLevel || s.levels[lang]]}</span></div>
        <div class="grid cols-2" style="margin-top:14px">
          <div>${LEVELS.filter((lv) => c.levels[lv]?.grammar?.length).map((lv) => {
            const items = c.levels[lv]?.grammar || [];
            const n = items.filter((l) => s.lessonsDone[store.lessonKey(lang, lv, l.id)]).length;
            return `<div style="margin-bottom:10px"><div class="row small"><span>${LEVEL_LABEL[lv]} grammar</span><span class="spacer"></span><span class="muted">${n}/${items.length}</span></div>
              <div class="progress-bar"><span style="width:${items.length ? (100 * n) / items.length : 0}%"></span></div></div>`;
          }).join('')}</div>
          <div class="small">
            <div class="row"><span>Reading average</span><span class="spacer"></span><b>${avg(s.readings, lang)}</b></div>
            ${has(lang, 'listening') ? `<div class="row"><span>Listening average</span><span class="spacer"></span><b>${avg(s.listening, lang)}</b></div>` : ''}
            ${has(lang, 'words') ? `<div class="row"><span>Daily-word quizzes</span><span class="spacer"></span><b>${avg(s.words, lang)}</b></div>` : ''}
            <div class="row"><span>Cards: new / learning / mature</span><span class="spacer"></span><b>${cards.length - mature - learning} / ${learning} / ${mature}</b></div>
            <div class="row"><span>Due now</span><span class="spacer"></span><b>${store.dueCards(lang).length}</b></div>
          </div>
        </div></div>`;
    }).join('')}`;
}

// ----- settings

function accountCard() {
  if (!sync.configured()) {
    return `<div class="card" id="account"><h2>Account & sync</h2>
      <p class="muted small">Cloud sync isn't set up yet. Once a Firebase project is connected (see the README), you'll be able to sign in with Google here so your progress follows you between phone and computer, and each family member gets their own account.</p></div>`;
  }
  const u = sync.currentUser();
  const st = sync.syncStatus();
  const when = st.lastSynced ? st.lastSynced.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) : '';
  return `<div class="card" id="account"><h2>Account & sync</h2>
    ${u ? `<div class="row"><span class="avatar" style="width:40px;height:40px">${u.photoURL ? `<img src="${esc(u.photoURL)}" alt="" referrerpolicy="no-referrer">` : esc((u.displayName || u.email || '?')[0].toUpperCase())}</span>
        <div style="flex:1"><b>${esc(u.displayName || '')}</b><div class="muted small">${esc(u.email || '')}</div></div>
        <button class="btn" id="signOutBtn">Sign out</button></div>
      <p class="small" style="margin:12px 0 0"><span class="sync-dot ${st.status}" style="display:inline-block;vertical-align:middle"></span>
        ${st.status === 'synced' ? `Synced${when ? ` at ${when}` : ''}. Progress updates automatically on all your devices.` : st.status === 'syncing' ? 'Syncing…' : st.status === 'error' ? `Sync problem: ${esc(st.lastError)}` : ''}</p>
      <p class="muted small" style="margin-top:8px">Signing out clears progress from this device (it stays safe in your account) so someone else can sign in here. Your API key stays on this device.</p>`
    : `<p class="muted small">Sign in with Google to keep your progress in sync between phone and computer. Each person signs in with their own Google account and gets their own progress.</p>
      <button class="btn primary" id="signInBtn">Sign in with Google</button>
      ${st.status === 'error' ? `<p class="small" style="color:var(--bad);margin-top:8px">${esc(st.lastError)}</p>` : ''}`}
  </div>`;
}

function renderAccountBtn() {
  const b = $('#accountBtn');
  if (!sync.configured()) { b.hidden = true; return; }
  b.hidden = false;
  const u = sync.currentUser();
  const st = sync.syncStatus().status;
  b.classList.toggle('signed-out', !u);
  b.title = u ? `Signed in as ${u.email} — ${st}` : 'Sign in to sync your progress';
  b.innerHTML = u
    ? `<span class="avatar">${u.photoURL ? `<img src="${esc(u.photoURL)}" alt="" referrerpolicy="no-referrer">` : esc((u.displayName || u.email || '?')[0].toUpperCase())}</span><span class="acct-name">${esc((u.displayName || '').split(' ')[0])}</span><span class="sync-dot ${st}"></span>`
    : 'Sign in';
}

function bindAccount() {
  $('#signInBtn')?.addEventListener('click', async (e) => {
    e.target.disabled = true; e.target.textContent = 'Opening Google…';
    try { await sync.signIn(); } catch (err) { toast(err.message || 'Sign-in failed'); }
    e.target.disabled = false; e.target.textContent = 'Sign in with Google';
  });
  $('#signOutBtn')?.addEventListener('click', async () => {
    if (!confirm('Sign out? Your progress stays saved in your account, and this device will be cleared.')) return;
    await sync.signOut();
    toast('Signed out');
  });
}

function viewSettings() {
  setTutorPage('Settings');
  const s = S().settings;
  view().innerHTML = `
    <h1>Settings</h1>
    ${accountCard()}
    <div class="card">
      <h2>AI tutor (Claude)</h2>
      <p class="muted small">The tutor, rich word lookups (conjugations, memory tricks for any word) and fresh daily passages use Claude. Bring your own key from <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com</a>. Everything else works without one.</p>
      <label>Anthropic API key<input type="password" id="apiKey" value="${esc(s.apiKey)}" placeholder="sk-ant-…" autocomplete="off"></label>
      <p class="muted small" style="margin-top:6px">🔒 Stored only in this browser's local storage and sent only to api.anthropic.com. Don't use this on a shared computer. Consider a key with a monthly spend limit.</p>
      <label style="display:block;margin-top:10px">Model<br><select id="model">${ai.MODELS.map((m) => `<option value="${m.id}" ${s.model === m.id ? 'selected' : ''}>${m.label}</option>`).join('')}</select></label>
      <div class="row" style="margin-top:14px"><button class="btn primary" id="saveKey">Save</button><button class="btn" id="testKey">Test connection</button><span id="keyStatus" class="small"></span></div>
    </div>

    <div class="card">
      <h2>Your levels</h2>
      <div class="grid cols-3">${LANGS.filter((l) => !COURSES[l].onlyLevel).map((l) => `<label>${COURSES[l].flag} ${COURSES[l].name}<br>
        <select data-lvl="${l}" style="width:100%">${LEVELS.map((lv) => `<option value="${lv}" ${S().levels[l] === lv ? 'selected' : ''}>${LEVEL_LABEL[lv]}</option>`).join('')}</select></label>`).join('')}</div>
    </div>

    <div class="card">
      <h2>Pronunciation</h2>
      ${speech.supported() ? `<p class="muted small">Uses your device's built-in voices. Higher-quality voices can be downloaded in your OS settings.</p>
      <div class="grid cols-3">${LANGS.map((l) => {
        const vs = speech.voicesFor(l);
        return `<label>${COURSES[l].name} voice<br><select data-voice="${l}" style="width:100%">
          ${vs.length ? vs.map((v) => `<option ${s.voices[l] === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('') : `<option value="">${l === 'tl' ? 'None installed — Spanish fallback' : 'None installed'}</option>`}
        </select>${vs.length ? `<button class="btn sm" style="margin-top:6px" data-say="${esc({ es: 'Hola, ¿qué tal?', fr: 'Bonjour, ça va ?', tl: 'Kumusta ka?', en: 'It was the best of times.' }[l])}" data-lang="${l}">🔊 Test</button>` : ''}</label>`;
      }).join('')}</div>
      <label style="display:block;margin-top:12px">Default speed: <span id="rv">${s.rate}×</span><br><input type="range" id="rateS" min="0.5" max="1.2" step="0.05" value="${s.rate}" style="width:240px"></label>` : '<p>Speech synthesis is not supported in this browser.</p>'}
    </div>

    <div class="card">
      <h2>Appearance</h2>
      <select id="theme"><option value="auto">Match system</option><option value="light" ${s.theme === 'light' ? 'selected' : ''}>Light</option><option value="dark" ${s.theme === 'dark' ? 'selected' : ''}>Dark</option></select>
    </div>

    <div class="card">
      <h2>Your data</h2>
      <p class="muted small">Progress lives in this browser. Export a backup to move it to another device.</p>
      <div class="row"><button class="btn" id="exportBtn">⬇ Export progress</button>
        <label class="btn">⬆ Import<input type="file" id="importFile" accept="application/json" hidden></label>
        <span class="spacer"></span><button class="btn" id="resetBtn" style="color:var(--bad)">Reset everything</button></div>
    </div>`;

  bindAccount();
  $('#saveKey').onclick = () => { s.apiKey = $('#apiKey').value.trim(); s.model = $('#model').value; store.save(); $('#keyStatus').textContent = '✓ Saved'; };
  $('#testKey').onclick = async () => {
    s.apiKey = $('#apiKey').value.trim(); s.model = $('#model').value; store.save();
    $('#keyStatus').innerHTML = '<span class="spinner"></span> Testing…';
    try { await ai.tutorStream([{ role: 'user', content: 'Reply with just: OK' }], { lang: L(), page: 'Settings' }, () => {}); $('#keyStatus').innerHTML = '<span style="color:var(--good)">✓ Connected</span>'; }
    catch (e) { $('#keyStatus').innerHTML = `<span style="color:var(--bad)">${esc(ai.friendlyError(e))}</span>`; }
  };
  $$('[data-lvl]').forEach((el) => el.onchange = () => { S().levels[el.dataset.lvl] = el.value; store.save(); renderShell(); toast('Level updated'); });
  $$('[data-voice]').forEach((el) => el.onchange = () => { s.voices[el.dataset.voice] = el.value; store.save(); });
  $('#rateS')?.addEventListener('input', (e) => { s.rate = +e.target.value; $('#rv').textContent = `${s.rate}×`; store.save(); });
  $('#theme').onchange = (e) => { s.theme = e.target.value; store.save(); applyTheme(); };
  $('#exportBtn').onclick = () => {
    const data = { ...S(), settings: { ...S().settings, apiKey: '' } };
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    a.download = `lingua-progress-${store.today()}.json`;
    a.click();
  };
  $('#importFile').onchange = async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (!data.levels || !Array.isArray(data.cards)) throw new Error('bad');
      if (!confirm('Replace your current progress with this backup?')) return;
      const key = S().settings.apiKey;
      store.replaceAll({ ...data, settings: { ...data.settings, apiKey: key } });
      toast('Progress imported'); route();
    } catch { toast("That file doesn't look like a Lingua backup."); }
  };
  $('#resetBtn').onclick = () => { if (confirm('Delete ALL progress, flashcards and settings in this browser?')) { store.resetAll(); route(); renderShell(); } };
}

// ---------------------------------------------------------------- router & events

function route() {
  closeWord();
  speech.stopSequence();
  fcKeys = null;
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const [page, arg] = parts;
  if ((page === 'listening' || page === 'words' || page === 'reading') && !has(L(), page)) { location.hash = '#/'; return; }
  setActiveNav(page || 'home');
  switch (page) {
    case 'grammar': arg ? viewLesson(arg) : viewGrammar(); break;
    case 'flashcards': viewFlashcards(arg || 'review'); break;
    case 'reading': viewReading(); break;
    case 'listening': viewListening(); break;
    case 'words': viewWords(); break;
    case 'progress': viewProgress(); break;
    case 'settings': viewSettings(); break;
    default: viewHome();
  }
  view().focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function setLang(lang) {
  S().lang = lang;
  store.save();
  builtinOverride.reading = builtinOverride.listening = false;
  excerptOffset = 0;
  renderShell();
  // a lesson id belongs to one language; go back to its list
  if (location.hash.startsWith('#/grammar/')) location.hash = '#/grammar';
  else route();
}

document.addEventListener('click', (e) => {
  const sl = e.target.closest('[data-setlang]');
  if (sl) setLang(sl.dataset.setlang);
  if (e.target.id === 'onbDone') {
    $$('[data-onb]').forEach((el) => { S().levels[el.dataset.onb] = el.value; });
    S().onboarded = true;
    S().lang = $('#onbLang').value;
    store.save();
    renderShell();
    route();
  }
});
$('#levelSelect').addEventListener('change', (e) => {
  S().levels[L()] = e.target.value;
  store.save();
  builtinOverride.reading = builtinOverride.listening = false;
  toast(`${C().name} level: ${LEVEL_LABEL[e.target.value]}`);
  route();
});
$('#menuBtn').addEventListener('click', () => {
  const n = $('#sidenav');
  n.classList.toggle('open');
  $('#menuBtn').setAttribute('aria-expanded', n.classList.contains('open'));
});
window.addEventListener('hashchange', route);

renderShell();
initWordPopup();
initTutor();
route();
renderAccountBtn();
sync.onSyncChange(({ remoteChanged }) => {
  renderAccountBtn();
  const page = location.hash.replace(/^#\/?/, '').split('/')[0] || 'home';
  if (remoteChanged) {
    renderShell();
    // refresh pages that only display progress; don't interrupt an exercise in progress
    if (['home', 'progress', 'grammar'].includes(page) && !location.hash.match(/grammar\/./)) route();
  }
  const card = $('#account');
  if (page === 'settings' && card) { card.outerHTML = accountCard(); bindAccount(); }
});
sync.initSync();
// voices load asynchronously in some browsers; refresh settings if open
if (speech.supported()) speechSynthesis.addEventListener?.('voiceschanged', () => { if (location.hash === '#/settings') viewSettings(); });
