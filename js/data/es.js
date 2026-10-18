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
          summary: 'Two verbs for "to be".',
          body: `<p>{{ser}} is for what something <b>is</b> (identity, essence). {{estar}} is for how or where something <b>is</b> (state, location).</p>
<ul><li><b>ser — DOCTOR:</b> Description, Occupation, Characteristic, Time, Origin, Relationship. {{Soy profesora}}, {{Es la una}}, {{Somos de México}}.</li><li><b>estar — PLACE:</b> Position, Location, Action in progress, Condition, Emotion. {{Estoy en casa}}, {{Está enfermo}}, {{Estamos contentos}}.</li></ul>`,
          table: { title: 'Presente', headers: ['', 'ser', 'estar'], rows: [['yo', 'soy', 'estoy'], ['tú', 'eres', 'estás'], ['él/ella/usted', 'es', 'está'], ['nosotros', 'somos', 'estamos'], ['vosotros', 'sois', 'estáis'], ['ellos/ustedes', 'son', 'están']] },
          examples: [['Mi hermana es alta.', 'My sister is tall.'], ['Mi hermana está cansada.', 'My sister is tired.'], ['Madrid está en España.', 'Madrid is in Spain.'], ['Son las tres.', "It's three o'clock."]],
          vocab: [['alto/a', 'tall'], ['cansado/a', 'tired'], ['contento/a', 'happy'], ['enfermo/a', 'sick']],
          exercises: [
            { type: 'mc', q: 'Yo ___ de Canadá.', options: ['soy', 'estoy', 'es', 'está'], answer: 0, explain: 'Origin → ser.' },
            { type: 'mc', q: 'El libro ___ en la mesa.', options: ['es', 'está', 'son', 'soy'], answer: 1, explain: 'Location → estar.' },
            { type: 'fill', q: 'Nosotros ___ muy contentos hoy.', answer: ['estamos'], explain: 'Emotion → estar.' },
            { type: 'fill', q: 'Ella ___ doctora.', answer: ['es'], explain: 'Occupation → ser.' },
          ],
        },
        {
          id: 'es-b-2', title: 'Present tense: -ar, -er, -ir',
          summary: 'Regular verb endings.',
          body: `<p>Drop the ending and add: </p><ul><li><b>-ar</b> ({{hablar}}): -o, -as, -a, -amos, -áis, -an</li><li><b>-er</b> ({{comer}}): -o, -es, -e, -emos, -éis, -en</li><li><b>-ir</b> ({{vivir}}): -o, -es, -e, -imos, -ís, -en</li></ul><p>Subject pronouns are usually dropped because the ending shows the person: {{Hablo español}}.</p>`,
          examples: [['Hablo inglés y español.', 'I speak English and Spanish.'], ['¿Comes carne?', 'Do you eat meat?'], ['Vivimos en Texas.', 'We live in Texas.']],
          vocab: [['hablar', 'to speak'], ['comer', 'to eat'], ['vivir', 'to live'], ['trabajar', 'to work'], ['beber', 'to drink'], ['escribir', 'to write']],
          exercises: [
            { type: 'fill', q: 'Nosotros ___ (vivir) en Lima.', answer: ['vivimos'], explain: '-ir, nosotros → -imos.' },
            { type: 'fill', q: 'Ellos ___ (comer) a las dos.', answer: ['comen'], explain: '-er, ellos → -en.' },
            { type: 'mc', q: '"You (tú) work a lot" =', options: ['Trabajo mucho.', 'Trabajas mucho.', 'Trabaja mucho.', 'Trabajan mucho.'], answer: 1, explain: 'tú → -as.' },
          ],
        },
        {
          id: 'es-b-3', title: 'Gustar & like-verbs',
          summary: '"Chocolate pleases me."',
          body: `<p>{{gustar}} works backwards: the thing liked is the subject. Use {{gusta}} for one thing or an infinitive, {{gustan}} for plural.</p><p>Pronouns: {{me}}, {{te}}, {{le}}, {{nos}}, {{os}}, {{les}}. Add {{a mí}}, {{a ti}}, {{a Juan}} for emphasis or clarity.</p>`,
          examples: [['Me gusta bailar.', 'I like to dance.'], ['¿Te gustan los tacos?', 'Do you like tacos?'], ['A Ana le encanta el cine.', 'Ana loves movies.']],
          vocab: [['encantar', 'to love (things)'], ['interesar', 'to interest'], ['molestar', 'to bother'], ['doler', 'to hurt']],
          exercises: [
            { type: 'mc', q: 'Me ___ las películas de terror.', options: ['gusta', 'gustan', 'gusto', 'gustas'], answer: 1, explain: 'Plural subject → gustan.' },
            { type: 'mc', q: '"We like to travel" =', options: ['Nos gusta viajar.', 'Nos gustamos viajar.', 'Nosotros gustamos viajar.', 'Nos gustan viajar.'], answer: 0, explain: 'Infinitive → gusta.' },
            { type: 'fill', q: 'A mis padres ___ gusta el café. (pronoun)', answer: ['les'], explain: 'ellos → les.' },
          ],
        },
        {
          id: 'es-b-4', title: 'Gender, articles & agreement',
          summary: 'el / la / los / las, and adjectives that match.',
          body: `<p>Every noun is masculine or feminine. Most nouns ending in <b>-o</b> are masculine ({{el libro}}), most ending in <b>-a</b> are feminine ({{la mesa}}). Watch the exceptions: {{el día}}, {{el mapa}}, {{el problema}}, {{la mano}}, {{la foto}}.</p>
<ul><li>Definite: {{el}}, {{la}}, {{los}}, {{las}} (the)</li><li>Indefinite: {{un}}, {{una}}, {{unos}}, {{unas}} (a / some)</li></ul>
<p>Adjectives usually come <b>after</b> the noun and agree in gender and number: {{un coche rojo}}, {{una casa roja}}, {{unos coches rojos}}. Adjectives ending in <b>-e</b> or a consonant only change for number: {{una chica inteligente}}, {{unos chicos inteligentes}}.</p>
<p>Plurals: add <b>-s</b> after a vowel ({{casas}}), <b>-es</b> after a consonant ({{ciudades}}).</p>`,
          examples: [['La casa es grande.', 'The house is big.'], ['Tengo un perro negro.', 'I have a black dog.'], ['Las ciudades españolas son bonitas.', 'Spanish cities are pretty.'], ['El problema es difícil.', 'The problem is difficult.']],
          vocab: [['el libro', 'the book'], ['la mesa', 'the table'], ['el día', 'the day'], ['la mano', 'the hand'], ['rojo/a', 'red'], ['bonito/a', 'pretty']],
          exercises: [
            { type: 'mc', q: '___ problema', options: ['el', 'la'], answer: 0, explain: '-ma words from Greek are masculine: el problema.' },
            { type: 'mc', q: 'una casa ___', options: ['blanco', 'blanca', 'blancos', 'blancas'], answer: 1, explain: 'Feminine singular → blanca.' },
            { type: 'fill', q: 'Plural of "la ciudad": las ___', answer: ['ciudades'], explain: 'Consonant → add -es.' },
            { type: 'mc', q: '"some interesting books" =', options: ['unos libros interesantes', 'unas libros interesante', 'unos libro interesantes', 'los libros interesante'], answer: 0, explain: 'Masculine plural article and adjective.' },
          ],
        },
        {
          id: 'es-b-5', title: 'Tener & ir a + infinitive',
          summary: 'Expressions with tener, and talking about plans.',
          body: `<p>{{tener}} (to have) is irregular: {{tengo}}, {{tienes}}, {{tiene}}, {{tenemos}}, {{tenéis}}, {{tienen}}. Like French, Spanish uses it where English uses "to be": {{tener hambre}} (to be hungry), {{tener sed}} (thirsty), {{tener frío / calor}}, {{tener miedo}} (afraid), {{tener razón}} (right), {{tener … años}} (to be … years old).</p>
<p>{{tener que}} + infinitive = to have to: {{Tengo que trabajar}}.</p>
<p><b>Near future:</b> {{ir}} ({{voy}}, {{vas}}, {{va}}, {{vamos}}, {{vais}}, {{van}}) + {{a}} + infinitive: {{Voy a estudiar}} (I'm going to study).</p>`,
          examples: [['Tengo veinte años.', "I'm twenty years old."], ['¿Tienes hambre?', 'Are you hungry?'], ['Tenemos que salir ya.', 'We have to leave now.'], ['Mañana voy a visitar a mi abuela.', "Tomorrow I'm going to visit my grandma."]],
          vocab: [['tener hambre', 'to be hungry'], ['tener sed', 'to be thirsty'], ['tener miedo', 'to be afraid'], ['tener que', 'to have to'], ['mañana', 'tomorrow'], ['ir a + inf.', 'to be going to']],
          exercises: [
            { type: 'mc', q: '"I am 30 years old" =', options: ['Soy 30 años.', 'Tengo 30 años.', 'Estoy 30 años.', 'Hay 30 años.'], answer: 1, explain: 'Age uses tener.' },
            { type: 'fill', q: 'Ellos ___ (tener) frío.', answer: ['tienen'], explain: 'ellos → tienen.' },
            { type: 'fill', q: 'Nosotros ___ a cenar en casa. (are going)', answer: ['vamos'], explain: 'ir → vamos.' },
            { type: 'mc', q: '"You have to rest" (tú) =', options: ['Tienes descansar.', 'Tienes que descansar.', 'Tienes a descansar.', 'Eres que descansar.'], answer: 1, explain: 'tener que + infinitive.' },
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
          summary: 'Completed events vs. background and habits.',
          body: `<p><b>Pretérito</b>: bounded, completed actions — {{ayer}}, {{el lunes}}, {{de repente}}. <b>Imperfecto</b>: ongoing background, description, habits — {{siempre}}, {{cuando era niño}}, {{mientras}}.</p>
<p>Some verbs change meaning: {{conocí}} (I met) vs {{conocía}} (I knew); {{supe}} (I found out) vs {{sabía}} (I knew); {{quise}} (I tried) vs {{quería}} (I wanted); {{no pude}} (I failed to) vs {{no podía}} (I wasn't able).</p>`,
          examples: [['Cuando era niña, vivía en el campo.', 'When I was a girl, I lived in the countryside.'], ['Leía cuando sonó el teléfono.', 'I was reading when the phone rang.'], ['Conocí a mi esposo en 2015.', 'I met my husband in 2015.']],
          vocab: [['de repente', 'suddenly'], ['mientras', 'while'], ['conocer', 'to know / meet'], ['saber', 'to know (facts)']],
          exercises: [
            { type: 'mc', q: 'Mientras yo ___, empezó a llover.', options: ['caminé', 'caminaba', 'camino', 'caminaré'], answer: 1, explain: 'Background → imperfecto.' },
            { type: 'mc', q: '"I found out the truth yesterday" =', options: ['Sabía la verdad ayer.', 'Supe la verdad ayer.', 'Sé la verdad ayer.', 'Sabré la verdad ayer.'], answer: 1, explain: 'saber in pretérito = found out.' },
            { type: 'fill', q: 'De niño, siempre ___ (jugar) al fútbol.', answer: ['jugaba'], explain: 'Habit → imperfecto.' },
          ],
        },
        {
          id: 'es-i-2', title: 'Por vs. para',
          summary: 'Cause/route vs. purpose/destination.',
          body: `<p><b>para</b> → goal: purpose ({{para aprender}}), destination ({{salgo para Madrid}}), recipient ({{es para ti}}), deadline ({{para el lunes}}), opinion ({{para mí}}).</p>
<p><b>por</b> → cause/means: reason ({{por la lluvia}}), through/along ({{por el parque}}), exchange ({{lo compré por diez euros}}), duration ({{por dos horas}}), means ({{por teléfono}}), agent in passive ({{escrito por Cervantes}}).</p>`,
          examples: [['Estudio para ser médico.', 'I study (in order) to be a doctor.'], ['Gracias por todo.', 'Thanks for everything.'], ['Paseamos por la playa.', 'We walked along the beach.']],
          vocab: [['por eso', "that's why"], ['para siempre', 'forever'], ['por fin', 'finally'], ['por lo menos', 'at least']],
          exercises: [
            { type: 'mc', q: 'Este regalo es ___ mi madre.', options: ['por', 'para'], answer: 1, explain: 'Recipient → para.' },
            { type: 'mc', q: 'Cambié mi bici ___ una guitarra.', options: ['por', 'para'], answer: 0, explain: 'Exchange → por.' },
            { type: 'mc', q: 'Tengo que terminarlo ___ el viernes.', options: ['por', 'para'], answer: 1, explain: 'Deadline → para.' },
          ],
        },
        {
          id: 'es-i-3', title: 'Object pronouns: lo, le, se lo',
          summary: 'Replace nouns and combine pronouns.',
          body: `<ul><li><b>Direct</b> (what/whom): {{me}}, {{te}}, {{lo}}/{{la}}, {{nos}}, {{os}}, {{los}}/{{las}}. {{¿Ves a María? Sí, la veo.}}</li><li><b>Indirect</b> (to/for whom): {{me}}, {{te}}, {{le}}, {{nos}}, {{os}}, {{les}}. {{Le escribo a mi madre.}} (The redundant {{le}} is normal in Spanish!)</li></ul>
<p><b>Position:</b> before a conjugated verb ({{Lo compro}}), or attached to an infinitive, gerund or affirmative command ({{Voy a comprarlo}}, {{Estoy comprándolo}}, {{¡Cómpralo!}}). Negative commands: before ({{¡No lo compres!}}).</p>
<p><b>Order:</b> indirect before direct. {{le}}/{{les}} + {{lo/la/los/las}} → {{se}}: {{Se lo doy}} (I give it to him/her/them).</p>`,
          examples: [['—¿Tienes las llaves? —Sí, las tengo.', '—Do you have the keys? —Yes, I have them.'], ['Te lo explico mañana.', "I'll explain it to you tomorrow."], ['Quiero regalárselo a Pedro.', 'I want to give it to Pedro as a gift.'], ['¡Dímelo!', 'Tell me (it)!']],
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
          summary: 'Your first encounter with the subjunctive.',
          body: `<p>Form: take the <b>yo</b> present, drop <b>-o</b>, add the "opposite" endings: -ar → <b>-e</b>; -er/-ir → <b>-a</b>. {{hablo}} → {{hable}}; {{tengo}} → {{tenga}}; {{hago}} → {{haga}}.</p>
<p>Irregular: {{ser}} → {{sea}}, {{ir}} → {{vaya}}, {{estar}} → {{esté}}, {{saber}} → {{sepa}}, {{haber}} → {{haya}}, {{dar}} → {{dé}}.</p>
<p>Use it after <b>que</b> when the main clause expresses a <b>wish, request, emotion or need</b> about <b>a different subject</b>:</p>
<ul><li>{{Quiero que vengas.}} — I want you to come.</li><li>{{Me alegra que estés aquí.}} — I'm glad you're here.</li><li>{{Es importante que duermas bien.}} — It's important that you sleep well.</li><li>{{Ojalá llueva.}} — I hope it rains.</li></ul>
<p>Same subject → infinitive: {{Quiero venir}} (not *quiero que yo venga*).</p>`,
          examples: [['Espero que tengas un buen día.', 'I hope you have a good day.'], ['Mis padres quieren que estudie medicina.', 'My parents want me to study medicine.'], ['Siento que no puedas venir.', "I'm sorry you can't come."], ['Es necesario que lleguemos a tiempo.', 'We need to arrive on time.']],
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
          body: `<p>Form: take the 3rd-person plural <b>pretérito</b>, drop <b>-ron</b>, add <b>-ra</b> (or <b>-se</b>): {{tuvieron}} → {{tuviera / tuviese}}; {{fueron}} → {{fuera}}; {{dijeron}} → {{dijera}}. The nosotros form takes an accent: {{tuviéramos}}.</p>
<h3>Conditional sentences</h3><table class="conj"><tr><th>Type</th><th>Si-clause</th><th>Main clause</th></tr><tr><td>Real</td><td>presente</td><td>presente / futuro / imperativo</td></tr><tr><td>Hypothetical</td><td>imperfecto de subjuntivo</td><td>condicional</td></tr><tr><td>Counterfactual</td><td>pluscuamperfecto de subj. ({{hubiera + participio}})</td><td>condicional perfecto ({{habría + part.}}) or {{hubiera + part.}}</td></tr><tr><td>Mixed</td><td>{{hubiera + part.}} (past)</td><td>condicional simple (present result)</td></tr></table>
<p>{{Como si}} <b>always</b> takes imperfect or pluperfect subjunctive: {{Habla como si lo supiera todo.}}</p>
<p><b>Sequence of tenses:</b> a past/conditional main verb pulls the subordinate into the imperfect subjunctive: {{Quiero que vengas}} → {{Quería que vinieras}}; {{Me pidió que lo hiciera}}.</p>
<p><b>Register:</b> -ra is dominant in speech everywhere; -se is more frequent in Spain and in writing. {{Quisiera}} / {{Debiera}} also serve as polite softeners.</p>`,
          examples: [['Si tuviera más tiempo, aprendería portugués.', 'If I had more time, I would learn Portuguese.'], ['Si me hubieras avisado, te habría recogido.', 'If you had told me, I would have picked you up.'], ['Si hubiera estudiado medicina, ahora sería cirujana.', 'If I had studied medicine, I would be a surgeon now. (mixed)'], ['Me miró como si no me conociera.', "He looked at me as if he didn't know me."], ['Le pedí que me llamara al llegar.', 'I asked her to call me when she arrived.']],
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
          body: `<h3>Relative clauses</h3><p>Indicative when the antecedent is <b>known/existing</b>; subjunctive when it is <b>unknown, hypothetical or nonexistent</b>.</p><ul><li>{{Busco al profesor que habla ruso}} (I know he exists) vs {{Busco un profesor que hable ruso}} (any one, if there is one).</li><li>{{No hay nadie que lo entienda}} — denied antecedent.</li><li>{{Haz lo que quieras}} — whatever you want.</li></ul>
<h3>Time clauses</h3><p>{{cuando}}, {{en cuanto}}, {{hasta que}}, {{tan pronto como}}, {{después de que}} + <b>subjunctive</b> for future/non-realized; indicative for habits or past facts. {{Antes de que}} <b>always</b> takes subjunctive.</p>
<h3>Concession — aunque</h3><ul><li>{{Aunque está cansado, sigue}} — fact, informative: "although he is".</li><li>{{Aunque esté cansado, sigue}} — either hypothetical ("even if") <i>or</i> a known fact the speaker dismisses as irrelevant ("granted he's tired, so what").</li><li>{{Aunque estuviera cansado, seguiría}} — more remote hypothesis.</li></ul>
<p>Also: {{por mucho que}}, {{por más que}} + subjunctive for emphatic concession: {{Por más que insistas, no voy.}}</p>`,
          examples: [['Necesitamos a alguien que sepa programar.', 'We need someone who knows how to code.'], ['Cuando llegues, mándame un mensaje.', 'When you arrive, send me a message.'], ['Cuando llego, siempre le mando un mensaje.', 'When I arrive, I always send him a message. (habit)'], ['Aunque me lo jures, no te creo.', "Even if you swear to me, I don't believe you."], ['Por mucho que corras, no lo alcanzarás.', 'However much you run, you won\'t catch him.']],
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
          summary: 'Impersonal, passive, accidental, reciprocal, and aspectual se.',
          body: `<ul>
<li><b>Pronominal (le→se):</b> {{Se lo di}} — I gave it to him (not *le lo*).</li>
<li><b>Reflexive / reciprocal:</b> {{Se miran}} — they look at themselves / each other. Add {{el uno al otro}} to disambiguate.</li>
<li><b>Impersonal (sing. verb, people as subject):</b> {{Se vive bien aquí}}, {{Se busca a los culpables}} (with personal "a" → verb stays singular).</li>
<li><b>Pasiva refleja (verb agrees with the thing):</b> {{Se venden pisos}}, {{Se alquila habitación}}.</li>
<li><b>Accidental / no-fault:</b> se + indirect object + verb agreeing with the thing: {{Se me cayeron las llaves}}, {{Se nos olvidó}}, {{Se le rompió el móvil}}.</li>
<li><b>Aspectual / intensifier:</b> adds completeness or spontaneity: {{comer}} vs {{comerse}} ({{Se comió toda la pizza}}); {{ir}} vs {{irse}} (leave); {{morir}} vs {{morirse}} (more emotive); {{dormir}} vs {{dormirse}} (fall asleep); {{quedar}} vs {{quedarse}} (stay).</li>
</ul>`,
          examples: [['Se me olvidó tu cumpleaños, ¡perdón!', 'I (accidentally) forgot your birthday, sorry!'], ['En este restaurante se come de maravilla.', 'You eat wonderfully at this restaurant.'], ['Se venden entradas en taquilla.', 'Tickets are sold at the box office.'], ['Se bebió la botella entera.', 'He drank the whole bottle (down).'], ['Se lo expliqué tres veces.', 'I explained it to her three times.']],
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
          summary: 'Nuance aspect like a native.',
          body: `<ul>
<li>{{llevar + gerundio}} — duration up to now: {{Llevo tres años viviendo aquí}} (I've been living here for three years).</li>
<li>{{acabar de + inf.}} — just did: {{Acabo de llegar}}.</li>
<li>{{volver a + inf.}} — again: {{No vuelvas a hacerlo}}.</li>
<li>{{dejar de + inf.}} — stop doing: {{Dejé de fumar}}.</li>
<li>{{seguir / continuar + gerundio}} — keep doing: {{Sigue lloviendo}}.</li>
<li>{{ir + gerundio}} — gradual progress: {{Voy entendiendo}} (I'm gradually understanding).</li>
<li>{{andar + gerundio}} — going around doing (often negative): {{Anda diciendo tonterías}}.</li>
<li>{{ponerse a + inf.}} — start suddenly: {{Se puso a llorar}}.</li>
<li>{{estar a punto de + inf.}} — about to: {{Está a punto de salir}}.</li>
<li>{{tener + participio}} — accumulated result: {{Tengo leídos tres capítulos}}.</li>
<li>{{deber + inf.}} (obligation) vs {{deber de + inf.}} (supposition — prescriptively, though often mixed in speech): {{Debe de ser tarde}}.</li>
</ul>`,
          examples: [['Llevamos media hora esperando.', "We've been waiting for half an hour."], ['Poco a poco, la ciudad se fue llenando de turistas.', 'Little by little, the city filled up with tourists.'], ['Se puso a reír sin motivo.', 'She started laughing for no reason.'], ['Debe de tener unos cuarenta años.', 'He must be around forty.']],
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
          summary: 'Guessing about the present and past.',
          body: `<p>The future and conditional express <b>conjecture</b>, not just time.</p><ul><li>Present guess → <b>futuro simple</b>: {{¿Dónde estará Juan?}} (I wonder where Juan is). {{Serán las diez}} (It's probably ten).</li><li>Recent past guess → <b>futuro perfecto</b>: {{Habrá salido}} (He has probably left).</li><li>Past guess → <b>condicional</b>: {{Tendría unos veinte años cuando se casó}} (She was probably about twenty).</li><li>Concessive: {{Será muy listo, pero es antipático}} (He may be clever, but…).</li></ul>`,
          examples: [['—¿Quién llama a estas horas? —Será tu madre.', "—Who's calling at this hour? —It's probably your mom."], ['No contesta; se habrá dormido.', "He's not answering; he must have fallen asleep."], ['Serían las tres cuando oí el ruido.', 'It must have been about three when I heard the noise.']],
          vocab: [['a estas horas', 'at this hour'], ['el ruido', 'noise'], ['antipático', 'unpleasant']],
          exercises: [
            { type: 'mc', q: '"I wonder what time it is" =', options: ['¿Qué hora es?', '¿Qué hora será?', '¿Qué hora sería?', '¿Qué hora fue?'], answer: 1, explain: 'Present conjecture → futuro.' },
            { type: 'fill', q: 'Cuando la conocí, ___ (tener) unos treinta años. (she was probably)', answer: ['tendría'], explain: 'Past conjecture → condicional.' },
            { type: 'mc', q: '"Habrá perdido el tren" means…', options: ['He will lose the train', 'He has probably missed the train', 'He would miss the train', 'He missed the train (certain)'], answer: 1, explain: 'Futuro perfecto = conjecture about the recent past.' },
          ],
        },
        {
          id: 'es-a-6', title: 'Ser y estar: cambios de significado',
          summary: 'Same adjective, different meaning.',
          body: `<table class="conj"><tr><th>Adjective</th><th>ser</th><th>estar</th></tr>
<tr><td>listo</td><td>clever</td><td>ready</td></tr><tr><td>malo</td><td>bad (character)</td><td>sick / tastes bad</td></tr><tr><td>bueno</td><td>good (kind/quality)</td><td>tasty / attractive (coll.)</td></tr><tr><td>rico</td><td>rich</td><td>delicious</td></tr><tr><td>aburrido</td><td>boring</td><td>bored</td></tr><tr><td>orgulloso</td><td>arrogant</td><td>proud (of something)</td></tr><tr><td>despierto</td><td>sharp, alert</td><td>awake</td></tr><tr><td>vivo</td><td>lively, quick-witted</td><td>alive</td></tr><tr><td>verde</td><td>green (color)</td><td>unripe / inexperienced</td></tr><tr><td>católico</td><td>Catholic</td><td>well (in "no estoy muy católico")</td></tr></table>
<p>Also: {{estar muerto}} (despite being permanent — a resulting state), {{ser feliz}} vs {{estar feliz}} (overall disposition vs. right now), and passives: {{fue construido}} (action) vs {{está construido}} (resulting state).</p>`,
          examples: [['Este chico es muy vivo.', 'This kid is very sharp.'], ['La paella está riquísima.', 'The paella is delicious.'], ['Estoy orgullosa de ti.', "I'm proud of you."], ['El puente fue construido en 1890 y todavía está muy bien construido.', 'The bridge was built in 1890 and is still very well built.']],
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
