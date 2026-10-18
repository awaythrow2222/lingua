// Claude integration. The API key is the learner's own, stored only in this browser.
import * as store from './store.js';

const SDK_URL = 'https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm';
export const MODELS = [
  { id: 'claude-opus-5-5', label: 'Claude Opus 5.5 — best quality' },
  { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5 — fast, lower cost' },
  { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5 — fastest, cheapest' },
];
const LANG_NAMES = { fr: 'French', es: 'Spanish', tl: 'Tagalog (Filipino)', en: 'English' };

let clientPromise = null;
let clientKey = null;

export const hasKey = () => !!store.get().settings.apiKey;

async function client() {
  const key = store.get().settings.apiKey;
  if (!key) throw new Error('NO_KEY');
  if (!clientPromise || clientKey !== key) {
    clientKey = key;
    clientPromise = import(SDK_URL).then(({ default: Anthropic }) =>
      new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true }));
  }
  return clientPromise;
}

// Server-side refusal fallbacks are available for Opus/Sonnet on the Claude API, not Haiku.
function baseParams(effort) {
  const model = store.get().settings.model || 'claude-opus-5-5';
  const p = { model, output_config: { effort } };
  if (!model.startsWith('claude-haiku')) { p.betas = ['server-side-fallback-2026-07-01']; p.fallbacks = 'default'; }
  return p;
}

export function friendlyError(e) {
  if (e?.message === 'NO_KEY') return 'Add your Anthropic API key in Settings to use AI features.';
  const s = e?.status;
  if (s === 401) return 'Your API key was rejected. Check it in Settings.';
  if (s === 429) return 'Rate limited — wait a moment and try again.';
  if (s === 529 || s >= 500) return 'Claude is temporarily overloaded. Try again shortly.';
  if (s === 400) return `Request error: ${e?.error?.error?.message || e.message}`;
  if (e?.name === 'TypeError' || /fetch|network/i.test(e?.message)) return 'Network error — check your connection.';
  return e?.message || 'Something went wrong.';
}

function tutorSystem(ctx) {
  const lv = store.get().levels;
  const focus = ctx.lang === 'en'
    ? `They are currently on the Advanced English track (advanced grammar, precise usage, literary reading, and sophisticated vocabulary), on the "${ctx.page}" page.`
    : `They are currently studying ${LANG_NAMES[ctx.lang]} at the ${lv[ctx.lang]} level, on the "${ctx.page}" page.`;
  return `You are a warm, sharp language tutor inside "Lingua", a grammar-focused study app for French, Spanish, Tagalog and advanced English.

Learner profile: French — ${lv.fr}; Spanish — ${lv.es}; Tagalog — ${lv.tl}; English — advanced.
${focus}
${ctx.content ? `What is on their screen right now:\n<screen>\n${ctx.content.slice(0, 6000)}\n</screen>` : ''}

How to tutor:
- Match the level. Beginners: explain in English, keep target-language examples short, always give translations. Intermediate: mix, translate harder bits. Advanced: you may answer mostly in the target language, focus on nuance, register, regional variation and native-like phrasing.
- Grammar first: name the rule, show the pattern, give 2–3 examples, flag common mistakes.
- When correcting a sentence, show the corrected version, then explain each change briefly.
- For advanced English, answer like an expert editor and linguist: name the construction, distinguish formal/prescriptive rules from common usage, and give polished examples. When discussing literature, interpret closely (tone, irony, rhetoric, historical context) and quote only short phrases.
- For Tagalog, be precise about verb focus (actor/object/locative/benefactive), aspect (completed/incomplete/contemplated), ang/ng/sa markers, and note Taglish where natural.
- Offer a memorable hook (mnemonic, cognate, image) when teaching vocabulary.
- Be concise: short paragraphs, lists, **bold** for key forms. End with a quick check question when it helps.`;
}

/** Stream a tutor reply. onText receives the accumulated text. */
export async function tutorStream(history, ctx, onText) {
  const c = await client();
  const stream = c.beta.messages.stream({
    ...baseParams('medium'),
    max_tokens: 16000,
    system: tutorSystem(ctx),
    messages: history,
  });
  let text = '';
  for await (const ev of stream) {
    if (ev.type === 'content_block_delta' && ev.delta.type === 'text_delta') {
      text += ev.delta.text;
      onText(text);
    }
  }
  const final = await stream.finalMessage();
  if (final.stop_reason === 'refusal') throw new Error("The tutor couldn't answer that one. Try rephrasing.");
  return text;
}

