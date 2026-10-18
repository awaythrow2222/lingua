# Lingua: Spanish, French, Tagalog & Advanced English

A grammar-focused language-learning site that runs entirely in the browser, so GitHub Pages can host it for free. There's no build step and no server.

## Features

- **Three languages × three levels.** Spanish, French and Tagalog at Beginner, Intermediate and Advanced. You set your level per language and can change it any time.
- **Advanced English.** Ten advanced grammar lessons (subjunctive, inversion, clefts, modal perfects, dangling modifiers, relative clauses, mixed conditionals, agreement traps, parallelism, precise usage), plus:
  - **Daily literature:** verbatim public-domain excerpts from Austen, Dickens, Eliot, Melville, the Brontës, Wilde, Conrad, Wharton, James and others. 13 passages have hand-written close-reading questions; with an API key, 106 more are unlocked and Claude writes questions for each one.
  - **Daily words:** five advanced-but-common words each day from a 100-word bank, with definition, example, memory hook and usage note, then a quiz that adds them to your flashcards. With a key, "5 more words" adds a fresh AI-chosen set each day.
  - No listening section.
- **Grammar lessons** (47 in total). Each has an explanation, a conjugation or pattern table, example sentences with audio, vocabulary, and exercises (multiple choice and fill-in-the-blank) that give instant feedback.
- **Flashcards with spaced repetition** (a simplified SM-2 scheduler). Finishing a lesson adds its vocabulary to the deck automatically. A *Today's words* deck lets you drill everything you added that day.
- **Click any word.** A popup shows:
  - the definition
  - conjugations and other forms
  - example sentences
  - a memory trick (mnemonic)
  - pronunciation, plus a one-click "add to flashcards"

  Double-click any other word on the page (in tutor replies, for example) to look it up too.
- **Daily reading.** A new passage each day with comprehension questions, a translation toggle and read-aloud.
- **Daily listening.** A passage you hear without seeing it, with adjustable speed, comprehension questions, dictation with word-level feedback, and a transcript you can reveal.
- **AI tutor.** A chat panel that is always available and can see the page you're on. Use it for grammar questions, sentence corrections and explanations.
- **Progress tracking.** Streak, an activity heatmap, lesson completion, reading and listening averages, and how mature your flashcards are.
- **Backup and restore.** Progress is saved in your browser. Export it to a JSON file and import it on another device.

## How the pieces work

| Feature | Without an API key | With an Anthropic API key |
|---|---|---|
| Lessons, exercises, flashcards, progress | ✅ | ✅ |
| Word popup | Built-in dictionary for core words, plus Wiktionary definitions for any other word | Full conjugation tables, examples and a mnemonic for **any** word (cached after the first lookup) |
| Daily reading and listening | Built-in passages that rotate by date | Also a "✨ Fresh AI passage" button that writes a new passage at your level every day |
| AI tutor | — | ✅ |
| Pronunciation | Your device's built-in voices (Web Speech API) | same |

**Pronunciation tip:** for the best audio, install high-quality voices in your operating system. On macOS, go to System Settings → Accessibility → Spoken Content → System Voice → Manage Voices. Tagalog voices are rare, so when none is installed a Spanish voice reads Tagalog text (Tagalog spelling is close to phonetic). Every word popup also has an "↗ Audio" link to Google Translate.

### The AI key

AI features call Claude directly from your browser using **your own** API key. Create one at [console.anthropic.com](https://console.anthropic.com/settings/keys) and paste it into **Settings**.

- The key is stored only in your browser's local storage. It is sent only to `api.anthropic.com` and is left out of progress exports.
- Because the site is public but your key is not, every visitor needs their own key, and nobody can use yours.
- Set a monthly spend limit on the key in the Anthropic console.
- You can choose the model in Settings: Claude Opus 5.5 (default, best quality), Sonnet 5.5 (faster, cheaper) or Haiku 5.5 (cheapest).

## Run it locally

Any static file server works:

```bash
cd lingua
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight from disk won't work, because browsers block ES modules on `file://` pages.

## Host it on GitHub Pages

1. Create a new repository on GitHub, for example `lingua`.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/lingua.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, choose **Branch: `main`** and **folder: `/ (root)`**, then click **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/lingua/`.

The `.nojekyll` file tells GitHub Pages to serve the files exactly as they are.

## Project layout

```
index.html          page shell (nav, word popup, tutor panel)
css/styles.css      all styles; light/dark themes, mobile layout
js/app.js           router and views (Today, Grammar, Flashcards, Reading, Listening, Progress, Settings)
js/store.js         saved progress, streaks, spaced-repetition scheduling
js/wordpopup.js     click-a-word popup (built-in dictionary → Wiktionary → Claude)
js/tutor.js         AI tutor chat panel
js/ai.js            Claude API calls (tutor, word lookups, daily passages)
js/speech.js        text-to-speech
js/ui.js            helpers (clickable-word tokenizer, markdown, answer checking)
js/courses.js       loads the three courses
js/data/{es,fr,tl,en}.js   course content: dictionary, lessons, readings, listening
js/data/en-library.js   106 public-domain literature excerpts (Project Gutenberg)
```

## Adding content

Each course file in `js/data/` has a `dictionary` and, per level, `grammar`, `reading` and `listening` arrays. Copy an existing item and change it:

- In lesson text, wrap target-language words in `{{…}}` to make them clickable.
- Multiple-choice `answer` is the index of the correct option.
- Fill-in `answer` is a list of accepted strings.
- `dictation` lists the indexes of the sentences to use for dictation.

The daily passage rotates through whatever is in the array, so adding more passages means more variety.
