// Pronunciation via the browser's built-in speech synthesis (no API key needed).
import * as store from './store.js';

const LOCALES = { fr: ['fr-FR', 'fr-CA', 'fr'], es: ['es-ES', 'es-MX', 'es-US', 'es'], tl: ['fil-PH', 'tl-PH', 'fil', 'tl'], en: ['en-US', 'en-GB', 'en'] };
let voices = [];

function loadVoices() { voices = window.speechSynthesis?.getVoices() || []; }
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

export const supported = () => 'speechSynthesis' in window;

export function voicesFor(lang) {
  const prefixes = LOCALES[lang].map((l) => l.toLowerCase());
  return voices.filter((v) => prefixes.some((p) => v.lang.toLowerCase().replace('_', '-').startsWith(p)));
}

function pickVoice(lang) {
  const chosen = store.get().settings.voices?.[lang];
  const list = voicesFor(lang);
  return list.find((v) => v.name === chosen) || list.find((v) => /premium|enhanced|natural|google/i.test(v.name)) || list[0] || null;
}

export const hasNativeVoice = (lang) => voicesFor(lang).length > 0;

/** Speak text. Returns a promise that resolves when speech finishes. */
export function speak(text, lang, { rate } = {}) {
  return new Promise((resolve) => {
    if (!supported()) return resolve(false);
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(lang);
    // Tagalog voices are rare; Spanish voices read Tagalog spelling reasonably well as a fallback.
    if (v) { u.voice = v; u.lang = v.lang; }
    else if (lang === 'tl') { const es = pickVoice('es'); if (es) { u.voice = es; u.lang = es.lang; } else u.lang = 'fil-PH'; }
    else u.lang = LOCALES[lang][0];
    u.rate = rate ?? store.get().settings.rate ?? 0.9;
    u.onend = () => resolve(true);
    u.onerror = () => resolve(false);
    speechSynthesis.speak(u);
  });
}

export function stop() { if (supported()) speechSynthesis.cancel(); }

/** Speak a list of sentences one after another; onSentence(i) fires as each starts. */
export async function speakSequence(sentences, lang, { rate, onSentence, pauseMs = 350 } = {}) {
  const token = (speakSequence.token = Symbol());
  for (let i = 0; i < sentences.length; i++) {
    if (speakSequence.token !== token) return;
    onSentence?.(i);
    await speak(sentences[i], lang, { rate });
    await new Promise((r) => setTimeout(r, pauseMs));
  }
  onSentence?.(-1);
}
export function stopSequence() { speakSequence.token = null; stop(); }

/** External fallback link to hear a human-quality voice. */
export const externalAudioUrl = (text, lang) =>
  `https://translate.google.com/?sl=${lang}&tl=en&text=${encodeURIComponent(text)}&op=translate`;
