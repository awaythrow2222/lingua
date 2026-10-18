// French course content. {{…}} marks French text inside English explanations (made clickable).
export default {
  code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷',
  elisions: ["l'", "d'", "j'", "qu'", "n'", "s'", "c'", "m'", "t'", "jusqu'", "lorsqu'", "puisqu'"],

  dictionary: {
    'être': {
      pos: 'verb (irregular)', def: 'to be',
      forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'été', 'étais', 'était', 'étions', 'étiez', 'étaient', 'serai', 'sera', 'serais', 'serait', 'sois', 'soit', 'soyons', 'soyez', 'soient', 'fus', 'fut'],
      conj: [
        { title: 'Présent', rows: [['je', 'suis'], ['tu', 'es'], ['il/elle/on', 'est'], ['nous', 'sommes'], ['vous', 'êtes'], ['ils/elles', 'sont']] },
        { title: 'Passé composé', rows: [['je', 'ai été'], ['tu', 'as été'], ['il/elle', 'a été'], ['nous', 'avons été'], ['vous', 'avez été'], ['ils/elles', 'ont été']] },
        { title: 'Imparfait', rows: [['je', 'étais'], ['tu', 'étais'], ['il/elle', 'était'], ['nous', 'étions'], ['vous', 'étiez'], ['ils/elles', 'étaient']] },
      ],
      examples: [['Je suis étudiant.', 'I am a student.'], ['Nous sommes à Paris.', 'We are in Paris.'], ['Elle était fatiguée hier.', 'She was tired yesterday.']],
      mnemonic: 'Picture yourself saying "Je SUIS" in a SUIT — "I am" dressed up. "Est" sounds like "eh" — "il est" = he is, eh?',
      notes: 'Also the auxiliary for movement/state-change verbs in the passé composé (je suis allé).',
    },
    'avoir': {
      pos: 'verb (irregular)', def: 'to have',
      forms: ['ai', 'as', 'a', 'avons', 'avez', 'ont', 'eu', 'avais', 'avait', 'avions', 'aviez', 'avaient', 'aurai', 'aura', 'aurais', 'aurait', 'aie', 'ait', 'ayons', 'ayez', 'aient'],
      conj: [
        { title: 'Présent', rows: [["j'", 'ai'], ['tu', 'as'], ['il/elle/on', 'a'], ['nous', 'avons'], ['vous', 'avez'], ['ils/elles', 'ont']] },
        { title: 'Passé composé', rows: [["j'", 'ai eu'], ['tu', 'as eu'], ['il/elle', 'a eu'], ['nous', 'avons eu'], ['vous', 'avez eu'], ['ils/elles', 'ont eu']] },
        { title: 'Imparfait', rows: [["j'", 'avais'], ['tu', 'avais'], ['il/elle', 'avait'], ['nous', 'avions'], ['vous', 'aviez'], ['ils/elles', 'avaient']] },
      ],
      examples: [["J'ai un chat.", 'I have a cat.'], ["Tu as faim ?", 'Are you hungry? (lit. do you have hunger?)'], ["Ils ont vingt ans.", 'They are twenty (lit. have twenty years).']],
      mnemonic: '"Ils ONT" — they OWN. Avoir sounds like "a VOIR" (to see) — you can only see what you have.',
      notes: 'Used for age, hunger, thirst, fear (avoir faim/soif/peur), and as the main passé composé auxiliary.',
    },
    'aller': {
      pos: 'verb (irregular)', def: 'to go',
      forms: ['vais', 'vas', 'va', 'allons', 'allez', 'vont', 'allé', 'allée', 'allés', 'allées', 'irai', 'ira', 'irais', 'irait', 'aille', 'allait'],
      conj: [
        { title: 'Présent', rows: [['je', 'vais'], ['tu', 'vas'], ['il/elle/on', 'va'], ['nous', 'allons'], ['vous', 'allez'], ['ils/elles', 'vont']] },
        { title: 'Passé composé (with être)', rows: [['je', 'suis allé(e)'], ['tu', 'es allé(e)'], ['il/elle', 'est allé(e)'], ['nous', 'sommes allé(e)s'], ['vous', 'êtes allé(e)(s)'], ['ils/elles', 'sont allé(e)s']] },
        { title: 'Futur', rows: [["j'", 'irai'], ['tu', 'iras'], ['il/elle', 'ira'], ['nous', 'irons'], ['vous', 'irez'], ['ils/elles', 'iront']] },
      ],
      examples: [['Je vais au marché.', "I'm going to the market."], ['Comment ça va ?', "How's it going?"], ['Nous allons manger.', 'We are going to eat. (near future)']],
      mnemonic: '"VA" — like "VAmoose!" Go! "Ils VONT" — they go in a VAN.',
      notes: 'aller + infinitive = near future (futur proche): Je vais partir.',
    },
    'faire': {
      pos: 'verb (irregular)', def: 'to do, to make',
      forms: ['fais', 'fait', 'faisons', 'faites', 'font', 'faisait', 'ferai', 'fera', 'ferais', 'fasse', 'faits'],
      conj: [
        { title: 'Présent', rows: [['je', 'fais'], ['tu', 'fais'], ['il/elle/on', 'fait'], ['nous', 'faisons'], ['vous', 'faites'], ['ils/elles', 'font']] },
        { title: 'Passé composé', rows: [["j'", 'ai fait'], ['tu', 'as fait'], ['il/elle', 'a fait'], ['nous', 'avons fait'], ['vous', 'avez fait'], ['ils/elles', 'ont fait']] },
      ],
      examples: [['Il fait beau.', 'The weather is nice.'], ['Je fais mes devoirs.', "I'm doing my homework."], ['Qu\'est-ce que tu fais ?', 'What are you doing?']],
      mnemonic: 'FAIRe — a FAIR is where things get MADE and DONE.',
      notes: 'Used for weather (il fait froid) and many activities (faire du sport, faire la cuisine).',
    },
    'parler': {
      pos: 'verb (-er, regular)', def: 'to speak, to talk',
      forms: ['parle', 'parles', 'parlons', 'parlez', 'parlent', 'parlé', 'parlais', 'parlait'],
      conj: [
        { title: 'Présent', rows: [['je', 'parle'], ['tu', 'parles'], ['il/elle/on', 'parle'], ['nous', 'parlons'], ['vous', 'parlez'], ['ils/elles', 'parlent']] },
        { title: 'Passé composé', rows: [["j'", 'ai parlé'], ['tu', 'as parlé'], ['il/elle', 'a parlé'], ['nous', 'avons parlé'], ['vous', 'avez parlé'], ['ils/elles', 'ont parlé']] },
      ],
      examples: [['Je parle français.', 'I speak French.'], ['Vous parlez trop vite.', 'You speak too fast.']],
      mnemonic: 'A PARLiament is where people PARLEZ — they talk.',
      notes: 'Model regular -er verb: the -e, -es, -e, -ent endings are all silent.',
    },
    'manger': {
      pos: 'verb (-er, spelling change)', def: 'to eat',
      forms: ['mange', 'manges', 'mangeons', 'mangez', 'mangent', 'mangé', 'mangeait'],
      conj: [{ title: 'Présent', rows: [['je', 'mange'], ['tu', 'manges'], ['il/elle', 'mange'], ['nous', 'mangeons'], ['vous', 'mangez'], ['ils/elles', 'mangent']] }],
      examples: [['Nous mangeons à midi.', 'We eat at noon.'], ['Tu manges de la salade ?', 'Are you eating salad?']],
      mnemonic: 'A MANGER is where animals eat. (Same root!)',
      notes: 'Keeps the "e" in nous mangeons so the g stays soft.',
    },
    'aimer': {
      pos: 'verb (-er, regular)', def: 'to like, to love',
      forms: ['aime', 'aimes', 'aimons', 'aimez', 'aiment', 'aimé'],
      conj: [{ title: 'Présent', rows: [["j'", 'aime'], ['tu', 'aimes'], ['il/elle', 'aime'], ['nous', 'aimons'], ['vous', 'aimez'], ['ils/elles', 'aiment']] }],
      examples: [["J'aime le café.", 'I like coffee.'], ['Je t\'aime.', 'I love you.']],
      mnemonic: 'AIMer — you AIM your heart at what you love.',
      notes: 'With people, aimer = love; aimer bien = like.',
    },
    'pouvoir': {
      pos: 'verb (irregular)', def: 'to be able to, can',
      forms: ['peux', 'peut', 'pouvons', 'pouvez', 'peuvent', 'pu', 'pourrai', 'pourrais', 'pourrait', 'puisse', 'pouvait'],
      conj: [
        { title: 'Présent', rows: [['je', 'peux'], ['tu', 'peux'], ['il/elle', 'peut'], ['nous', 'pouvons'], ['vous', 'pouvez'], ['ils/elles', 'peuvent']] },
        { title: 'Conditionnel', rows: [['je', 'pourrais'], ['tu', 'pourrais'], ['il/elle', 'pourrait'], ['nous', 'pourrions'], ['vous', 'pourriez'], ['ils/elles', 'pourraient']] },
      ],
      examples: [['Je peux t\'aider ?', 'Can I help you?'], ['Pourriez-vous répéter ?', 'Could you repeat?']],
      mnemonic: 'POUVOIR = POWER. If you have the power, you can.',
      notes: 'Pourriez-vous… is the polite way to ask for something.',
    },
    'vouloir': {
      pos: 'verb (irregular)', def: 'to want',
      forms: ['veux', 'veut', 'voulons', 'voulez', 'veulent', 'voulu', 'voudrais', 'voudrait', 'veuille', 'voulait'],
      conj: [
        { title: 'Présent', rows: [['je', 'veux'], ['tu', 'veux'], ['il/elle', 'veut'], ['nous', 'voulons'], ['vous', 'voulez'], ['ils/elles', 'veulent']] },
        { title: 'Conditionnel', rows: [['je', 'voudrais'], ['tu', 'voudrais'], ['il/elle', 'voudrait'], ['nous', 'voudrions'], ['vous', 'voudriez'], ['ils/elles', 'voudraient']] },
      ],
      examples: [['Je voudrais un café, s\'il vous plaît.', "I'd like a coffee, please."], ['Tu veux venir ?', 'Do you want to come?']],
      mnemonic: '"Je VEUX" sounds like "je VOEU" — a vow, a wish.',
      notes: 'Je voudrais (I would like) is far more polite than je veux.',
    },
    'prendre': {
      pos: 'verb (irregular)', def: 'to take; to have (food/drink)',
      forms: ['prends', 'prend', 'prenons', 'prenez', 'prennent', 'pris', 'prenait', 'prendrai'],
      conj: [{ title: 'Présent', rows: [['je', 'prends'], ['tu', 'prends'], ['il/elle', 'prend'], ['nous', 'prenons'], ['vous', 'prenez'], ['ils/elles', 'prennent']] }],
      examples: [['Je prends le bus.', 'I take the bus.'], ['Qu\'est-ce que vous prenez ?', 'What will you have?']],
      mnemonic: 'A PRENDre is like a PREhensile tail — it grabs and takes.',
      notes: 'Same pattern: apprendre (to learn), comprendre (to understand).',
    },
    'venir': {
      pos: 'verb (irregular)', def: 'to come',
      forms: ['viens', 'vient', 'venons', 'venez', 'viennent', 'venu', 'venue', 'venus', 'viendrai', 'venait'],
      conj: [{ title: 'Présent', rows: [['je', 'viens'], ['tu', 'viens'], ['il/elle', 'vient'], ['nous', 'venons'], ['vous', 'venez'], ['ils/elles', 'viennent']] }],
      examples: [['Je viens de Lyon.', "I'm from Lyon."], ['Elle vient de partir.', 'She just left. (venir de + inf.)']],
      mnemonic: 'VENIr — "VENi, vidi, vici": I CAME, I saw, I conquered.',
      notes: 'venir de + infinitive = to have just done something.',
    },
    'bonjour': { pos: 'interjection', def: 'hello, good morning/day', examples: [['Bonjour, madame !', 'Hello, ma\'am!']], mnemonic: 'BON (good) + JOUR (day) = good day.' },
    'merci': { pos: 'interjection', def: 'thank you', examples: [['Merci beaucoup !', 'Thank you very much!']], mnemonic: 'Show MERCY → say MERCI.' },
    'maison': { pos: 'noun (f.)', def: 'house, home', forms: ['maisons'], examples: [['Je rentre à la maison.', "I'm going home."]], mnemonic: 'A MAISONette is a little house.', notes: 'Feminine: la maison.' },
    'pain': { pos: 'noun (m.)', def: 'bread', forms: ['pains'], examples: [['Un pain au chocolat.', 'A chocolate croissant-style pastry.']], mnemonic: 'No PAIN, no gain — but in France, no PAIN, no breakfast.' },
    'boulangerie': { pos: 'noun (f.)', def: 'bakery', forms: ['boulangeries'], examples: [['La boulangerie ouvre à sept heures.', 'The bakery opens at seven.']], mnemonic: 'BOULE (ball) of dough → boulangerie.' },
    'ami': { pos: 'noun', def: 'friend', forms: ['amie', 'amis', 'amies'], examples: [['C\'est mon amie Claire.', 'This is my friend Claire.']], mnemonic: 'AMIcable people make good AMIs.', notes: 'ami (m.), amie (f.) — pronounced the same.' },
    'travail': { pos: 'noun (m.)', def: 'work, job', forms: ['travaux'], examples: [['Je vais au travail.', "I'm going to work."]], mnemonic: 'Work is TRAVAIL — a TRAVAIL (travail = old English "toil").' },
    'aujourd’hui': { pos: 'adverb', def: 'today', forms: ["aujourd'hui"], examples: [["Aujourd'hui, il pleut.", "Today it's raining."]], mnemonic: '"Au jour d\'hui" = "on the day of today" — French doubled down.' },
    'beaucoup': { pos: 'adverb', def: 'a lot, much, many', examples: [['J\'aime beaucoup ce livre.', 'I like this book a lot.']], mnemonic: 'BEAU COUP — a beautiful blow, a lot of impact.', notes: 'beaucoup de + noun (no article): beaucoup de temps.' },
    'que': { pos: 'conjunction / pronoun', def: 'that; what; than', forms: ["qu'"], examples: [['Je pense que c\'est vrai.', 'I think (that) it\'s true.']], mnemonic: 'QUE is the glue between clauses — never drop it like English "that".' },
  },

  levels: {
    beginner: {
      grammar: [
        {
          id: 'fr-b-1', title: 'Subject pronouns & être (to be)',
          summary: 'Who is doing it, and how to say "I am / you are".',
          body: `<p>French verbs change form for each subject. Start with the pronouns, then learn {{être}}, the most important irregular verb.</p>
<h3>Subject pronouns</h3>
<ul><li>{{je}} — I ({{j'}} before a vowel)</li><li>{{tu}} — you (informal, one person)</li><li>{{il}} / {{elle}} / {{on}} — he / she / one, "we" (casual)</li><li>{{nous}} — we</li><li>{{vous}} — you (formal or plural)</li><li>{{ils}} / {{elles}} — they (masc. or mixed / all feminine)</li></ul>
<p><b>Tip:</b> use {{vous}} with strangers, shopkeepers and older people. Use {{tu}} with friends, family, kids.</p>`,
          table: { title: 'être — présent', headers: ['Pronoun', 'Form', 'Sounds like'], rows: [['je', 'suis', 'swee'], ['tu', 'es', 'eh'], ['il / elle / on', 'est', 'eh'], ['nous', 'sommes', 'som'], ['vous', 'êtes', 'et'], ['ils / elles', 'sont', 'sohn']] },
          examples: [['Je suis américain.', 'I am American.'], ['Tu es gentil.', 'You are kind.'], ['Elle est professeure.', 'She is a teacher. (no "a" before professions!)'], ['Nous sommes amis.', 'We are friends.'], ['Vous êtes en retard.', 'You are late.']],
          vocab: [['je suis', 'I am'], ['tu es', 'you are'], ['nous sommes', 'we are'], ['vous êtes', 'you (formal/pl.) are'], ['ils sont', 'they are'], ['gentil', 'kind']],
          exercises: [
            { type: 'mc', q: 'Nous ___ à la maison.', options: ['sommes', 'sont', 'êtes', 'suis'], answer: 0, explain: 'nous → sommes.' },
            { type: 'mc', q: 'Which pronoun do you use with a shopkeeper you just met?', options: ['tu', 'vous', 'on', 'il'], answer: 1, explain: 'vous is the polite form.' },
            { type: 'fill', q: 'Je ___ étudiant. (I am a student)', answer: ['suis'], explain: 'je suis.' },
            { type: 'fill', q: 'Ils ___ fatigués. (They are tired)', answer: ['sont'], explain: 'ils/elles → sont.' },
            { type: 'mc', q: 'How do you say "She is a doctor"?', options: ['Elle est un médecin.', 'Elle est médecin.', 'Elle es médecin.', 'Elle sont médecin.'], answer: 1, explain: 'No article before a profession after être.' },
          ],
        },
        {
          id: 'fr-b-2', title: 'Gender & articles (le, la, un, une)',
          summary: 'Every French noun is masculine or feminine.',
          body: `<p>All nouns have a gender. The article tells you which, so <b>always learn nouns with their article</b>: {{le livre}}, {{la table}}.</p>
<h3>Definite (the)</h3><ul><li>{{le}} — masculine: {{le chat}}</li><li>{{la}} — feminine: {{la maison}}</li><li>{{l'}} — before a vowel or silent h: {{l'ami}}, {{l'heure}}</li><li>{{les}} — plural, both genders: {{les chats}}</li></ul>
<h3>Indefinite (a / some)</h3><ul><li>{{un}} — masculine: {{un livre}}</li><li>{{une}} — feminine: {{une pomme}}</li><li>{{des}} — plural: {{des pommes}}</li></ul>
<h3>Clues to gender</h3><p>Endings in <b>-tion, -té, -ette, -ence</b> are usually feminine ({{la nation}}, {{la liberté}}). Endings in <b>-ment, -age, -eau, -isme</b> are usually masculine ({{le fromage}}, {{le gâteau}}).</p>`,
          examples: [['Le chat est noir.', 'The cat is black.'], ['La boulangerie est fermée.', 'The bakery is closed.'], ["J'ai une sœur et un frère.", 'I have a sister and a brother.'], ['Les enfants sont à l\'école.', 'The children are at school.']],
          vocab: [['le livre', 'the book'], ['la table', 'the table'], ['la pomme', 'the apple'], ['le fromage', 'the cheese'], ["l'école (f.)", 'the school'], ['le gâteau', 'the cake']],
          exercises: [
            { type: 'mc', q: '___ fromage (cheese — ends in -age)', options: ['le', 'la', 'les', "l'"], answer: 0, explain: '-age nouns are usually masculine.' },
            { type: 'mc', q: '___ liberté (freedom — ends in -té)', options: ['le', 'la', 'un', 'des'], answer: 1, explain: '-té nouns are usually feminine.' },
            { type: 'fill', q: '___ ami (the friend — starts with a vowel)', answer: ["l'", 'l’'], explain: "le/la become l' before a vowel." },
            { type: 'mc', q: '"some apples" =', options: ['les pommes', 'des pommes', 'une pommes', 'la pommes'], answer: 1, explain: 'des = plural indefinite (some).' },
            { type: 'fill', q: "J'ai ___ chat. (a cat, masculine)", answer: ['un'], explain: 'un for masculine.' },
          ],
        },
        {
          id: 'fr-b-3', title: 'Present tense of -er verbs',
          summary: 'The pattern that covers ~90% of French verbs.',
          body: `<p>Drop <b>-er</b> from the infinitive and add the endings. Take {{parler}} → stem <b>parl-</b>.</p>
<p>The great news: <b>-e, -es, -e, -ent are all silent</b>. So {{je parle}}, {{tu parles}}, {{il parle}}, {{ils parlent}} all sound identical: "parl".</p>
<p>Before a vowel, {{je}} becomes {{j'}}: {{j'aime}}, {{j'habite}}.</p>`,
          table: { title: 'parler — présent', headers: ['Pronoun', 'Ending', 'Form'], rows: [['je', '-e', 'parle'], ['tu', '-es', 'parles'], ['il/elle/on', '-e', 'parle'], ['nous', '-ons', 'parlons'], ['vous', '-ez', 'parlez'], ['ils/elles', '-ent', 'parlent']] },
          examples: [["J'habite à Montréal.", 'I live in Montreal.'], ['Tu travailles demain ?', 'Are you working tomorrow?'], ['Nous regardons un film.', 'We are watching a film.'], ['Elles aiment danser.', 'They love to dance.']],
          vocab: [['habiter', 'to live (somewhere)'], ['travailler', 'to work'], ['regarder', 'to watch'], ['écouter', 'to listen'], ['danser', 'to dance'], ['chercher', 'to look for']],
          exercises: [
            { type: 'fill', q: 'Nous ___ (regarder) la télé.', answer: ['regardons'], explain: 'nous → -ons.' },
            { type: 'fill', q: 'Vous ___ (parler) anglais ?', answer: ['parlez'], explain: 'vous → -ez.' },
            { type: 'mc', q: 'Which forms sound the same?', options: ['parle / parles / parlent', 'parlons / parlez', 'parle / parlez', 'none'], answer: 0, explain: '-e, -es, -ent are silent.' },
            { type: 'mc', q: '"I listen to music" =', options: ['Je écoute la musique.', "J'écoute de la musique.", 'Je écoutes musique.', "J'écoutons la musique."], answer: 1, explain: "je → j' before a vowel; -e ending." },
            { type: 'fill', q: 'Ils ___ (chercher) leurs clés.', answer: ['cherchent'], explain: 'ils → -ent (silent).' },
          ],
        },
        {
          id: 'fr-b-4', title: 'Avoir & everyday expressions',
          summary: 'In French you "have" hunger, age and fear.',
          body: `<p>{{avoir}} (to have) is irregular and appears everywhere. Many things English expresses with "to be" use {{avoir}} in French.</p>
<ul><li>{{avoir faim}} — to be hungry</li><li>{{avoir soif}} — to be thirsty</li><li>{{avoir froid / chaud}} — to be cold / hot</li><li>{{avoir peur}} — to be afraid</li><li>{{avoir raison / tort}} — to be right / wrong</li><li>{{avoir … ans}} — to be … years old</li><li>{{avoir besoin de}} — to need</li></ul>
<p><b>Common mistake:</b> "Je suis 30" ✗ → {{J'ai 30 ans}} ✓</p>`,
          table: { title: 'avoir — présent', headers: ['Pronoun', 'Form'], rows: [["j'", 'ai'], ['tu', 'as'], ['il/elle/on', 'a'], ['nous', 'avons'], ['vous', 'avez'], ['ils/elles', 'ont']] },
          examples: [["J'ai faim, on mange ?", "I'm hungry, shall we eat?"], ['Tu as raison.', "You're right."], ['Elle a vingt-cinq ans.', 'She is twenty-five.'], ["Nous avons besoin d'aide.", 'We need help.']],
          vocab: [['avoir faim', 'to be hungry'], ['avoir soif', 'to be thirsty'], ['avoir peur', 'to be afraid'], ['avoir raison', 'to be right'], ['avoir besoin de', 'to need'], ['avoir ... ans', 'to be ... years old']],
          exercises: [
            { type: 'mc', q: '"I am 20 years old" =', options: ["Je suis 20 ans.", "J'ai 20 ans.", 'Je suis vingt.', "J'ai vingt années."], answer: 1, explain: 'Age uses avoir + ans.' },
            { type: 'fill', q: 'Ils ___ soif. (They are thirsty)', answer: ['ont'], explain: 'ils → ont.' },
            { type: 'fill', q: 'Vous ___ froid ? (Are you cold?)', answer: ['avez'], explain: 'vous → avez.' },
            { type: 'mc', q: '"You\'re wrong" (to a friend) =', options: ['Tu es tort.', 'Tu as tort.', 'Tu as raison.', 'Tu es faux.'], answer: 1, explain: 'avoir tort = to be wrong.' },
          ],
        },
        {
          id: 'fr-b-5', title: 'Negation: ne … pas',
          summary: 'Wrap the verb to say "not".',
          body: `<p>Put {{ne}} before the conjugated verb and {{pas}} after it. {{ne}} becomes {{n'}} before a vowel.</p>
<ul><li>{{Je parle}} → {{Je ne parle pas}}</li><li>{{Il aime}} → {{Il n'aime pas}}</li></ul>
<p>After a negative, {{un / une / des}} become {{de}} (or {{d'}}): {{J'ai un chien}} → {{Je n'ai pas de chien}}.</p>
<p>Other negatives work the same way: {{ne … jamais}} (never), {{ne … rien}} (nothing), {{ne … plus}} (no longer).</p>
<p>In casual speech, people often drop the {{ne}}: {{Je sais pas}}. Recognize it — but write it with {{ne}}.</p>`,
          examples: [['Je ne suis pas fatigué.', "I'm not tired."], ["Elle n'a pas de voiture.", "She doesn't have a car."], ['Nous ne mangeons jamais de viande.', 'We never eat meat.'], ["Il n'y a plus de pain.", "There's no more bread."]],
          vocab: [['ne … pas', 'not'], ['ne … jamais', 'never'], ['ne … rien', 'nothing'], ['ne … plus', 'no longer / no more'], ['la voiture', 'the car'], ['le chien', 'the dog']],
          exercises: [
            { type: 'mc', q: 'Make it negative: "Tu aimes le café."', options: ['Tu ne aimes pas le café.', "Tu n'aimes pas le café.", 'Tu aimes ne pas le café.', 'Tu pas aimes le café.'], answer: 1, explain: "ne → n' before a vowel." },
            { type: 'mc', q: '"I don\'t have a brother" =', options: ["Je n'ai pas un frère.", "Je n'ai pas de frère.", "Je n'ai pas des frère.", "Je ai pas de frère."], answer: 1, explain: 'un becomes de after a negative.' },
            { type: 'fill', q: 'Il ne mange ___ de viande. (He never eats meat)', answer: ['jamais'], explain: 'ne … jamais = never.' },
            { type: 'fill', q: 'Je ___ suis pas prêt.', answer: ['ne'], explain: 'ne before a consonant.' },
          ],
        },
        {
          id: 'fr-b-6', title: 'Asking questions',
          summary: 'Three ways, from casual to formal.',
          body: `<ol><li><b>Intonation</b> (casual): raise your voice. {{Tu viens ?}}</li><li><b>Est-ce que</b> (neutral, always safe): {{Est-ce que tu viens ?}}</li><li><b>Inversion</b> (formal/written): {{Viens-tu ?}} — add <b>-t-</b> between vowels: {{Parle-t-il anglais ?}}</li></ol>
<h3>Question words</h3><ul><li>{{qui}} — who · {{quoi / que}} — what · {{où}} — where</li><li>{{quand}} — when · {{pourquoi}} — why · {{comment}} — how</li><li>{{combien}} — how much/many · {{quel / quelle}} — which</li></ul>
<p>{{Qu'est-ce que}} = "what" + est-ce que: {{Qu'est-ce que tu fais ?}} (What are you doing?)</p>`,
          examples: [['Où est la gare ?', 'Where is the train station?'], ["Qu'est-ce que vous voulez ?", 'What do you want?'], ['Pourquoi tu ris ?', 'Why are you laughing?'], ['Comment vous appelez-vous ?', "What's your name? (formal)"], ['Combien ça coûte ?', 'How much does it cost?']],
          vocab: [['où', 'where'], ['quand', 'when'], ['pourquoi', 'why'], ['comment', 'how'], ['combien', 'how much'], ["qu'est-ce que", 'what']],
          exercises: [
            { type: 'mc', q: 'Which is the most neutral, always-correct way?', options: ['Tu parles anglais ?', 'Est-ce que tu parles anglais ?', 'Parles-tu anglais ?', 'Anglais tu parles ?'], answer: 1, explain: 'est-ce que works in any register.' },
            { type: 'fill', q: '___ est la gare ? (Where)', answer: ['où', 'Où'], explain: 'où = where (with the accent!).', accentHint: true },
            { type: 'mc', q: 'Inversion of "il parle":', options: ['Parle il ?', 'Parle-t-il ?', 'Il-parle ?', 'Parle-il ?'], answer: 1, explain: 'Add -t- between two vowels.' },
            { type: 'fill', q: '___ ça coûte ? (How much)', answer: ['combien', 'Combien'], explain: 'combien = how much.' },
          ],
        },
      ],
      reading: [
        {
          id: 'fr-br-1', title: 'Au café',
          sentences: ['Marie est au café avec son ami Paul.', 'Elle commande un café et un croissant.', 'Paul a faim, alors il prend une omelette.', 'Le serveur est très gentil.', 'Ils parlent de leur week-end.', 'Marie va au cinéma samedi.', 'Paul ne va pas au cinéma, il travaille.'],
          translation: 'Marie is at the café with her friend Paul. She orders a coffee and a croissant. Paul is hungry, so he has an omelette. The waiter is very kind. They talk about their weekend. Marie is going to the cinema on Saturday. Paul is not going to the cinema, he is working.',
          questions: [
            { q: 'What does Marie order?', options: ['An omelette', 'A coffee and a croissant', 'Only a coffee', 'A sandwich'], answer: 1, explain: '"Elle commande un café et un croissant."' },
            { q: 'Why does Paul take an omelette?', options: ['He is thirsty', 'He is tired', 'He is hungry', 'He is in a hurry'], answer: 2, explain: '"Paul a faim" — he is hungry.' },
            { q: 'What is Paul doing on Saturday?', options: ['Going to the cinema', 'Working', 'Sleeping', 'Going to the café'], answer: 1, explain: '"il travaille."' },
            { q: 'How is the waiter described?', options: ['Rude', 'Slow', 'Very kind', 'Young'], answer: 2, explain: '"très gentil."' },
          ],
          vocab: [['commander', 'to order'], ['le serveur', 'the waiter'], ['alors', 'so, then'], ['samedi', 'Saturday']],
        },
        {
          id: 'fr-br-2', title: 'Ma famille',
          sentences: ["Je m'appelle Lucas et j'ai douze ans.", "J'habite à Lyon avec ma famille.", "Mon père est médecin et ma mère est professeure.", "J'ai une sœur, Emma.", 'Elle a seize ans et elle aime la musique.', "Nous avons aussi un chien qui s'appelle Biscuit.", 'Le dimanche, nous mangeons chez ma grand-mère.'],
          translation: "My name is Lucas and I am twelve. I live in Lyon with my family. My father is a doctor and my mother is a teacher. I have a sister, Emma. She is sixteen and she loves music. We also have a dog called Biscuit. On Sundays, we eat at my grandmother's house.",
          questions: [
            { q: 'Where does Lucas live?', options: ['Paris', 'Lyon', 'Marseille', 'Nice'], answer: 1, explain: '"J\'habite à Lyon."' },
            { q: 'What is his mother\'s job?', options: ['Doctor', 'Teacher', 'Baker', 'Musician'], answer: 1, explain: '"ma mère est professeure."' },
            { q: 'How old is Emma?', options: ['12', '14', '16', '6'], answer: 2, explain: '"Elle a seize ans."' },
            { q: 'What happens on Sundays?', options: ['They go to the cinema', 'They eat at grandmother\'s', 'They walk the dog', 'They go to Lyon'], answer: 1, explain: '"nous mangeons chez ma grand-mère."' },
          ],
          vocab: [["s'appeler", 'to be called'], ['la sœur', 'sister'], ['chez', "at (someone's) place"], ['le dimanche', 'on Sundays']],
        },
        {
          id: 'fr-br-3', title: 'À la boulangerie',
          sentences: ['Il est sept heures du matin.', 'La boulangerie de Monsieur Martin est déjà ouverte.', 'Une cliente entre et dit : « Bonjour ! Une baguette, s\'il vous plaît. »', '« Voilà, madame. Ça fait un euro vingt. »', 'Elle voudrait aussi deux croissants, mais il n\'y a plus de croissants.', 'Alors elle prend deux pains au chocolat.', '« Merci, bonne journée ! »'],
          translation: "It is seven in the morning. Mr. Martin's bakery is already open. A customer comes in and says: \"Hello! A baguette, please.\" \"Here you go, ma'am. That's one euro twenty.\" She would also like two croissants, but there are no more croissants. So she takes two pains au chocolat. \"Thank you, have a good day!\"",
          questions: [
            { q: 'What time is it?', options: ['6 a.m.', '7 a.m.', '7 p.m.', '12 p.m.'], answer: 1, explain: '"sept heures du matin."' },
            { q: 'How much is the baguette?', options: ['€1.00', '€1.20', '€2.20', '€0.90'], answer: 1, explain: '"un euro vingt."' },
            { q: 'Why doesn\'t she buy croissants?', options: ['Too expensive', 'There are none left', 'She doesn\'t like them', 'The shop is closed'], answer: 1, explain: '"il n\'y a plus de croissants."' },
            { q: '"Bonne journée" means…', options: ['Good night', 'Have a good day', 'Good morning', 'See you soon'], answer: 1, explain: 'journée = the day (duration).' },
          ],
          vocab: [['déjà', 'already'], ['ouvert(e)', 'open'], ['il n\'y a plus de', 'there is no more'], ['bonne journée', 'have a good day']],
        },
        {
          id: 'fr-br-4', title: 'Le week-end de Sophie',
          sentences: ['Sophie adore le week-end.', 'Le samedi matin, elle fait du sport au parc.', "L'après-midi, elle regarde des films ou elle lit un livre.", "Le soir, elle dîne avec ses amis au restaurant.", "Elle ne travaille jamais le dimanche.", 'Le dimanche, elle téléphone à ses parents et elle prépare la semaine.'],
          translation: 'Sophie loves the weekend. On Saturday mornings she does sport in the park. In the afternoon she watches films or reads a book. In the evening she has dinner with her friends at a restaurant. She never works on Sundays. On Sundays she calls her parents and gets ready for the week.',
          questions: [
            { q: 'Where does Sophie do sport?', options: ['At the gym', 'In the park', 'At home', 'At the pool'], answer: 1, explain: '"au parc."' },
            { q: 'What does she do on Saturday evening?', options: ['Reads', 'Works', 'Has dinner with friends', 'Calls her parents'], answer: 2, explain: '"elle dîne avec ses amis."' },
            { q: '"Elle ne travaille jamais le dimanche" means…', options: ['She always works on Sunday', 'She never works on Sunday', 'She works a little on Sunday', 'She doesn\'t like Sunday'], answer: 1, explain: 'ne … jamais = never.' },
          ],
          vocab: [['adorer', 'to love'], ["l'après-midi", 'the afternoon'], ['le soir', 'the evening'], ['lire (elle lit)', 'to read']],
        },
      ],
      listening: [
        {
          id: 'fr-bl-1', title: 'Se présenter',
          sentences: ['Bonjour ! Je m\'appelle Camille.', "J'ai vingt-deux ans.", 'Je suis étudiante à Paris.', "J'aime le cinéma et la cuisine.", 'Et toi, comment tu t\'appelles ?'],
          translation: "Hello! My name is Camille. I'm twenty-two. I'm a student in Paris. I like cinema and cooking. And you, what's your name?",
          questions: [
            { q: 'How old is Camille?', options: ['20', '22', '12', '32'], answer: 1, explain: 'vingt-deux = 22.' },
            { q: 'Where does she study?', options: ['Lyon', 'Paris', 'Montreal', 'Brussels'], answer: 1, explain: '"à Paris."' },
            { q: 'What does she like?', options: ['Sport and music', 'Cinema and cooking', 'Books and travel', 'Dogs and cats'], answer: 1, explain: '"le cinéma et la cuisine."' },
          ],
          dictation: [1, 2],
          vocab: [['étudiante', 'student (f.)'], ['la cuisine', 'cooking / kitchen']],
        },
        {
          id: 'fr-bl-2', title: 'Au marché',
          sentences: ['Bonjour monsieur, je voudrais un kilo de tomates.', 'Voilà. Et avec ça ?', 'Des pommes, s\'il vous plaît. Six pommes.', 'Très bien. Ça fait cinq euros.', 'Merci, au revoir !'],
          translation: "Hello sir, I'd like a kilo of tomatoes. Here you go. Anything else? Some apples, please. Six apples. Very good. That's five euros. Thanks, goodbye!",
          questions: [
            { q: 'How many tomatoes?', options: ['Six', 'One kilo', 'Two kilos', 'Five'], answer: 1, explain: '"un kilo de tomates."' },
            { q: 'How many apples?', options: ['Two', 'Five', 'Six', 'Ten'], answer: 2, explain: '"Six pommes."' },
            { q: 'Total price?', options: ['€5', '€6', '€15', '€1'], answer: 0, explain: '"cinq euros."' },
          ],
          dictation: [0, 3],
          vocab: [['et avec ça ?', 'anything else?'], ['au revoir', 'goodbye']],
        },
        {
          id: 'fr-bl-3', title: 'Quel temps fait-il ?',
          sentences: ["Aujourd'hui, il fait froid à Paris.", 'Il pleut depuis ce matin.', 'Demain, il va faire beau.', 'Nous allons faire une promenade au parc.'],
          translation: "Today it's cold in Paris. It has been raining since this morning. Tomorrow the weather will be nice. We're going to take a walk in the park.",
          questions: [
            { q: 'What is the weather today?', options: ['Hot and sunny', 'Cold and rainy', 'Windy', 'Snowy'], answer: 1, explain: '"il fait froid… il pleut."' },
            { q: 'What will they do tomorrow?', options: ['Stay home', 'Go to the cinema', 'Take a walk in the park', 'Go to work'], answer: 2, explain: '"faire une promenade au parc."' },
          ],
          dictation: [0, 2],
          vocab: [['il pleut', "it's raining"], ['il fait beau', "the weather's nice"], ['une promenade', 'a walk']],
        },
      ],
    },

    intermediate: {
      grammar: [
        {
          id: 'fr-i-1', title: 'Passé composé with avoir',
          summary: 'The everyday past tense for completed actions.',
          body: `<p>Form: <b>present of {{avoir}} + past participle</b>. {{J'ai mangé}} = I ate / I have eaten.</p>
<h3>Past participles</h3><ul><li>-er → <b>-é</b>: {{parler}} → {{parlé}}</li><li>-ir → <b>-i</b>: {{finir}} → {{fini}}</li><li>-re → <b>-u</b>: {{vendre}} → {{vendu}}</li></ul>
<p>Common irregulars: {{avoir → eu}}, {{être → été}}, {{faire → fait}}, {{prendre → pris}}, {{voir → vu}}, {{boire → bu}}, {{lire → lu}}, {{écrire → écrit}}, {{dire → dit}}, {{mettre → mis}}, {{pouvoir → pu}}, {{vouloir → voulu}}.</p>
<p>Negation wraps the auxiliary: {{Je n'ai pas fini}}.</p>`,
          examples: [["Hier, j'ai vu un bon film.", 'Yesterday I saw a good film.'], ['Nous avons fini le projet.', 'We finished the project.'], ["Tu as pris le train ?", 'Did you take the train?'], ["Il n'a rien dit.", "He didn't say anything."]],
          vocab: [['hier', 'yesterday'], ['voir → vu', 'to see → seen'], ['finir → fini', 'to finish → finished'], ['prendre → pris', 'to take → taken'], ['dire → dit', 'to say → said'], ['écrire → écrit', 'to write → written']],
          exercises: [
            { type: 'fill', q: "J'ai ___ (faire) mes devoirs.", answer: ['fait'], explain: 'faire → fait.' },
            { type: 'fill', q: 'Nous avons ___ (boire) du vin.', answer: ['bu'], explain: 'boire → bu.' },
            { type: 'mc', q: '"She didn\'t eat" =', options: ["Elle n'a mangé pas.", "Elle n'a pas mangé.", 'Elle ne pas a mangé.', "Elle n'est pas mangé."], answer: 1, explain: 'ne … pas around the auxiliary.' },
            { type: 'fill', q: 'Ils ont ___ (lire) le livre.', answer: ['lu'], explain: 'lire → lu.' },
            { type: 'mc', q: 'Past participle of "prendre":', options: ['prendu', 'prit', 'pris', 'prené'], answer: 2, explain: 'prendre → pris.' },
          ],
        },
        {
          id: 'fr-i-2', title: 'Passé composé with être',
          summary: 'Movement & change-of-state verbs, plus agreement.',
          body: `<p>About 17 verbs (and all reflexive verbs) use {{être}}. Remember <b>DR & MRS VANDERTRAMP</b>: <b>D</b>evenir, <b>R</b>evenir, <b>M</b>onter, <b>R</b>ester, <b>S</b>ortir, <b>V</b>enir, <b>A</b>ller, <b>N</b>aître, <b>D</b>escendre, <b>E</b>ntrer, <b>R</b>entrer, <b>T</b>omber, <b>R</b>etourner, <b>A</b>rriver, <b>M</b>ourir, <b>P</b>artir.</p>
<p>With {{être}}, the participle <b>agrees with the subject</b>: add <b>-e</b> for feminine, <b>-s</b> for plural.</p>
<ul><li>{{Il est parti.}} / {{Elle est partie.}}</li><li>{{Ils sont arrivés.}} / {{Elles sont arrivées.}}</li></ul>
<p>Reflexive verbs: {{Je me suis levé(e)}} (I got up), {{Nous nous sommes amusés}} (we had fun).</p>`,
          examples: [['Elle est née en 1990.', 'She was born in 1990.'], ['Nous sommes allés à la plage.', 'We went to the beach.'], ['Les filles sont rentrées tard.', 'The girls came home late.'], ['Je me suis réveillée à six heures.', 'I (f.) woke up at six.']],
          vocab: [['naître → né', 'to be born'], ['mourir → mort', 'to die'], ['tomber', 'to fall'], ['rester', 'to stay'], ['se lever', 'to get up'], ["s'amuser", 'to have fun']],
          exercises: [
            { type: 'mc', q: 'Marie ___ allée au marché.', options: ['a', 'est', 'as', 'es'], answer: 1, explain: 'aller uses être.' },
            { type: 'fill', q: 'Elles sont ___ (partir) hier.', answer: ['parties'], explain: 'feminine plural → -es.' },
            { type: 'mc', q: 'Which verb uses avoir?', options: ['arriver', 'tomber', 'manger', 'naître'], answer: 2, explain: 'manger is not a DR MRS VANDERTRAMP verb.' },
            { type: 'fill', q: 'Nous nous ___ amusés. (We had fun)', answer: ['sommes'], explain: 'Reflexive → être.' },
            { type: 'mc', q: '"He fell" =', options: ['Il a tombé.', 'Il est tombé.', 'Il est tombée.', 'Il tombé.'], answer: 1, explain: 'tomber → être; masculine, no -e.' },
          ],
        },
        {
          id: 'fr-i-3', title: 'Imparfait vs passé composé',
          summary: 'Background vs. events.',
          body: `<p><b>Imparfait</b> = background, description, habits, ongoing states ("was doing", "used to"). Form: take the {{nous}} present stem, drop -ons, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. {{nous parlons}} → {{je parlais}}. Only {{être}} is irregular: {{j'étais}}.</p>
<p><b>Passé composé</b> = specific completed events, things that happened at a point in time.</p>
<p>Think of a film: imparfait is the <i>scenery</i>, passé composé is the <i>action</i>.</p>
<p>{{Il pleuvait quand je suis sorti.}} — It was raining (scene) when I went out (event).</p>
<p>Trigger words — imparfait: {{souvent}}, {{tous les jours}}, {{d'habitude}}, {{quand j'étais petit}}. Passé composé: {{soudain}}, {{hier}}, {{une fois}}, {{tout à coup}}.</p>`,
          examples: [['Quand j\'étais petit, je jouais au foot.', 'When I was little, I used to play football.'], ['Je lisais quand le téléphone a sonné.', 'I was reading when the phone rang.'], ['Il faisait beau et les enfants étaient contents.', 'The weather was nice and the children were happy.'], ['Soudain, elle a crié.', 'Suddenly, she screamed.']],
          vocab: [["d'habitude", 'usually'], ['souvent', 'often'], ['soudain', 'suddenly'], ['tout à coup', 'all of a sudden'], ['sonner', 'to ring'], ['crier', 'to shout']],
          exercises: [
            { type: 'mc', q: 'Quand j\'étais jeune, je ___ au tennis tous les samedis.', options: ['ai joué', 'jouais', 'joue', 'jouerai'], answer: 1, explain: 'Habit in the past → imparfait.' },
            { type: 'mc', q: 'Je dormais quand tu ___ .', options: ['appelais', 'as appelé', 'appelles', 'appellerais'], answer: 1, explain: 'Interrupting event → passé composé.' },
            { type: 'fill', q: 'Il ___ (être) fatigué ce soir-là.', answer: ['était'], explain: 'Description of a state → imparfait.' },
            { type: 'fill', q: 'Nous ___ (finir — imparfait) toujours tard.', answer: ['finissions'], explain: 'nous finissons → finiss- + ions.' },
          ],
        },
        {
          id: 'fr-i-4', title: 'Object pronouns: le, lui, y, en',
          summary: 'Replace nouns to sound natural.',
          body: `<p>Pronouns go <b>before the conjugated verb</b> (before the auxiliary in the passé composé).</p>
<ul><li><b>Direct</b> (le, la, l', les): {{Je vois Marie}} → {{Je la vois}}</li><li><b>Indirect</b> (lui, leur) — for people after {{à}}: {{Je parle à Paul}} → {{Je lui parle}}</li><li><b>y</b> replaces {{à}} + place/thing: {{Je vais à Paris}} → {{J'y vais}}</li><li><b>en</b> replaces {{de}} + noun or quantities: {{Je mange des pommes}} → {{J'en mange}}; {{J'en ai trois}}</li></ul>
<p>Order when combining: <b>me/te/se/nous/vous → le/la/les → lui/leur → y → en</b>. {{Je le lui donne}}. {{Il y en a}}.</p>
<p>In the passé composé, a direct object pronoun before {{avoir}} triggers agreement: {{Les lettres ? Je les ai écrites.}}</p>`,
          examples: [['Tu connais Léa ? Oui, je la connais.', 'Do you know Léa? Yes, I know her.'], ['Tu as parlé à tes parents ? Oui, je leur ai parlé.', 'Did you talk to your parents? Yes, I talked to them.'], ['Tu vas au Canada ? Oui, j\'y vais en juin.', 'Are you going to Canada? Yes, I\'m going there in June.'], ['Tu veux du café ? Non merci, j\'en ai déjà bu.', 'Want some coffee? No thanks, I already had some.']],
          vocab: [['connaître', 'to know (people/places)'], ['donner', 'to give'], ['il y en a', 'there are some'], ['déjà', 'already']],
          exercises: [
            { type: 'mc', q: 'Je parle à ma mère → Je ___ parle.', options: ['la', 'lui', 'leur', 'en'], answer: 1, explain: 'à + person (singular) → lui.' },
            { type: 'mc', q: 'Nous allons au cinéma → Nous ___ allons.', options: ['en', 'le', 'y', 'lui'], answer: 2, explain: 'à + place → y.' },
            { type: 'mc', q: "J'ai trois frères → J'___ ai trois.", options: ['y', 'en', 'les', 'leur'], answer: 1, explain: 'Quantity → en.' },
            { type: 'fill', q: 'Les clés ? Je ___ ai perdues.', answer: ['les'], explain: 'Direct plural → les (note agreement: perdues).' },
            { type: 'mc', q: 'Correct order: "I give it to him"', options: ['Je lui le donne.', 'Je le lui donne.', 'Je donne le lui.', 'Je le donne lui.'], answer: 1, explain: 'le before lui.' },
          ],
        },
      ],
      reading: [
        {
          id: 'fr-ir-1', title: 'Un voyage en Bretagne',
          sentences: ["L'été dernier, nous sommes partis en Bretagne pour deux semaines.", 'Il faisait souvent gris, mais nous ne nous sommes pas ennuyés.', 'Chaque matin, nous marchions le long de la côte.', 'Un jour, nous avons visité le Mont-Saint-Michel à marée haute.', "C'était impressionnant : l'eau entourait complètement l'île.", 'Le soir, on mangeait des crêpes et on buvait du cidre.', "J'y retournerai sans hésiter."],
          translation: "Last summer we went to Brittany for two weeks. It was often grey, but we weren't bored. Every morning we walked along the coast. One day we visited Mont-Saint-Michel at high tide. It was impressive: the water completely surrounded the island. In the evening we ate crêpes and drank cider. I'll go back there without hesitating.",
          questions: [
            { q: 'Comment était le temps ?', options: ['Très chaud', 'Souvent gris', 'Toujours ensoleillé', 'Neigeux'], answer: 1, explain: '"Il faisait souvent gris."' },
            { q: "Qu'est-ce qu'ils faisaient chaque matin ?", options: ['Ils dormaient', 'Ils marchaient le long de la côte', 'Ils mangeaient des crêpes', 'Ils visitaient des musées'], answer: 1, explain: 'Habit → imparfait "marchions".' },
            { q: 'Pourquoi le Mont-Saint-Michel était impressionnant ?', options: ["Il y avait beaucoup de touristes", "L'eau entourait l'île", 'Il était fermé', 'Il pleuvait'], answer: 1, explain: '"l\'eau entourait complètement l\'île."' },
            { q: '"J\'y retournerai" — que remplace "y" ?', options: ['le cidre', 'la Bretagne', 'les crêpes', 'la côte'], answer: 1, explain: 'y = to Brittany (à + place).' },
          ],
          vocab: [['la côte', 'the coast'], ['la marée haute', 'high tide'], ['entourer', 'to surround'], ["s'ennuyer", 'to be bored']],
        },
        {
          id: 'fr-ir-2', title: 'Le télétravail',
          sentences: ['Depuis quelques années, de plus en plus de Français travaillent depuis chez eux.', 'Pour beaucoup, le télétravail permet de gagner du temps : plus besoin de prendre le métro aux heures de pointe.', "Mais tout le monde n'est pas convaincu.", "Certains se sentent isolés et regrettent les pauses café avec leurs collègues.", "D'autres ont du mal à séparer vie privée et vie professionnelle.", "Aujourd'hui, la plupart des entreprises proposent une solution hybride : deux ou trois jours au bureau, le reste à la maison."],
          translation: "For some years now, more and more French people have been working from home. For many, remote work saves time: no more need to take the metro at rush hour. But not everyone is convinced. Some feel isolated and miss coffee breaks with colleagues. Others struggle to separate private and professional life. Today most companies offer a hybrid solution: two or three days at the office, the rest at home.",
          questions: [
            { q: 'Quel avantage du télétravail est mentionné ?', options: ['Un meilleur salaire', 'Gagner du temps', 'Plus de collègues', 'Des vacances'], answer: 1, explain: '"permet de gagner du temps."' },
            { q: 'Pourquoi certains ne sont pas convaincus ?', options: ['Ils se sentent isolés', 'Ils aiment le métro', 'Leur maison est trop grande', 'Ils travaillent moins'], answer: 0, explain: '"Certains se sentent isolés."' },
            { q: 'Quelle solution proposent la plupart des entreprises ?', options: ['100 % au bureau', '100 % à la maison', 'Une solution hybride', 'La semaine de quatre jours'], answer: 2, explain: '"une solution hybride."' },
          ],
          vocab: [['les heures de pointe', 'rush hour'], ['avoir du mal à', 'to struggle to'], ['la plupart des', 'most'], ['se sentir', 'to feel']],
        },
        {
          id: 'fr-ir-3', title: 'Le marché de Noël',
          sentences: ['Chaque année en décembre, la place de Strasbourg se transforme.', 'Des centaines de petits chalets en bois y vendent des décorations, des bredeles et du vin chaud.', "Quand j'étais enfant, mes grands-parents m'y emmenaient tous les week-ends.", "Je me souviens surtout de l'odeur de cannelle et des lumières dans le froid.", "L'année dernière, j'y suis retourné avec ma fille, et elle a eu exactement la même réaction que moi : les yeux grands ouverts."],
          translation: "Every year in December, Strasbourg's square transforms. Hundreds of small wooden chalets sell decorations, bredele cookies and mulled wine there. When I was a child, my grandparents took me there every weekend. I mostly remember the smell of cinnamon and the lights in the cold. Last year I went back with my daughter, and she had exactly the same reaction as me: eyes wide open.",
          questions: [
            { q: 'Que vendent les chalets ?', options: ['Des vêtements', 'Des décorations, des biscuits et du vin chaud', 'Des livres', 'Des fleurs'], answer: 1, explain: 'décorations, bredeles (cookies), vin chaud.' },
            { q: '"mes grands-parents m\'y emmenaient" — pourquoi l\'imparfait ?', options: ['Action unique', 'Habitude dans le passé', 'Futur', 'Ordre'], answer: 1, explain: 'tous les week-ends = habit.' },
            { q: 'De quoi le narrateur se souvient-il surtout ?', options: ['Du bruit', 'De la cannelle et des lumières', 'Du prix', 'Des chalets'], answer: 1, explain: '"l\'odeur de cannelle et des lumières".' },
          ],
          vocab: [['le bois', 'wood'], ['emmener', 'to take (someone)'], ['se souvenir de', 'to remember'], ['la cannelle', 'cinnamon']],
        },
      ],
      listening: [
        {
          id: 'fr-il-1', title: 'Au téléphone avec le médecin',
          sentences: ['Cabinet du docteur Lefèvre, bonjour.', "Bonjour, je voudrais prendre rendez-vous, s'il vous plaît.", "J'ai mal à la gorge depuis trois jours.", 'Le docteur peut vous recevoir jeudi à quatorze heures. Ça vous va ?', "Parfait, merci beaucoup. C'est à quel nom ? Dupont, Julie Dupont."],
          translation: "Dr. Lefèvre's office, hello. Hello, I'd like to make an appointment, please. I've had a sore throat for three days. The doctor can see you Thursday at 2 p.m. Does that work? Perfect, thank you. Under what name? Dupont, Julie Dupont.",
          questions: [
            { q: 'Quel est le problème de Julie ?', options: ['Mal à la tête', 'Mal à la gorge', 'Mal au dos', 'De la fièvre'], answer: 1, explain: '"mal à la gorge".' },
            { q: 'Depuis combien de temps ?', options: ['Un jour', 'Trois jours', 'Une semaine', 'Deux semaines'], answer: 1, explain: '"depuis trois jours".' },
            { q: 'Quand est le rendez-vous ?', options: ['Mardi à 10 h', 'Jeudi à 14 h', 'Jeudi à 4 h', 'Vendredi à 14 h'], answer: 1, explain: '"jeudi à quatorze heures".' },
          ],
          dictation: [2, 3],
          vocab: [['prendre rendez-vous', 'to make an appointment'], ['avoir mal à', 'to have pain in'], ['ça vous va ?', 'does that suit you?']],
        },
        {
          id: 'fr-il-2', title: 'Un souvenir d\'enfance',
          sentences: ["Quand j'avais huit ans, nous habitions à la campagne.", 'Tous les étés, je passais mes journées dans les arbres avec mon frère.', 'Un jour, il est tombé et il s\'est cassé le bras.', 'Mes parents ont eu très peur, mais tout s\'est bien terminé.', 'Depuis, il ne grimpe plus aux arbres !'],
          translation: "When I was eight, we lived in the countryside. Every summer I spent my days in the trees with my brother. One day he fell and broke his arm. My parents were very scared, but everything ended well. Since then, he doesn't climb trees anymore!",
          questions: [
            { q: 'Où habitait la famille ?', options: ['En ville', 'À la campagne', 'À la mer', 'À la montagne'], answer: 1, explain: '"à la campagne".' },
            { q: "Qu'est-il arrivé au frère ?", options: ['Il s\'est perdu', 'Il s\'est cassé le bras', 'Il a eu peur', 'Il est parti'], answer: 1, explain: '"il s\'est cassé le bras".' },
          ],
          dictation: [0, 2],
          vocab: [['la campagne', 'the countryside'], ['se casser le bras', 'to break one\'s arm'], ['grimper', 'to climb']],
        },
      ],
    },

    advanced: {
      grammar: [
        {
          id: 'fr-a-1', title: 'Le subjonctif présent',
          summary: 'Will, emotion, doubt, necessity — after que.',
          body: `<p>Formation: take the {{ils}} present stem, drop -ent, add <b>-e, -es, -e, -ions, -iez, -ent</b>. {{ils finissent}} → {{que je finisse}}. Nous/vous use the {{nous}} stem: {{que nous prenions}}.</p>
<p>Irregular: {{être}} (sois, soit, soyons), {{avoir}} (aie, ait, ayons), {{aller}} (aille), {{faire}} (fasse), {{pouvoir}} (puisse), {{savoir}} (sache), {{vouloir}} (veuille).</p>
<h3>Triggers (WEIRDO)</h3><ul><li><b>Wish/will</b>: {{vouloir que}}, {{souhaiter que}}, {{exiger que}}</li><li><b>Emotion</b>: {{être content que}}, {{avoir peur que}}, {{regretter que}}</li><li><b>Impersonal necessity</b>: {{il faut que}}, {{il est important que}}</li><li><b>Doubt/denial</b>: {{douter que}}, {{je ne pense pas que}}</li><li><b>Conjunctions</b>: {{bien que}}, {{pour que}}, {{avant que}}, {{à moins que}}, {{sans que}}</li></ul>
<p><b>Same subject → infinitive</b>: {{Je veux partir}} (not *je veux que je parte*).</p>
<p>Note: {{après que}} takes the indicative in standard grammar, and {{penser que}} (affirmative) takes the indicative — only the negative/interrogative triggers doubt.</p>`,
          examples: [['Il faut que tu fasses attention.', 'You must be careful.'], ['Je suis ravie que vous soyez venus.', "I'm delighted you came."], ["Bien qu'il pleuve, on sort.", "Although it's raining, we're going out."], ["Je ne pense pas qu'elle puisse venir.", "I don't think she can come."]],
          vocab: [['il faut que', 'it is necessary that'], ['bien que', 'although'], ['pour que', 'so that'], ['à moins que', 'unless'], ['douter', 'to doubt'], ['exiger', 'to demand']],
          exercises: [
            { type: 'fill', q: 'Il faut que nous ___ (partir) tôt.', answer: ['partions'], explain: 'nous partons → partions.' },
            { type: 'mc', q: 'Je pense qu\'il ___ raison.', options: ['ait', 'a', 'aie', 'avoir'], answer: 1, explain: 'Affirmative penser → indicative.' },
            { type: 'mc', q: 'Bien qu\'elle ___ fatiguée, elle travaille.', options: ['est', 'soit', 'sera', 'était'], answer: 1, explain: 'bien que → subjunctive.' },
            { type: 'fill', q: 'Je veux que tu ___ (savoir) la vérité.', answer: ['saches'], explain: 'savoir → sache, saches…' },
            { type: 'mc', q: '"I want to leave" =', options: ['Je veux que je parte.', 'Je veux partir.', 'Je veux que partir.', 'Je veux que je pars.'], answer: 1, explain: 'Same subject → infinitive.' },
          ],
        },
        {
          id: 'fr-a-2', title: 'Conditionnel & phrases en si',
          summary: 'Hypotheticals and the sequence of tenses.',
          body: `<p>Conditionnel présent = future stem + imparfait endings: {{je parlerais}}, {{nous serions}}, {{ils auraient}}, {{je ferais}}, {{j'irais}}, {{je viendrais}}.</p>
<h3>Si-clauses</h3><table class="conj"><tr><th>Si + …</th><th>Main clause</th><th>Meaning</th></tr><tr><td>présent</td><td>présent / futur / impératif</td><td>real possibility</td></tr><tr><td>imparfait</td><td>conditionnel présent</td><td>hypothetical now</td></tr><tr><td>plus-que-parfait</td><td>conditionnel passé</td><td>counterfactual past</td></tr></table>
<p><b>Never</b> put the conditional or future directly after {{si}} meaning "if": *si j'aurais* ✗.</p>
<p>The conditional also softens requests ({{Vous pourriez…}}) and reports unconfirmed news ({{Le président serait malade}} — "is reportedly ill").</p>`,
          examples: [["Si j'avais le temps, j'apprendrais le japonais.", "If I had time, I'd learn Japanese."], ["Si tu étais venu, tu te serais amusé.", "If you had come, you would have had fun."], ['Si tu finis tôt, appelle-moi.', 'If you finish early, call me.'], ["Selon la presse, l'accord serait signé demain.", 'According to the press, the deal would reportedly be signed tomorrow.']],
          vocab: [['si', 'if'], ['le conditionnel passé', 'would have …'], ['selon', 'according to'], ['un accord', 'a deal']],
          exercises: [
            { type: 'mc', q: "Si j'___ riche, je voyagerais.", options: ['serais', 'étais', 'suis', 'serai'], answer: 1, explain: 'si + imparfait → conditionnel.' },
            { type: 'fill', q: "Si nous avions su, nous ___ (venir) plus tôt. (would have come)", answer: ['serions venus', 'serions venues'], explain: 'plus-que-parfait → conditionnel passé (venir takes être).' },
            { type: 'mc', q: 'Si tu ___ fatigué, repose-toi.', options: ['es', 'serais', 'étais', 'seras'], answer: 0, explain: 'Real condition → présent + impératif.' },
            { type: 'mc', q: '"Le ministre aurait démissionné" means…', options: ['The minister would resign', 'The minister has reportedly resigned', 'The minister must resign', 'The minister resigned (certain)'], answer: 1, explain: 'Journalistic conditional = unconfirmed.' },
          ],
        },
        {
          id: 'fr-a-3', title: 'Pronoms relatifs : dont, lequel, ce qui/ce que',
          summary: 'Link ideas like a native writer.',
          body: `<ul><li>{{qui}} — subject: {{l'homme qui parle}}</li><li>{{que}} — direct object: {{le livre que je lis}}</li><li>{{dont}} — replaces <b>de</b> + noun: {{le film dont je t'ai parlé}} (parler <b>de</b>), {{la femme dont le fils est médecin}} (whose)</li><li>{{où}} — place <i>and time</i>: {{le jour où je t'ai rencontré}}</li><li>{{lequel / laquelle / lesquels / lesquelles}} — after other prepositions: {{la raison pour laquelle}}, {{le stylo avec lequel}}. Contracts with à/de: {{auquel}}, {{duquel}}.</li><li>{{ce qui / ce que / ce dont}} — "what" with no antecedent: {{Ce qui m'énerve, c'est…}}, {{Dis-moi ce que tu veux.}}, {{C'est ce dont j'ai besoin.}}</li></ul>`,
          examples: [["C'est le livre dont tout le monde parle.", "It's the book everyone's talking about."], ['Voilà la raison pour laquelle je suis parti.', "That's the reason why I left."], ["Ce que j'aime chez lui, c'est sa franchise.", 'What I like about him is his frankness.'], ['Le projet auquel je pense est ambitieux.', "The project I'm thinking about is ambitious."]],
          vocab: [['dont', 'of which / whose'], ['lequel', 'which (after prepositions)'], ['ce dont', 'what (with de verbs)'], ['la franchise', 'frankness']],
          exercises: [
            { type: 'mc', q: "Le film ___ j'ai besoin… (avoir besoin de)", options: ['que', 'dont', 'où', 'lequel'], answer: 1, explain: 'de + noun → dont.' },
            { type: 'mc', q: 'La table sur ___ j\'ai posé le livre.', options: ['lequel', 'laquelle', 'dont', 'qui'], answer: 1, explain: 'table is feminine → laquelle.' },
            { type: 'fill', q: '___ me plaît, c\'est la musique. (What pleases me)', answer: ['ce qui', 'Ce qui'], explain: 'Subject with no antecedent → ce qui.' },
            { type: 'mc', q: 'Le jour ___ il est né, il neigeait.', options: ['quand', 'où', 'que', 'dont'], answer: 1, explain: 'où is used for time too.' },
          ],
        },
        {
          id: 'fr-a-4', title: 'Passé simple & registre littéraire',
          summary: 'Recognize the tense of novels and history.',
          body: `<p>The passé simple replaces the passé composé in formal writing (literature, history, news narratives). You rarely produce it, but you must <b>recognize it instantly</b>, especially in 3rd person.</p>
<ul><li>-er: {{il parla}}, {{ils parlèrent}}</li><li>-ir/-re: {{il finit}}, {{ils finirent}}; {{il vendit}}</li><li>Irregulars: {{être → il fut}}, {{avoir → il eut}}, {{faire → il fit}}, {{venir → il vint}}, {{voir → il vit}}, {{prendre → il prit}}, {{pouvoir → il put}}, {{naître → il naquit}}, {{mourir → il mourut}}</li></ul>
<p>Watch out: {{il finit}} is both present and passé simple; {{il vit}} can be "he lives" (vivre) or "he saw" (voir). Context decides.</p>
<p>The imparfait still provides the background: {{La nuit tombait quand il entra.}}</p>`,
          examples: [['Victor Hugo naquit en 1802.', 'Victor Hugo was born in 1802.'], ['Elle ouvrit la porte et poussa un cri.', 'She opened the door and let out a scream.'], ['Ils furent surpris par la tempête.', 'They were surprised by the storm.']],
          vocab: [['il fut', 'he was (passé simple)'], ['il eut', 'he had'], ['il fit', 'he did/made'], ['il vint', 'he came'], ['pousser un cri', 'to let out a cry']],
          exercises: [
            { type: 'mc', q: '"Il vint" is from…', options: ['voir', 'venir', 'vivre', 'vendre'], answer: 1, explain: 'venir → il vint.' },
            { type: 'mc', q: '"Ils eurent" is from…', options: ['être', 'avoir', 'aller', 'user'], answer: 1, explain: 'avoir → ils eurent.' },
            { type: 'mc', q: 'Spoken equivalent of "Elle parla longtemps":', options: ['Elle parlait longtemps.', 'Elle a parlé longtemps.', 'Elle parlera longtemps.', 'Elle parle longtemps.'], answer: 1, explain: 'Passé simple ≈ passé composé in speech.' },
            { type: 'fill', q: 'Napoléon ___ (mourir, passé simple) en 1821.', answer: ['mourut'], explain: 'mourir → il mourut.' },
          ],
        },
      ],
      reading: [
        {
          id: 'fr-ar-1', title: 'La langue de Molière face à l\'anglais',
          sentences: ["Il n'est pas rare d'entendre, dans les bureaux parisiens, des phrases truffées d'anglicismes : on « fait un call », on « checke ses mails », on « se met en mode deadline ».", "Pour certains puristes, ce phénomène menacerait l'intégrité même de la langue.", "Pourtant, l'histoire du français est celle d'un emprunt permanent : bien avant l'anglais, il avait puisé dans l'italien, l'arabe ou le néerlandais.", "D'ailleurs, l'anglais lui-même doit une part considérable de son vocabulaire au français normand.", "Que l'on s'en inquiète ou qu'on s'en amuse, une chose est sûre : une langue qui n'emprunte plus est une langue qui ne vit plus."],
          translation: "It's not unusual to hear, in Parisian offices, sentences stuffed with anglicisms: people 'do a call', 'check their emails', 'go into deadline mode'. For some purists, this phenomenon would supposedly threaten the very integrity of the language. Yet the history of French is one of constant borrowing: well before English, it drew from Italian, Arabic or Dutch. Besides, English itself owes a considerable part of its vocabulary to Norman French. Whether one worries about it or is amused by it, one thing is certain: a language that no longer borrows is a language that no longer lives.",
          questions: [
            { q: 'Que suggère le conditionnel « menacerait » ?', options: ["C'est un fait prouvé", "C'est l'opinion des puristes, non confirmée", "C'est une menace future certaine", "C'est un ordre"], answer: 1, explain: 'Conditionnel journalistique = point de vue rapporté.' },
            { q: "Selon l'auteur, l'histoire du français est marquée par…", options: ["L'isolement", "L'emprunt permanent", "Le refus de l'anglais", "La simplification"], answer: 1, explain: '"un emprunt permanent".' },
            { q: 'Quelle est la conclusion de l\'auteur ?', options: ["Il faut interdire les anglicismes", "Emprunter est un signe de vitalité", "L'anglais va remplacer le français", "Le français normand a disparu"], answer: 1, explain: '"une langue qui n\'emprunte plus… ne vit plus".' },
            { q: '« Que l\'on s\'en inquiète ou qu\'on s\'en amuse » — pourquoi le subjonctif ?', options: ['Après « que » en tête de phrase à valeur concessive', 'Après un verbe de volonté', 'Après « bien que »', 'Par erreur'], answer: 0, explain: '« Que… ou que… » = whether… or… → subjonctif.' },
          ],
          vocab: [["truffé de", 'stuffed with'], ['un emprunt', 'a borrowing'], ['puiser dans', 'to draw from'], ["d'ailleurs", 'besides, moreover']],
        },
        {
          id: 'fr-ar-2', title: 'Extrait — Le retour au village',
          sentences: ["Lorsqu'il descendit du car, le soir tombait déjà sur la vallée.", "Rien n'avait changé, ou presque : la fontaine coulait toujours, le café de la place avait gardé ses chaises dépareillées.", "Il hésita un instant, puis il prit le chemin de la maison où il avait grandi.", "La porte était entrouverte, comme si on l'attendait.", "Il la poussa doucement, et une odeur de pain chaud lui monta au visage, si familière qu'il dut s'arrêter pour reprendre son souffle."],
          translation: "When he got off the bus, evening was already falling over the valley. Nothing had changed, or almost: the fountain was still flowing, the café on the square had kept its mismatched chairs. He hesitated a moment, then took the path to the house where he had grown up. The door was ajar, as if someone were expecting him. He pushed it gently, and a smell of warm bread rose to his face, so familiar that he had to stop to catch his breath.",
          questions: [
            { q: 'Identifiez un verbe au passé simple :', options: ['tombait', 'descendit', 'avait changé', 'coulait'], answer: 1, explain: 'descendit = passé simple; tombait = imparfait.' },
            { q: 'Que signifie « dépareillées » ?', options: ['Neuves', 'Qui ne vont pas ensemble', 'Cassées', 'Rouges'], answer: 1, explain: 'mismatched.' },
            { q: 'Pourquoi le personnage doit-il s\'arrêter ?', options: ['Il est fatigué', "L'émotion du souvenir", 'La porte est fermée', 'Il a faim'], answer: 1, explain: 'L\'odeur familière l\'émeut.' },
          ],
          vocab: [['le car', 'the coach (bus)'], ['entrouvert', 'ajar'], ['reprendre son souffle', 'to catch one\'s breath'], ['grandir', 'to grow up']],
        },
      ],
      listening: [
        {
          id: 'fr-al-1', title: 'Débat radio : la semaine de quatre jours',
          sentences: ["Bienvenue dans notre émission. Aujourd'hui, nous parlons de la semaine de quatre jours.", "Selon ses partisans, elle améliorerait la productivité et le bien-être des salariés.", "Ses détracteurs, eux, craignent qu'elle ne désorganise les services publics.", "Il faudrait, d'après plusieurs économistes, que l'expérience soit menée à grande échelle avant de tirer des conclusions.", "Et vous, chers auditeurs, qu'en pensez-vous ?"],
          translation: "Welcome to our show. Today we're talking about the four-day week. According to its supporters, it would improve productivity and employee well-being. Its critics fear that it might disorganize public services. According to several economists, the experiment would need to be carried out on a large scale before drawing conclusions. And you, dear listeners, what do you think?",
          questions: [
            { q: 'Que pensent les partisans ?', options: ['Elle réduirait les salaires', 'Elle améliorerait la productivité et le bien-être', 'Elle désorganiserait tout', 'Elle est impossible'], answer: 1, explain: 'améliorerait la productivité et le bien-être.' },
            { q: 'Que craignent les détracteurs ?', options: ['La fatigue', 'La désorganisation des services publics', 'Le chômage', 'Les grèves'], answer: 1, explain: '"qu\'elle ne désorganise les services publics".' },
            { q: 'Le « ne » dans « craignent qu\'elle ne désorganise » est…', options: ['Une négation', 'Un ne explétif (sans valeur négative)', 'Une erreur', 'Familier'], answer: 1, explain: 'ne explétif after craindre que — not negative.' },
          ],
          dictation: [1, 3],
          vocab: [['un partisan', 'a supporter'], ['un détracteur', 'a critic'], ['à grande échelle', 'on a large scale'], ['un auditeur', 'a listener']],
        },
        {
          id: 'fr-al-2', title: 'Conférence : présentation des résultats',
          sentences: ["Bonjour à tous, et merci d'être venus si nombreux.", "Avant de commencer, permettez-moi de rappeler brièvement le contexte de cette étude.", "Bien que les résultats soient encourageants, il serait prématuré d'en tirer des conclusions définitives.", "C'est pourquoi nous proposons de prolonger l'expérience d'une année supplémentaire.", "Je répondrai volontiers à vos questions à la fin de la présentation."],
          translation: "Hello everyone, and thank you for coming in such numbers. Before starting, allow me to briefly recall the context of this study. Although the results are encouraging, it would be premature to draw definitive conclusions from them. That is why we propose extending the experiment by one more year. I will gladly answer your questions at the end of the presentation.",
          questions: [
            { q: "Pourquoi ne peut-on pas encore conclure ?", options: ["Les résultats sont mauvais", "Ce serait prématuré malgré des résultats encourageants", "L'étude est annulée", "Il manque de l'argent"], answer: 1, explain: '"il serait prématuré d\'en tirer des conclusions".' },
            { q: "Que propose l'orateur ?", options: ["Arrêter l'étude", "Prolonger l'expérience d'un an", "Publier immédiatement", "Changer d'équipe"], answer: 1, explain: '"prolonger l\'expérience d\'une année supplémentaire".' },
            { q: "« en » dans « en tirer » remplace…", options: ['les questions', 'les résultats', 'le contexte', 'la présentation'], answer: 1, explain: 'tirer des conclusions DES résultats → en.' },
          ],
          dictation: [2, 3],
          vocab: [['rappeler', 'to recall, remind'], ['prématuré', 'premature'], ['tirer des conclusions', 'to draw conclusions'], ['volontiers', 'gladly']],
        },
      ],
    },
  },
};
