// Spanish course content. {{…}} marks Spanish text inside English explanations (made clickable).
export default {
  code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸',
  elisions: [],

  dictionary: {
    'ser': {
      pos: 'verb (irregular)', def: 'to be (identity, origin, characteristics, time)',
      forms: ['soy', 'eres', 'es', 'somos', 'sois', 'son', 'fui', 'fuiste', 'fue', 'fuimos', 'fueron', 'era', 'eras', 'éramos', 'eran', 'sea', 'seas', 'seamos', 'sean', 'fuera', 'fueras', 'fuéramos', 'fueran', 'sido', 'seré', 'sería'],
      conj: [
        { title: 'Presente', rows: [['yo', 'soy'], ['tú', 'eres'], ['él/ella/usted', 'es'], ['nosotros', 'somos'], ['vosotros', 'sois'], ['ellos/ustedes', 'son']] },
        { title: 'Pretérito', rows: [['yo', 'fui'], ['tú', 'fuiste'], ['él/ella', 'fue'], ['nosotros', 'fuimos'], ['vosotros', 'fuisteis'], ['ellos', 'fueron']] },
        { title: 'Imperfecto', rows: [['yo', 'era'], ['tú', 'eras'], ['él/ella', 'era'], ['nosotros', 'éramos'], ['vosotros', 'erais'], ['ellos', 'eran']] },
        { title: 'Subjuntivo presente', rows: [['yo', 'sea'], ['tú', 'seas'], ['él/ella', 'sea'], ['nosotros', 'seamos'], ['vosotros', 'seáis'], ['ellos', 'sean']] },
      ],
      examples: [['Soy de Chicago.', "I'm from Chicago."], ['La fiesta es en mi casa.', 'The party is (takes place) at my house.'], ['Es listo. / Está listo.', "He's clever. / He's ready."]],
      mnemonic: 'DOCTOR for ser: Description, Occupation, Characteristic, Time, Origin, Relationship.',
      notes: 'Events "take place" with ser: La reunión es en la sala 3.',
    },
    'estar': {
      pos: 'verb (irregular)', def: 'to be (location, states, progressive)',
      forms: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron', 'estaba', 'estaban', 'esté', 'estés', 'estemos', 'estén', 'estuviera', 'estuvieran', 'estado'],
      conj: [
        { title: 'Presente', rows: [['yo', 'estoy'], ['tú', 'estás'], ['él/ella/usted', 'está'], ['nosotros', 'estamos'], ['vosotros', 'estáis'], ['ellos/ustedes', 'están']] },
        { title: 'Pretérito', rows: [['yo', 'estuve'], ['tú', 'estuviste'], ['él/ella', 'estuvo'], ['nosotros', 'estuvimos'], ['vosotros', 'estuvisteis'], ['ellos', 'estuvieron']] },
        { title: 'Subjuntivo presente', rows: [['yo', 'esté'], ['tú', 'estés'], ['él/ella', 'esté'], ['nosotros', 'estemos'], ['vosotros', 'estéis'], ['ellos', 'estén']] },
      ],
      examples: [['Estoy cansado.', "I'm tired."], ['¿Dónde está el baño?', 'Where is the bathroom?'], ['Estamos comiendo.', "We're eating."]],
      mnemonic: 'PLACE for estar: Position, Location, Action (-ndo), Condition, Emotion. "How you feel and where you are is how you use estar."',
      notes: 'With adjectives, estar often signals a change or a subjective impression: ¡Qué guapa estás!',
    },
    'tener': {
      pos: 'verb (irregular)', def: 'to have',
      forms: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen', 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron', 'tenía', 'tenga', 'tengas', 'tengamos', 'tengan', 'tuviera', 'tendré', 'tendría', 'tenido'],
      conj: [
        { title: 'Presente', rows: [['yo', 'tengo'], ['tú', 'tienes'], ['él/ella', 'tiene'], ['nosotros', 'tenemos'], ['vosotros', 'tenéis'], ['ellos', 'tienen']] },
        { title: 'Pretérito', rows: [['yo', 'tuve'], ['tú', 'tuviste'], ['él/ella', 'tuvo'], ['nosotros', 'tuvimos'], ['vosotros', 'tuvisteis'], ['ellos', 'tuvieron']] },
        { title: 'Subjuntivo imperfecto', rows: [['yo', 'tuviera'], ['tú', 'tuvieras'], ['él/ella', 'tuviera'], ['nosotros', 'tuviéramos'], ['vosotros', 'tuvierais'], ['ellos', 'tuvieran']] },
      ],
      examples: [['Tengo dos hermanos.', 'I have two siblings.'], ['Tienes que estudiar.', 'You have to study.'], ['Tenemos hambre.', "We're hungry."]],
      mnemonic: 'TENer — your TEN fingers are what you HAVE to hold things.',
      notes: 'tener que + infinitive = to have to.',
    },
    'hacer': {
      pos: 'verb (irregular)', def: 'to do, to make',
      forms: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen', 'hice', 'hiciste', 'hizo', 'hicimos', 'hicieron', 'hacía', 'haga', 'hagas', 'hagamos', 'hagan', 'hiciera', 'haré', 'haría', 'hecho', 'haz'],
      conj: [
        { title: 'Presente', rows: [['yo', 'hago'], ['tú', 'haces'], ['él/ella', 'hace'], ['nosotros', 'hacemos'], ['vosotros', 'hacéis'], ['ellos', 'hacen']] },
        { title: 'Pretérito', rows: [['yo', 'hice'], ['tú', 'hiciste'], ['él/ella', 'hizo'], ['nosotros', 'hicimos'], ['vosotros', 'hicisteis'], ['ellos', 'hicieron']] },
      ],
      examples: [['Hace calor.', "It's hot."], ['Hace dos años que vivo aquí.', "I've lived here for two years."], ['¿Qué hiciste ayer?', 'What did you do yesterday?']],
      mnemonic: '"Hizo" — the z hisses: "he did it, sssss!"',
      notes: 'hace + time = ago / for: hace un mes (a month ago).',
    },
    'ir': {
      pos: 'verb (irregular)', def: 'to go',
      forms: ['voy', 'vas', 'va', 'vamos', 'vais', 'van', 'iba', 'ibas', 'íbamos', 'iban', 'vaya', 'vayas', 'vayamos', 'vayan', 'ido', 'yendo', 'iré', 'iría'],
      conj: [
        { title: 'Presente', rows: [['yo', 'voy'], ['tú', 'vas'], ['él/ella', 'va'], ['nosotros', 'vamos'], ['vosotros', 'vais'], ['ellos', 'van']] },
        { title: 'Pretérito (= ser)', rows: [['yo', 'fui'], ['tú', 'fuiste'], ['él/ella', 'fue'], ['nosotros', 'fuimos'], ['vosotros', 'fuisteis'], ['ellos', 'fueron']] },
        { title: 'Imperfecto', rows: [['yo', 'iba'], ['tú', 'ibas'], ['él/ella', 'iba'], ['nosotros', 'íbamos'], ['vosotros', 'ibais'], ['ellos', 'iban']] },
      ],
      examples: [['Voy al trabajo en bici.', 'I go to work by bike.'], ['Vamos a cenar.', "We're going to have dinner."], ['¡Vámonos!', "Let's go!"]],
      mnemonic: 'ir → "VAMOS" → "VAMOOSE!" (English borrowed it).',
      notes: 'ir a + infinitive = near future.',
    },
    'poder': {
      pos: 'verb (stem-changing o→ue, irregular)', def: 'to be able to, can',
      forms: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden', 'pude', 'pudiste', 'pudo', 'pudimos', 'pudieron', 'podía', 'pueda', 'puedas', 'podamos', 'puedan', 'pudiera', 'podré', 'podría'],
      conj: [
        { title: 'Presente', rows: [['yo', 'puedo'], ['tú', 'puedes'], ['él/ella', 'puede'], ['nosotros', 'podemos'], ['vosotros', 'podéis'], ['ellos', 'pueden']] },
        { title: 'Pretérito', rows: [['yo', 'pude'], ['tú', 'pudiste'], ['él/ella', 'pudo'], ['nosotros', 'pudimos'], ['vosotros', 'pudisteis'], ['ellos', 'pudieron']] },
      ],
      examples: [['¿Puedes ayudarme?', 'Can you help me?'], ['No pude dormir.', "I couldn't (didn't manage to) sleep."]],
      mnemonic: 'PODer = POWer (same root as "potent").',
      notes: 'Preterite pude = managed to; no pude = failed to. Imperfect podía = was able (in general).',
    },
    'querer': {
      pos: 'verb (stem-changing e→ie, irregular)', def: 'to want; to love',
      forms: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren', 'quise', 'quisiste', 'quiso', 'quisimos', 'quisieron', 'quería', 'quiera', 'quieras', 'quisiera', 'querría'],
      conj: [{ title: 'Presente', rows: [['yo', 'quiero'], ['tú', 'quieres'], ['él/ella', 'quiere'], ['nosotros', 'queremos'], ['vosotros', 'queréis'], ['ellos', 'quieren']] }],
      examples: [['Quiero un café.', 'I want a coffee.'], ['Te quiero.', 'I love you.'], ['Quisiera hacer una reserva.', "I'd like to make a reservation."]],
      mnemonic: 'QUERer — you go on a QUEst for what you want.',
      notes: 'Preterite quise = tried; no quise = refused.',
    },
    'gustar': {
      pos: 'verb (like-type)', def: 'to be pleasing → to like',
      forms: ['gusta', 'gustan', 'gustó', 'gustaba', 'gustaría', 'guste'],
      conj: [{ title: 'Pattern', rows: [['me', 'gusta(n)'], ['te', 'gusta(n)'], ['le', 'gusta(n)'], ['nos', 'gusta(n)'], ['os', 'gusta(n)'], ['les', 'gusta(n)']] }],
      examples: [['Me gusta el chocolate.', 'I like chocolate.'], ['Nos gustan los perros.', 'We like dogs.'], ['¿Te gustaría venir?', 'Would you like to come?']],
      mnemonic: 'Think "GUSTo": things give ME gusto. The thing liked is the subject.',
      notes: 'Same pattern: encantar, interesar, molestar, faltar, doler.',
    },
    'decir': {
      pos: 'verb (irregular)', def: 'to say, to tell',
      forms: ['digo', 'dices', 'dice', 'decimos', 'dicen', 'dije', 'dijiste', 'dijo', 'dijimos', 'dijeron', 'diga', 'digas', 'dijera', 'diré', 'diría', 'dicho', 'di'],
      conj: [
        { title: 'Presente', rows: [['yo', 'digo'], ['tú', 'dices'], ['él/ella', 'dice'], ['nosotros', 'decimos'], ['vosotros', 'decís'], ['ellos', 'dicen']] },
        { title: 'Pretérito', rows: [['yo', 'dije'], ['tú', 'dijiste'], ['él/ella', 'dijo'], ['nosotros', 'dijimos'], ['vosotros', 'dijisteis'], ['ellos', 'dijeron']] },
      ],
      examples: [['¿Qué dices?', 'What are you saying?'], ['Me dijo que vendría.', 'He told me he would come.']],
      mnemonic: 'DICtate, DICtionary — DECIR is about words.',
      notes: '"Dijeron" not "dijieron" — j-stem preterites drop the i.',
    },
    'casa': { pos: 'noun (f.)', def: 'house, home', forms: ['casas'], examples: [['Estoy en casa.', "I'm at home."]], mnemonic: 'CASA → "Casablanca" = white house.' },
    'gracias': { pos: 'interjection', def: 'thank you', examples: [['Muchas gracias.', 'Thank you very much.']], mnemonic: 'GRACIAS ~ GRACious.' },
    'aunque': { pos: 'conjunction', def: 'although, even if', examples: [['Aunque llueve, salgo.', "Although it's raining, I'm going out."], ['Aunque llueva, saldré.', 'Even if it rains, I will go out.']], mnemonic: 'Indicative = fact ("although it is"); subjunctive = hypothetical ("even if").', notes: 'Mood changes the meaning — a classic advanced distinction.' },
    'ojalá': { pos: 'interjection', def: 'I hope, if only', examples: [['Ojalá que no llueva.', 'I hope it doesn\'t rain.'], ['Ojalá estuvieras aquí.', 'I wish you were here.']], mnemonic: 'From Arabic "law šá lláh" (if God wills). Always + subjunctive.' },
    'quizás': { pos: 'adverb', def: 'perhaps, maybe', forms: ['quizá'], examples: [['Quizás venga mañana.', 'Maybe he\'ll come tomorrow.']], mnemonic: '"Quiz-ás" — a quiz: maybe right, maybe wrong.', notes: 'Subjunctive = more doubt; indicative = more likely.' },
  },

  levels: {
    beginner: {
      grammar: [
        {
          id: 'es-b-1', title: 'Ser vs. estar',
          summary: 'The words for I / you / he / she / we / they, and Spanish\'s two verbs for "to be".',
          body: `<p>English has one verb "to be". Spanish has <b>two</b>: {{ser}} and {{estar}}. Before we sort them out, meet the people who do the verbs.</p>

<h3>Subject pronouns</h3>
<p>A [[verb]] is an action or state word. The [[subject]] is whoever does it. Words like "I, you, she" that stand in for a person are [[pronoun|pronouns]]; used as the subject they're [[subject pronoun|subject pronouns]].</p>
<table class="conj"><tr><th>Spanish</th><th>English</th><th>Notes</th></tr>
<tr><td>{{yo}}</td><td>I</td><td></td></tr>
<tr><td>{{tú}}</td><td>you (friendly)</td><td>One person you know well. The accent matters: {{tu}} without it means "your".</td></tr>
<tr><td>{{usted}}</td><td>you (polite)</td><td>Strangers, elders, at work. It uses the <b>same verb form as él/ella</b>.</td></tr>
<tr><td>{{él}} / {{ella}}</td><td>he / she</td><td>{{él}} with an accent = "he"; {{el}} without = "the".</td></tr>
<tr><td>{{nosotros}} / {{nosotras}}</td><td>we</td><td>{{nosotras}} for an all-female group.</td></tr>
<tr><td>{{vosotros}} / {{vosotras}}</td><td>you (plural, friendly)</td><td>Used only in Spain.</td></tr>
<tr><td>{{ustedes}}</td><td>you (plural)</td><td>In Latin America this is the only plural "you". Same verb form as ellos.</td></tr>
<tr><td>{{ellos}} / {{ellas}}</td><td>they</td><td>{{ellos}} for men or mixed groups; {{ellas}} for all-female groups.</td></tr></table>
<p>Spanish verbs change form for each person (this is called [[conjugation]]), and the form already tells you who's doing it. So Spanish usually <b>leaves the pronoun out</b>: {{Soy de México}} = "I'm from Mexico" (no {{yo}} needed).</p>

<h3>ser — what something IS</h3>
<p>Use {{ser}} for identity and lasting characteristics: what something is, what it's like, where it's from, what time it is. Memory trick, <b>DOCTOR</b>: Description, Occupation, Characteristic, Time, Origin, Relationship.</p>
<p class="callout">{{Soy profesora.|I'm a teacher.}} {{Es la una.|It's one o'clock.}} {{Somos de México.|We're from Mexico.}}</p>

<h3>estar — how or where something IS right now</h3>
<p>Use {{estar}} for location and temporary states: where something is, how someone feels, what condition it's in. Memory trick, <b>PLACE</b>: Position, Location, Action in progress, Condition, Emotion.</p>
<p class="callout">{{Estoy en casa.|I'm at home.}} {{Está enfermo.|He's sick.}} {{Estamos contentos.|We're happy.}}</p>

<div class="callout warn"><b>Same adjective, different verb:</b> {{Mi hermana es alta}} (my sister is tall — that's what she's like) vs {{Mi hermana está cansada}} (my sister is tired — right now). And note: no word for "a" before jobs after {{ser}}: {{Ella es doctora}} = "She is <i>a</i> doctor".</div>`,
          table: { title: 'Presente', headers: ['', 'ser', 'estar'], rows: [['yo', 'soy', 'estoy'], ['tú', 'eres', 'estás'], ['él/ella/usted', 'es', 'está'], ['nosotros', 'somos', 'estamos'], ['vosotros', 'sois', 'estáis'], ['ellos/ustedes', 'son', 'están']] },
          examples: [
            ['Mi hermana es alta.', 'My sister is tall.', 'Mi=my|hermana=sister|es=is (ser: what she\'s like)|alta=tall'],
            ['Mi hermana está cansada.', 'My sister is tired.', 'Mi=my|hermana=sister|está=is (estar: right now)|cansada=tired'],
            ['Madrid está en España.', 'Madrid is in Spain.', 'Madrid=Madrid|está=is (estar: location)|en=in|España=Spain'],
            ['Son las tres.', "It's three o'clock.", 'Son=are (ser: time)|las=the|tres=three (lit. "they are the three")'],
            ['Soy de México.', "I'm from Mexico.", 'Soy=I am (ser: origin)|de=from|México=Mexico'],
            ['Estamos contentos hoy.', "We're happy today.", 'Estamos=we are (estar: feeling)|contentos=happy|hoy=today'],
            ['Ella es profesora.', 'She is a teacher.', 'Ella=she|es=is (ser: job)|profesora=teacher'],
          ],
          vocab: [['alto/a', 'tall'], ['cansado/a', 'tired'], ['contento/a', 'happy'], ['enfermo/a', 'sick'], ['hoy', 'today'], ['la casa', 'the house'], ['en casa', 'at home']],
          exercises: [
            { type: 'mc', q: 'Yo ___ de Canadá.', options: ['soy', 'estoy', 'es', 'está'], answer: 0, explain: 'Origin → ser.' },
            { type: 'mc', q: 'El libro ___ en la mesa.', options: ['es', 'está', 'son', 'soy'], answer: 1, explain: 'Location → estar.' },
            { type: 'fill', q: 'Nosotros ___ muy contentos hoy.', answer: ['estamos'], explain: 'Emotion → estar.' },
            { type: 'fill', q: 'Ella ___ doctora.', answer: ['es'], explain: 'Occupation → ser.' },
            { type: 'mc', q: 'Which "you" uses the same verb form as él/ella?', options: ['tú', 'usted', 'vosotros', 'ustedes'], answer: 1, explain: 'usted (polite you) takes the él/ella form: usted es, usted está.' },
            { type: 'mc', q: '"Soy de Chile" — who is from Chile?', options: ['he', 'I', 'we', 'you'], answer: 1, explain: 'soy is the yo form, so the pronoun can be left out.' },
          ],
        },
        {
          id: 'es-b-2', title: 'Present tense: -ar, -er, -ir',
          summary: 'Three families of regular verbs, each with its own set of endings.',
          body: `<p>The [[infinitive]] is a verb's dictionary form, the "to ___" form. Spanish infinitives end in <b>-ar</b>, <b>-er</b> or <b>-ir</b>: {{hablar|to speak}}, {{comer|to eat}}, {{vivir|to live}}. Most verbs are [[regular]]: they follow the pattern for their family exactly.</p>

<h3>How to conjugate</h3>
<p>1. Chop off the last two letters. What's left is the [[stem]]: {{hablar}} → <b>habl-</b>.<br>
2. Add the [[ending]] for the subject.</p>
<table class="conj"><tr><th></th><th>-ar: hablar</th><th>-er: comer</th><th>-ir: vivir</th></tr>
<tr><td>yo</td><td>{{hablo}}</td><td>{{como}}</td><td>{{vivo}}</td></tr>
<tr><td>tú</td><td>{{hablas}}</td><td>{{comes}}</td><td>{{vives}}</td></tr>
<tr><td>él / ella / usted</td><td>{{habla}}</td><td>{{come}}</td><td>{{vive}}</td></tr>
<tr><td>nosotros</td><td>{{hablamos}}</td><td>{{comemos}}</td><td>{{vivimos}}</td></tr>
<tr><td>vosotros</td><td>{{habláis}}</td><td>{{coméis}}</td><td>{{vivís}}</td></tr>
<tr><td>ellos / ustedes</td><td>{{hablan}}</td><td>{{comen}}</td><td>{{viven}}</td></tr></table>
<p>Patterns that help: <b>yo always ends in -o</b>. -ar verbs use <b>a</b> in the endings; -er and -ir use <b>e</b>, and only differ for nosotros and vosotros.</p>

<h3>Leave out the pronoun</h3>
<p>Because each ending is different, the verb alone tells you who's speaking: {{Hablo español}} = "I speak Spanish". Add {{yo}}, {{tú}} etc. only for emphasis or contrast: {{Yo hablo español, ¿y tú?}}</p>

<h3>One form, three English meanings</h3>
<p>The Spanish [[present tense]] covers "I speak", "I'm speaking" and "I do speak". It can even mean near future: {{Mañana trabajo}} = "I'm working tomorrow".</p>

<h3>Saying "not"</h3>
<p>Just put {{no}} before the verb. There's no "do/does": {{No como carne.|I don't eat meat.}}</p>
<p><b>Questions:</b> raise your voice at the end. In writing, Spanish puts an upside-down {{¿}} at the start: {{¿Comes carne?|Do you eat meat?}}</p>`,
          examples: [
            ['Hablo inglés y español.', 'I speak English and Spanish.', 'Hablo=I speak|inglés=English|y=and|español=Spanish'],
            ['¿Comes carne?', 'Do you eat meat?', 'Comes=you eat|carne=meat'],
            ['Vivimos en Texas.', 'We live in Texas.', 'Vivimos=we live|en=in|Texas=Texas'],
            ['Mis padres trabajan mucho.', 'My parents work a lot.', 'Mis=my|padres=parents|trabajan=they work|mucho=a lot'],
            ['No bebo café.', "I don't drink coffee.", 'No=not|bebo=I drink|café=coffee'],
            ['Ella escribe una carta.', 'She is writing a letter.', 'Ella=she|escribe=writes|una=a|carta=letter'],
          ],
          vocab: [['hablar', 'to speak'], ['comer', 'to eat'], ['vivir', 'to live'], ['trabajar', 'to work'], ['beber', 'to drink'], ['escribir', 'to write'], ['no', 'not / no'], ['mucho', 'a lot']],
          exercises: [
            { type: 'fill', q: 'Nosotros ___ (vivir) en Lima.', answer: ['vivimos'], explain: '-ir, nosotros → -imos.' },
            { type: 'fill', q: 'Ellos ___ (comer) a las dos.', answer: ['comen'], explain: '-er, ellos → -en.' },
            { type: 'mc', q: '"You (tú) work a lot" =', options: ['Trabajo mucho.', 'Trabajas mucho.', 'Trabaja mucho.', 'Trabajan mucho.'], answer: 1, explain: 'tú → -as.' },
            { type: 'mc', q: '"I don\'t speak French" =', options: ['Hablo no francés.', 'No hablo francés.', 'Yo no hablas francés.', 'No hablar francés.'], answer: 1, explain: 'no goes right before the verb; yo → -o.' },
            { type: 'mc', q: 'What is the stem of "beber"?', options: ['beb-', 'bebe-', 'be-', 'beber'], answer: 0, explain: 'Chop off -er: beb-.' },
          ],
        },
        {
          id: 'es-b-3', title: 'Gustar & like-verbs',
          summary: 'Spanish says "chocolate pleases me" instead of "I like chocolate".',
          body: `<p>{{gustar}} is how you say "to like", but it's built backwards compared to English. Word for word, {{Me gusta el chocolate}} is "<b>To me</b> is pleasing the chocolate". The thing you like is the grammatical [[subject]]; the person who likes it is an [[indirect object]] ("to me", "to you").</p>

<h3>Step 1: who likes it?</h3>
<p>Start with one of these [[indirect object]] pronouns:</p>
<table class="conj"><tr><th>Pronoun</th><th>Means</th><th>Example</th></tr>
<tr><td>{{me}}</td><td>to me</td><td>{{me gusta}} — I like</td></tr>
<tr><td>{{te}}</td><td>to you</td><td>{{te gusta}} — you like</td></tr>
<tr><td>{{le}}</td><td>to him / her / you (usted)</td><td>{{le gusta}} — he / she likes</td></tr>
<tr><td>{{nos}}</td><td>to us</td><td>{{nos gusta}} — we like</td></tr>
<tr><td>{{os}}</td><td>to you all (Spain)</td><td>{{os gusta}} — you all like</td></tr>
<tr><td>{{les}}</td><td>to them / you all</td><td>{{les gusta}} — they like</td></tr></table>

<h3>Step 2: one thing or several?</h3>
<p>The verb matches the thing liked, <b>not</b> the person:</p>
<ul><li>{{gusta}} — one thing, or an action ([[infinitive]]): {{Me gusta el café.}} {{Me gusta bailar.}}</li><li>{{gustan}} — several things: {{Me gustan los tacos.}}</li></ul>
<p>So "we like tacos" is {{Nos gustan los tacos}}, not ✗ <i>nos gustamos</i>. And note the article: Spanish says "the tacos" ({{los tacos}}) when talking about things in general.</p>

<h3>Adding a name or for emphasis</h3>
<p>{{le}} could mean him, her or you, so Spanish often adds {{a}} + the person: {{A Ana le gusta el cine.|Ana likes movies.}} You still keep {{le}}. For emphasis: {{A mí me gusta…|I like…}}, {{¿A ti te gusta?|Do you like it?}}</p>

<h3>Other verbs that work the same way</h3>
<p>{{encantar|to love (things), to delight}}, {{interesar|to interest}}, {{molestar|to bother}}, {{doler|to hurt}}: {{Me duele la cabeza.|My head hurts.}}</p>
<p>To say you don't like something, put {{no}} first: {{No me gustan las arañas.|I don't like spiders.}}</p>`,
          examples: [
            ['Me gusta bailar.', 'I like to dance.', 'Me=to me|gusta=is pleasing|bailar=to dance'],
            ['¿Te gustan los tacos?', 'Do you like tacos?', 'Te=to you|gustan=are pleasing|los=the|tacos=tacos'],
            ['A Ana le encanta el cine.', 'Ana loves movies.', 'A=to|Ana=Ana|le=to her|encanta=delights|el=the|cine=cinema'],
            ['Nos gusta el café.', 'We like coffee.', 'Nos=to us|gusta=is pleasing|el=the|café=coffee'],
            ['Me duele la cabeza.', 'My head hurts.', 'Me=to me|duele=hurts|la=the|cabeza=head'],
            ['No me gustan las arañas.', "I don't like spiders.", 'No=not|me=to me|gustan=are pleasing|las=the|arañas=spiders'],
          ],
          vocab: [['gustar', 'to like (lit. to please)'], ['encantar', 'to love (things)'], ['interesar', 'to interest'], ['molestar', 'to bother'], ['doler', 'to hurt'], ['la cabeza', 'head']],
          exercises: [
            { type: 'mc', q: 'Me ___ las películas de terror.', options: ['gusta', 'gustan', 'gusto', 'gustas'], answer: 1, explain: 'Plural subject → gustan.' },
            { type: 'mc', q: '"We like to travel" =', options: ['Nos gusta viajar.', 'Nos gustamos viajar.', 'Nosotros gustamos viajar.', 'Nos gustan viajar.'], answer: 0, explain: 'Infinitive → gusta.' },
            { type: 'fill', q: 'A mis padres ___ gusta el café. (pronoun)', answer: ['les'], explain: 'ellos → les.' },
            { type: 'mc', q: 'In "Me gustan los perros", what is being liked?', options: ['me', 'los perros (the dogs)', 'gustan'], answer: 1, explain: 'The thing liked is the subject, so the verb (gustan) matches perros.' },
            { type: 'mc', q: '"His back hurts" (la espalda) =', options: ['Le duele la espalda.', 'Él duele la espalda.', 'Le duelen la espalda.', 'Su espalda le duelo.'], answer: 0, explain: 'doler works like gustar: le + duele + one thing.' },
          ],
        },
        {
          id: 'es-b-4', title: 'Gender, articles & agreement',
          summary: 'el / la / los / las, and why describing words change their endings.',
          body: `<p>A [[noun]] is a word for a thing, person or idea. In Spanish every noun has a [[gender|grammatical gender]]: [[masculine]] or [[feminine]]. It's a grammar label, not about meaning: {{la mesa|the table}} is feminine, {{el libro|the book}} is masculine. Always learn a noun together with its article.</p>

<h3>Guessing the gender</h3>
<p>Most nouns ending in <b>-o</b> are masculine ({{el libro}}); most ending in <b>-a</b> are feminine ({{la mesa}}). Nouns ending in <b>-ción</b>, <b>-dad</b> are feminine ({{la canción|song}}, {{la ciudad|city}}). Common exceptions to memorise: {{el día|the day}}, {{el mapa|the map}}, {{el problema|the problem}}, {{la mano|the hand}}, {{la foto|the photo}}.</p>

<h3>Articles: "the" and "a"</h3>
<p>[[article|Articles]] are the little words before a noun. Spanish has four of each, for masculine/feminine and [[singular]]/[[plural]]:</p>
<table class="conj"><tr><th></th><th>the ([[definite]])</th><th>a / some ([[indefinite]])</th></tr>
<tr><td>masculine, one</td><td>{{el}}</td><td>{{un}}</td></tr>
<tr><td>feminine, one</td><td>{{la}}</td><td>{{una}}</td></tr>
<tr><td>masculine, several</td><td>{{los}}</td><td>{{unos}}</td></tr>
<tr><td>feminine, several</td><td>{{las}}</td><td>{{unas}}</td></tr></table>
<p>Two small merges ([[contraction|contractions]]): {{a}} + {{el}} = {{al}} ({{Voy al parque|I'm going to the park}}) and {{de}} + {{el}} = {{del}}.</p>

<h3>Making plurals</h3>
<p>Add <b>-s</b> after a vowel ({{casa}} → {{casas}}), <b>-es</b> after a consonant ({{ciudad}} → {{ciudades}}). A mixed group uses the masculine: {{los chicos}} can be "the boys" or "the kids".</p>

<h3>Adjectives match their noun</h3>
<p>An [[adjective]] (describing word) usually comes <b>after</b> the noun and changes its ending to match the noun's gender and number. This matching is called [[agreement]].</p>
<ul><li>-o adjectives have four forms: {{un coche rojo}}, {{una casa roja}}, {{unos coches rojos}}, {{unas casas rojas}}.</li><li>Adjectives ending in <b>-e</b> or a consonant only change for plural: {{una chica inteligente}}, {{unos chicos inteligentes}}; {{un examen difícil}}, {{unos exámenes difíciles}}.</li></ul>`,
          examples: [
            ['La casa es grande.', 'The house is big.', 'La=the (fem.)|casa=house|es=is|grande=big'],
            ['Tengo un perro negro.', 'I have a black dog.', 'Tengo=I have|un=a (masc.)|perro=dog|negro=black'],
            ['Las ciudades españolas son bonitas.', 'Spanish cities are pretty.', 'Las=the (fem. plural)|ciudades=cities|españolas=Spanish (fem. plural)|son=are|bonitas=pretty (fem. plural)'],
            ['El problema es difícil.', 'The problem is difficult.', 'El=the (masc.)|problema=problem|es=is|difícil=difficult'],
            ['Tengo unas amigas simpáticas.', 'I have some nice (female) friends.', 'Tengo=I have|unas=some (fem.)|amigas=friends (female)|simpáticas=nice (fem. plural)'],
            ['Voy al parque.', "I'm going to the park.", 'Voy=I go|al=to the (a + el)|parque=park'],
          ],
          vocab: [['el libro', 'the book'], ['la mesa', 'the table'], ['el día', 'the day'], ['la mano', 'the hand'], ['rojo/a', 'red'], ['bonito/a', 'pretty'], ['la ciudad', 'the city'], ['simpático/a', 'nice, friendly']],
          exercises: [
            { type: 'mc', q: '___ problema', options: ['el', 'la'], answer: 0, explain: '-ma words from Greek are masculine: el problema.' },
            { type: 'mc', q: 'una casa ___', options: ['blanco', 'blanca', 'blancos', 'blancas'], answer: 1, explain: 'Feminine singular → blanca.' },
            { type: 'fill', q: 'Plural of "la ciudad": las ___', answer: ['ciudades'], explain: 'Consonant → add -es.' },
            { type: 'mc', q: '"some interesting books" =', options: ['unos libros interesantes', 'unas libros interesante', 'unos libro interesantes', 'los libros interesante'], answer: 0, explain: 'Masculine plural article and adjective.' },
            { type: 'mc', q: '"I\'m going to the market" (el mercado) =', options: ['Voy a el mercado.', 'Voy al mercado.', 'Voy a la mercado.', 'Voy del mercado.'], answer: 1, explain: 'a + el always merges into al.' },
          ],
        },
        {
          id: 'es-b-5', title: 'Tener & ir a + infinitive',
          summary: '"Having" hunger and age, "having to" do things, and talking about plans.',
          body: `<p>{{tener|to have}} is [[irregular]]: it doesn't follow the normal -er pattern, so learn its forms: {{tengo}}, {{tienes}}, {{tiene}}, {{tenemos}}, {{tenéis}}, {{tienen}}.</p>

<h3>Things you "have" in Spanish but "are" in English</h3>
<p>Spanish uses {{tener}} + a [[noun]] where English uses "to be" + an adjective. These fixed phrases are [[idiom|idioms]]:</p>
<table class="conj"><tr><th>Spanish</th><th>Word for word</th><th>English</th></tr>
<tr><td>{{tener hambre}}</td><td>have hunger</td><td>to be hungry</td></tr>
<tr><td>{{tener sed}}</td><td>have thirst</td><td>to be thirsty</td></tr>
<tr><td>{{tener frío}} / {{tener calor}}</td><td>have cold / heat</td><td>to be cold / hot</td></tr>
<tr><td>{{tener miedo}}</td><td>have fear</td><td>to be afraid</td></tr>
<tr><td>{{tener razón}}</td><td>have reason</td><td>to be right</td></tr>
<tr><td>{{tener 20 años}}</td><td>have 20 years</td><td>to be 20 years old</td></tr></table>
<p><b>Common mistake:</b> ✗ <i>Soy 30</i> → {{Tengo 30 años}} ✓.</p>

<h3>tener que = "have to"</h3>
<p>{{tener que}} + [[infinitive]] means "to have to (do)": {{Tengo que trabajar.|I have to work.}} The {{que}} isn't translated; just learn it as part of the phrase.</p>

<h3>The near future: ir a + infinitive</h3>
<p>Just like English "I'm going to…", Spanish uses {{ir|to go}} + {{a}} + infinitive to talk about plans. This is the [[near future]], and it's the easiest way to talk about the future.</p>
<table class="conj"><tr><th></th><th>ir</th><th>Example</th></tr>
<tr><td>yo</td><td>{{voy}}</td><td>{{Voy a estudiar.|I'm going to study.}}</td></tr>
<tr><td>tú</td><td>{{vas}}</td><td>{{¿Vas a venir?|Are you going to come?}}</td></tr>
<tr><td>él / ella / usted</td><td>{{va}}</td><td>{{Va a llover.|It's going to rain.}}</td></tr>
<tr><td>nosotros</td><td>{{vamos}}</td><td>{{Vamos a comer.|We're going to eat / Let's eat.}}</td></tr>
<tr><td>vosotros</td><td>{{vais}}</td><td>{{Vais a ganar.|You're going to win.}}</td></tr>
<tr><td>ellos / ustedes</td><td>{{van}}</td><td>{{Van a salir.|They're going to go out.}}</td></tr></table>

<div class="callout warn"><b>The extra "a" before people.</b> When the [[object]] of a verb is a specific person, Spanish puts {{a}} in front of them. It isn't translated. This is the [[personal a]]: {{Visito a mi abuela.|I visit my grandma.}} but {{Visito Madrid.|I visit Madrid.}}</div>`,
          examples: [
            ['Tengo veinte años.', "I'm twenty years old.", 'Tengo=I have|veinte=twenty|años=years'],
            ['¿Tienes hambre?', 'Are you hungry?', 'Tienes=you have|hambre=hunger'],
            ['Tenemos que salir ya.', 'We have to leave now.', 'Tenemos=we have|que=(tener que = have to)|salir=to leave|ya=now'],
            ['Mañana voy a visitar a mi abuela.', "Tomorrow I'm going to visit my grandma.", 'Mañana=tomorrow|voy=I go|a=to|visitar=visit|a=(personal a, not translated)|mi=my|abuela=grandma'],
            ['¿Qué vas a hacer?', 'What are you going to do?', 'Qué=what|vas=you go|a=to|hacer=do'],
            ['Mis hermanos tienen miedo.', 'My brothers are scared.', 'Mis=my|hermanos=brothers|tienen=they have|miedo=fear'],
          ],
          vocab: [['tener hambre', 'to be hungry'], ['tener sed', 'to be thirsty'], ['tener miedo', 'to be afraid'], ['tener que', 'to have to'], ['mañana', 'tomorrow'], ['ir a + inf.', 'to be going to'], ['ya', 'now / already']],
          exercises: [
            { type: 'mc', q: '"I am 30 years old" =', options: ['Soy 30 años.', 'Tengo 30 años.', 'Estoy 30 años.', 'Hay 30 años.'], answer: 1, explain: 'Age uses tener.' },
            { type: 'fill', q: 'Ellos ___ (tener) frío.', answer: ['tienen'], explain: 'ellos → tienen.' },
            { type: 'fill', q: 'Nosotros ___ a cenar en casa. (are going)', answer: ['vamos'], explain: 'ir → vamos.' },
            { type: 'mc', q: '"You have to rest" (tú) =', options: ['Tienes descansar.', 'Tienes que descansar.', 'Tienes a descansar.', 'Eres que descansar.'], answer: 1, explain: 'tener que + infinitive.' },
            { type: 'mc', q: '"I\'m going to call my mom" =', options: ['Voy llamar mi mamá.', 'Voy a llamar a mi mamá.', 'Voy a llamar mi mamá a.', 'Soy a llamar a mi mamá.'], answer: 1, explain: 'ir a + infinitive, plus the personal a before a person.' },
          ],
        },
      ],
      reading: [
        {
          id: 'es-br-1', title: 'Mi barrio',
          sentences: ['Vivo en un barrio tranquilo de Sevilla.', 'Hay una panadería, un parque y una farmacia.', 'Por la mañana compro pan y café.', 'Mis vecinos son muy simpáticos.', 'Los domingos, el parque está lleno de familias.'],
          translation: 'I live in a quiet neighborhood in Seville. There is a bakery, a park and a pharmacy. In the morning I buy bread and coffee. My neighbors are very nice. On Sundays, the park is full of families.',
          questions: [
            { q: 'Where does the narrator live?', options: ['Madrid', 'Seville', 'Barcelona', 'Mexico City'], answer: 1, explain: '"en Sevilla".' },
            { q: 'What do they buy in the morning?', options: ['Medicine', 'Bread and coffee', 'Fruit', 'Newspapers'], answer: 1, explain: '"compro pan y café".' },
            { q: 'Why "está lleno" and not "es lleno"?', options: ['Origin', 'Temporary condition', 'Time', 'Occupation'], answer: 1, explain: 'Condition → estar.' },
          ],
          vocab: [['el barrio', 'neighborhood'], ['el vecino', 'neighbor'], ['lleno', 'full'], ['hay', 'there is/are']],
        },
        {
          id: 'es-br-2', title: 'La rutina de Carlos',
          sentences: ['Carlos es estudiante y vive en Bogotá.', 'Se levanta a las seis de la mañana.', 'Desayuna arepas y un café con leche.', 'Va a la universidad en bus.', 'Por la tarde trabaja en una librería.', 'Por la noche estudia y habla con su novia por teléfono.'],
          translation: 'Carlos is a student and lives in Bogotá. He gets up at six in the morning. He has arepas and a coffee with milk for breakfast. He goes to university by bus. In the afternoon he works in a bookstore. At night he studies and talks to his girlfriend on the phone.',
          questions: [
            { q: 'Where does Carlos live?', options: ['Madrid', 'Bogotá', 'Lima', 'Quito'], answer: 1, explain: '"vive en Bogotá".' },
            { q: 'How does he get to university?', options: ['By car', 'On foot', 'By bus', 'By bike'], answer: 2, explain: '"en bus".' },
            { q: 'Where does he work?', options: ['In a café', 'In a bookstore', 'At the university', 'At home'], answer: 1, explain: '"en una librería" (librería = bookstore, not library!).' },
          ],
          vocab: [['levantarse', 'to get up'], ['desayunar', 'to have breakfast'], ['la librería', 'bookstore'], ['la novia', 'girlfriend']],
        },
        {
          id: 'es-br-3', title: 'Un mensaje a Lucía',
          sentences: ['¡Hola, Lucía!', '¿Qué tal estás?', 'Este fin de semana voy a la playa con mi familia.', 'Vamos a nadar y a comer pescado.', '¿Quieres venir con nosotros?', 'Tenemos un coche grande y hay sitio para ti.', '¡Un abrazo! Marta'],
          translation: "Hi, Lucía! How are you? This weekend I'm going to the beach with my family. We're going to swim and eat fish. Do you want to come with us? We have a big car and there's room for you. Hugs! Marta",
          questions: [
            { q: 'Where is Marta going this weekend?', options: ['To the mountains', 'To the beach', 'To the city', 'To a restaurant'], answer: 1, explain: '"voy a la playa".' },
            { q: 'What is Marta asking Lucía?', options: ['To lend her a car', 'To come with them', 'To cook fish', 'To call her'], answer: 1, explain: '"¿Quieres venir con nosotros?"' },
            { q: '"hay sitio para ti" means…', options: ["there's a site for you", "there's room for you", 'you have to sit', "it's your place"], answer: 1, explain: 'sitio = space, room.' },
          ],
          vocab: [['el fin de semana', 'the weekend'], ['nadar', 'to swim'], ['el pescado', 'fish (food)'], ['el sitio', 'room, space']],
        },
      ],
      listening: [
        {
          id: 'es-bl-1', title: 'En el restaurante',
          sentences: ['Buenas tardes. ¿Qué desea?', 'Quisiera una sopa de verduras y un agua sin gas.', '¿Y de segundo?', 'Pollo con arroz, por favor.', 'Perfecto. Enseguida se lo traigo.'],
          translation: "Good afternoon. What would you like? I'd like a vegetable soup and a still water. And for the main course? Chicken with rice, please. Perfect. I'll bring it right away.",
          questions: [
            { q: 'What drink is ordered?', options: ['Sparkling water', 'Still water', 'Juice', 'Wine'], answer: 1, explain: '"agua sin gas".' },
            { q: 'What is the main course?', options: ['Fish', 'Chicken with rice', 'Vegetable soup', 'Paella'], answer: 1, explain: '"Pollo con arroz".' },
          ],
          dictation: [1, 3],
          vocab: [['de segundo', 'as a main course'], ['enseguida', 'right away']],
        },
        {
          id: 'es-bl-2', title: '¿Dónde está la estación?',
          sentences: ['Perdone, ¿dónde está la estación de tren?', 'Siga todo recto y gire a la derecha.', 'La estación está al lado del banco.', '¿Está lejos?', 'No, está a cinco minutos a pie.'],
          translation: "Excuse me, where is the train station? Go straight ahead and turn right. The station is next to the bank. Is it far? No, it's five minutes on foot.",
          questions: [
            { q: 'Where is the station?', options: ['Next to the bank', 'Behind the church', 'In front of the park', 'Next to the hotel'], answer: 0, explain: '"al lado del banco".' },
            { q: 'How far is it?', options: ['15 minutes by car', '5 minutes on foot', '5 kilometers', 'Very far'], answer: 1, explain: '"a cinco minutos a pie".' },
          ],
          dictation: [1, 4],
          vocab: [['todo recto', 'straight ahead'], ['a la derecha', 'to the right'], ['al lado de', 'next to'], ['a pie', 'on foot']],
        },
        {
          id: 'es-bl-3', title: 'Me presento',
          sentences: ['Hola, me llamo Sofía.', 'Soy de Guadalajara, en México.', 'Tengo veinticinco años y soy enfermera.', 'Me gusta mucho cocinar y bailar salsa.', 'Y tú, ¿de dónde eres?'],
          translation: "Hi, my name is Sofía. I'm from Guadalajara, in Mexico. I'm twenty-five and I'm a nurse. I really like cooking and dancing salsa. And you, where are you from?",
          questions: [
            { q: "What is Sofía's job?", options: ['Teacher', 'Nurse', 'Cook', 'Dancer'], answer: 1, explain: '"soy enfermera".' },
            { q: 'How old is she?', options: ['15', '20', '25', '35'], answer: 2, explain: 'veinticinco = 25.' },
          ],
          dictation: [1, 2],
          vocab: [['llamarse', 'to be called'], ['enfermero/a', 'nurse'], ['cocinar', 'to cook']],
        },
      ],
    },

    intermediate: {
      grammar: [
        {
          id: 'es-i-1', title: 'Pretérito vs. imperfecto',
          summary: 'Two past tenses: completed events vs. background and habits.',
          body: `<p>Spanish has two simple past tenses, and choosing between them is the classic intermediate challenge. English sometimes shows the same split: "I <b>read</b>" vs "I <b>was reading</b> / I <b>used to read</b>".</p>

<h3>Pretérito: events</h3>
<p>The [[preterite|pretérito]] is for actions seen as <b>complete</b>, with a clear start or end: things that happened. Clue words: {{ayer|yesterday}}, {{el lunes|on Monday}}, {{de repente|suddenly}}, {{una vez|once}}.</p>
<p class="callout">{{Ayer comí paella.|Yesterday I ate paella.}}</p>

<h3>Imperfecto: background and habits</h3>
<p>The [[imperfect|imperfecto]] is for the <b>background</b>: descriptions, ongoing situations, feelings, age, time, and repeated habits. It translates "was ___ing", "used to ___", or a descriptive "was". Clue words: {{siempre|always}}, {{cuando era niño|when I was a kid}}, {{mientras|while}}, {{todos los días|every day}}.</p>
<p class="callout">{{Leía cuando sonó el teléfono.}} — I <b>was reading</b> (background, imperfecto) when the phone <b>rang</b> (event, pretérito).</p>

<h3>Verbs that change meaning</h3>
<p>Some verbs shift meaning depending on the tense, because "starting to know" is different from "knowing":</p>
<ul><li>{{conocí|I met}} vs {{conocía|I knew (someone)}}</li><li>{{supe|I found out}} vs {{sabía|I knew (a fact)}}</li><li>{{quise|I tried}} vs {{quería|I wanted}}</li><li>{{no pude|I failed to}} vs {{no podía|I wasn't able to}}</li></ul>`,
          examples: [
            ['Cuando era niña, vivía en el campo.', 'When I was a girl, I lived in the countryside.', 'Cuando=when|era=I was (imperfecto)|niña=girl|vivía=I lived / used to live (imperfecto)|en=in|el=the|campo=countryside'],
            ['Leía cuando sonó el teléfono.', 'I was reading when the phone rang.', 'Leía=I was reading (imperfecto)|cuando=when|sonó=rang (pretérito)|el=the|teléfono=phone'],
            ['Conocí a mi esposo en 2015.', 'I met my husband in 2015.', 'Conocí=I met (pretérito)|a=(personal a)|mi=my|esposo=husband|en=in|2015=2015'],
            ['Ayer comí paella.', 'Yesterday I ate paella.', 'Ayer=yesterday|comí=I ate (pretérito)|paella=paella'],
          ],
          vocab: [['de repente', 'suddenly'], ['mientras', 'while'], ['conocer', 'to know / meet'], ['saber', 'to know (facts)'], ['ayer', 'yesterday'], ['siempre', 'always']],
          exercises: [
            { type: 'mc', q: 'Mientras yo ___, empezó a llover.', options: ['caminé', 'caminaba', 'camino', 'caminaré'], answer: 1, explain: 'Background → imperfecto.' },
            { type: 'mc', q: '"I found out the truth yesterday" =', options: ['Sabía la verdad ayer.', 'Supe la verdad ayer.', 'Sé la verdad ayer.', 'Sabré la verdad ayer.'], answer: 1, explain: 'saber in pretérito = found out.' },
            { type: 'fill', q: 'De niño, siempre ___ (jugar) al fútbol.', answer: ['jugaba'], explain: 'Habit → imperfecto.' },
          ],
        },
        {
          id: 'es-i-2', title: 'Por vs. para',
          summary: 'Two words for "for": por looks back at causes and routes, para looks ahead to goals.',
          body: `<p>Both {{por}} and {{para}} often translate as "for", which is why they're confusing. They're [[preposition|prepositions]] (small linking words like "for, to, by, through"). A useful picture: <b>para</b> points <b>forward</b> to a goal or destination; <b>por</b> looks at the <b>cause</b>, the route, or the exchange.</p>

<h3>para — goal, destination, recipient</h3>
<ul><li>Purpose ("in order to"): {{Estudio para aprender.|I study (in order) to learn.}}</li><li>Destination: {{Salgo para Madrid.|I'm leaving for Madrid.}}</li><li>Recipient: {{Es para ti.|It's for you.}}</li><li>Deadline: {{para el lunes|by Monday}}</li><li>Opinion: {{para mí|in my opinion}}</li></ul>

<h3>por — cause, route, exchange, means</h3>
<ul><li>Reason / cause ("because of"): {{por la lluvia|because of the rain}}, {{Gracias por todo.|Thanks for everything.}}</li><li>Through / along: {{por el parque|through the park}}</li><li>Exchange / price: {{Lo compré por diez euros.|I bought it for ten euros.}}</li><li>Duration: {{por dos horas|for two hours}}</li><li>Means: {{por teléfono|by phone}}</li><li>The "by" in a [[passive]] sentence: {{escrito por Cervantes|written by Cervantes}}</li></ul>`,
          examples: [
            ['Estudio para ser médico.', 'I study (in order) to be a doctor.', 'Estudio=I study|para=in order to (purpose)|ser=be|médico=doctor'],
            ['Gracias por todo.', 'Thanks for everything.', 'Gracias=thanks|por=for (because of)|todo=everything'],
            ['Paseamos por la playa.', 'We walked along the beach.', 'Paseamos=we walked|por=along (route)|la=the|playa=beach'],
            ['Este regalo es para ti.', 'This gift is for you.', 'Este=this|regalo=gift|es=is|para=for (recipient)|ti=you'],
          ],
          vocab: [['por eso', "that's why"], ['para siempre', 'forever'], ['por fin', 'finally'], ['por lo menos', 'at least']],
          exercises: [
            { type: 'mc', q: 'Este regalo es ___ mi madre.', options: ['por', 'para'], answer: 1, explain: 'Recipient → para.' },
            { type: 'mc', q: 'Cambié mi bici ___ una guitarra.', options: ['por', 'para'], answer: 0, explain: 'Exchange → por.' },
            { type: 'mc', q: 'Tengo que terminarlo ___ el viernes.', options: ['por', 'para'], answer: 1, explain: 'Deadline → para.' },
          ],
        },
        {
          id: 'es-i-3', title: 'Object pronouns: lo, le, se lo',
          summary: 'Replace nouns with short pronouns, and combine two of them.',
          body: `<p>[[object pronoun|Object pronouns]] replace a noun so you don't repeat it, like English "I see <b>her</b>", "I gave <b>it</b> to <b>him</b>". Spanish has two sets.</p>
<ul><li><b>Direct</b> [[direct object|objects]] (what / whom the verb acts on): {{me}}, {{te}}, {{lo}}/{{la}}, {{nos}}, {{os}}, {{los}}/{{las}}. {{¿Ves a María? Sí, la veo.|Do you see María? Yes, I see her.}}</li>
<li><b>Indirect</b> [[indirect object|objects]] (to / for whom): {{me}}, {{te}}, {{le}}, {{nos}}, {{os}}, {{les}}. {{Le escribo a mi madre.|I write to my mother.}} Spanish keeps {{le}} even when the person is named. This "doubling" is normal.</li></ul>

<h3>Where they go</h3>
<ul><li><b>Before</b> a conjugated verb: {{Lo compro.|I buy it.}}</li><li><b>Attached</b> to the end of an [[infinitive]], a [[gerund]] (-ando/-iendo form), or a positive command ([[imperative]]): {{Voy a comprarlo}}, {{Estoy comprándolo}}, {{¡Cómpralo!|Buy it!}} An accent is often added to keep the stress in place.</li><li>Negative commands put them before: {{¡No lo compres!|Don't buy it!}}</li></ul>

<h3>Two at once</h3>
<p>Indirect comes before direct: {{Te lo doy.|I give it to you.}} When {{le}} or {{les}} meets {{lo}}, {{la}}, {{los}} or {{las}}, it changes to {{se}} (✗ <i>le lo</i> sounds bad): {{Se lo doy.|I give it to him / her / them.}}</p>`,
          examples: [
            ['—¿Tienes las llaves? —Sí, las tengo.', '—Do you have the keys? —Yes, I have them.', 'Tienes=you have|las=the|llaves=keys|Sí=yes|las=them|tengo=I have'],
            ['Te lo explico mañana.', "I'll explain it to you tomorrow.", 'Te=to you|lo=it|explico=I explain|mañana=tomorrow'],
            ['Quiero regalárselo a Pedro.', 'I want to give it to Pedro as a gift.', 'Quiero=I want|regalárselo=to give him it (regalar + se + lo)|a=to|Pedro=Pedro'],
            ['¡Dímelo!', 'Tell me (it)!', 'Dímelo=tell me it (di + me + lo)'],
          ],
          vocab: [['regalar', 'to give (as a gift)'], ['las llaves', 'keys'], ['prestar', 'to lend'], ['enviar', 'to send']],
          exercises: [
            { type: 'mc', q: '¿Compraste el pan? Sí, ___ compré.', options: ['la', 'lo', 'le', 'se'], answer: 1, explain: 'el pan → lo.' },
            { type: 'mc', q: 'Le doy el libro a Ana → ___ doy.', options: ['Le lo', 'Se lo', 'Lo le', 'Se la'], answer: 1, explain: 'le + lo → se lo.' },
            { type: 'fill', q: '¡No ___ hagas! (Don\'t do it!)', answer: ['lo'], explain: 'Negative command → pronoun before.' },
            { type: 'mc', q: '"I\'m going to send them (the letters) to you" =', options: ['Te las voy a enviar.', 'Las te voy a enviar.', 'Voy a enviarlas te.', 'Te voy a las enviar.'], answer: 0, explain: 'Indirect (te) before direct (las); also possible: Voy a enviártelas.' },
          ],
        },
        {
          id: 'es-i-4', title: 'Presente de subjuntivo: deseos y emociones',
          summary: 'Your first encounter with the subjunctive: the verb form for wishes and feelings.',
          body: `<p>Until now your verbs have been in the [[indicative]], the normal form for stating facts. The [[subjunctive]] is a second set of verb forms (a different [[mood]]) used when a sentence talks about something wished, needed or felt about, rather than something stated as fact. It usually appears in a second [[clause]] after {{que|that}}. English has a trace of it: "I suggest that he <b>be</b> on time".</p>

<h3>Formation</h3>
<p>Take the <b>yo</b> form of the present, drop <b>-o</b>, and add the "opposite" endings: -ar verbs switch to <b>e</b>; -er/-ir verbs switch to <b>a</b>.</p>
<ul><li>{{hablo}} → {{hable}}, {{hables}}, {{hable}}, {{hablemos}}, {{habléis}}, {{hablen}}</li><li>{{tengo}} → {{tenga}}; {{hago}} → {{haga}}</li></ul>
<p>Irregular: {{ser}} → {{sea}}, {{ir}} → {{vaya}}, {{estar}} → {{esté}}, {{saber}} → {{sepa}}, {{haber}} → {{haya}}, {{dar}} → {{dé}}.</p>

<h3>When to use it</h3>
<p>After {{que}} when the first part expresses a <b>wish, request, emotion or need</b> about <b>someone else</b>:</p>
<ul><li>{{Quiero que vengas.}} — I want you to come.</li><li>{{Me alegra que estés aquí.}} — I'm glad you're here.</li><li>{{Es importante que duermas bien.}} — It's important that you sleep well.</li><li>{{Ojalá llueva.}} — I hope it rains.</li></ul>
<p>Same person in both parts → use the [[infinitive]] instead: {{Quiero venir|I want to come}} (not ✗ <i>quiero que yo venga</i>).</p>`,
          examples: [
            ['Espero que tengas un buen día.', 'I hope you have a good day.', 'Espero=I hope|que=that|tengas=you have (subjunctive)|un=a|buen=good|día=day'],
            ['Mis padres quieren que estudie medicina.', 'My parents want me to study medicine.', 'Mis=my|padres=parents|quieren=want|que=that|estudie=I study (subjunctive)|medicina=medicine'],
            ['Siento que no puedas venir.', "I'm sorry you can't come.", 'Siento=I\'m sorry (lit. I feel)|que=that|no=not|puedas=you can (subjunctive)|venir=come'],
            ['Es necesario que lleguemos a tiempo.', 'We need to arrive on time.', 'Es=it is|necesario=necessary|que=that|lleguemos=we arrive (subjunctive)|a=on|tiempo=time'],
          ],
          vocab: [['esperar que', 'to hope that'], ['alegrarse de que', 'to be glad that'], ['sentir que', 'to be sorry that'], ['ojalá', 'I hope / if only']],
          exercises: [
            { type: 'fill', q: 'Quiero que tú ___ (hablar) con él.', answer: ['hables'], explain: 'hablo → hable → hables.' },
            { type: 'mc', q: 'Me alegra que ___ aquí.', options: ['estás', 'estés', 'estar', 'estarás'], answer: 1, explain: 'Emotion → subjunctive.' },
            { type: 'mc', q: '"I want to go" =', options: ['Quiero que vaya.', 'Quiero ir.', 'Quiero que voy.', 'Quiero vaya.'], answer: 1, explain: 'Same subject → infinitive.' },
            { type: 'fill', q: 'Ojalá que ___ (hacer) buen tiempo mañana.', answer: ['haga'], explain: 'hago → haga.' },
          ],
        },
      ],
      reading: [
        {
          id: 'es-ir-1', title: 'El Día de Muertos',
          sentences: ['En México, el Día de Muertos se celebra el 1 y el 2 de noviembre.', 'Lejos de ser una fecha triste, es una fiesta para recordar a los seres queridos.', 'Las familias preparan altares con fotos, velas, flores de cempasúchil y la comida favorita del difunto.', 'Se cree que esa noche las almas regresan para visitar a los vivos.', 'En 2008, la UNESCO la declaró Patrimonio Cultural Inmaterial de la Humanidad.'],
          translation: "In Mexico, the Day of the Dead is celebrated on November 1st and 2nd. Far from being a sad date, it is a celebration to remember loved ones. Families prepare altars with photos, candles, marigold flowers and the deceased's favorite food. It is believed that on that night souls return to visit the living. In 2008, UNESCO declared it Intangible Cultural Heritage of Humanity.",
          questions: [
            { q: '¿Cómo es el ambiente de la fiesta?', options: ['Triste', 'Festivo, para recordar', 'Religioso y silencioso', 'Peligroso'], answer: 1, explain: '"Lejos de ser una fecha triste".' },
            { q: '¿Qué se pone en los altares?', options: ['Solo fotos', 'Fotos, velas, flores y comida', 'Regalos de Navidad', 'Libros'], answer: 1, explain: 'fotos, velas, flores, comida.' },
            { q: '"Se cree que…" es un ejemplo de…', options: ['se impersonal', 'se reflexivo', 'se recíproco', 'se accidental'], answer: 0, explain: 'Impersonal se = "it is believed".' },
          ],
          vocab: [['los seres queridos', 'loved ones'], ['la vela', 'candle'], ['el difunto', 'the deceased'], ['el alma', 'soul']],
        },
        {
          id: 'es-ir-2', title: 'Ir de tapas',
          sentences: ['En España, «ir de tapas» es mucho más que comer: es una forma de socializar.', 'Los amigos van de bar en bar y en cada uno piden una bebida y una pequeña porción de comida.', 'En algunas ciudades, como Granada, la tapa es gratis cuando pides una bebida.', 'Las más típicas son la tortilla de patatas, las croquetas y las patatas bravas.', 'Según una teoría popular, la tradición nació cuando se ponía un trozo de pan sobre el vaso para «taparlo» y evitar que entraran moscas.'],
          translation: "In Spain, 'going for tapas' is much more than eating: it's a way of socializing. Friends go from bar to bar and in each one they order a drink and a small portion of food. In some cities, like Granada, the tapa is free when you order a drink. The most typical are Spanish omelette, croquettes and patatas bravas. According to a popular theory, the tradition was born when a piece of bread was placed over the glass to 'cover' it and keep flies out.",
          questions: [
            { q: '¿Qué significa «ir de tapas»?', options: ['Cocinar en casa', 'Ir de bar en bar comiendo y bebiendo', 'Comprar comida', 'Ir a un restaurante caro'], answer: 1, explain: '"van de bar en bar…".' },
            { q: '¿Qué pasa en Granada?', options: ['Las tapas son caras', 'La tapa es gratis con la bebida', 'No hay tapas', 'Solo hay tortilla'], answer: 1, explain: '"la tapa es gratis".' },
            { q: 'Según la teoría, ¿de dónde viene la palabra «tapa»?', options: ['De tapar el vaso', 'De un rey', 'De una ciudad', 'De un plato'], answer: 0, explain: 'Cubrir (tapar) el vaso.' },
          ],
          vocab: [['pedir', 'to order, ask for'], ['gratis', 'free'], ['un trozo', 'a piece'], ['tapar', 'to cover']],
        },
        {
          id: 'es-ir-3', title: 'Mi primera entrevista de trabajo',
          sentences: ['Recuerdo perfectamente mi primera entrevista de trabajo.', 'Tenía veintidós años y estaba nerviosísimo.', 'Llegué media hora antes, así que di varias vueltas a la manzana para calmarme.', 'La entrevistadora fue muy amable y me hizo preguntas sobre mis estudios.', 'Cuando me preguntó por mis defectos, me quedé en blanco.', 'Aun así, una semana después me llamaron para decirme que el puesto era mío.'],
          translation: "I remember my first job interview perfectly. I was twenty-two and extremely nervous. I arrived half an hour early, so I walked around the block several times to calm down. The interviewer was very kind and asked me about my studies. When she asked about my weaknesses, my mind went blank. Even so, a week later they called to tell me the job was mine.",
          questions: [
            { q: '¿Por qué dio vueltas a la manzana?', options: ['Se perdió', 'Para calmarse', 'Buscaba una tienda', 'Llegó tarde'], answer: 1, explain: '"para calmarme".' },
            { q: '«Me quedé en blanco» significa…', options: ['Me puse pálido', 'No supe qué decir', 'Me reí', 'Me fui'], answer: 1, explain: 'My mind went blank.' },
            { q: '¿Por qué «tenía» y «estaba» están en imperfecto?', options: ['Son acciones puntuales', 'Describen el contexto / estado', 'Son futuras', 'Son órdenes'], answer: 1, explain: 'Background description → imperfecto.' },
          ],
          vocab: [['la manzana', 'city block (also apple)'], ['dar vueltas', 'to walk around'], ['quedarse en blanco', 'to go blank'], ['el puesto', 'the position']],
        },
      ],
      listening: [
        {
          id: 'es-il-1', title: 'Mensaje de voz',
          sentences: ['Hola Marta, soy Diego.', 'Te llamo porque al final no puedo ir a la cena del sábado.', 'Me han cambiado el turno en el trabajo.', '¿Qué te parece si quedamos el domingo para comer?', 'Llámame cuando puedas. ¡Un beso!'],
          translation: "Hi Marta, it's Diego. I'm calling because in the end I can't go to Saturday's dinner. They've changed my shift at work. How about we meet on Sunday for lunch? Call me when you can. Kisses!",
          questions: [
            { q: '¿Por qué no puede ir Diego?', options: ['Está enfermo', 'Le cambiaron el turno', 'Está de viaje', 'No le gusta la cena'], answer: 1, explain: '"Me han cambiado el turno".' },
            { q: '¿Qué propone?', options: ['Cenar el viernes', 'Comer el domingo', 'Ir al cine', 'Nada'], answer: 1, explain: '"quedamos el domingo para comer".' },
            { q: '"cuando puedas" usa el subjuntivo porque…', options: ['Es una acción futura/no realizada', 'Es un hábito', 'Es pasado', 'Es un error'], answer: 0, explain: 'cuando + future → subjuntivo.' },
          ],
          dictation: [1, 3],
          vocab: [['al final', 'in the end'], ['el turno', 'shift'], ['quedar', 'to meet up']],
        },
        {
          id: 'es-il-2', title: 'Planes para el fin de semana',
          sentences: ['¿Qué vas a hacer este fin de semana?', 'El sábado voy a ir al concierto de un grupo que me encanta.', 'Si quieres, te consigo una entrada.', '¡Genial! ¿A qué hora empieza?', 'A las nueve, pero conviene llegar pronto para coger buen sitio.'],
          translation: "What are you going to do this weekend? On Saturday I'm going to a concert by a band I love. If you want, I'll get you a ticket. Great! What time does it start? At nine, but it's best to arrive early to get a good spot.",
          questions: [
            { q: '¿Adónde va el sábado?', options: ['Al cine', 'A un concierto', 'A la playa', 'A un partido'], answer: 1, explain: '"al concierto".' },
            { q: '¿A qué hora empieza?', options: ['A las siete', 'A las ocho', 'A las nueve', 'A las diez'], answer: 2, explain: '"A las nueve".' },
          ],
          dictation: [1, 4],
          vocab: [['conseguir', 'to get, obtain'], ['la entrada', 'ticket'], ['convenir', 'to be advisable'], ['pronto', 'early (Spain) / soon']],
        },
      ],
    },

    advanced: {
      grammar: [
        {
          id: 'es-a-1', title: 'Subjuntivo imperfecto & oraciones condicionales',
          summary: 'Si-clauses, como si, and the sequence of tenses.',
          body: `<p>The imperfect [[subjunctive]] is the past-time partner of the present subjunctive. You need it for imaginary "if" sentences and whenever the main verb is in the past.</p>
<p><b>Form:</b> take the ellos form of the [[preterite|pretérito]], drop <b>-ron</b>, add <b>-ra</b> (or <b>-se</b>): {{tuvieron}} → {{tuviera / tuviese}}; {{fueron}} → {{fuera}}; {{dijeron}} → {{dijera}}. The nosotros form takes an accent: {{tuviéramos}}.</p>
<h3>Conditional sentences</h3>
<p>A [[si-clause]] is the "if…" half. Each type pairs specific tenses, with the [[conditional]] ("would") in the main half:</p>
<table class="conj"><tr><th>Type</th><th>Si-clause</th><th>Main clause</th></tr><tr><td>Real</td><td>presente</td><td>presente / futuro / imperativo</td></tr><tr><td>Hypothetical</td><td>imperfecto de subjuntivo</td><td>condicional</td></tr><tr><td>Counterfactual (didn't happen)</td><td>pluscuamperfecto de subj. ({{hubiera + participio}})</td><td>condicional perfecto ({{habría + part.}}) or {{hubiera + part.}}</td></tr><tr><td>Mixed</td><td>{{hubiera + part.}} (past)</td><td>condicional simple (present result)</td></tr></table>
<p>{{Como si|as if}} <b>always</b> takes the imperfect or [[pluperfect]] subjunctive: {{Habla como si lo supiera todo.|He talks as if he knew everything.}}</p>
<p><b>Sequence of tenses:</b> a past or conditional main verb pulls the second [[clause]] into the imperfect subjunctive: {{Quiero que vengas}} → {{Quería que vinieras}}; {{Me pidió que lo hiciera}}.</p>
<p><b>Register:</b> -ra is dominant in speech everywhere; -se is more frequent in Spain and in writing. {{Quisiera}} / {{Debiera}} also serve as polite softeners.</p>`,
          examples: [
            ['Si tuviera más tiempo, aprendería portugués.', 'If I had more time, I would learn Portuguese.', 'Si=if|tuviera=I had (imperfect subjunctive)|más=more|tiempo=time|aprendería=I would learn|portugués=Portuguese'],
            ['Si me hubieras avisado, te habría recogido.', 'If you had told me, I would have picked you up.', 'Si=if|me=me|hubieras=you had (subjunctive)|avisado=let know|te=you|habría=I would have|recogido=picked up'],
            ['Si hubiera estudiado medicina, ahora sería cirujana.', 'If I had studied medicine, I would be a surgeon now. (mixed)', 'Si=if|hubiera=I had (subjunctive)|estudiado=studied|medicina=medicine|ahora=now|sería=I would be|cirujana=surgeon (fem.)'],
            ['Me miró como si no me conociera.', "He looked at me as if he didn't know me.", 'Me=me|miró=he looked at|como=like|si=if (como si = as if)|no=not|me=me|conociera=he knew (imperfect subjunctive)'],
            ['Le pedí que me llamara al llegar.', 'I asked her to call me when she arrived.', 'Le=(to) her|pedí=I asked|que=that|me=me|llamara=she call (imperfect subjunctive)|al=on (a + el)|llegar=arriving'],
          ],
          vocab: [['avisar', 'to let know, warn'], ['recoger', 'to pick up'], ['como si', 'as if'], ['cirujano/a', 'surgeon']],
          exercises: [
            { type: 'fill', q: 'Si ___ (saber) la respuesta, te la diría.', answer: ['supiera', 'supiese'], explain: 'supieron → supiera.' },
            { type: 'mc', q: 'Si me lo ___ dicho antes, no habría venido.', options: ['habrías', 'hubieras', 'has', 'habías'], answer: 1, explain: 'Counterfactual past → pluscuamperfecto de subjuntivo.' },
            { type: 'mc', q: 'Gasta dinero como si ___ millonario.', options: ['es', 'sea', 'fuera', 'sería'], answer: 2, explain: 'como si → imperfecto de subjuntivo.' },
            { type: 'fill', q: 'Mis padres querían que yo ___ (estudiar) Derecho.', answer: ['estudiara', 'estudiase'], explain: 'Past main verb → imperfect subjunctive.' },
            { type: 'mc', q: 'Which is a mixed conditional (past cause, present result)?', options: ['Si llueve, no salgo.', 'Si lloviera, no saldría.', 'Si hubiera ahorrado, ahora tendría una casa.', 'Si hubiera llovido, no habría salido.'], answer: 2, explain: 'Past condition → present consequence.' },
            { type: 'mc', q: 'Spot the error commonly heard in speech:', options: ['Si tendría dinero, viajaría.', 'Si tuviera dinero, viajaría.', 'Si tuviese dinero, viajaría.', 'Si tengo dinero, viajo.'], answer: 0, explain: '*Si + condicional is non-standard (heard in some regions; avoid in formal use).' },
          ],
        },
        {
          id: 'es-a-2', title: 'Subjuntivo en oraciones relativas y adverbiales',
          summary: 'Unknown antecedents, future time, and concession.',
          body: `<h3>Relative clauses</h3><p>A relative [[clause]] describes a noun ("a teacher <b>who speaks Russian</b>"); that noun is the [[antecedent]]. Use the [[indicative]] when the antecedent is <b>known / existing</b>, the [[subjunctive]] when it is <b>unknown, hypothetical or nonexistent</b>.</p><ul><li>{{Busco al profesor que habla ruso}} (I know he exists) vs {{Busco un profesor que hable ruso}} (any one, if there is one).</li><li>{{No hay nadie que lo entienda}} — denied antecedent: "there's nobody who understands it".</li><li>{{Haz lo que quieras}} — whatever you want.</li></ul>
<h3>Time clauses</h3><p>{{cuando|when}}, {{en cuanto|as soon as}}, {{hasta que|until}}, {{tan pronto como|as soon as}}, {{después de que|after}} + <b>subjunctive</b> for the future / not yet happened; indicative for habits or past facts. {{Antes de que|before}} <b>always</b> takes the subjunctive.</p>
<h3>Concession — aunque</h3><ul><li>{{Aunque está cansado, sigue}} — fact, informative: "although he is".</li><li>{{Aunque esté cansado, sigue}} — either hypothetical ("even if") <i>or</i> a known fact the speaker dismisses as irrelevant ("granted he's tired, so what").</li><li>{{Aunque estuviera cansado, seguiría}} — more remote hypothesis.</li></ul>
<p>Also: {{por mucho que}}, {{por más que}} + subjunctive for emphatic concession ("however much"): {{Por más que insistas, no voy.}}</p>`,
          examples: [
            ['Necesitamos a alguien que sepa programar.', 'We need someone who knows how to code.', 'Necesitamos=we need|a=(personal a)|alguien=someone|que=who|sepa=knows (subjunctive)|programar=to program'],
            ['Cuando llegues, mándame un mensaje.', 'When you arrive, send me a message.', 'Cuando=when|llegues=you arrive (subjunctive)|mándame=send me|un=a|mensaje=message'],
            ['Cuando llego, siempre le mando un mensaje.', 'When I arrive, I always send him a message. (habit)', 'Cuando=when|llego=I arrive (indicative)|siempre=always|le=to him|mando=I send|un=a|mensaje=message'],
            ['Aunque me lo jures, no te creo.', "Even if you swear to me, I don't believe you.", 'Aunque=even if|me=to me|lo=it|jures=you swear (subjunctive)|no=not|te=you|creo=I believe'],
            ['Por mucho que corras, no lo alcanzarás.', "However much you run, you won't catch him.", 'Por=for|mucho=much|que=that (por mucho que = however much)|corras=you run (subjunctive)|no=not|lo=him|alcanzarás=you will catch'],
          ],
          vocab: [['en cuanto', 'as soon as'], ['por mucho que', 'however much'], ['alcanzar', 'to catch up with, reach'], ['jurar', 'to swear']],
          exercises: [
            { type: 'mc', q: '¿Conoces a alguien que ___ alemán?', options: ['habla', 'hable', 'hablará', 'habló'], answer: 1, explain: 'Unknown antecedent → subjunctive.' },
            { type: 'mc', q: 'Tengo un amigo que ___ en Berlín.', options: ['vive', 'viva', 'viviera', 'viviese'], answer: 0, explain: 'Known, existing antecedent → indicative.' },
            { type: 'fill', q: 'Te llamaré en cuanto ___ (salir) del trabajo.', answer: ['salga'], explain: 'Future time clause → subjunctive.' },
            { type: 'mc', q: 'Me fui antes de que ___ la película.', options: ['terminó', 'terminaba', 'terminara', 'termina'], answer: 2, explain: 'antes de que always → subjunctive (past → imperfect).' },
            { type: 'mc', q: '"Aunque sea caro, lo compro" most naturally means…', options: ["Although it's expensive (new info)", 'Even if / granted it is expensive', 'Because it is expensive', 'It was expensive'], answer: 1, explain: 'Subjunctive → hypothetical or dismissed fact.' },
          ],
        },
        {
          id: 'es-a-3', title: 'Los usos de «se»',
          summary: 'Impersonal, passive, accidental, reciprocal, and intensifying se.',
          body: `<p>{{se}} is one small word with many jobs. Here are the main ones:</p><ul>
<li><b>Replacing le/les:</b> {{Se lo di}} — I gave it to him (not ✗ <i>le lo</i>).</li>
<li><b>[[reflexive|Reflexive]] / [[reciprocal]]:</b> {{Se miran}} — they look at themselves / at each other. Add {{el uno al otro}} to make "each other" clear.</li>
<li><b>[[impersonal|Impersonal]]</b> (singular verb, "people / you / one"): {{Se vive bien aquí|life is good here}}, {{Se busca a los culpables}} (with the [[personal a]] the verb stays singular).</li>
<li><b>[[passive|Passive]] se</b> (pasiva refleja; the verb agrees with the thing): {{Se venden pisos|flats for sale}}, {{Se alquila habitación|room for rent}}.</li>
<li><b>Accidental / no-fault:</b> se + [[indirect object]] + verb agreeing with the thing: {{Se me cayeron las llaves|I dropped my keys (they fell on me)}}, {{Se nos olvidó|we forgot}}, {{Se le rompió el móvil|his phone broke}}.</li>
<li><b>Intensifier:</b> adds completeness or spontaneity: {{comer}} vs {{comerse}} ({{Se comió toda la pizza|he ate the whole pizza}}); {{ir}} vs {{irse}} (leave); {{morir}} vs {{morirse}} (more emotive); {{dormir}} vs {{dormirse}} (fall asleep); {{quedar}} vs {{quedarse}} (stay).</li>
</ul>`,
          examples: [
            ['Se me olvidó tu cumpleaños, ¡perdón!', 'I (accidentally) forgot your birthday, sorry!', 'Se=(accidental se)|me=to me|olvidó=got forgotten|tu=your|cumpleaños=birthday|perdón=sorry'],
            ['En este restaurante se come de maravilla.', 'You eat wonderfully at this restaurant.', 'En=in|este=this|restaurante=restaurant|se=(impersonal: one / you)|come=eats|de=of|maravilla=wonder (de maravilla = wonderfully)'],
            ['Se venden entradas en taquilla.', 'Tickets are sold at the box office.', 'Se=(passive se)|venden=sell (= are sold)|entradas=tickets|en=at|taquilla=box office'],
            ['Se bebió la botella entera.', 'He drank the whole bottle (down).', 'Se=(intensifier: all of it)|bebió=he drank|la=the|botella=bottle|entera=whole'],
            ['Se lo expliqué tres veces.', 'I explained it to her three times.', 'Se=to her (le → se)|lo=it|expliqué=I explained|tres=three|veces=times'],
          ],
          vocab: [['caerse', 'to fall (accidentally)'], ['olvidarse', 'to slip one\'s mind'], ['la taquilla', 'box office'], ['de maravilla', 'wonderfully']],
          exercises: [
            { type: 'mc', q: '"I dropped my glasses (by accident)" =', options: ['Dejé caer mis gafas.', 'Se me cayeron las gafas.', 'Me caí las gafas.', 'Se me cayó las gafas.'], answer: 1, explain: 'Accidental se; verb agrees with gafas (plural).' },
            { type: 'mc', q: 'Se ___ casas en esta calle. (are sold)', options: ['vende', 'venden'], answer: 1, explain: 'Pasiva refleja: agrees with casas.' },
            { type: 'mc', q: 'Se ___ a los mejores candidatos. (are sought)', options: ['busca', 'buscan'], answer: 0, explain: 'Personal "a" → impersonal, singular verb.' },
            { type: 'fill', q: 'Le di el libro a Juan → ___ lo di.', answer: ['se', 'Se'], explain: 'le + lo → se lo.' },
            { type: 'mc', q: 'What does "se" add in "Se leyó la novela en un día"?', options: ['Passive', 'Reciprocal', 'Completeness/intensity', 'Accident'], answer: 2, explain: 'Aspectual se — read the whole thing.' },
          ],
        },
        {
          id: 'es-a-4', title: 'Perífrasis verbales',
          summary: 'Two-verb combinations that add shades of meaning like "just", "again", "keep on".',
          body: `<p>A [[verbal periphrasis]] is a combination of a helper verb + an [[infinitive]], [[gerund]] (-ando/-iendo) or [[participle]] that adds a shade of meaning: just finished, again, gradually, about to. Native speakers use them constantly.</p><ul>
<li>{{llevar + gerundio}} — duration up to now: {{Llevo tres años viviendo aquí}} (I've been living here for three years).</li>
<li>{{acabar de + inf.}} — just did: {{Acabo de llegar|I've just arrived}}.</li>
<li>{{volver a + inf.}} — again: {{No vuelvas a hacerlo|don't do it again}}.</li>
<li>{{dejar de + inf.}} — stop doing: {{Dejé de fumar|I quit smoking}}.</li>
<li>{{seguir / continuar + gerundio}} — keep doing: {{Sigue lloviendo|it's still raining}}.</li>
<li>{{ir + gerundio}} — gradual progress: {{Voy entendiendo}} (I'm gradually understanding).</li>
<li>{{andar + gerundio}} — going around doing (often negative): {{Anda diciendo tonterías|he goes around talking nonsense}}.</li>
<li>{{ponerse a + inf.}} — start suddenly: {{Se puso a llorar|she burst into tears}}.</li>
<li>{{estar a punto de + inf.}} — about to: {{Está a punto de salir}}.</li>
<li>{{tener + participio}} — accumulated result: {{Tengo leídos tres capítulos|I've got three chapters read}}.</li>
<li>{{deber + inf.}} (obligation) vs {{deber de + inf.}} (supposition — prescriptively, though often mixed in speech): {{Debe de ser tarde|it must be late}}.</li>
</ul>`,
          examples: [
            ['Llevamos media hora esperando.', "We've been waiting for half an hour.", 'Llevamos=we carry (= we have been)|media=half|hora=hour|esperando=waiting'],
            ['Poco a poco, la ciudad se fue llenando de turistas.', 'Little by little, the city filled up with tourists.', 'Poco=little|a=by|poco=little|la=the|ciudad=city|se=itself|fue=went|llenando=filling|de=with|turistas=tourists'],
            ['Se puso a reír sin motivo.', 'She started laughing for no reason.', 'Se=herself|puso=put (ponerse a = start)|a=to|reír=laugh|sin=without|motivo=reason'],
            ['Debe de tener unos cuarenta años.', 'He must be around forty.', 'Debe=must|de=(supposition)|tener=have|unos=about|cuarenta=forty|años=years'],
          ],
          vocab: [['a punto de', 'about to'], ['poco a poco', 'little by little'], ['sin motivo', 'for no reason'], ['las tonterías', 'nonsense']],
          exercises: [
            { type: 'fill', q: '___ (llevar) dos horas estudiando. (I have been)', answer: ['llevo', 'Llevo'], explain: 'llevar + gerundio.' },
            { type: 'mc', q: '"She stopped calling me" =', options: ['Acabó de llamarme.', 'Dejó de llamarme.', 'Volvió a llamarme.', 'Se puso a llamarme.'], answer: 1, explain: 'dejar de = stop.' },
            { type: 'mc', q: '"Debe de estar enfermo" means…', options: ['He must (obligation) be sick', 'He is probably sick', 'He has just been sick', 'He stopped being sick'], answer: 1, explain: 'deber de = supposition.' },
            { type: 'mc', q: '"Voy conociendo la ciudad" conveys…', options: ['Future plan', 'Gradual progress', 'Just finished', 'Repetition'], answer: 1, explain: 'ir + gerundio = gradual.' },
          ],
        },
        {
          id: 'es-a-5', title: 'Futuro y condicional de probabilidad',
          summary: 'Using "will" and "would" forms to guess about the present and past.',
          body: `<p>The [[future tense|future]] and [[conditional]] don't only talk about time. They also express a guess ([[conjecture]]): what is <i>probably</i> true. English does something similar with "That'll be the postman" or "She'd have been about twenty".</p><ul><li>Guess about now → <b>futuro simple</b>: {{¿Dónde estará Juan?}} (I wonder where Juan is). {{Serán las diez}} (It's probably ten).</li><li>Guess about the recent past → <b>futuro perfecto</b>: {{Habrá salido}} (He has probably left).</li><li>Guess about the past → <b>condicional</b>: {{Tendría unos veinte años cuando se casó}} (She was probably about twenty when she married).</li><li>Conceding a point: {{Será muy listo, pero es antipático}} (He may be clever, but…).</li></ul>`,
          examples: [
            ['—¿Quién llama a estas horas? —Será tu madre.', "—Who's calling at this hour? —It's probably your mom.", 'Quién=who|llama=is calling|a=at|estas=these|horas=hours|Será=it will be (= it\'s probably)|tu=your|madre=mother'],
            ['No contesta; se habrá dormido.', "He's not answering; he must have fallen asleep.", 'No=not|contesta=he answers|se=(dormirse = fall asleep)|habrá=will have (= probably has)|dormido=slept'],
            ['Serían las tres cuando oí el ruido.', 'It must have been about three when I heard the noise.', 'Serían=would be (= was probably)|las=the|tres=three|cuando=when|oí=I heard|el=the|ruido=noise'],
          ],
          vocab: [['a estas horas', 'at this hour'], ['el ruido', 'noise'], ['antipático', 'unpleasant']],
          exercises: [
            { type: 'mc', q: '"I wonder what time it is" =', options: ['¿Qué hora es?', '¿Qué hora será?', '¿Qué hora sería?', '¿Qué hora fue?'], answer: 1, explain: 'Present conjecture → futuro.' },
            { type: 'fill', q: 'Cuando la conocí, ___ (tener) unos treinta años. (she was probably)', answer: ['tendría'], explain: 'Past conjecture → condicional.' },
            { type: 'mc', q: '"Habrá perdido el tren" means…', options: ['He will lose the train', 'He has probably missed the train', 'He would miss the train', 'He missed the train (certain)'], answer: 1, explain: 'Futuro perfecto = conjecture about the recent past.' },
          ],
        },
        {
          id: 'es-a-6', title: 'Ser y estar: cambios de significado',
          summary: 'Same adjective, different meaning depending on ser or estar.',
          body: `<p>With some [[adjective|adjectives]], choosing {{ser}} or {{estar}} changes the meaning, not just the nuance. {{ser}} gives a lasting quality; {{estar}} gives a state or a reaction right now.</p>
<table class="conj"><tr><th>Adjective</th><th>ser</th><th>estar</th></tr>
<tr><td>listo</td><td>clever</td><td>ready</td></tr><tr><td>malo</td><td>bad (character)</td><td>sick / tastes bad</td></tr><tr><td>bueno</td><td>good (kind/quality)</td><td>tasty / attractive (coll.)</td></tr><tr><td>rico</td><td>rich</td><td>delicious</td></tr><tr><td>aburrido</td><td>boring</td><td>bored</td></tr><tr><td>orgulloso</td><td>arrogant</td><td>proud (of something)</td></tr><tr><td>despierto</td><td>sharp, alert</td><td>awake</td></tr><tr><td>vivo</td><td>lively, quick-witted</td><td>alive</td></tr><tr><td>verde</td><td>green (color)</td><td>unripe / inexperienced</td></tr><tr><td>católico</td><td>Catholic</td><td>well (in "no estoy muy católico")</td></tr></table>
<p>Also: {{estar muerto}} (despite being permanent — a resulting state), {{ser feliz}} vs {{estar feliz}} (overall disposition vs. right now), and [[passive|passives]]: {{fue construido}} (the action of building) vs {{está construido}} (the resulting state).</p>`,
          examples: [
            ['Este chico es muy vivo.', 'This kid is very sharp.', 'Este=this|chico=kid|es=is (ser)|muy=very|vivo=sharp (ser vivo)'],
            ['La paella está riquísima.', 'The paella is delicious.', 'La=the|paella=paella|está=is (estar)|riquísima=really delicious (estar rico)'],
            ['Estoy orgullosa de ti.', "I'm proud of you.", 'Estoy=I am (estar)|orgullosa=proud (fem.)|de=of|ti=you'],
            ['El puente fue construido en 1890 y todavía está muy bien construido.', 'The bridge was built in 1890 and is still very well built.', 'El=the|puente=bridge|fue=was (ser: the action)|construido=built|en=in|1890=1890|y=and|todavía=still|está=is (estar: the state)|muy=very|bien=well|construido=built'],
          ],
          vocab: [['listo', 'clever / ready'], ['orgulloso', 'arrogant / proud'], ['despierto', 'sharp / awake'], ['verde', 'green / unripe']],
          exercises: [
            { type: 'mc', q: '"The movie is boring" =', options: ['La película está aburrida.', 'La película es aburrida.'], answer: 1, explain: 'Characteristic → ser aburrido.' },
            { type: 'mc', q: '"Estos plátanos están verdes" means…', options: ['These bananas are green-colored by nature', 'These bananas are unripe'], answer: 1, explain: 'estar verde = unripe.' },
            { type: 'mc', q: '¡Date prisa! ¿Ya ___ lista?', options: ['eres', 'estás'], answer: 1, explain: 'ready → estar lista.' },
            { type: 'mc', q: 'El abuelo de Marta ___ muerto desde 2010.', options: ['es', 'está'], answer: 1, explain: 'Resulting state → estar.' },
          ],
        },
      ],
      reading: [
        {
          id: 'es-ar-1', title: 'La España vaciada',
          sentences: ['En las últimas décadas, miles de pueblos del interior de España han ido perdiendo habitantes hasta quedar prácticamente deshabitados.', 'Es lo que se ha dado en llamar «la España vaciada», expresión que, a diferencia de «vacía», subraya que la despoblación no fue un fenómeno natural, sino el resultado de decisiones políticas y económicas.', 'Quienes se quedaron reclaman servicios básicos: que haya un médico al menos dos veces por semana, que el autobús no deje de pasar, que se garantice una conexión a internet decente.', 'El auge del teletrabajo ha devuelto cierta esperanza; no faltan urbanitas que, hartos del ritmo de la ciudad, se han animado a probar suerte en el campo.', 'Sin embargo, por mucho que se hable de repoblación, si no se invierte en infraestructuras, el éxodo difícilmente se revertirá.'],
          translation: "In recent decades, thousands of villages in Spain's interior have been gradually losing inhabitants until they are practically deserted. It is what has come to be called 'emptied Spain', an expression which, unlike 'empty', underlines that depopulation was not a natural phenomenon but the result of political and economic decisions. Those who stayed demand basic services: that there be a doctor at least twice a week, that the bus not stop running, that a decent internet connection be guaranteed. The rise of remote work has brought back some hope; there's no shortage of city dwellers who, fed up with the pace of the city, have decided to try their luck in the countryside. However, no matter how much people talk about repopulation, if there's no investment in infrastructure, the exodus will hardly be reversed.",
          questions: [
            { q: '¿Qué matiz aporta «vaciada» frente a «vacía»?', options: ['Que es un proceso natural', 'Que hubo agentes y decisiones detrás', 'Que es temporal', 'Que es más bonito'], answer: 1, explain: 'El participio implica una acción con responsables.' },
            { q: '¿Por qué «que haya», «que no deje», «que se garantice» van en subjuntivo?', options: ['Son hechos pasados', 'Expresan reclamaciones / deseos', 'Son hipótesis remotas', 'Son errores'], answer: 1, explain: 'Dependent on "reclaman" (demand) → subjuntivo.' },
            { q: '«han ido perdiendo» expresa…', options: ['Una acción puntual', 'Un proceso gradual', 'Una suposición', 'Un hábito futuro'], answer: 1, explain: 'ir + gerundio = gradual.' },
            { q: 'Según el autor, ¿qué es imprescindible para revertir el éxodo?', options: ['El teletrabajo', 'Hablar más de repoblación', 'Invertir en infraestructuras', 'Más turismo'], answer: 2, explain: '"si no se invierte en infraestructuras…".' },
          ],
          vocab: [['deshabitado', 'uninhabited'], ['dar en llamar', 'to come to be called'], ['harto de', 'fed up with'], ['el auge', 'the boom, rise']],
        },
        {
          id: 'es-ar-2', title: 'Microrrelato — El reloj de mi abuelo',
          sentences: ['Mi abuelo tenía un reloj de bolsillo que nunca daba la hora exacta.', 'Cuando alguien se lo hacía notar, él respondía, muy serio, que no era el reloj el que se atrasaba, sino el mundo el que iba demasiado deprisa.', 'Murió un martes de invierno, sin hacer ruido, como quien se va de una fiesta sin despedirse.', 'Heredé el reloj, y aunque podría haberlo llevado a arreglar, nunca lo hice.', 'Hay días en que lo miro y, por un instante, me parece que el mundo, por fin, va a su ritmo.'],
          translation: "My grandfather had a pocket watch that never told the exact time. When someone pointed it out to him, he would reply, very seriously, that it wasn't the watch that was slow, but the world that was going too fast. He died one winter Tuesday, without making a sound, like someone who leaves a party without saying goodbye. I inherited the watch, and although I could have taken it to be fixed, I never did. There are days when I look at it and, for an instant, it seems to me that the world, at last, is going at its pace.",
          questions: [
            { q: '¿Qué estructura enfática aparece en «no era el reloj el que se atrasaba»?', options: ['Pasiva refleja', 'Oración hendida (cleft)', 'Se accidental', 'Perífrasis'], answer: 1, explain: 'Ser… el que… = cleft sentence for emphasis.' },
            { q: '«como quien se va de una fiesta sin despedirse» describe una muerte…', options: ['Violenta', 'Discreta, silenciosa', 'Esperada', 'Ruidosa'], answer: 1, explain: 'sin hacer ruido.' },
            { q: '¿Por qué el narrador no arregló el reloj?', options: ['No tenía dinero', 'El reloj representa la filosofía del abuelo', 'Lo perdió', 'No tenía tiempo'], answer: 1, explain: 'Inferencia: conservar el reloj "lento" es conservar al abuelo.' },
          ],
          vocab: [['el reloj de bolsillo', 'pocket watch'], ['atrasarse', 'to run slow'], ['heredar', 'to inherit'], ['hacer notar', 'to point out']],
        },
        {
          id: 'es-ar-3', title: 'Columna — El arte de la sobremesa',
          sentences: ['Si hay una costumbre que define a los españoles mejor que la siesta —que, dicho sea de paso, casi nadie duerme ya—, es la sobremesa.', 'Se trata de ese rato, sin duración fija, que sigue a la comida y en el que nadie tiene prisa por levantarse.', 'Se habla de política, de fútbol, de la vecina del quinto; se discute, se ríe y, con suerte, se arregla el mundo.', 'Los extranjeros suelen sorprenderse de que una comida de domingo pueda alargarse hasta la hora de la merienda.', 'Ojalá no perdamos nunca esa sabia lentitud, por mucho que la vida moderna se empeñe en lo contrario.'],
          translation: "If there's a custom that defines Spaniards better than the siesta—which, by the way, hardly anyone takes anymore—it's the sobremesa. It's that stretch of time, of no fixed length, that follows a meal and in which no one is in a hurry to get up. People talk about politics, football, the neighbor on the fifth floor; they argue, laugh and, with luck, fix the world. Foreigners are often surprised that a Sunday lunch can stretch until snack time. Let's hope we never lose that wise slowness, however much modern life insists on the opposite.",
          questions: [
            { q: '«dicho sea de paso» significa…', options: ['Said in passing / by the way', 'It was said slowly', 'Let it be said loudly', 'It has passed'], answer: 0, explain: 'Expresión fija: by the way.' },
            { q: '¿Qué tipo de «se» aparece en «se habla», «se discute», «se ríe»?', options: ['Reflexivo', 'Impersonal', 'Recíproco', 'Accidental'], answer: 1, explain: 'Impersonal: people talk, argue, laugh.' },
            { q: '¿Por qué «pueda» está en subjuntivo?', options: ['Después de "sorprenderse de que" (reacción emocional)', 'Por ser futuro', 'Por "ojalá"', 'Por error'], answer: 0, explain: 'Emotion trigger → subjuntivo.' },
          ],
          vocab: [['la sobremesa', 'after-meal conversation time'], ['empeñarse en', 'to insist on'], ['la merienda', 'afternoon snack'], ['alargarse', 'to stretch out']],
        },
      ],
      listening: [
        {
          id: 'es-al-1', title: 'Pódcast: hablar como un nativo',
          sentences: ['¡Muy buenas! Hoy vamos a hablar de esas expresiones que no aparecen en los libros de texto.', 'Por ejemplo, si un amigo te dice que algo «le importa un pimiento», no tiene nada que ver con verduras: significa que le da exactamente igual.', 'O si alguien «se ha quedado de piedra», es que se ha quedado completamente sorprendido.', 'Y ojo, porque muchas expresiones cambian de un país a otro: lo que en España es «guay», en México es «padre» y en Argentina, «copado».', 'Si se te ocurre alguna más, déjanosla en los comentarios.'],
          translation: "Hi there! Today we're going to talk about those expressions that don't appear in textbooks. For example, if a friend tells you something 'matters a pepper to them', it has nothing to do with vegetables: it means they couldn't care less. Or if someone 'was left like stone', they were completely stunned. And careful, because many expressions change from country to country: what in Spain is 'guay' (cool), in Mexico is 'padre' and in Argentina 'copado'. If you think of any more, leave them in the comments.",
          questions: [
            { q: '«Me importa un pimiento» significa…', options: ['Me encanta', 'Me da igual', 'Tengo hambre', 'Estoy enfadado'], answer: 1, explain: 'It means "I couldn\'t care less".' },
            { q: '«Quedarse de piedra» =', options: ['Quedarse dormido', 'Quedarse atónito', 'Quedarse en casa', 'Ponerse serio'], answer: 1, explain: 'Stunned.' },
            { q: '¿Cómo se dice "cool" en Argentina, según el pódcast?', options: ['Guay', 'Padre', 'Copado', 'Chévere'], answer: 2, explain: 'copado.' },
          ],
          dictation: [1, 3],
          vocab: [['dar igual', 'to not matter'], ['ojo', 'careful / watch out'], ['ocurrírsele algo a alguien', 'to occur to someone']],
        },
        {
          id: 'es-al-2', title: 'Noticias: reportaje sobre el agua',
          sentences: ['La sequía que atraviesa el sur de la península ha obligado a varios municipios a restringir el consumo de agua.', 'Según fuentes oficiales, los embalses se encuentran por debajo del veinte por ciento de su capacidad.', 'Los agricultores, por su parte, exigen que se agilicen las ayudas prometidas.', 'Los expertos advierten de que, si no se adoptan medidas estructurales, episodios como este serán cada vez más frecuentes.'],
          translation: 'The drought affecting the south of the peninsula has forced several municipalities to restrict water consumption. According to official sources, reservoirs are below twenty percent of their capacity. Farmers, for their part, demand that the promised aid be expedited. Experts warn that, if structural measures are not adopted, episodes like this will become increasingly frequent.',
          questions: [
            { q: '¿A qué nivel están los embalses?', options: ['Al 50 %', 'Por debajo del 20 %', 'Llenos', 'Al 2 %'], answer: 1, explain: '"por debajo del veinte por ciento".' },
            { q: '¿Qué exigen los agricultores?', options: ['Más lluvia', 'Que se agilicen las ayudas', 'Precios más bajos', 'Nuevos embalses'], answer: 1, explain: '"que se agilicen las ayudas prometidas".' },
            { q: '«advierten de que» — ¿uso correcto?', options: ['Sí: advertir de algo (informar) lleva "de"', 'No, es dequeísmo', 'Solo en Argentina', 'Solo en lenguaje coloquial'], answer: 0, explain: 'advertir (de) que = warn that; "de" is accepted here.' },
          ],
          dictation: [0, 3],
          vocab: [['la sequía', 'drought'], ['el embalse', 'reservoir'], ['agilizar', 'to expedite'], ['atravesar', 'to go through']],
        },
      ],
    },
  },
};
