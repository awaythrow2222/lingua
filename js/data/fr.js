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
          summary: 'The words for I / you / he / she / we / they, and how to say "I am, you are…".',
          body: `<p>Every French sentence needs someone or something doing the action. This lesson gives you the words for "I, you, he, she, we, they" and the verb {{être|to be}}, which you'll use in almost every sentence.</p>

<h3>Two grammar words you'll see everywhere</h3>
<p>A [[verb]] is an action or state word (eat, go, be). The [[subject]] is whoever does it. Short words like "I, you, she" that stand in for a person are called [[pronoun|pronouns]], and the ones used as the subject are [[subject pronoun|subject pronouns]].</p>
<p>English verbs barely change ("I eat, you eat, she eat<b>s</b>"). French verbs change their form for <b>each</b> subject. The set of forms is called a [[conjugation]], and learning a verb means learning its six forms. English "to be" is a good comparison: <i>I am, you are, she is</i>, three different forms. French does this with every verb.</p>

<h3>The subject pronouns</h3>
<table class="conj"><tr><th>French</th><th>English</th><th>Notes</th></tr>
<tr><td>{{je}}</td><td>I</td><td>Becomes {{j'}} before a vowel or silent h: {{j'ai|I have}}. This dropping of a vowel is called [[elision]].</td></tr>
<tr><td>{{tu}}</td><td>you</td><td>One person you know well: friends, family, children.</td></tr>
<tr><td>{{il}}</td><td>he / it</td><td>Also "it" for [[masculine]] things.</td></tr>
<tr><td>{{elle}}</td><td>she / it</td><td>Also "it" for [[feminine]] things.</td></tr>
<tr><td>{{on}}</td><td>we (casual) / one / people</td><td>In everyday speech {{on}} usually means "we". It uses the same verb form as {{il}}.</td></tr>
<tr><td>{{nous}}</td><td>we</td><td>Slightly more careful than {{on}}.</td></tr>
<tr><td>{{vous}}</td><td>you</td><td>Polite "you" for one person, <b>or</b> any group of two or more people.</td></tr>
<tr><td>{{ils}}</td><td>they</td><td>A group of men, or a <b>mixed</b> group (even one man among many women).</td></tr>
<tr><td>{{elles}}</td><td>they</td><td>A group made up only of women or feminine things.</td></tr></table>

<h3>tu or vous?</h3>
<p>English has one "you". French has two, and picking the right one matters socially. Use {{vous}} with strangers, shop staff, older people and at work until invited to switch. Use {{tu}} with friends, family, children and pets. When in doubt, {{vous}} is never rude.</p>

<h3>être (to be)</h3>
<p>{{être}} is [[irregular]]: its forms don't follow a pattern, so you just memorise them (see the table below). The "Sounds like" column is approximate; click any word to hear it. The final consonants are mostly silent: {{est}} sounds like "eh", {{sont}} like "sohn".</p>

<div class="callout warn"><b>Watch out — no "a" before jobs.</b> After {{être}}, French drops the word for "a" before a job or nationality: {{Elle est médecin.}} = "She is <i>a</i> doctor" (literally "She is doctor"). Also, describing words change for women: {{Il est américain}} but {{Elle est américaine}}. You'll learn why in the next lesson ([[gender]]).</div>`,
          table: { title: 'être — présent', headers: ['Pronoun', 'Form', 'Sounds like'], rows: [['je', 'suis', 'swee'], ['tu', 'es', 'eh'], ['il / elle / on', 'est', 'eh'], ['nous', 'sommes', 'som'], ['vous', 'êtes', 'et'], ['ils / elles', 'sont', 'sohn']], plain: [2] },
          examples: [
            ['Je suis américain.', 'I am American.', 'Je=I|suis=am|américain=American'],
            ['Tu es gentil.', 'You are kind.', 'Tu=you (friendly)|es=are|gentil=kind'],
            ['Elle est professeure.', 'She is a teacher. (no word for "a" before jobs)', 'Elle=she|est=is|professeure=teacher'],
            ['Nous sommes amis.', 'We are friends.', 'Nous=we|sommes=are|amis=friends'],
            ['Vous êtes en retard.', 'You are late.', 'Vous=you (polite or plural)|êtes=are|en=in|retard=delay (en retard = late)'],
            ['Ils sont à Paris.', 'They are in Paris.', 'Ils=they|sont=are|à=in|Paris=Paris'],
            ['On est prêts ?', 'Are we ready? (casual)', 'On=we (casual)|est=is|prêts=ready'],
          ],
          vocab: [['je suis', 'I am'], ['tu es', 'you are'], ['nous sommes', 'we are'], ['vous êtes', 'you (formal/pl.) are'], ['ils sont', 'they are'], ['gentil', 'kind'], ['en retard', 'late'], ['prêt', 'ready']],
          exercises: [
            { type: 'mc', q: 'Nous ___ à la maison.', options: ['sommes', 'sont', 'êtes', 'suis'], answer: 0, explain: 'nous → sommes. (à la maison = at home)' },
            { type: 'mc', q: 'Which pronoun do you use with a shopkeeper you just met?', options: ['tu', 'vous', 'on', 'il'], answer: 1, explain: 'vous is the polite form.' },
            { type: 'fill', q: 'Je ___ étudiant. (I am a student)', answer: ['suis'], explain: 'je suis.' },
            { type: 'fill', q: 'Ils ___ fatigués. (They are tired)', answer: ['sont'], explain: 'ils/elles → sont.' },
            { type: 'mc', q: 'How do you say "She is a doctor"?', options: ['Elle est un médecin.', 'Elle est médecin.', 'Elle es médecin.', 'Elle sont médecin.'], answer: 1, explain: 'No article before a profession after être.' },
            { type: 'mc', q: 'A group of five women and one man is…', options: ['elles', 'ils', 'on', 'vous'], answer: 1, explain: 'Any mixed group is ils.' },
            { type: 'mc', q: 'In casual speech, "On est fatigués" means…', options: ['One is tired', 'We are tired', 'They are tired', 'He is tired'], answer: 1, explain: 'In conversation on usually means "we" (with the il/elle verb form).' },
          ],
        },
        {
          id: 'fr-b-2', title: 'Gender & articles (le, la, un, une)',
          summary: 'Every French noun is masculine or feminine, and the little word in front tells you which.',
          body: `<p>A [[noun]] is a word for a thing, person or idea (book, cat, freedom). In French every noun has a [[gender|grammatical gender]]: it is either [[masculine]] or [[feminine]]. This is just a grammar label. A table isn't "girly"; {{table}} simply happens to be feminine. There's usually no logic to it, so the trick is to <b>always learn a noun together with its article</b>.</p>

<h3>What is an article?</h3>
<p>[[article|Articles]] are the little words in front of nouns: English "the" and "a/an". French has a different form for masculine, feminine and [[plural]] (more than one). English nouns can go without an article ("I like coffee"), but French nouns almost always need one: {{J'aime le café}} (literally "I like the coffee").</p>

<h3>"the" — the definite article</h3>
<p>Use these for a specific thing, like English "the". This is the [[definite]] article.</p>
<table class="conj"><tr><th>Form</th><th>Used for</th><th>Example</th></tr>
<tr><td>{{le}}</td><td>masculine, one thing</td><td>{{le chat|the cat}}</td></tr>
<tr><td>{{la}}</td><td>feminine, one thing</td><td>{{la maison|the house}}</td></tr>
<tr><td>{{l'}}</td><td>either gender, before a vowel or silent h</td><td>{{l'ami|the friend}}, {{l'heure|the hour}}</td></tr>
<tr><td>{{les}}</td><td>plural, both genders</td><td>{{les chats|the cats}}</td></tr></table>
<p>{{l'}} is another case of [[elision]]: French doesn't like two vowel sounds bumping together, so {{le ami}} becomes {{l'ami}}.</p>

<h3>"a / some" — the indefinite article</h3>
<p>Use these for "a", "an" or "some": a thing that isn't specific. This is the [[indefinite]] article.</p>
<table class="conj"><tr><th>Form</th><th>Used for</th><th>Example</th></tr>
<tr><td>{{un}}</td><td>masculine</td><td>{{un livre|a book}}</td></tr>
<tr><td>{{une}}</td><td>feminine</td><td>{{une pomme|an apple}}</td></tr>
<tr><td>{{des}}</td><td>plural ("some")</td><td>{{des pommes|(some) apples}}</td></tr></table>

<h3>Hearing the plural</h3>
<p>To make a noun plural you add <b>-s</b>, just like English, but in French that -s is <b>silent</b>: {{chat}} and {{chats}} sound the same. The only way to hear the difference is the article: {{le}} ("luh") vs {{les}} ("lay"). That's another reason articles matter so much.</p>

<h3>Clues to gender</h3>
<p>Endings in <b>-tion, -té, -ette, -ence</b> are usually feminine ({{la nation}}, {{la liberté|freedom}}). Endings in <b>-ment, -age, -eau, -isme</b> are usually masculine ({{le fromage|cheese}}, {{le gâteau|cake}}). Words for people usually follow the person: {{un ami}} (a male friend), {{une amie}} (a female friend).</p>

<div class="callout warn"><b>Describing words match too.</b> An [[adjective]] (describing word) changes to match its noun. This is called [[agreement]]. Usually you add <b>-e</b> for feminine and <b>-s</b> for plural: {{un chat noir|a black cat}}, {{une voiture noire|a black car}}, {{des chats noirs|black cats}}. Most adjectives come <b>after</b> the noun.</div>`,
          examples: [
            ['Le chat est noir.', 'The cat is black.', 'Le=the (masc.)|chat=cat|est=is|noir=black'],
            ['La boulangerie est fermée.', 'The bakery is closed.', 'La=the (fem.)|boulangerie=bakery|est=is|fermée=closed (fem. form)'],
            ["J'ai une sœur et un frère.", 'I have a sister and a brother.', "J'=I|ai=have|une=a (fem.)|sœur=sister|et=and|un=a (masc.)|frère=brother"],
            ["Les enfants sont à l'école.", 'The children are at school.', "Les=the (plural)|enfants=children|sont=are|à=at|l'=the|école=school"],
            ['Je voudrais des pommes.', "I'd like some apples.", 'Je=I|voudrais=would like|des=some|pommes=apples'],
            ["C'est une petite maison.", "It's a small house.", "C'=it|est=is|une=a (fem.)|petite=small (fem. form)|maison=house"],
          ],
          vocab: [['le livre', 'the book'], ['la table', 'the table'], ['la pomme', 'the apple'], ['le fromage', 'the cheese'], ["l'école (f.)", 'the school'], ['le gâteau', 'the cake'], ['la sœur', 'the sister'], ['le frère', 'the brother']],
          exercises: [
            { type: 'mc', q: '___ fromage (cheese — ends in -age)', options: ['le', 'la', 'les', "l'"], answer: 0, explain: '-age nouns are usually masculine.' },
            { type: 'mc', q: '___ liberté (freedom — ends in -té)', options: ['le', 'la', 'un', 'des'], answer: 1, explain: '-té nouns are usually feminine.' },
            { type: 'fill', q: '___ ami (the friend — starts with a vowel)', answer: ["l'", 'l’'], explain: "le/la become l' before a vowel." },
            { type: 'mc', q: '"some apples" =', options: ['les pommes', 'des pommes', 'une pommes', 'la pommes'], answer: 1, explain: 'des = plural indefinite (some).' },
            { type: 'fill', q: "J'ai ___ chat. (a cat, masculine)", answer: ['un'], explain: 'un for masculine.' },
            { type: 'mc', q: '"a black car" (voiture is feminine) =', options: ['un voiture noir', 'une voiture noire', 'une noire voiture', 'une voiture noir'], answer: 1, explain: 'Feminine article une, and the adjective adds -e and comes after the noun.' },
            { type: 'mc', q: 'How can you HEAR that "les chats" is plural?', options: ['The -s on chats', 'The article les', 'You can\'t', 'The -t'], answer: 1, explain: 'The plural -s is silent; les ("lay") vs le ("luh") gives it away.' },
          ],
        },
        {
          id: 'fr-b-3', title: 'Present tense of -er verbs',
          summary: 'One pattern covers about 90% of French verbs. Learn it once, use it everywhere.',
          body: `<p>The [[infinitive]] is a verb's dictionary form, the "to ___" form: {{parler|to speak}}, {{aimer|to like}}. Most French infinitives end in <b>-er</b>, and almost all of them follow the same pattern. Verbs that follow the pattern are called [[regular]].</p>

<h3>How to conjugate an -er verb</h3>
<p>1. Take the infinitive and chop off <b>-er</b>. What's left is the [[stem]]: {{parler}} → <b>parl-</b>.<br>
2. Add the [[ending]] that matches the subject (table below).</p>
<p>That's it. {{je parle|I speak}}, {{nous parlons|we speak}}, {{vous parlez|you speak}}.</p>

<h3>The good news: most endings are silent</h3>
<p>The endings <b>-e, -es, -e, -ent</b> are not pronounced at all. So {{je parle}}, {{tu parles}}, {{il parle}} and {{ils parlent}} all sound exactly the same: "parl". You only hear a difference with {{nous}} (-ons, "ohn") and {{vous}} (-ez, "ay"). Careful: the <b>-ent</b> on {{ils parlent}} is silent too. Don't say "parl-ENT".</p>

<h3>One French form = three English ones</h3>
<p>French has a single [[present tense]]. {{Je parle}} can mean "I speak", "I am speaking" or "I do speak", depending on context. There's no separate "-ing" form to learn.</p>

<h3>Little sound rules</h3>
<ul><li>Before a vowel or silent h, {{je}} becomes {{j'}}: {{j'aime|I like}}, {{j'habite|I live}}.</li>
<li>With {{nous}}, {{vous}}, {{ils}}, {{elles}}, the final -s links to a following vowel with a "z" sound: {{nous aimons}} sounds like "noo-ZEM-ohn". This linking is called [[liaison]].</li></ul>

<p><b>Quick question tip:</b> to turn a sentence into a yes/no question in everyday speech, just raise your voice at the end: {{Tu travailles demain ?}} You'll learn more ways in Lesson 6.</p>`,
          table: { title: 'parler — présent', headers: ['Pronoun', 'Ending', 'Form'], rows: [['je', '-e', 'parle'], ['tu', '-es', 'parles'], ['il/elle/on', '-e', 'parle'], ['nous', '-ons', 'parlons'], ['vous', '-ez', 'parlez'], ['ils/elles', '-ent', 'parlent']] },
          examples: [
            ["J'habite à Montréal.", 'I live in Montreal.', "J'=I|habite=live|à=in|Montréal=Montreal"],
            ['Tu travailles demain ?', 'Are you working tomorrow?', 'Tu=you|travailles=work|demain=tomorrow'],
            ['Nous regardons un film.', 'We are watching a film.', 'Nous=we|regardons=watch|un=a|film=film'],
            ['Elles aiment danser.', 'They love to dance.', 'Elles=they (all female)|aiment=like / love|danser=to dance'],
            ['Vous parlez anglais ?', 'Do you speak English?', 'Vous=you|parlez=speak|anglais=English'],
            ['Il cherche ses clés.', "He's looking for his keys.", 'Il=he|cherche=looks for|ses=his|clés=keys'],
          ],
          vocab: [['habiter', 'to live (somewhere)'], ['travailler', 'to work'], ['regarder', 'to watch'], ['écouter', 'to listen (to)'], ['danser', 'to dance'], ['chercher', 'to look for'], ['demain', 'tomorrow']],
          exercises: [
            { type: 'fill', q: 'Nous ___ (regarder) la télé.', answer: ['regardons'], explain: 'nous → -ons.' },
            { type: 'fill', q: 'Vous ___ (parler) anglais ?', answer: ['parlez'], explain: 'vous → -ez.' },
            { type: 'mc', q: 'Which forms sound the same?', options: ['parle / parles / parlent', 'parlons / parlez', 'parle / parlez', 'none'], answer: 0, explain: '-e, -es, -ent are silent.' },
            { type: 'mc', q: '"I listen to music" =', options: ['Je écoute la musique.', "J'écoute de la musique.", 'Je écoutes musique.', "J'écoutons la musique."], answer: 1, explain: "je → j' before a vowel and the je ending is -e. écouter already includes \"to\", and de la musique means \"(some) music\"." },
            { type: 'fill', q: 'Ils ___ (chercher) leurs clés.', answer: ['cherchent'], explain: 'ils → -ent (silent).' },
            { type: 'mc', q: 'What is the stem of "danser"?', options: ['dans-', 'danse-', 'danser', 'dan-'], answer: 0, explain: 'Chop off -er: dans-.' },
            { type: 'mc', q: '"Je regarde un film" can mean…', options: ['Only "I watch a film"', 'Only "I am watching a film"', 'Either', 'I watched a film'], answer: 2, explain: 'French has one present tense for both.' },
          ],
        },
        {
          id: 'fr-b-4', title: 'Avoir & everyday expressions',
          summary: 'In French you "have" hunger, age and fear, and "il y a" means "there is".',
          body: `<p>{{avoir|to have}} is the second most important French verb. Like {{être}}, it is [[irregular]], so learn the table below by heart.</p>

<h3>Things you "have" in French but "are" in English</h3>
<p>Many feelings and states that English describes with "to be" use {{avoir}} + a [[noun]] in French. Word for word you "have hunger", "have fear". Fixed phrases like these, whose meaning you learn as a whole, are called [[idiom|idioms]]:</p>
<table class="conj"><tr><th>French</th><th>Word for word</th><th>English</th></tr>
<tr><td>{{avoir faim}}</td><td>have hunger</td><td>to be hungry</td></tr>
<tr><td>{{avoir soif}}</td><td>have thirst</td><td>to be thirsty</td></tr>
<tr><td>{{avoir froid}} / {{avoir chaud}}</td><td>have cold / have heat</td><td>to be cold / hot</td></tr>
<tr><td>{{avoir peur}}</td><td>have fear</td><td>to be afraid</td></tr>
<tr><td>{{avoir raison}} / {{avoir tort}}</td><td>have reason / have wrong</td><td>to be right / wrong</td></tr>
<tr><td>{{avoir 20 ans}}</td><td>have 20 years</td><td>to be 20 years old</td></tr>
<tr><td>{{avoir besoin de}}</td><td>have need of</td><td>to need</td></tr></table>
<p><b>Most common mistake:</b> "Je suis 30" ✗ → {{J'ai 30 ans}} ✓. Always add {{ans|years}} too.</p>

<h3>il y a — "there is / there are"</h3>
<p>This tiny phrase is everywhere. Word for word it's "it there has", but it simply means "there is" or "there are": {{Il y a un problème.|There's a problem.}} {{Il y a des chats.|There are (some) cats.}} It never changes for plural.</p>

<p>Remember [[elision]] from Lesson 1: {{je}} + {{ai}} → {{j'ai}}. And with {{nous}}, {{vous}}, {{ils}}, {{elles}} the -s links with a "z" sound ([[liaison]]): {{ils ont}} = "eel-ZOHN" (they have), which sounds different from {{ils sont}} = "eel-SOHN" (they are).</p>`,
          table: { title: 'avoir — présent', headers: ['Pronoun', 'Form'], rows: [["j'", 'ai'], ['tu', 'as'], ['il/elle/on', 'a'], ['nous', 'avons'], ['vous', 'avez'], ['ils/elles', 'ont']] },
          examples: [
            ["J'ai faim, on mange ?", "I'm hungry, shall we eat?", "J'=I|ai=have|faim=hunger|on=we (casual)|mange=eat"],
            ['Tu as raison.', "You're right.", 'Tu=you|as=have|raison=reason (avoir raison = be right)'],
            ['Elle a vingt-cinq ans.', 'She is twenty-five.', 'Elle=she|a=has|vingt-cinq=twenty-five|ans=years'],
            ["Nous avons besoin d'aide.", 'We need help.', "Nous=we|avons=have|besoin=need|d'=of|aide=help"],
            ['Il y a un problème.', "There's a problem.", 'Il=it|y=there|a=has (il y a = there is)|un=a|problème=problem'],
            ['Les enfants ont peur.', 'The children are afraid.', 'Les=the|enfants=children|ont=have|peur=fear'],
          ],
          vocab: [['avoir faim', 'to be hungry'], ['avoir soif', 'to be thirsty'], ['avoir peur', 'to be afraid'], ['avoir raison', 'to be right'], ['avoir tort', 'to be wrong'], ['avoir besoin de', 'to need'], ['avoir ... ans', 'to be ... years old'], ['il y a', 'there is / there are']],
          exercises: [
            { type: 'mc', q: '"I am 20 years old" =', options: ["Je suis 20 ans.", "J'ai 20 ans.", 'Je suis vingt.', "J'ai vingt années."], answer: 1, explain: 'Age uses avoir + ans.' },
            { type: 'fill', q: 'Ils ___ soif. (They are thirsty)', answer: ['ont'], explain: 'ils → ont.' },
            { type: 'fill', q: 'Vous ___ froid ? (Are you cold?)', answer: ['avez'], explain: 'vous → avez.' },
            { type: 'mc', q: '"You\'re wrong" (to a friend) =', options: ['Tu es tort.', 'Tu as tort.', 'Tu as raison.', 'Tu es faux.'], answer: 1, explain: 'avoir tort = to be wrong.' },
            { type: 'mc', q: '"There are two cats" =', options: ['Il sont deux chats.', 'Il y a deux chats.', 'Ils y ont deux chats.', 'Il est deux chats.'], answer: 1, explain: 'il y a never changes, even for plural.' },
            { type: 'mc', q: 'Which means "they have"?', options: ['ils sont', 'ils ont'], answer: 1, explain: 'ils ont ("eel-ZOHN") = they have; ils sont ("eel-SOHN") = they are.' },
          ],
        },
        {
          id: 'fr-b-5', title: 'Negation: ne … pas',
          summary: 'French says "not" with two words that wrap around the verb.',
          body: `<p>Saying "not" is called [[negation]]. English adds "don't / doesn't / not". French instead puts <b>two</b> words around the conjugated [[verb]]: {{ne}} before it, {{pas}} after it. Think of them as bread around a sandwich filling.</p>
<table class="conj"><tr><th>Positive</th><th>Negative</th><th>English</th></tr>
<tr><td>{{Je parle.}}</td><td>{{Je ne parle pas.}}</td><td>I don't speak.</td></tr>
<tr><td>{{Il est content.}}</td><td>{{Il n'est pas content.}}</td><td>He isn't happy.</td></tr>
<tr><td>{{Nous aimons le thé.}}</td><td>{{Nous n'aimons pas le thé.}}</td><td>We don't like tea.</td></tr></table>
<p>{{ne}} becomes {{n'}} before a vowel ([[elision]] again). Notice French has no word for "do/does" here: {{Je ne parle pas}} is literally "I not speak not".</p>

<h3>"a" and "some" turn into de</h3>
<p>After a negative, the [[indefinite]] articles {{un}}, {{une}}, {{des}} all become {{de}} (or {{d'}} before a vowel). It's like English "I don't have <i>any</i>…":</p>
<p class="callout">{{J'ai un chien.|I have a dog.}} → {{Je n'ai pas de chien.|I don't have a dog.}}</p>
<p>This does <b>not</b> happen with "the" ({{le}}, {{la}}, {{les}}): {{Je n'aime pas le café.|I don't like coffee.}}</p>

<h3>Other "not" words</h3>
<p>Swap {{pas}} for another word to change the meaning. {{ne}} stays in the same place.</p>
<ul><li>{{ne … jamais}} — never: {{Je ne mange jamais de viande.}}</li><li>{{ne … rien}} — nothing: {{Je ne comprends rien.}}</li><li>{{ne … plus}} — no longer / no more: {{Il n'y a plus de pain.}}</li><li>{{ne … personne}} — nobody: {{Je ne vois personne.}}</li></ul>

<div class="callout warn"><b>In real conversation</b>, people often drop {{ne}} and keep only {{pas}}: {{Je sais pas}} (I don't know), {{C'est pas grave}} (it's no big deal). Learn to recognise it, but in writing always use both words.</div>`,
          examples: [
            ['Je ne suis pas fatigué.', "I'm not tired.", 'Je=I|ne=(not, part 1)|suis=am|pas=(not, part 2)|fatigué=tired'],
            ["Elle n'a pas de voiture.", "She doesn't have a car.", "Elle=she|n'=(not, part 1)|a=has|pas=(not, part 2)|de=any|voiture=car"],
            ['Nous ne mangeons jamais de viande.', 'We never eat meat.', 'Nous=we|ne=(negative, part 1)|mangeons=eat|jamais=never|de=any|viande=meat'],
            ["Il n'y a plus de pain.", "There's no more bread.", "Il=it|n'=(negative, part 1)|y=there|a=has|plus=no more|de=any|pain=bread"],
            ['Je ne comprends rien.', "I don't understand anything.", 'Je=I|ne=(negative, part 1)|comprends=understand|rien=nothing'],
            ["Je n'aime pas le café.", "I don't like coffee.", "Je=I|n'=(not, part 1)|aime=like|pas=(not, part 2)|le=the|café=coffee"],
          ],
          vocab: [['ne … pas', 'not'], ['ne … jamais', 'never'], ['ne … rien', 'nothing'], ['ne … plus', 'no longer / no more'], ['ne … personne', 'nobody'], ['la voiture', 'the car'], ['le chien', 'the dog'], ['la viande', 'meat']],
          exercises: [
            { type: 'mc', q: 'Make it negative: "Tu aimes le café."', options: ['Tu ne aimes pas le café.', "Tu n'aimes pas le café.", 'Tu aimes ne pas le café.', 'Tu pas aimes le café.'], answer: 1, explain: "ne → n' before a vowel." },
            { type: 'mc', q: '"I don\'t have a brother" =', options: ["Je n'ai pas un frère.", "Je n'ai pas de frère.", "Je n'ai pas des frère.", "Je ai pas de frère."], answer: 1, explain: 'un becomes de after a negative.' },
            { type: 'fill', q: 'Il ne mange ___ de viande. (He never eats meat)', answer: ['jamais'], explain: 'ne … jamais = never.' },
            { type: 'fill', q: 'Je ___ suis pas prêt.', answer: ['ne'], explain: 'ne before a consonant.' },
            { type: 'mc', q: '"I don\'t understand anything" =', options: ['Je ne comprends pas rien.', 'Je ne comprends rien.', 'Je comprends ne rien.', 'Je rien comprends.'], answer: 1, explain: 'rien replaces pas: ne … rien.' },
            { type: 'mc', q: 'You hear "Je sais pas." This is…', options: ['A mistake', 'Casual speech for "Je ne sais pas"', 'A question', 'Positive'], answer: 1, explain: 'Spoken French often drops ne.' },
          ],
        },
        {
          id: 'fr-b-6', title: 'Asking questions',
          summary: 'Three ways to ask, from casual to formal, plus the question words.',
          body: `<p>English needs "do / does" to ask a question ("<i>Do</i> you speak French?"). French doesn't have that helper. Instead it has three options. They all mean the same thing; they just sound more or less formal.</p>

<h3>1. Raise your voice (casual)</h3>
<p>Say a normal sentence with your voice going up at the end. This is called [[intonation]], and it's what you'll hear most in conversation.</p>
<p class="callout">{{Tu viens.|You're coming.}} → {{Tu viens ?|Are you coming?}}</p>

<h3>2. Est-ce que (neutral, always safe)</h3>
<p>Put {{est-ce que}} ("ess-kuh") at the start. Word for word it's "is it that…", but think of it as a spoken question mark. It's never wrong.</p>
<p class="callout">{{Est-ce que tu viens ?}} — Are you coming?</p>

<h3>3. Flip the verb and pronoun (formal / written)</h3>
<p>Swap the [[subject pronoun]] and the verb, and join them with a hyphen. This is called [[inversion]]: {{Tu viens ?}} → {{Viens-tu ?}}. If the verb ends in a vowel and the pronoun starts with one ({{il}}, {{elle}}, {{on}}), add <b>-t-</b> in between so it's easier to say: {{Parle-t-il anglais ?|Does he speak English?}}. The -t- has no meaning; it's just a sound bridge.</p>

<h3>Question words</h3>
<table class="conj"><tr><th>French</th><th>English</th></tr>
<tr><td>{{qui}}</td><td>who</td></tr><tr><td>{{que}} / {{quoi}}</td><td>what</td></tr><tr><td>{{où}}</td><td>where (the accent matters: {{ou}} without it means "or")</td></tr>
<tr><td>{{quand}}</td><td>when</td></tr><tr><td>{{pourquoi}}</td><td>why (answer with {{parce que|because}})</td></tr><tr><td>{{comment}}</td><td>how</td></tr>
<tr><td>{{combien}}</td><td>how much / how many</td></tr><tr><td>{{quel}} / {{quelle}}</td><td>which / what (changes for [[gender]], like an [[adjective]])</td></tr></table>
<p>In casual speech the question word often comes at the start or the end: {{Pourquoi tu ris ?}}, {{Tu habites où ?}} With {{est-ce que}}, the question word goes first: {{Où est-ce que tu habites ?}}</p>
<p>The most common "what" question is {{Qu'est-ce que…}} = "what" + {{est-ce que}}: {{Qu'est-ce que tu fais ?|What are you doing?}}</p>`,
          examples: [
            ['Où est la gare ?', 'Where is the train station?', 'Où=where|est=is|la=the|gare=train station'],
            ["Qu'est-ce que vous voulez ?", 'What do you want?', "Qu'est-ce que=what (lit. what is it that)|vous=you|voulez=want"],
            ['Pourquoi tu ris ?', 'Why are you laughing?', 'Pourquoi=why|tu=you|ris=laugh'],
            ['Comment vous appelez-vous ?', "What's your name? (formal)", 'Comment=how|vous=yourself|appelez=call|vous=you (lit. how do you call yourself?)'],
            ['Combien ça coûte ?', 'How much does it cost?', 'Combien=how much|ça=that|coûte=costs'],
            ['Est-ce que tu parles anglais ?', 'Do you speak English?', 'Est-ce que=(question starter, lit. is it that)|tu=you|parles=speak|anglais=English'],
            ['Parle-t-il français ?', 'Does he speak French?', 'Parle=speaks|t=(sound bridge, no meaning)|il=he|français=French'],
          ],
          vocab: [['où', 'where'], ['quand', 'when'], ['pourquoi', 'why'], ['parce que', 'because'], ['comment', 'how'], ['combien', 'how much'], ["qu'est-ce que", 'what'], ['qui', 'who']],
          exercises: [
            { type: 'mc', q: 'Which is the most neutral, always-correct way?', options: ['Tu parles anglais ?', 'Est-ce que tu parles anglais ?', 'Parles-tu anglais ?', 'Anglais tu parles ?'], answer: 1, explain: 'est-ce que works in any register.' },
            { type: 'fill', q: '___ est la gare ? (Where)', answer: ['où', 'Où'], explain: 'où = where (with the accent!).', accentHint: true },
            { type: 'mc', q: 'Inversion of "il parle":', options: ['Parle il ?', 'Parle-t-il ?', 'Il-parle ?', 'Parle-il ?'], answer: 1, explain: 'Add -t- between two vowels.' },
            { type: 'fill', q: '___ ça coûte ? (How much)', answer: ['combien', 'Combien'], explain: 'combien = how much.' },
            { type: 'mc', q: '"What are you doing?" =', options: ["Qu'est-ce que tu fais ?", 'Quoi est-ce tu fais ?', 'Que tu fais ?', 'Est-ce que quoi tu fais ?'], answer: 0, explain: "qu'est-ce que = what (+ est-ce que)." },
            { type: 'mc', q: 'What does the -t- in "Aime-t-elle" mean?', options: ['"the"', 'nothing — it just makes it easier to say', '"to"', 'past tense'], answer: 1, explain: 'It is only a sound bridge between two vowels.' },
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
          summary: 'The everyday past tense for completed actions: "I ate", "I have eaten".',
          body: `<p>The [[passé composé]] ("compound past") is the past [[tense]] French uses in conversation for things that happened and finished: "I ate", "she called", "we have seen". It's "compound" because it's built from two words, just like English "I <b>have eaten</b>".</p>

<h3>The recipe</h3>
<p class="callout">present of {{avoir}} + past [[participle]]<br>{{j'ai mangé}} = I ate / I have eaten</p>
<p>{{avoir}} here is an [[auxiliary]] (helper verb): it carries the person ({{j'ai}}, {{tu as}}, {{il a}}…) while the participle carries the meaning. One French form covers both English "I ate" and "I have eaten".</p>

<h3>Making the past participle</h3>
<p>Regular verbs follow the infinitive's ending:</p>
<ul><li>-er → <b>-é</b>: {{parler}} → {{parlé|spoken}}, {{manger}} → {{mangé|eaten}}</li><li>-ir → <b>-i</b>: {{finir}} → {{fini|finished}}</li><li>-re → <b>-u</b>: {{vendre}} → {{vendu|sold}}</li></ul>
<p>Common [[irregular]] ones to memorise: {{eu|had}} (avoir), {{été|been}} (être), {{fait|done/made}} (faire), {{pris|taken}} (prendre), {{vu|seen}} (voir), {{bu|drunk}} (boire), {{lu|read}} (lire), {{écrit|written}} (écrire), {{dit|said}} (dire), {{mis|put}} (mettre), {{pu|been able}} (pouvoir), {{voulu|wanted}} (vouloir).</p>

<h3>Saying "not"</h3>
<p>{{ne}} … {{pas}} wraps around the helper verb only, not the participle: {{Je n'ai pas fini.|I haven't finished.}}</p>
<p>Time words like {{hier|yesterday}}, {{ce matin|this morning}}, {{la semaine dernière|last week}} often signal the passé composé.</p>`,
          examples: [
            ["Hier, j'ai vu un bon film.", 'Yesterday I saw a good film.', "Hier=yesterday|j'=I|ai=have|vu=seen|un=a|bon=good|film=film"],
            ['Nous avons fini le projet.', 'We finished the project.', 'Nous=we|avons=have|fini=finished|le=the|projet=project'],
            ['Tu as pris le train ?', 'Did you take the train?', 'Tu=you|as=have|pris=taken|le=the|train=train'],
            ["Il n'a rien dit.", "He didn't say anything.", "Il=he|n'=(negative)|a=has|rien=nothing|dit=said"],
            ["Elle a acheté une robe.", 'She bought a dress.', 'Elle=she|a=has|acheté=bought|une=a|robe=dress'],
          ],
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
          summary: 'Movement & change-of-state verbs use être instead of avoir, and the participle changes to match.',
          body: `<p>A small group of verbs build the [[passé composé]] with {{être}} instead of {{avoir}} as the [[auxiliary]]. They are mostly verbs of <b>movement or change of state</b> (going, coming, being born, dying). {{Je suis allé}} literally looks like "I am gone", but it means "I went".</p>

<h3>Which verbs? DR & MRS VANDERTRAMP</h3>
<p>This classic memory trick lists them: <b>D</b>evenir (become), <b>R</b>evenir (come back), <b>M</b>onter (go up), <b>R</b>ester (stay), <b>S</b>ortir (go out), <b>V</b>enir (come), <b>A</b>ller (go), <b>N</b>aître (be born), <b>D</b>escendre (go down), <b>E</b>ntrer (enter), <b>R</b>entrer (come home), <b>T</b>omber (fall), <b>R</b>etourner (return), <b>A</b>rriver (arrive), <b>M</b>ourir (die), <b>P</b>artir (leave). Everything else uses {{avoir}}.</p>
<p>All [[reflexive]] verbs (verbs with {{me}}, {{te}}, {{se}}… like {{se lever|to get up}}) also use {{être}}: {{Je me suis levé.|I got up.}}</p>

<h3>The participle must match</h3>
<p>With {{être}}, the [[participle]] behaves like an [[adjective]] and shows [[agreement]] with the subject: add <b>-e</b> if the subject is feminine, <b>-s</b> if plural, <b>-es</b> if both.</p>
<table class="conj"><tr><th></th><th>Masculine</th><th>Feminine</th></tr>
<tr><td>one</td><td>{{Il est parti.}}</td><td>{{Elle est partie.}}</td></tr>
<tr><td>several</td><td>{{Ils sont partis.}}</td><td>{{Elles sont parties.}}</td></tr></table>
<p>Usually you can't hear these endings ({{parti}} and {{partie}} sound the same), but you must write them.</p>`,
          examples: [
            ['Elle est née en 1990.', 'She was born in 1990.', 'Elle=she|est=is|née=born (fem.)|en=in|1990=1990'],
            ['Nous sommes allés à la plage.', 'We went to the beach.', 'Nous=we|sommes=are|allés=gone (plural)|à=to|la=the|plage=beach'],
            ['Les filles sont rentrées tard.', 'The girls came home late.', 'Les=the|filles=girls|sont=are|rentrées=come home (fem. plural)|tard=late'],
            ['Je me suis réveillée à six heures.', 'I (a woman) woke up at six.', 'Je=I|me=myself|suis=am|réveillée=woken (fem.)|à=at|six=six|heures=hours (o\'clock)'],
            ['Il est tombé dans la rue.', 'He fell in the street.', 'Il=he|est=is|tombé=fallen|dans=in|la=the|rue=street'],
          ],
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
          summary: 'Two past tenses: background scenery vs. events that happened.',
          body: `<p>French has two everyday past tenses, and choosing between them is one of the big intermediate hurdles. English sometimes makes the same distinction: "I <b>was reading</b>" vs "I <b>read</b>".</p>

<h3>The imparfait (imperfect)</h3>
<p>The [[imperfect|imparfait]] is for <b>background</b>: descriptions, ongoing situations, feelings, and habits. It translates "was doing", "used to do", or a plain "was".</p>
<p><b>How to form it:</b> take the {{nous}} form of the present, chop off -ons, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. {{nous parlons}} → <b>parl-</b> → {{je parlais|I was speaking / I used to speak}}. The only irregular one is {{être}}: {{j'étais|I was}}. The endings -ais, -ait, -aient all sound the same ("eh").</p>

<h3>The passé composé</h3>
<p>The [[passé composé]] (previous lessons) is for <b>events</b>: specific completed actions that moved the story forward.</p>

<h3>The film analogy</h3>
<p>Imagine a film. The imparfait is the <i>scenery</i> (it was raining, people were walking). The passé composé is the <i>action</i> (suddenly a car crashed).</p>
<p class="callout">{{Il pleuvait quand je suis sorti.}} — It <b>was raining</b> (scenery, imparfait) when I <b>went out</b> (event, passé composé).</p>

<h3>Clue words</h3>
<ul><li>Imparfait: {{souvent|often}}, {{tous les jours|every day}}, {{d'habitude|usually}}, {{quand j'étais petit|when I was little}}</li><li>Passé composé: {{soudain|suddenly}}, {{hier|yesterday}}, {{une fois|once}}, {{tout à coup|all of a sudden}}</li></ul>`,
          examples: [
            ["Quand j'étais petit, je jouais au foot.", 'When I was little, I used to play football.', "Quand=when|j'=I|étais=was|petit=little|je=I|jouais=used to play|au=(at) the|foot=football"],
            ['Je lisais quand le téléphone a sonné.', 'I was reading when the phone rang.', 'Je=I|lisais=was reading|quand=when|le=the|téléphone=phone|a=has|sonné=rung'],
            ['Il faisait beau et les enfants étaient contents.', 'The weather was nice and the children were happy.', 'Il=it|faisait=was making (weather)|beau=nice|et=and|les=the|enfants=children|étaient=were|contents=happy'],
            ['Soudain, elle a crié.', 'Suddenly, she screamed.', 'Soudain=suddenly|elle=she|a=has|crié=screamed'],
          ],
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
          summary: 'Small words that replace nouns so you don\'t repeat yourself, and they go before the verb.',
          body: `<p>English says "I see Marie → I see <b>her</b>". French does the same with [[object pronoun|object pronouns]], with one big difference: they go <b>before</b> the conjugated verb. {{Je vois Marie}} → {{Je la vois}} (literally "I her see"). In the [[passé composé]] they go before the helper verb: {{Je l'ai vue}}.</p>

<h3>The four kinds</h3>
<ul><li><b>Direct</b> [[direct object|object]] ({{le}}, {{la}}, {{l'}}, {{les}}) — the thing or person the verb acts on directly: {{Je vois Marie}} → {{Je la vois|I see her}}.</li>
<li><b>Indirect</b> [[indirect object|object]] ({{lui|to him/her}}, {{leur|to them}}) — a person after {{à}} ("to"): {{Je parle à Paul}} → {{Je lui parle|I talk to him}}.</li>
<li>{{y}} — "there", replacing {{à}} + a place or thing: {{Je vais à Paris}} → {{J'y vais|I'm going there}}.</li>
<li>{{en}} — "some / of it / of them", replacing {{de}} + noun, or anything with a quantity: {{Je mange des pommes}} → {{J'en mange|I eat some}}; {{J'en ai trois|I have three (of them)}}.</li></ul>
<p>{{me}}, {{te}}, {{nous}}, {{vous}} work as both direct and indirect: {{Il me voit|he sees me}}, {{Il me parle|he talks to me}}.</p>

<h3>Order when you have two</h3>
<p><b>me/te/se/nous/vous → le/la/les → lui/leur → y → en</b>. {{Je le lui donne.|I give it to him.}} {{Il y en a.|There are some (of them).}}</p>

<h3>Agreement trap</h3>
<p>In the passé composé, a direct object pronoun placed before {{avoir}} makes the participle match it ([[agreement]]): {{Les lettres ? Je les ai écrites.}} (lettres is feminine plural → écrit<b>es</b>).</p>`,
          examples: [
            ['Tu connais Léa ? Oui, je la connais.', 'Do you know Léa? Yes, I know her.', 'Tu=you|connais=know|Léa=Léa|Oui=yes|je=I|la=her|connais=know'],
            ['Tu as parlé à tes parents ? Oui, je leur ai parlé.', 'Did you talk to your parents? Yes, I talked to them.', 'Tu=you|as=have|parlé=spoken|à=to|tes=your|parents=parents|Oui=yes|je=I|leur=to them|ai=have|parlé=spoken'],
            ["Tu vas au Canada ? Oui, j'y vais en juin.", "Are you going to Canada? Yes, I'm going there in June.", "Tu=you|vas=go|au=to (the)|Canada=Canada|Oui=yes|j'=I|y=there|vais=go|en=in|juin=June"],
            ["Tu veux du café ? Non merci, j'en ai déjà bu.", 'Want some coffee? No thanks, I already had some.', "Tu=you|veux=want|du=some|café=coffee|Non=no|merci=thanks|j'=I|en=some (of it)|ai=have|déjà=already|bu=drunk"],
          ],
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
          summary: 'The verb form for wishes, feelings, doubt and necessity, usually after que.',
          body: `<p>So far your verbs have been in the [[indicative]]: the normal form for stating facts. The [[subjunctive]] (subjonctif) is a different set of forms, a different [[mood]], used when the sentence is about something wished for, felt, doubted or required rather than simply stated. It almost always appears in a second [[clause]] that starts with {{que|that}}. English has traces of it: "I insist that he <b>be</b> on time", "If I <b>were</b> you".</p>

<h3>Formation</h3>
<p>Take the {{ils}} form of the present, drop -ent, add <b>-e, -es, -e, -ions, -iez, -ent</b>. {{ils finissent}} → {{que je finisse}}. For nous/vous, use the {{nous}} stem: {{que nous prenions}}.</p>
<p>Irregular: {{être}} (sois, soit, soyons), {{avoir}} (aie, ait, ayons), {{aller}} (aille), {{faire}} (fasse), {{pouvoir}} (puisse), {{savoir}} (sache), {{vouloir}} (veuille).</p>

<h3>Triggers</h3>
<ul><li><b>Wish / will</b>: {{vouloir que|to want that}}, {{souhaiter que|to wish that}}, {{exiger que|to demand that}}</li><li><b>Emotion</b>: {{être content que|to be glad that}}, {{avoir peur que|to fear that}}, {{regretter que|to be sorry that}}</li><li><b>Necessity</b>: {{il faut que|it is necessary that}}, {{il est important que|it's important that}}</li><li><b>Doubt / denial</b>: {{douter que|to doubt that}}, {{je ne pense pas que|I don't think that}}</li><li><b>Certain [[conjunction|conjunctions]]</b>: {{bien que|although}}, {{pour que|so that}}, {{avant que|before}}, {{à moins que|unless}}, {{sans que|without}}</li></ul>

<h3>Same subject → infinitive</h3>
<p>If both halves have the same person, skip {{que}} and use the [[infinitive]]: {{Je veux partir|I want to leave}} (not ✗ <i>je veux que je parte</i>).</p>
<p>Note: {{après que}} takes the indicative in standard grammar, and {{penser que}} (positive) takes the indicative too. Only the negative or question form ({{je ne pense pas que}}) triggers doubt.</p>`,
          examples: [
            ['Il faut que tu fasses attention.', 'You must be careful.', 'Il=it|faut=is necessary|que=that|tu=you|fasses=make (subjunctive)|attention=attention'],
            ['Je suis ravie que vous soyez venus.', "I'm delighted you came.", 'Je=I|suis=am|ravie=delighted (fem.)|que=that|vous=you|soyez=are (subjunctive)|venus=come'],
            ["Bien qu'il pleuve, on sort.", "Although it's raining, we're going out.", "Bien=well|qu'=that (bien que = although)|il=it|pleuve=rains (subjunctive)|on=we|sort=go out"],
            ["Je ne pense pas qu'elle puisse venir.", "I don't think she can come.", "Je=I|ne=(negative)|pense=think|pas=not|qu'=that|elle=she|puisse=can (subjunctive)|venir=come"],
          ],
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
          summary: '"Would", and how to build "if…" sentences with the right tenses.',
          body: `<p>The [[conditional]] (conditionnel) is the "would" form: {{je parlerais|I would speak}}. Form it with the future stem (usually the infinitive) + the [[imperfect]] endings: {{je parlerais}}, {{nous serions}}, {{ils auraient}}, {{je ferais}}, {{j'irais}}, {{je viendrais}}.</p>

<h3>"If" sentences</h3>
<p>A [[si-clause]] is the "if…" half of a sentence. French pairs specific tenses in each half:</p>
<table class="conj"><tr><th>si + …</th><th>Main clause</th><th>Meaning</th></tr><tr><td>present</td><td>present / future / command</td><td>real possibility</td></tr><tr><td>imparfait</td><td>conditionnel présent</td><td>imaginary now ("if I had… I would")</td></tr><tr><td>plus-que-parfait ([[pluperfect]])</td><td>conditionnel passé</td><td>didn't happen ("if I had had… I would have")</td></tr></table>
<p><b>Never</b> put the conditional or future directly after {{si}} meaning "if": ✗ <i>si j'aurais</i>. (English does the same: not "if I would have".)</p>
<p>The conditional also softens requests ({{Vous pourriez…|Could you…}}) and, in journalism, reports unconfirmed news ({{Le président serait malade}} — "the president is reportedly ill").</p>`,
          examples: [
            ["Si j'avais le temps, j'apprendrais le japonais.", "If I had time, I'd learn Japanese.", "Si=if|j'=I|avais=had|le=the|temps=time|j'=I|apprendrais=would learn|le=the|japonais=Japanese"],
            ['Si tu étais venu, tu te serais amusé.', 'If you had come, you would have had fun.', 'Si=if|tu=you|étais=had (lit. were)|venu=come|tu=you|te=yourself|serais=would have (lit. would be)|amusé=amused (s\'amuser = have fun)'],
            ['Si tu finis tôt, appelle-moi.', 'If you finish early, call me.', 'Si=if|tu=you|finis=finish|tôt=early|appelle=call|moi=me'],
            ["Selon la presse, l'accord serait signé demain.", 'According to the press, the deal will reportedly be signed tomorrow.', "Selon=according to|la=the|presse=press|l'=the|accord=deal|serait=would be (reportedly)|signé=signed|demain=tomorrow"],
          ],
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
          summary: 'The "who / which / that / whose" words that link ideas like a native writer.',
          body: `<p>A [[relative pronoun]] links a noun to a [[clause]] that describes it, like English "the man <b>who</b> speaks", "the book <b>that</b> I'm reading". The noun it refers back to is the [[antecedent]]. French picks the word based on the job it does in the second clause.</p>
<ul><li>{{qui}} — the [[subject]] of the next verb: {{l'homme qui parle|the man who speaks}}</li>
<li>{{que}} — the [[direct object]]: {{le livre que je lis|the book (that) I'm reading}}. Unlike English, it can never be left out.</li>
<li>{{dont}} — replaces {{de}} + noun: {{le film dont je t'ai parlé|the film I told you about}} (parler <b>de</b>), {{la femme dont le fils est médecin|the woman whose son is a doctor}}</li>
<li>{{où}} — place <i>and time</i>: {{le jour où je t'ai rencontré|the day (when) I met you}}</li>
<li>{{lequel / laquelle / lesquels / lesquelles}} — after other [[preposition|prepositions]], matching the antecedent's [[gender]] and number: {{la raison pour laquelle|the reason for which}}, {{le stylo avec lequel|the pen with which}}. With à/de they merge ([[contraction]]): {{auquel}}, {{duquel}}.</li>
<li>{{ce qui / ce que / ce dont}} — "what", when there's no noun before it: {{Ce qui m'énerve, c'est…|What annoys me is…}}, {{Dis-moi ce que tu veux.|Tell me what you want.}}, {{C'est ce dont j'ai besoin.|That's what I need.}}</li></ul>`,
          examples: [
            ["C'est le livre dont tout le monde parle.", "It's the book everyone's talking about.", "C'=it|est=is|le=the|livre=book|dont=of which / about which|tout=all|le=the|monde=world (tout le monde = everyone)|parle=talks"],
            ['Voilà la raison pour laquelle je suis parti.', "That's the reason why I left.", 'Voilà=there is|la=the|raison=reason|pour=for|laquelle=which|je=I|suis=am|parti=left'],
            ["Ce que j'aime chez lui, c'est sa franchise.", 'What I like about him is his frankness.', "Ce=that|que=which (ce que = what)|j'=I|aime=like|chez=in (lit. at the home of)|lui=him|c'=it|est=is|sa=his|franchise=frankness"],
            ['Le projet auquel je pense est ambitieux.', "The project I'm thinking about is ambitious.", 'Le=the|projet=project|auquel=about which (à + lequel)|je=I|pense=think|est=is|ambitieux=ambitious'],
          ],
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
          summary: 'Recognise the past tense of novels and history books.',
          body: `<p>The [[passé simple]] is a one-word past tense that replaces the [[passé composé]] in formal writing: novels, history, fairy tales. Nobody uses it in conversation, so you rarely need to produce it, but you must <b>recognise it instantly</b> when reading, especially the il/elle and ils/elles forms.</p>
<ul><li>-er verbs: {{il parla|he spoke}}, {{ils parlèrent|they spoke}}</li><li>-ir/-re verbs: {{il finit|he finished}}, {{ils finirent}}; {{il vendit|he sold}}</li><li>Irregulars: {{il fut|he was}} (être), {{il eut|he had}} (avoir), {{il fit|he did}} (faire), {{il vint|he came}} (venir), {{il vit|he saw}} (voir), {{il prit|he took}} (prendre), {{il put|he could}} (pouvoir), {{il naquit|he was born}} (naître), {{il mourut|he died}} (mourir)</li></ul>
<p>Watch out: {{il finit}} is both present and passé simple; {{il vit}} can be "he lives" (vivre) or "he saw" (voir). Context decides.</p>
<p>The [[imperfect|imparfait]] still provides the background in literary texts: {{La nuit tombait quand il entra.|Night was falling when he came in.}}</p>`,
          examples: [
            ['Victor Hugo naquit en 1802.', 'Victor Hugo was born in 1802.', 'Victor=Victor|Hugo=Hugo|naquit=was born (passé simple)|en=in|1802=1802'],
            ['Elle ouvrit la porte et poussa un cri.', 'She opened the door and let out a scream.', 'Elle=she|ouvrit=opened|la=the|porte=door|et=and|poussa=pushed (let out)|un=a|cri=cry'],
            ['Ils furent surpris par la tempête.', 'They were surprised by the storm.', 'Ils=they|furent=were|surpris=surprised|par=by|la=the|tempête=storm'],
          ],
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