async function jsonCall(prompt, schema, effort = 'low', maxTokens = 16000) {
  const c = await client();
  const p = baseParams(effort);
  p.output_config.format = { type: 'json_schema', schema };
  const res = await c.beta.messages.create({ ...p, max_tokens: maxTokens, messages: [{ role: 'user', content: prompt }] });
  if (res.stop_reason === 'refusal') throw new Error('Claude declined this request.');
  const text = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  return JSON.parse(text);
}

const str = { type: 'string' };
const strArr = { type: 'array', items: str };

const WORD_SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['lemma', 'pos', 'definition', 'notes', 'conjugations', 'examples', 'mnemonic', 'related'],
  properties: {
    lemma: str, pos: str, definition: str, notes: str,
    conjugations: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false, required: ['title', 'rows'],
        properties: { title: str, rows: { type: 'array', items: { type: 'array', items: str } } },
      },
    },
    examples: {
      type: 'array',
      items: { type: 'object', additionalProperties: false, required: ['t', 'en'], properties: { t: str, en: str } },
    },
    mnemonic: str, related: strArr,
  },
};

/** Rich word breakdown, cached per language+word. */
export async function lookupWord(lang, word, sentence) {
  const ck = `word:${lang}:${word.toLowerCase()}`;
  const cache = store.get().aiCache;
  if (cache[ck]) return cache[ck];
  const level = store.get().levels[lang];
  if (lang === 'en') {
    const d = await jsonCall(
      `Explain the English word "${word}" for an advanced speaker building a sophisticated vocabulary.${sentence ? `\nIt appeared in: "${sentence}"` : ''}
Return:
- lemma: dictionary form
- pos: part of speech
- definition: precise meaning as used here (add a second sense if common)
- notes: 1–2 sentences on register, connotation, common confusions or misuse, and etymology
- conjugations: one table {title, rows of [label, form]}. Verbs: base, 3rd-person singular, past, past participle, present participle. Nouns: singular, plural. Adjectives: comparative/superlative or adverb form. Function words: empty array.
- examples: 3 polished sentences {t: sentence, en: one-line note on the nuance shown}
- mnemonic: one vivid memory hook (word parts, sound-alike, image or story)
- related: up to 4 synonyms/antonyms with a short gloss showing how they differ`,
      WORD_SCHEMA, 'low');
    cache[ck] = d;
    store.save();
    return d;
  }
  const data = await jsonCall(
    `Explain the ${LANG_NAMES[lang]} word "${word}" for a ${level} English-speaking learner.${sentence ? `\nIt appeared in: "${sentence}"` : ''}
Return:
- lemma: dictionary form (infinitive for verbs, root for Tagalog verbs/affixed words)
- pos: part of speech
- definition: concise English meaning(s) as used here
- notes: 1–2 sentences on usage, register, or grammar (e.g. gender, irregularity, Tagalog affix/focus)
- conjugations: tables as {title, rows} where rows are [label, form] pairs. Verbs: French/Spanish present + one past tense (passé composé/pretérito) + one more useful tense for the level, all six persons. Tagalog verbs: aspects (infinitive, completed, incomplete, contemplated) for the common focus forms. Nouns/adjectives: gender & number forms (or empty array if none apply).
- examples: 3 natural example sentences {t: target, en: English}
- mnemonic: one vivid, memorable way to remember it (sound-alike, image, cognate, story)
- related: up to 4 related words or phrases with brief gloss, like "word – meaning"`,
    WORD_SCHEMA, 'low');
  cache[ck] = data;
  store.save();
  return data;
}

const QUESTION = {
  type: 'object', additionalProperties: false, required: ['q', 'options', 'answer', 'explain'],
  properties: { q: str, options: strArr, answer: { type: 'integer' }, explain: str },
};
const DAILY_SCHEMA = {
  type: 'object', additionalProperties: false, required: ['title', 'sentences', 'translation', 'questions', 'vocab'],
  properties: {
    title: str, sentences: strArr, translation: str,
    questions: { type: 'array', items: QUESTION },
    vocab: { type: 'array', items: { type: 'array', items: str } },
  },
};

