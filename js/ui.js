// Small DOM/text helpers shared across views.

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const WORD_RE = /([\p{L}\p{M}][\p{L}\p{M}\d'’\-]*[\p{L}\p{M}]|[\p{L}\p{M}])/gu;

/** Wrap every target-language word in a clickable span. */
export function linkify(text, lang) {
  let out = '';
  let last = 0;
  for (const m of String(text).matchAll(WORD_RE)) {
    out += esc(text.slice(last, m.index));
    out += `<span class="w" tabindex="0" role="button" data-lang="${lang}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}

/** Target-language block, e.g. a sentence. */
export const tl = (text, lang, cls = '') => `<span class="target ${cls}" lang="${lang}">${linkify(text, lang)}</span>`;

/**
 * Lesson HTML (authored, so trusted). Markup:
 *   {{word}}            target-language text, clickable
 *   {{word|meaning}}    target-language text followed by its English meaning
 *   [[term]] / [[term|shown text]]   grammar term with a click-to-explain definition
 */
export const rich = (html, lang) => html
  .replace(/\{\{(.+?)\}\}/g, (_, t) => {
    const [word, gloss] = t.split('|');
    return `<b>${tl(word, lang)}</b>${gloss ? ` <span class="gloss">(${esc(gloss)})</span>` : ''}`;
  })
  .replace(/\[\[(.+?)\]\]/g, (_, t) => {
    const [key, shown] = t.split('|');
    return `<span class="term" tabindex="0" role="button" data-term="${esc(key.toLowerCase())}">${esc(shown || key)}</span>`;
  });

/** Grammar terms referenced in a lesson, in order of first use. */
export const termsIn = (html) => [...new Set([...String(html).matchAll(/\[\[(.+?)(?:\|.+?)?\]\]/g)].map((m) => m[1].toLowerCase()))];

/**
 * Word-by-word breakdown under an example sentence.
 * "Maganda=beautiful|ang=(topic)|bahay=house" → stacked target word over its meaning.
 */
export function breakdown(spec, lang) {
  if (!spec) return '';
  return `<div class="interlinear">${spec.split('|').map((pair) => {
    const [w, m] = pair.split('=');
    return `<span class="il"><span class="il-w">${tl(w, lang)}</span><span class="il-m">${esc(m || '')}</span></span>`;
  }).join('')}</div>`;
}

/** Minimal, safe markdown for tutor messages. */
export function md(src) {
  const lines = esc(src).split('\n');
  let html = '';
  let list = null;
  const inline = (s) => s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<i>$2</i>');
  const close = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    let m;
    if ((m = line.match(/^\s*[-*•]\s+(.*)/))) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = line.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = line.match(/^#{1,4}\s+(.*)/))) { close(); html += `<p><b>${inline(m[1])}</b></p>`; }
    else if (!line.trim()) { close(); }
    else { close(); html += `<p>${inline(line)}</p>`; }
  }
  close();
  return html;
}

let toastTimer;
export function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
}

/** Compare answers leniently: case, spacing, punctuation, curly quotes. Returns 'ok' | 'accent' | 'no'. */
export function checkAnswer(input, accepted) {
  const base = (s) => s.toLowerCase().replace(/[’`]/g, "'").replace(/[.,!?¿¡;:«»"]/g, '').replace(/\s+/g, ' ').trim();
  const strip = (s) => base(s).normalize('NFD').replace(/\p{M}/gu, '');
  const a = base(input);
  if (accepted.some((x) => base(x) === a)) return 'ok';
  if (accepted.some((x) => strip(x) === strip(input))) return 'accent';
  return 'no';
}

export function shuffle(arr, seed = Math.random()) {
  const a = [...arr];
  let s = Math.floor(seed * 2 ** 31) || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2 ** 31;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
