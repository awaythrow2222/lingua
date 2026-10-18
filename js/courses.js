import fr from './data/fr.js';
import es from './data/es.js';
import tl from './data/tl.js';
import en from './data/en.js';

export const COURSES = { fr, es, tl, en };
export const LANGS = ['es', 'fr', 'tl', 'en'];
const ALL_FEATURES = ['grammar', 'flashcards', 'reading', 'listening'];
export const has = (lang, feature) => (COURSES[lang].features || ALL_FEATURES).includes(feature);
export const LEVELS = ['beginner', 'intermediate', 'advanced'];
export const LEVEL_LABEL = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };

/** Pick content for a language/level; falls back to the nearest level that has content. */
export function content(lang, level, kind) {
  const L = COURSES[lang].levels;
  const order = [level, ...LEVELS.filter((l) => l !== level)];
  for (const lv of order) if (L[lv]?.[kind]?.length) return { items: L[lv][kind], level: lv };
  return { items: [], level };
}