/** Fresh AI-generated daily passage for reading or listening, cached per day. */
export async function generateDaily(kind, lang) {
  const ck = `${kind}:${lang}:${store.get().levels[lang]}:${store.today()}`;
  const cache = store.get().aiCache;
  if (cache[ck]) return cache[ck];
  const level = store.get().levels[lang];
  const lengths = { beginner: '6–8 short sentences, present tense, very common words', intermediate: '9–12 sentences, mixed tenses, everyday topics', advanced: '12–16 sentences, rich vocabulary, idioms, subordinate clauses, subjunctive/literary forms where natural' };
  const data = await jsonCall(
    `Write an original ${kind === 'listening' ? 'listening passage (a short dialogue or monologue meant to be heard)' : 'reading passage'} in ${LANG_NAMES[lang]} for a ${level} learner: ${lengths[level]}.
Pick a fresh, interesting everyday or cultural topic (vary it; today is ${store.today()}).
${lang === 'tl' ? 'Use standard modern Tagalog spelling; light Taglish only if natural.' : ''}
Return:
- title (in the target language)
- sentences: the passage split into sentences
- translation: full English translation
- questions: 4 multiple-choice comprehension questions (${level === 'beginner' ? 'in English' : 'in the target language'}), 4 options each, answer = index of the correct option, explain = short English explanation citing the text
- vocab: 6 useful words from the passage as [word, English meaning]`,
    DAILY_SCHEMA, 'low');
  cache[ck] = data;
  store.save();
  return data;
}

const LIT_SCHEMA = {
  type: 'object', additionalProperties: false, required: ['context', 'questions', 'vocab'],
  properties: { context: str, questions: { type: 'array', items: QUESTION }, vocab: { type: 'array', items: { type: 'array', items: str } } },
};

/** Questions and a glossary for a verbatim literary excerpt, cached per excerpt. */
export async function literatureQuestions(p) {
  const ck = `litq:${p.id}`;
  const cache = store.get().aiCache;
  if (cache[ck]) return cache[ck];
  const data = await jsonCall(
    `Here is a verbatim excerpt from ${p.title} by ${p.author} (${p.year}):
<excerpt>
${p.sentences.join('\n\n')}
</excerpt>
Create a reading exercise for an advanced adult reader of English:
- context: 1–2 sentences situating the excerpt in the work (who is speaking or what is happening), with no major plot spoilers
- questions: exactly 4 multiple-choice questions, 4 options each: one on a word's meaning in context, one inference question, one on tone or a rhetorical/literary device, one on a notable grammatical or stylistic feature of a specific phrase. answer = index of the correct option. explain = 1–2 sentences quoting the relevant words.
- vocab: 6 advanced or archaic words/phrases from the excerpt as [word, concise definition as used here]`,
    LIT_SCHEMA, 'low');
  cache[ck] = data;
  store.save();
  return data;
}

const WORDS_SCHEMA = {
  type: 'object', additionalProperties: false, required: ['words'],
  properties: {
    words: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false, required: ['word', 'pos', 'definition', 'example', 'mnemonic', 'note'],
        properties: { word: str, pos: str, definition: str, example: str, mnemonic: str, note: str },
      },
    },
  },
};

/** Five more advanced-but-common English words for today, avoiding ones already seen. Cached per day. */
export async function moreWords(avoid) {
  const ck = `words:en:${store.today()}`;
  const cache = store.get().aiCache;
  if (cache[ck]) return cache[ck];
  const data = await jsonCall(
    `Suggest 5 advanced English words that educated speakers genuinely use in journalism, business, and literary writing (not obscure dictionary curiosities). Vary the parts of speech.
Do NOT use any of these: ${avoid.slice(0, 400).join(', ')}.
For each: word, pos, definition (precise, one line), example (one natural sentence using the word), mnemonic (a vivid memory hook), note (usage tip, common confusion, or etymology in one sentence).`,
    WORDS_SCHEMA, 'low');
  cache[ck] = data.words;
  store.save();
  return data.words;
}
