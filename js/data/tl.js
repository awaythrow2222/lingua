// Tagalog course content. {{…}} marks Tagalog text inside English explanations (made clickable).
const aspects = (inf, comp, incomp, cont) => [['Infinitive / command', inf], ['Completed (past)', comp], ['Incomplete (ongoing)', incomp], ['Contemplated (future)', cont]];

export default {
  code: 'tl', name: 'Tagalog', native: 'Tagalog', flag: '🇵🇭',
  elisions: [],

  dictionary: {
    'kain': {
      pos: 'verb root', def: 'eat',
      forms: ['kumain', 'kumakain', 'kakain', 'kainin', 'kinain', 'kinakain', 'kakainin', 'makakain', 'nakakain', 'kakakain', 'pagkain', 'kainan', 'pinakain', 'pakainin'],
      conj: [
        { title: 'Actor focus (-um-)', rows: aspects('kumain', 'kumain', 'kumakain', 'kakain') },
        { title: 'Object focus (-in)', rows: aspects('kainin', 'kinain', 'kinakain', 'kakainin') },
      ],
      examples: [['Kumain na ako.', "I've already eaten."], ['Kinain ng aso ang tinapay.', 'The dog ate the bread.'], ['Kain tayo!', "Let's eat!"]],
      mnemonic: 'KAIN sounds like "kine" (old word for cows) — cows do nothing but eat.',
      notes: '"Kumain ka na?" (Have you eaten?) is a classic Filipino greeting that shows care.',
    },
    'inom': {
      pos: 'verb root', def: 'drink',
      forms: ['uminom', 'umiinom', 'iinom', 'inumin', 'ininom', 'iniinom', 'iinumin', 'inumán', 'inuman'],
      conj: [
        { title: 'Actor focus (-um-)', rows: aspects('uminom', 'uminom', 'umiinom', 'iinom') },
        { title: 'Object focus (-in)', rows: aspects('inumin', 'ininom', 'iniinom', 'iinumin') },
      ],
      examples: [['Uminom ka ng tubig.', 'Drink some water.'], ['Ininom niya ang gamot.', 'He took (drank) the medicine.']],
      mnemonic: 'Think "I-NOM-nom" — but with a straw: sip, sip.',
      notes: 'An "inuman" is a drinking session with friends.',
    },
    'punta': {
      pos: 'verb root', def: 'go (to a place)',
      forms: ['pumunta', 'pumupunta', 'pupunta', 'puntahan', 'pinuntahan', 'pinupuntahan', 'pupuntahan', 'papunta'],
      conj: [
        { title: 'Actor focus (-um-)', rows: aspects('pumunta', 'pumunta', 'pumupunta', 'pupunta') },
        { title: 'Locative focus (-han)', rows: aspects('puntahan', 'pinuntahan', 'pinupuntahan', 'pupuntahan') },
      ],
      examples: [['Pupunta ako sa Cebu bukas.', "I'm going to Cebu tomorrow."], ['Saan ka pupunta?', 'Where are you going?'], ['Pinuntahan namin ang lola.', 'We visited (went to) grandma.']],
      mnemonic: 'PUNTA — you PUNT a ball and it GOES somewhere.',
      notes: '"papunta sa" = heading towards.',
    },
    'bili': {
      pos: 'verb root', def: 'buy',
      forms: ['bumili', 'bumibili', 'bibili', 'bilhin', 'binili', 'binibili', 'bibilhin', 'pabili', 'mamili', 'namili'],
      conj: [
        { title: 'Actor focus (-um-)', rows: aspects('bumili', 'bumili', 'bumibili', 'bibili') },
        { title: 'Object focus (-in)', rows: aspects('bilhin', 'binili', 'binibili', 'bibilhin') },
      ],
      examples: [['Bumili ako ng mangga.', 'I bought (some) mangoes.'], ['Binili ko ang mangga.', 'I bought the mango(es).'], ['Pabili po!', "I'd like to buy (said at a store)!"]],
      mnemonic: 'BILI → you get a BILL when you BUY.',
      notes: 'bili + -in contracts to "bilhin" (not "biliin").',
    },
    'luto': {
      pos: 'verb root', def: 'cook',
      forms: ['magluto', 'nagluto', 'nagluluto', 'magluluto', 'lutuin', 'niluto', 'niluluto', 'lulutuin', 'ipagluto', 'ipinagluto', 'lutong'],
      conj: [
        { title: 'Actor focus (mag-)', rows: aspects('magluto', 'nagluto', 'nagluluto', 'magluluto') },
        { title: 'Object focus (-in)', rows: aspects('lutuin', 'niluto', 'niluluto', 'lulutuin') },
        { title: 'Benefactive (ipag-)', rows: aspects('ipagluto', 'ipinagluto', 'ipinagluluto', 'ipagluluto') },
      ],
      examples: [['Nagluluto si Nanay ng adobo.', 'Mom is cooking adobo.'], ['Niluto ni Lola ang pansit.', 'Grandma cooked the pancit.'], ['Ipagluto mo ako!', 'Cook for me!']],
      mnemonic: 'LUTO → "LOOT-o": cook up a treasure LOOT of food.',
      notes: 'Verbs with l-initial roots take "ni-" instead of "-in-" in the past: niluto.',
    },
    'basa': {
      pos: 'verb root', def: 'read (basá); also adjective "wet" (basâ)',
      forms: ['magbasa', 'nagbasa', 'nagbabasa', 'magbabasa', 'basahin', 'binasa', 'binabasa', 'babasahin', 'mabasa', 'nabasa', 'pagbasa'],
      conj: [
        { title: 'Actor focus (mag-)', rows: aspects('magbasa', 'nagbasa', 'nagbabasa', 'magbabasa') },
        { title: 'Object focus (-in)', rows: aspects('basahin', 'binasa', 'binabasa', 'babasahin') },
      ],
      examples: [['Nagbabasa siya ng libro.', "She's reading a book."], ['Basahin mo ito.', 'Read this.'], ['Basâ ang sapatos ko.', 'My shoes are wet.']],
      mnemonic: 'BASA — reading builds your knowledge BASE. (Glottal stop at the end → wet: you got your BASE wet.)',
      notes: 'Stress/glottal stop changes meaning — listen closely.',
    },
    'gawa': {
      pos: 'verb root', def: 'do, make',
      forms: ['gumawa', 'gumagawa', 'gagawa', 'gawin', 'ginawa', 'ginagawa', 'gagawin', 'magawa', 'nagawa', 'gawain'],
      conj: [
        { title: 'Actor focus (-um-)', rows: aspects('gumawa', 'gumawa', 'gumagawa', 'gagawa') },
        { title: 'Object focus (-in)', rows: aspects('gawin', 'ginawa', 'ginagawa', 'gagawin') },
      ],
      examples: [['Ano ang ginagawa mo?', 'What are you doing?'], ['Gumawa sila ng bahay.', 'They built a house.'], ['Gagawin ko bukas.', "I'll do it tomorrow."]],
      mnemonic: 'GAWA → "GO-wah!" — go DO it!',
      notes: 'gawa + -in → gawin (the a drops).',
    },
    'bigay': {
      pos: 'verb root', def: 'give',
      forms: ['magbigay', 'nagbigay', 'nagbibigay', 'magbibigay', 'ibigay', 'ibinigay', 'ibinibigay', 'ibibigay', 'bigyan', 'binigyan', 'regalo'],
      conj: [
        { title: 'Actor focus (mag-)', rows: aspects('magbigay', 'nagbigay', 'nagbibigay', 'magbibigay') },
        { title: 'Conveyance focus (i-) — the thing given', rows: aspects('ibigay', 'ibinigay', 'ibinibigay', 'ibibigay') },
        { title: 'Locative focus (-an) — the receiver', rows: aspects('bigyan', 'binigyan', 'binibigyan', 'bibigyan') },
      ],
      examples: [['Ibinigay ko ang regalo kay Ana.', 'I gave the gift to Ana.'], ['Binigyan ko si Ana ng regalo.', 'I gave Ana a gift.'], ['Nagbigay siya ng pera.', 'He gave some money.']],
      mnemonic: 'BIGAY → a BIG-EYE surprise when someone GIVES you a gift.',
      notes: 'Great verb to see all three focuses: who gives (mag-), what is given (i-), who receives (-an).',
    },
    'kita': {
      pos: 'verb root', def: 'see (also: earnings; "kita" = I…you)',
      forms: ['makita', 'nakita', 'nakikita', 'makikita', 'makakita', 'nakakita', 'magkita', 'nagkita', 'magkikita'],
      conj: [
        { title: 'Object focus, abilitative (ma-)', rows: aspects('makita', 'nakita', 'nakikita', 'makikita') },
        { title: 'Reciprocal (mag-) — meet', rows: aspects('magkita', 'nagkita', 'nagkikita', 'magkikita') },
      ],
      examples: [['Nakita ko siya kahapon.', 'I saw him yesterday.'], ['Magkita tayo mamaya.', "Let's meet later."], ['Mahal kita.', 'I love you. (kita = I → you)']],
      mnemonic: '"KITA!" — "Look, a KITten! See it?"',
      notes: '"Kita" as a pronoun fuses ko + ikaw: Mahal kita.',
    },
    'alis': {
      pos: 'verb root', def: 'leave, depart',
      forms: ['umalis', 'umaalis', 'aalis', 'alisin', 'inalis', 'pag-alis'],
      conj: [{ title: 'Actor focus (-um-)', rows: aspects('umalis', 'umalis', 'umaalis', 'aalis') }, { title: 'Object focus (-in) — remove', rows: aspects('alisin', 'inalis', 'inaalis', 'aalisin') }],
      examples: [['Umalis na siya.', 'She already left.'], ['Aalis kami bukas.', "We're leaving tomorrow."]],
      mnemonic: '"ALIS" — ALICE leaves through the looking glass.',
    },
    'salamat': { pos: 'interjection', def: 'thank you', examples: [['Salamat po!', 'Thank you (polite)!'], ['Maraming salamat.', 'Thank you very much.']], mnemonic: 'SALAMAT — echoes Arabic "salaam" (peace): peace and thanks.' },
    'po': { pos: 'particle', def: 'politeness marker (to elders, strangers, customers)', forms: ['ho'], examples: [['Salamat po.', 'Thank you (respectfully).'], ['Opo.', 'Yes (polite).']], mnemonic: 'PO = POlite.', notes: 'opo = polite "yes"; ho is a less formal variant.' },
    'mahal': { pos: 'adjective / verb root', def: 'expensive; dear, beloved; love', forms: ['mahalin', 'minahal', 'minamahal', 'pagmamahal'], examples: [['Mahal kita.', 'I love you.'], ['Mahal ang gasolina.', 'Gas is expensive.']], mnemonic: 'MAHAL = love AND expensive — because love is always expensive!' },
    'maganda': { pos: 'adjective', def: 'beautiful, nice, good', forms: ['magandang', 'ganda'], examples: [['Magandang umaga!', 'Good morning!'], ['Ang ganda!', 'How beautiful!']], mnemonic: 'MAGANDA — "MAGnificent ANDA beautiful".', notes: 'ma- + root ganda (beauty). "Ang ganda!" = exclamation.' },
    'bahay': { pos: 'noun', def: 'house, home', examples: [['Nasa bahay ako.', "I'm at home."], ['Bahay-kubo', 'nipa hut']], mnemonic: 'BAHAY — "BUY high", houses are expensive.' },
    'kumusta': { pos: 'interjection', def: 'how are you? (from Spanish ¿cómo está?)', forms: ['kamusta'], examples: [['Kumusta ka?', 'How are you?'], ['Mabuti naman.', "I'm fine."]], mnemonic: 'Spanish "¿cómo está?" squished together.' },
    'ako': { pos: 'pronoun (ang-form)', def: 'I', forms: ['akin', 'aking'], examples: [['Ako si Ben.', "I'm Ben."]], mnemonic: 'AKO — "A-KO" like "a KOala" — I am a koala.', notes: 'ng-form: ko · sa-form: akin.' },
    'hindi': { pos: 'particle', def: 'no, not', examples: [['Hindi ako pagod.', "I'm not tired."]], mnemonic: 'HINDI — "Hin-DEE? NO, not Hindi the language."', notes: 'Negates verbs/adjectives; "wala" negates existence.' },
    'wala': { pos: 'particle', def: 'none, there is not, to not have', forms: ['walang'], examples: [['Wala akong pera.', "I don't have money."], ['Walang tao.', "There's nobody."]], mnemonic: 'WALA → "WALL-ah": you hit a wall — nothing there.' },
    'may': { pos: 'existential', def: 'there is, to have', forms: ['mayroon', 'meron', 'mayroong'], examples: [['May aso ako.', 'I have a dog.'], ['Mayroon ka bang kapatid?', 'Do you have siblings?']], mnemonic: 'MAY — "you MAY have it".', notes: 'may + noun directly; mayroon + pronoun/particle first.' },
  },

  levels: {
    beginner: {
      grammar: [
        {
          id: 'tl-b-1', title: 'Sentence order & the markers ang / ng / sa',
          summary: 'Tagalog puts the comment first, then the topic.',
          body: `<p>A basic Tagalog sentence is <b>predicate first</b>: what you say about the topic comes before the topic itself.</p>
<p>{{Maganda ang bahay.}} — literally "Beautiful the house" = The house is beautiful. There is no word for "is".</p>
<h3>The three markers</h3><table class="conj"><tr><th>Role</th><th>Common nouns</th><th>Personal names</th></tr><tr><td>Topic (ang)</td><td>{{ang}} / {{ang mga}} (pl.)</td><td>{{si}} / {{sina}}</td></tr><tr><td>Non-topic actor / object, possessor (ng)</td><td>{{ng}} / {{ng mga}}</td><td>{{ni}} / {{nina}}</td></tr><tr><td>Direction, location, recipient (sa)</td><td>{{sa}} / {{sa mga}}</td><td>{{kay}} / {{kina}}</td></tr></table>
<p><b>ay-inversion:</b> you can put the topic first with {{ay}}: {{Ang bahay ay maganda.}} This sounds more formal or written.</p>
<p>Spelling note: the marker {{ng}} is pronounced "nang".</p>`,
          examples: [['Guro si Maria.', 'Maria is a teacher.'], ['Masarap ang adobo.', 'The adobo is delicious.'], ['Ang kotse ni Juan ay pula.', "Juan's car is red."], ['Nasa Maynila ang opisina.', 'The office is in Manila.']],
          vocab: [['guro', 'teacher'], ['masarap', 'delicious'], ['pula', 'red'], ['nasa', 'is at / in'], ['opisina', 'office'], ['kotse', 'car']],
          exercises: [
            { type: 'mc', q: '"The food is delicious" =', options: ['Ang pagkain masarap.', 'Masarap ang pagkain.', 'Masarap si pagkain.', 'Pagkain masarap ang.'], answer: 1, explain: 'Predicate first, then ang + topic.' },
            { type: 'mc', q: '___ Pedro ay doktor.', options: ['Ang', 'Si', 'Ni', 'Kay'], answer: 1, explain: 'Personal name as topic → si.' },
            { type: 'mc', q: '"Ana\'s house" =', options: ['bahay si Ana', 'bahay ni Ana', 'bahay kay Ana', 'bahay ang Ana'], answer: 1, explain: 'Possessor (name) → ni.' },
            { type: 'fill', q: 'Pumunta ako ___ palengke. (to the market)', answer: ['sa'], explain: 'Direction → sa.' },
            { type: 'fill', q: 'Ibigay mo ito ___ Lito. (to Lito)', answer: ['kay'], explain: 'sa for names → kay.' },
          ],
        },
        {
          id: 'tl-b-2', title: 'Pronouns: ako, ko, akin',
          summary: 'Three sets of pronouns that match the three markers.',
          body: `<p>Each pronoun has an <b>ang</b>-form (topic), <b>ng</b>-form (actor/owner) and <b>sa</b>-form (to/for, possessive before nouns).</p>`,
          table: { title: 'Personal pronouns', plain: [0], headers: ['', 'ang (topic)', 'ng (actor / owner)', 'sa (to, for)'], rows: [['I', 'ako', 'ko', 'akin'], ['you (sg.)', 'ikaw / ka', 'mo', 'iyo'], ['he / she', 'siya', 'niya', 'kaniya'], ['we (excl. you)', 'kami', 'namin', 'amin'], ['we (incl. you)', 'tayo', 'natin', 'atin'], ['you (pl. / polite)', 'kayo', 'ninyo', 'inyo'], ['they', 'sila', 'nila', 'kanila']] },
          examples: [['Pagod ako.', "I'm tired."], ['Bahay ko ito. / Aking bahay ito.', 'This is my house.'], ['Kain tayo!', "Let's eat! (including you)"], ['Pupunta kami sa Baguio.', "We (not you) are going to Baguio."]],
          vocab: [['pagod', 'tired'], ['ito', 'this'], ['iyan', 'that (near you)'], ['iyon', 'that (far)']],
          exercises: [
            { type: 'mc', q: 'Telling a friend "Let\'s go!" — which "we"?', options: ['kami', 'tayo', 'sila', 'kayo'], answer: 1, explain: 'tayo includes the listener.' },
            { type: 'mc', q: '"my friend" =', options: ['kaibigan ako', 'kaibigan ko', 'kaibigan akin', 'ako kaibigan'], answer: 1, explain: 'Possessor after noun → ko.' },
            { type: 'fill', q: 'Gutom ___. (I am hungry)', answer: ['ako'], explain: 'Topic → ako.' },
            { type: 'mc', q: '"Ikaw" vs "ka": "Are you a student?" =', options: ['Estudyante ikaw ba?', 'Estudyante ka ba?', 'Ka estudyante ba?', 'Estudyante mo ba?'], answer: 1, explain: 'After the predicate, use the short form ka.' },
          ],
        },
        {
          id: 'tl-b-3', title: 'The linker: na / -ng',
          summary: 'Glue between adjectives and nouns.',
          body: `<p>When a word describes another, connect them with a <b>linker</b>:</p><ul><li>After a <b>vowel</b>: add <b>-ng</b> → {{magandang babae}} (beautiful woman)</li><li>After <b>n</b>: the n becomes <b>-ng</b> → {{bayan}} → {{bayang}}, {{luntian}} → {{luntiang dahon}} (green leaf)</li><li>After any other <b>consonant</b>: use {{na}} → {{mabait na bata}} (kind child)</li></ul><p>Order can flip with no change in meaning: {{bahay na malaki}} = {{malaking bahay}} (big house).</p><p>Linkers also join numbers ({{dalawang aso}}), and verbs with their complements ({{Gusto kong kumain}} — I want to eat).</p>`,
          examples: [['Magandang umaga!', 'Good morning!'], ['Malaking bahay', 'big house'], ['Mabait na tao', 'kind person'], ['Tatlong kapatid', 'three siblings'], ['Gusto kong matuto ng Tagalog.', 'I want to learn Tagalog.']],
          vocab: [['malaki', 'big'], ['maliit', 'small'], ['mabait', 'kind'], ['babae', 'woman'], ['lalaki', 'man'], ['gusto', 'want / like']],
          exercises: [
            { type: 'fill', q: 'malaki + bahay = ___ bahay', answer: ['malaking'], explain: 'Ends in a vowel → -ng.' },
            { type: 'mc', q: '"kind teacher" =', options: ['mabaitng guro', 'mabait na guro', 'mabait guro', 'mabaiting guro'], answer: 1, explain: 'Ends in t → na.' },
            { type: 'fill', q: 'dalawa + aso = ___ aso (two dogs)', answer: ['dalawang'], explain: 'Numbers take linkers too.' },
            { type: 'mc', q: '"I want to sleep" =', options: ['Gusto ko matulog.', 'Gusto kong matulog.', 'Gusto akong matulog.', 'Ako gusto matulog.'], answer: 1, explain: 'ko + linker -ng → kong.' },
          ],
        },
        {
          id: 'tl-b-4', title: 'May, mayroon & wala',
          summary: 'There is / have, and there isn\'t.',
          body: `<ul><li>{{may}} + noun directly: {{May pera ako.}} (I have money.)</li><li>{{mayroon}} (casual: {{meron}}) when a pronoun or particle comes next, with a linker: {{Mayroon akong pera.}}</li><li>{{wala}} — negative, also with a linker: {{Wala akong pera.}} (I have no money.) / {{Walang tao.}} (There's nobody.)</li></ul><p>Answering "Do you have…?" → {{Mayroon.}} / {{Meron.}} (Yes, I do.) or {{Wala.}} (No, I don't.)</p>`,
          examples: [['May tanong ako.', 'I have a question.'], ['Mayroon ka bang kotse?', 'Do you have a car?'], ['Wala kaming klase bukas.', "We don't have class tomorrow."], ['May tao ba sa loob?', 'Is there anyone inside?']],
          vocab: [['pera', 'money'], ['tanong', 'question'], ['klase', 'class'], ['loob', 'inside'], ['tao', 'person']],
          exercises: [
            { type: 'mc', q: '"I have a dog" =', options: ['Mayroon aso ako.', 'May aso ako.', 'Wala aso ako.', 'May ako aso.'], answer: 1, explain: 'may + noun.' },
            { type: 'fill', q: '___ akong kapatid. (I don\'t have siblings)', answer: ['wala', 'Wala'], explain: 'wala + linker on the pronoun → akong.' },
            { type: 'mc', q: '"Do you have time?" =', options: ['May ka bang oras?', 'Mayroon ka bang oras?', 'Mayroon oras ka ba?', 'Wala ka oras?'], answer: 1, explain: 'mayroon before pronoun.' },
          ],
        },
        {
          id: 'tl-b-5', title: '-um- verbs & aspect',
          summary: 'Tagalog marks aspect (done / ongoing / not yet), not tense.',
          body: `<p>Tagalog verbs show whether an action is <b>completed</b>, <b>incomplete</b> (ongoing/habitual) or <b>contemplated</b> (not yet begun).</p><p>The <b>-um-</b> affix creates actor-focus verbs. Insert it after the first consonant (or put {{um-}} before a vowel):</p>
<ul><li><b>Infinitive / completed:</b> root + -um- → {{kumain}} (to eat / ate)</li><li><b>Incomplete:</b> -um- + repeat first syllable → {{kumakain}} (eating / eats)</li><li><b>Contemplated:</b> repeat first syllable, no -um- → {{kakain}} (will eat)</li></ul>
<p>The actor is the topic: {{Kumain ako ng mangga}} — I ate (a) mango. The object takes {{ng}} and is usually indefinite.</p>`,
          table: { title: '-um- aspect chart', headers: ['Root', 'Completed', 'Incomplete', 'Contemplated'], rows: [['kain (eat)', 'kumain', 'kumakain', 'kakain'], ['inom (drink)', 'uminom', 'umiinom', 'iinom'], ['bili (buy)', 'bumili', 'bumibili', 'bibili'], ['punta (go)', 'pumunta', 'pumupunta', 'pupunta'], ['alis (leave)', 'umalis', 'umaalis', 'aalis']] },
          examples: [['Kumain na ako.', "I've already eaten."], ['Umiinom siya ng kape tuwing umaga.', 'She drinks coffee every morning.'], ['Pupunta kami sa beach bukas.', "We'll go to the beach tomorrow."], ['Bumili si Ben ng sapatos.', 'Ben bought shoes.']],
          vocab: [['na', 'already'], ['tuwing', 'every'], ['bukas', 'tomorrow'], ['kahapon', 'yesterday'], ['ngayon', 'now / today'], ['sapatos', 'shoes']],
          exercises: [
            { type: 'fill', q: 'Kahapon, ___ (bili) ako ng tinapay.', answer: ['bumili'], explain: 'Completed: b-um-ili.' },
            { type: 'fill', q: 'Bukas, ___ (inom) ako ng gamot.', answer: ['iinom'], explain: 'Contemplated: repeat first syllable "i".' },
            { type: 'mc', q: '"She is eating now" =', options: ['Kumain siya ngayon.', 'Kumakain siya ngayon.', 'Kakain siya ngayon.', 'Kain siya ngayon.'], answer: 1, explain: 'Incomplete (ongoing) → kumakain.' },
            { type: 'mc', q: 'Contemplated aspect of "pumunta":', options: ['pumupunta', 'pupunta', 'pumunta', 'punta'], answer: 1, explain: 'pu-punta.' },
          ],
        },
        {
          id: 'tl-b-6', title: 'Questions & politeness (po, ba)',
          summary: 'Asking questions and showing respect.',
          body: `<ul><li>{{Ano}} — what · {{Sino}} — who · {{Saan}} — where</li><li>{{Kailan}} — when · {{Bakit}} — why · {{Paano}} — how</li><li>{{Magkano}} — how much (price) · {{Ilan}} — how many</li></ul>
<p>Yes/no questions add the particle {{ba}}: {{Gutom ka ba?}} (Are you hungry?)</p>
<p><b>Respect:</b> add {{po}} (or {{ho}}) when talking to elders, strangers, customers: {{Salamat po.}} "Yes" becomes {{opo}}. With {{po}}, use plural {{kayo / ninyo}} for "you".</p>
<p>Word order: short pronouns ({{ka}}, {{ko}}, {{mo}}) come <b>before</b> particles like {{ba}}, {{na}}, {{po}}: {{Kumain ka na ba?}}</p>`,
          examples: [['Ano ang pangalan mo?', "What's your name?"], ['Saan po kayo nakatira?', 'Where do you live? (polite)'], ['Magkano po ito?', 'How much is this?'], ['Kumain ka na ba?', 'Have you eaten yet?']],
          vocab: [['pangalan', 'name'], ['nakatira', 'living (somewhere)'], ['opo', 'yes (polite)'], ['oo', 'yes'], ['ito', 'this']],
          exercises: [
            { type: 'mc', q: 'At a market: "How much is this?" =', options: ['Ilan po ito?', 'Magkano po ito?', 'Ano po ito?', 'Saan po ito?'], answer: 1, explain: 'magkano = price.' },
            { type: 'fill', q: '___ ka pupunta? (Where)', answer: ['saan', 'Saan'], explain: 'saan = where.' },
            { type: 'mc', q: 'Respectful "yes" to your grandmother:', options: ['Oo', 'Opo', 'Hindi po', 'Ba'], answer: 1, explain: 'opo.' },
            { type: 'mc', q: 'Correct order:', options: ['Kumain na ba ka?', 'Kumain ka na ba?', 'Ka kumain na ba?', 'Kumain ba na ka?'], answer: 1, explain: 'Monosyllabic pronoun ka before particles.' },
          ],
        },
      ],
      reading: [
        {
          id: 'tl-br-1', title: 'Ang Pamilya Ko',
          sentences: ['Ako si Ana.', 'Taga-Maynila ako.', 'Malaki ang pamilya ko.', 'Mayroon akong dalawang kapatid na lalaki at isang kapatid na babae.', 'Guro ang nanay ko at drayber ang tatay ko.', 'Tuwing Linggo, kumakain kami nang sama-sama.', 'Masaya ang pamilya namin.'],
          translation: "I'm Ana. I'm from Manila. My family is big. I have two brothers and one sister. My mom is a teacher and my dad is a driver. Every Sunday, we eat together. Our family is happy.",
          questions: [
            { q: 'Where is Ana from?', options: ['Cebu', 'Manila', 'Davao', 'Baguio'], answer: 1, explain: '"Taga-Maynila ako."' },
            { q: 'How many siblings does she have?', options: ['One', 'Two', 'Three', 'Four'], answer: 2, explain: '2 brothers + 1 sister.' },
            { q: "What is her father's job?", options: ['Teacher', 'Driver', 'Doctor', 'Cook'], answer: 1, explain: '"drayber ang tatay ko".' },
            { q: 'Why "namin" and not "natin" in the last sentence?', options: ['It includes the reader', 'It excludes the reader', 'It is plural', 'It is polite'], answer: 1, explain: 'namin = our (not including you).' },
          ],
          vocab: [['taga-', 'from (a place)'], ['kapatid', 'sibling'], ['nanay / tatay', 'mom / dad'], ['sama-sama', 'together']],
        },
        {
          id: 'tl-br-2', title: 'Sa Palengke',
          sentences: ['Pumunta si Lito sa palengke kaninang umaga.', 'Bumili siya ng isda, bigas, at mga gulay.', '"Magkano po ang isang kilo ng mangga?" tanong niya.', '"Isandaang piso po," sagot ng tindera.', 'Mura ang mangga, kaya bumili siya ng dalawang kilo.', 'Masaya siyang umuwi.'],
          translation: 'Lito went to the market this morning. He bought fish, rice and vegetables. "How much is a kilo of mangoes?" he asked. "One hundred pesos," the vendor answered. The mangoes were cheap, so he bought two kilos. He went home happy.',
          questions: [
            { q: 'When did Lito go to the market?', options: ['Last night', 'This morning', 'Tomorrow', 'Yesterday afternoon'], answer: 1, explain: '"kaninang umaga".' },
            { q: 'How much is one kilo of mangoes?', options: ['₱10', '₱50', '₱100', '₱200'], answer: 2, explain: '"Isandaang piso".' },
            { q: 'Why did he buy two kilos?', options: ['They were cheap', 'They were sweet', 'His mom asked', 'They were on sale'], answer: 0, explain: '"Mura ang mangga, kaya…"' },
          ],
          vocab: [['palengke', 'market'], ['bigas', 'uncooked rice'], ['tindera', 'vendor (f.)'], ['mura', 'cheap'], ['kaya', 'so, therefore'], ['umuwi', 'went home']],
        },
        {
          id: 'tl-br-3', title: 'Ang Umaga ni Ana',
          sentences: ['Gumigising si Ana nang alas-sais ng umaga.', 'Naliligo siya at nagbibihis.', 'Kumakain siya ng pandesal at umiinom ng kape.', 'Pagkatapos, sumasakay siya ng dyip papunta sa opisina.', 'Mahaba ang biyahe, kaya nakikinig siya ng musika.'],
          translation: 'Ana wakes up at six in the morning. She bathes and gets dressed. She eats pandesal and drinks coffee. Afterwards, she rides a jeepney to the office. The trip is long, so she listens to music.',
          questions: [
            { q: 'What time does Ana wake up?', options: ['5:00', '6:00', '7:00', '8:00'], answer: 1, explain: '"alas-sais" = six (from Spanish seis).' },
            { q: 'What does she eat?', options: ['Rice', 'Pandesal', 'Eggs', 'Fruit'], answer: 1, explain: '"Kumakain siya ng pandesal".' },
            { q: 'Which aspect are the verbs in, and why?', options: ['Completed — it happened once', 'Incomplete — it is a daily habit', 'Contemplated — it will happen', 'Infinitive'], answer: 1, explain: 'Habits use the incomplete aspect.' },
          ],
          vocab: [['gumising', 'to wake up'], ['maligo', 'to bathe'], ['magbihis', 'to get dressed'], ['sumakay', 'to ride'], ['makinig', 'to listen'], ['pagkatapos', 'afterwards']],
        },
      ],
      listening: [
        {
          id: 'tl-bl-1', title: 'Pagpapakilala',
          sentences: ['Magandang umaga po!', 'Ako si Marco.', 'Dalawampung taong gulang ako.', 'Estudyante ako sa Cebu.', 'Ikaw, ano ang pangalan mo?'],
          translation: "Good morning! I'm Marco. I'm twenty years old. I'm a student in Cebu. And you, what's your name?",
          questions: [
            { q: 'How old is Marco?', options: ['12', '20', '22', '30'], answer: 1, explain: 'dalawampu = 20.' },
            { q: 'Where does he study?', options: ['Manila', 'Cebu', 'Davao', 'Iloilo'], answer: 1, explain: '"sa Cebu".' },
          ],
          dictation: [1, 3],
          vocab: [['taong gulang', 'years old'], ['estudyante', 'student']],
        },
        {
          id: 'tl-bl-2', title: 'Sa Tindahan',
          sentences: ['Pabili po ng tubig.', 'Ilan po?', 'Dalawa po.', 'Apatnapung piso po lahat.', 'Salamat po!'],
          translation: "I'd like to buy some water, please. How many? Two. That's forty pesos in all. Thank you!",
          questions: [
            { q: 'What is being bought?', options: ['Bread', 'Water', 'Rice', 'Soda'], answer: 1, explain: '"tubig".' },
            { q: 'Total price?', options: ['₱20', '₱40', '₱14', '₱400'], answer: 1, explain: 'apatnapu = 40.' },
          ],
          dictation: [0, 3],
          vocab: [['pabili', "I'd like to buy"], ['lahat', 'all, total'], ['tubig', 'water']],
        },
        {
          id: 'tl-bl-3', title: 'Ang Panahon',
          sentences: ['Mainit ngayon sa Maynila.', 'Umulan kahapon nang malakas.', 'Bukas, baka may bagyo.', 'Magdala ka ng payong!'],
          translation: "It's hot in Manila today. It rained hard yesterday. Tomorrow there might be a typhoon. Bring an umbrella!",
          questions: [
            { q: 'How is the weather today?', options: ['Rainy', 'Hot', 'Cold', 'Windy'], answer: 1, explain: '"Mainit".' },
            { q: 'What might happen tomorrow?', options: ['Sunshine', 'A typhoon', 'Snow', 'An earthquake'], answer: 1, explain: '"baka may bagyo".' },
          ],
          dictation: [0, 3],
          vocab: [['mainit', 'hot'], ['umulan', 'rained'], ['baka', 'maybe, might'], ['bagyo', 'typhoon'], ['payong', 'umbrella']],
        },
      ],
    },

    intermediate: {
      grammar: [
        {
          id: 'tl-i-1', title: 'mag- verbs (actor focus)',
          summary: 'The other big actor-focus affix.',
          body: `<p>{{mag-}} verbs are actor-focus like {{-um-}}, often for deliberate or outward actions.</p><ul><li>Infinitive: {{magluto}} (to cook)</li><li>Completed: {{mag-}} → {{nag-}}: {{nagluto}}</li><li>Incomplete: {{nag-}} + repeat first syllable of root: {{nagluluto}}</li><li>Contemplated: {{mag-}} + repeat: {{magluluto}}</li></ul><p>Some roots take both affixes with different meanings: {{bumili}} (buy) vs {{magbili}} (sell, old-fashioned; today {{magbenta}}). {{umakyat}} (climb up) vs {{mag-akyat}} (bring something up).</p>`,
          table: { title: 'mag- aspect chart', headers: ['Root', 'Completed', 'Incomplete', 'Contemplated'], rows: [['luto (cook)', 'nagluto', 'nagluluto', 'magluluto'], ['basa (read)', 'nagbasa', 'nagbabasa', 'magbabasa'], ['trabaho (work)', 'nagtrabaho', 'nagtatrabaho', 'magtatrabaho'], ['laro (play)', 'naglaro', 'naglalaro', 'maglalaro'], ['aral (study)', 'nag-aral', 'nag-aaral', 'mag-aaral']] },
          examples: [['Nagtatrabaho siya sa ospital.', 'She works at a hospital.'], ['Naglaro ang mga bata sa labas.', 'The children played outside.'], ['Mag-aaral ako mamayang gabi.', "I'll study tonight."]],
          vocab: [['ospital', 'hospital'], ['labas', 'outside'], ['mamaya', 'later'], ['mag-aral', 'to study'], ['maglaro', 'to play']],
          exercises: [
            { type: 'fill', q: 'Kahapon, ___ (luto) si Tatay ng sinigang.', answer: ['nagluto'], explain: 'Completed → nag-.' },
            { type: 'fill', q: 'Ngayon, ___ (basa) ako ng balita.', answer: ['nagbabasa'], explain: 'Incomplete → nag- + ba-basa.' },
            { type: 'mc', q: 'Contemplated aspect of "maglaro":', options: ['naglalaro', 'maglalaro', 'naglaro', 'lalaro'], answer: 1, explain: 'mag- + la-laro.' },
          ],
        },
        {
          id: 'tl-i-2', title: 'Object focus with -in',
          summary: 'When the thing acted on is the topic.',
          body: `<p>With <b>object focus</b>, the object becomes the {{ang}}-topic and the actor takes {{ng}}. Use it when the object is <b>specific/definite</b>.</p>
<ul><li>{{Kumain ako ng mangga.}} — I ate a mango (some mango; actor focus).</li><li>{{Kinain ko ang mangga.}} — I ate <i>the</i> mango (object focus).</li></ul>
<table class="conj"><tr><th>Aspect</th><th>Form</th><th>kain</th><th>basa</th></tr><tr><td>Infinitive / command</td><td>root + -in</td><td>kainin</td><td>basahin</td></tr><tr><td>Completed</td><td>-in- infix</td><td>kinain</td><td>binasa</td></tr><tr><td>Incomplete</td><td>-in- + reduplication</td><td>kinakain</td><td>binabasa</td></tr><tr><td>Contemplated</td><td>reduplication + -in</td><td>kakainin</td><td>babasahin</td></tr></table>
<p>Roots ending in a vowel often add <b>-hin</b> ({{basahin}}). Roots starting with <b>l</b> or <b>y</b> use {{ni-}} in the past: {{niluto}}, {{niyakap}}.</p>
<p>Commands are usually object focus: {{Kainin mo ito.}} (Eat this.) {{Gawin mo na!}} (Do it now!)</p>`,
          examples: [['Binasa ko na ang libro.', "I've already read the book."], ['Niluluto ni Lola ang adobo.', 'Grandma is cooking the adobo.'], ['Gagawin namin ang proyekto bukas.', "We'll do the project tomorrow."], ['Inumin mo ang gamot.', 'Take (drink) the medicine.']],
          vocab: [['libro', 'book'], ['gamot', 'medicine'], ['proyekto', 'project'], ['yakap', 'hug']],
          exercises: [
            { type: 'mc', q: '"I read the letter" (specific) =', options: ['Nagbasa ako ng sulat.', 'Binasa ko ang sulat.', 'Binasa ako ang sulat.', 'Nagbasa ko ang sulat.'], answer: 1, explain: 'Definite object → object focus, actor in ng-form.' },
            { type: 'fill', q: 'Kahapon, ___ (kain) ng pusa ang isda.', answer: ['kinain'], explain: 'Completed object focus → -in- infix.' },
            { type: 'fill', q: '___ (gawa) mo na ang assignment mo! (command)', answer: ['gawin', 'Gawin'], explain: 'gawa + -in → gawin.' },
            { type: 'mc', q: 'Completed object focus of "luto":', options: ['linuto', 'niluto', 'nagluto', 'lutuin'], answer: 1, explain: 'l-initial → ni-.' },
          ],
        },
        {
          id: 'tl-i-3', title: 'Locative focus with -an',
          summary: 'The place, person or surface affected is the topic.',
          body: `<p>{{-an}} (or {{-han}} after vowels) focuses the <b>location, direction, or recipient</b> of an action — often things that get cleaned, visited, or given to.</p>
<ul><li>Infinitive: {{hugasan}} (wash something), {{puntahan}} (go to a place)</li><li>Completed: -in- + -an: {{hinugasan}}, {{pinuntahan}}</li><li>Incomplete: {{hinuhugasan}}, {{pinupuntahan}}</li><li>Contemplated: {{huhugasan}}, {{pupuntahan}}</li></ul>`,
          examples: [['Hugasan mo ang pinggan.', 'Wash the dishes.'], ['Pinuntahan namin si Lola sa probinsya.', 'We visited Grandma in the province.'], ['Tinulungan niya ako.', 'He helped me.'], ['Bibigyan kita ng regalo.', "I'll give you a gift."]],
          vocab: [['hugas', 'wash'], ['pinggan', 'plate, dish'], ['tulong', 'help'], ['probinsya', 'province']],
          exercises: [
            { type: 'mc', q: '"Help me!" =', options: ['Tumulong mo ako!', 'Tulungan mo ako!', 'Tulungin mo ako!', 'Tulong ako!'], answer: 1, explain: 'Person helped is the topic → tulungan.' },
            { type: 'fill', q: 'Kahapon, ___ (puntahan, completed) namin ang museo.', answer: ['pinuntahan'], explain: '-in- + -an.' },
            { type: 'mc', q: 'In "Hinugasan ko ang kotse", what is the topic?', options: ['ko', 'ang kotse', 'hinugasan', 'none'], answer: 1, explain: 'ang marks the topic (the car).' },
          ],
        },
        {
          id: 'tl-i-4', title: 'Enclitic particles: na, pa, rin, lang, naman…',
          summary: 'Small words that give Tagalog its flavor.',
          body: `<ul><li>{{na}} — already / now: {{Tara na!}} (Let's go now!)</li><li>{{pa}} — still / yet / more: {{Hindi pa}} (not yet), {{Isa pa}} (one more)</li><li>{{din / rin}} — also ({{rin}} after vowels): {{Ako rin}}</li><li>{{lang / lamang}} — only, just: {{Sandali lang}} (just a moment)</li><li>{{naman}} — softener / contrast: {{Ikaw naman?}} (And you?), {{Mabuti naman}} (I'm fine)</li><li>{{nga}} — indeed / please: {{Pakiabot nga}} (Please pass it)</li><li>{{daw / raw}} — reportedly, "they say"</li><li>{{kasi}} — because</li></ul>
<p><b>Order:</b> one-syllable pronouns ({{ka}}, {{ko}}, {{mo}}) come before particles; two-syllable pronouns ({{siya}}, {{kami}}) come after: {{Kumain ka na ba?}} vs {{Kumain na ba siya?}}</p>`,
          examples: [['Hindi pa ako kumakain.', "I haven't eaten yet."], ['Pagod na rin ako.', "I'm tired too now."], ['Sandali lang po.', 'Just a moment, please.'], ['Darating daw siya bukas.', "He's supposedly coming tomorrow."]],
          vocab: [['tara', "let's go"], ['sandali', 'moment'], ['darating', 'will arrive'], ['paki-', 'please (request prefix)']],
          exercises: [
            { type: 'mc', q: '"Not yet" =', options: ['Hindi na', 'Hindi pa', 'Hindi rin', 'Hindi lang'], answer: 1, explain: 'pa = yet / still.' },
            { type: 'mc', q: '"Me too" =', options: ['Ako na', 'Ako rin', 'Ako pa', 'Ako lang'], answer: 1, explain: 'rin after a vowel (ako); din after a consonant. You will hear both in casual speech.' },
            { type: 'mc', q: 'Correct word order:', options: ['Umalis na ba siya?', 'Umalis siya na ba?', 'Umalis ba siya na?', 'Siya umalis na ba?'], answer: 0, explain: 'Two-syllable pronoun after particles.' },
            { type: 'fill', q: 'Isa ___ po! (One more, please!)', answer: ['pa'], explain: 'pa = more.' },
          ],
        },
      ],
      reading: [
        {
          id: 'tl-ir-1', title: 'Ang Pasko sa Pilipinas',
          sentences: ['Sa Pilipinas, nagsisimula ang Pasko sa Setyembre pa lang.', 'Pagpasok ng mga "ber" months, maririnig mo na ang mga awiting pamasko sa mga mall.', 'Maraming pamilya ang nagsasabit ng parol sa kanilang bintana.', 'Tuwing madaling-araw mula Disyembre 16, nagsisimba ang mga tao para sa Simbang Gabi.', 'Pagkatapos ng misa, kumakain sila ng bibingka at puto bumbong.', 'Sa Noche Buena, nagsasalo-salo ang buong pamilya.'],
          translation: 'In the Philippines, Christmas starts as early as September. When the "ber" months arrive, you can already hear Christmas songs in malls. Many families hang a parol (star lantern) in their window. Every dawn from December 16, people go to mass for Simbang Gabi. After mass, they eat bibingka and puto bumbong (rice cakes). At Noche Buena, the whole family feasts together.',
          questions: [
            { q: 'Kailan nagsisimula ang Pasko sa Pilipinas?', options: ['Disyembre', 'Setyembre', 'Nobyembre', 'Enero'], answer: 1, explain: '"sa Setyembre pa lang".' },
            { q: 'Ano ang isinasabit sa bintana?', options: ['Ilaw', 'Parol', 'Bibingka', 'Kampana'], answer: 1, explain: '"nagsasabit ng parol".' },
            { q: 'Ano ang kinakain pagkatapos ng Simbang Gabi?', options: ['Lechon', 'Bibingka at puto bumbong', 'Adobo', 'Pansit'], answer: 1, explain: '"kumakain sila ng bibingka at puto bumbong".' },
          ],
          vocab: [['pa lang', 'as early as / only just'], ['awiting pamasko', 'Christmas songs'], ['magsabit', 'to hang'], ['madaling-araw', 'dawn'], ['magsalo-salo', 'to feast together']],
        },
        {
          id: 'tl-ir-2', title: 'Ang Dyip',
          sentences: ['Ang dyip ang pinakasikat na pampublikong sasakyan sa Pilipinas.', 'Galing ito sa mga lumang sasakyang militar na iniwan ng mga Amerikano pagkatapos ng Ikalawang Digmaang Pandaigdig.', "Makukulay ang mga dyip at may iba't ibang disenyo.", 'Kapag sumakay ka, iabot mo ang bayad sa katabi mo at sabihin mo, "Bayad po."', 'Kapag bababa ka na, sabihin mo, "Para po!"', 'Ngayon, pinapalitan na ng gobyerno ang ilang lumang dyip ng mga modernong sasakyan.'],
          translation: 'The jeepney is the most popular public transport in the Philippines. It came from old military vehicles left by the Americans after World War II. Jeepneys are colorful and have different designs. When you ride, pass your fare to the person next to you and say, "Here\'s my fare." When you\'re about to get off, say, "Stop, please!" Now, the government is replacing some old jeepneys with modern vehicles.',
          questions: [
            { q: 'Saan galing ang dyip?', options: ['Sa Japan', 'Sa mga lumang sasakyang militar ng Amerikano', 'Sa Espanya', 'Sa mga bus'], answer: 1, explain: '"iniwan ng mga Amerikano".' },
            { q: 'Ano ang sinasabi mo kapag bababa ka na?', options: ['Bayad po', 'Para po', 'Salamat po', 'Tara na'], answer: 1, explain: '"Para po!"' },
            { q: '"iniwan ng mga Amerikano" — what focus is "iniwan"?', options: ['Actor focus', 'Object focus (the vehicles were left)', 'Benefactive', 'Causative'], answer: 1, explain: 'iwan → iniwan (completed object/locative focus); the vehicles are the focus.' },
          ],
          vocab: [['pinakasikat', 'most popular'], ['sasakyan', 'vehicle'], ['iabot', 'to hand over'], ['katabi', 'person beside you'], ['bumaba', 'to get off'], ['palitan', 'to replace']],
        },
      ],
      listening: [
        {
          id: 'tl-il-1', title: 'Voice message mula kay Carlo',
          sentences: ['Hello, Bea! Si Carlo ito.', 'Pasensya na, hindi ako makakapunta sa party mamaya.', 'May sakit kasi ang kapatid ko, kaya aalagaan ko siya.', 'Puwede ba tayong magkita sa Sabado na lang?', 'Text mo ako, ha? Ingat!'],
          translation: "Hi Bea! It's Carlo. Sorry, I can't make it to the party later. My sibling is sick, so I'll take care of them. Can we just meet on Saturday instead? Text me, okay? Take care!",
          questions: [
            { q: 'Bakit hindi makakapunta si Carlo?', options: ['Pagod siya', 'May sakit ang kapatid niya', 'May trabaho siya', 'Nasa probinsya siya'], answer: 1, explain: '"May sakit kasi ang kapatid ko".' },
            { q: 'Kailan niya gustong magkita?', options: ['Mamaya', 'Bukas', 'Sa Sabado', 'Sa Linggo'], answer: 2, explain: '"sa Sabado na lang".' },
            { q: '"makakapunta" expresses…', options: ['Ability (can go)', 'Habit', 'Command', 'Past'], answer: 0, explain: 'maka- = abilitative.' },
          ],
          dictation: [1, 3],
          vocab: [['pasensya na', 'sorry'], ['alagaan', 'to take care of'], ['ingat', 'take care'], ['na lang', 'instead, just']],
        },
        {
          id: 'tl-il-2', title: 'Sa Dyip',
          sentences: ['Manong, dadaan po ba ito sa Cubao?', 'Oo, sakay na!', 'Bayad po. Isang estudyante, mula Quiapo hanggang Cubao.', 'Salamat. Heto ang sukli mo.', 'Sa tabi lang po. Para po!'],
          translation: "Sir, does this pass through Cubao? Yes, get on! Here's my fare. One student, from Quiapo to Cubao. Thanks. Here's your change. Just here at the side, please. Stop, please!",
          questions: [
            { q: 'Saan pupunta ang pasahero?', options: ['Quiapo', 'Cubao', 'Makati', 'Pasay'], answer: 1, explain: '"hanggang Cubao".' },
            { q: 'Ano ang ibinigay ng drayber?', options: ['Tiket', 'Sukli', 'Tubig', 'Mapa'], answer: 1, explain: '"Heto ang sukli mo."' },
            { q: '"dadaan" is which aspect?', options: ['Completed', 'Incomplete', 'Contemplated', 'Infinitive'], answer: 2, explain: 'da-daan (reduplication, no affix) → contemplated.' },
          ],
          dictation: [0, 2],
          vocab: [['manong', 'older man / sir (driver)'], ['dumaan', 'to pass by'], ['sukli', 'change (money)'], ['sa tabi', 'at the side']],
        },
      ],
    },

    advanced: {
      grammar: [
        {
          id: 'tl-a-1', title: 'Conveyance & benefactive focus: i- and ipag-',
          summary: 'Focus on the thing moved, or the person benefiting.',
          body: `<p><b>i-</b> (conveyance) makes the thing <b>moved, given, or put</b> the topic: {{Ibigay mo ito kay Ana}} (Give this to Ana), {{Ilagay mo ang libro sa mesa}}.</p>
<p>Aspects: {{ibigay}} → completed {{ibinigay}} → incomplete {{ibinibigay}} → contemplated {{ibibigay}}.</p>
<p><b>ipag- / i-</b> (benefactive) makes the <b>beneficiary</b> the topic: {{Ipagluto mo ako ng adobo}} (Cook adobo for me). {{Ibili mo ako ng tinapay}} (Buy me some bread).</p>
<p>Aspects of ipag-: {{ipagluto}} → {{ipinagluto}} → {{ipinagluluto}} → {{ipagluluto}}.</p>
<p>Compare one event in three focuses with {{bigay}}: {{Nagbigay ako ng regalo kay Ana}} (actor), {{Ibinigay ko ang regalo kay Ana}} (the gift), {{Binigyan ko si Ana ng regalo}} (Ana, the receiver).</p>`,
          examples: [['Ibinigay ni Lolo ang relo sa akin.', 'Grandpa gave the watch to me.'], ['Ipinagluto ako ni Nanay ng sinigang.', 'Mom cooked sinigang for me.'], ['Itatapon ko na ang mga lumang damit.', "I'll throw away the old clothes."], ['Ibili mo naman ako ng kape.', 'Buy me a coffee, would you?']],
          vocab: [['ilagay', 'to put'], ['itapon', 'to throw away'], ['relo', 'watch'], ['damit', 'clothes']],
          exercises: [
            { type: 'mc', q: '"I put the keys on the table" (the keys are focus) =', options: ['Naglagay ako ng susi sa mesa.', 'Inilagay ko ang susi sa mesa.', 'Nilagyan ko ang susi sa mesa.', 'Inilagay ako ang susi.'], answer: 1, explain: 'Conveyance i- → inilagay (completed).' },
            { type: 'fill', q: '___ (ipagluto, completed) ako ni Lola ng pansit.', answer: ['ipinagluto', 'Ipinagluto'], explain: 'ipag- completed → ipinag-.' },
            { type: 'mc', q: 'Which sentence focuses the receiver?', options: ['Ibinigay ko ang pera.', 'Binigyan ko siya ng pera.', 'Nagbigay ako ng pera.', 'Magbibigay ako.'], answer: 1, explain: '-an locative focus on the receiver.' },
            { type: 'fill', q: 'Bukas, ___ (ibigay, contemplated) ko ito sa iyo.', answer: ['ibibigay'], explain: 'i- + bi-bigay.' },
          ],
        },
        {
          id: 'tl-a-2', title: 'Abilitative & involuntary: maka- / ma-',
          summary: '"Can / managed to" and things that just happen.',
          body: `<p><b>maka-</b> (actor focus) expresses ability or accidental/achieved action: {{makakain}} (be able to eat). Completed: {{nakakain}}; incomplete: {{nakakakain}}; contemplated: {{makakakain}}.</p>
<p><b>ma-</b> (object focus) does the same with the object as topic: {{Nabasa ko ang email}} (I [managed to / happened to] read the email). Very common with perception verbs: {{makita}} (see), {{marinig}} (hear), {{maintindihan}} (understand).</p>
<p>Negative ability: {{Hindi ko maintindihan}} (I can't understand). {{Hindi ako makatulog}} (I can't sleep).</p>
<p>Many ma- verbs describe involuntary states: {{matulog}} (sleep), {{maligaw}} (get lost), {{mahulog}} (fall), {{masira}} (break down).</p>`,
          examples: [['Hindi ako makatulog kagabi.', "I couldn't sleep last night."], ['Nakita mo ba ang susi ko?', 'Did you see my keys?'], ['Naintindihan ko na!', 'I get it now!'], ['Naligaw kami sa Quiapo.', 'We got lost in Quiapo.'], ['Nasira ang cellphone ko.', 'My phone broke.']],
          vocab: [['kagabi', 'last night'], ['marinig', 'to hear'], ['maintindihan', 'to understand'], ['maligaw', 'to get lost'], ['masira', 'to break down']],
          exercises: [
            { type: 'mc', q: '"I can\'t hear you" =', options: ['Hindi kita naririnig.', 'Hindi kita marinig.', 'Both are possible (ongoing vs. ability)', 'Hindi ako rinig.'], answer: 2, explain: 'naririnig = not hearing (now); marinig = can\'t hear.' },
            { type: 'fill', q: 'Kahapon, ___ (makita, completed) ko si Ben sa mall.', answer: ['nakita'], explain: 'ma- completed → na-.' },
            { type: 'mc', q: '"He wasn\'t able to come" =', options: ['Hindi siya nakapunta.', 'Hindi siya pumunta.', 'Hindi siya pupunta.', 'Hindi siya makapupunta.'], answer: 0, explain: 'Completed abilitative → naka-.' },
          ],
        },
        {
          id: 'tl-a-3', title: 'Causatives: magpa-, ipa-, pa-…-in',
          summary: 'Making or letting someone do something.',
          body: `<ul><li><b>magpa-</b> (actor = causer): {{Nagpagupit ako}} — I had my hair cut. {{Magpapagawa kami ng bahay}} — We'll have a house built.</li><li><b>ipa-</b> (object = thing to be done): {{Ipinaayos ko ang kotse}} — I had the car fixed. {{Ipapalaba ko ito}} — I'll have this laundered.</li><li><b>pa-…-in</b> (causee = topic): {{Pinakain niya ang aso}} — She fed the dog (made the dog eat). {{Pinatulog ko ang bata}} — I put the child to sleep.</li><li><b>paki-</b> polite requests: {{Pakiabot ng asin}} — Please pass the salt.</li></ul>`,
          examples: [['Nagpasundo ako sa kapatid ko.', 'I had my sibling pick me up.'], ['Ipinadala niya ang pera sa probinsya.', 'He sent (had sent) the money to the province.'], ['Pinaupo ng guro ang mga estudyante.', 'The teacher had the students sit down.'], ['Pakisara ng pinto.', 'Please close the door.']],
          vocab: [['gupit', 'haircut'], ['ayos', 'fix, order'], ['sundo', 'pick up (someone)'], ['upo', 'sit'], ['sara', 'close']],
          exercises: [
            { type: 'mc', q: '"I had my phone repaired" =', options: ['Inayos ko ang cellphone.', 'Ipinaayos ko ang cellphone.', 'Nag-ayos ako ng cellphone.', 'Naayos ko ang cellphone.'], answer: 1, explain: 'ipa- causative, object focus.' },
            { type: 'mc', q: '"She fed the baby" =', options: ['Kumain siya ng baby.', 'Pinakain niya ang baby.', 'Kinain niya ang baby.', 'Nagpakain ang baby.'], answer: 1, explain: 'pa-…-in: make the baby eat. (Careful — "kinain niya ang baby" means she ate the baby!)' },
            { type: 'fill', q: '___abot ng tubig. (Please pass the water)', answer: ['paki', 'Paki'], explain: 'paki- = please.' },
          ],
        },
        {
          id: 'tl-a-4', title: 'Recent perfective: ka- + reduplication',
          summary: '"Just did" — with a twist in the actor marking.',
          body: `<p>To say something <b>just</b> happened, use {{ka-}} + first syllable reduplicated + root, usually with {{lang}}: {{kakakain}} (just ate), {{kararating}} (just arrived; d → r between vowels), {{kaaalis}} (just left).</p>
<p><b>Key quirk:</b> the actor takes the <b>ng-form</b> and there is no {{ang}}-topic: {{Kakakain ko lang.}} (I just ate.) — not *Kakakain ako lang*.</p>
<p>Colloquially you'll also hear {{kakarating}}, {{kakaalis}} (with "ka-ka-").</p>`,
          examples: [['Kakakain ko lang, busog pa ako.', "I just ate, I'm still full."], ['Kararating lang ni Mia galing Dubai.', 'Mia just arrived from Dubai.'], ['Kaaalis lang nila.', 'They just left.'], ['Kagigising ko lang.', 'I just woke up.']],
          vocab: [['busog', 'full (after eating)'], ['galing', 'coming from'], ['gising', 'awake']],
          exercises: [
            { type: 'mc', q: '"I just arrived" =', options: ['Kararating ako lang.', 'Kararating ko lang.', 'Dumating lang ako.', 'Darating ko lang.'], answer: 1, explain: 'Recent perfective → ng-form actor.' },
            { type: 'fill', q: '___ ko lang. (I just woke up — gising)', answer: ['kagigising', 'Kagigising'], explain: 'ka + gi + gising.' },
            { type: 'mc', q: 'Who is the actor in "Kaaalis lang ni Paolo"?', options: ['Nobody', 'Paolo', 'lang', 'unclear'], answer: 1, explain: 'ni Paolo = actor (ng-form for names).' },
          ],
        },
      ],
      reading: [
        {
          id: 'tl-ar-1', title: 'Ang Diwa ng Bayanihan',
          sentences: ['Ang salitang "bayanihan" ay nagmula sa salitang "bayan," na nangangahulugang bansa, bayan, o komunidad.', 'Noong unang panahon, kapag lilipat ng tirahan ang isang pamilya sa probinsya, binubuhat ng mga kapitbahay ang buong bahay-kubo nila gamit ang mga kawayan.', 'Walang humihingi ng bayad; sapat na ang salu-salong inihahanda ng pamilya bilang pasasalamat.', 'Bagaman bihira na itong makita sa literal na anyo, buhay pa rin ang diwa ng bayanihan, lalo na tuwing may bagyo o sakuna.', 'Noong pandemya, halimbawa, nagsulputan ang mga community pantry kung saan kumukuha ang mga tao ng pagkain ayon sa kanilang pangangailangan at nagbibigay ayon sa kanilang kakayahan.'],
          translation: 'The word "bayanihan" comes from "bayan," which means nation, town, or community. In the old days, when a family was going to move house in the province, the neighbors would carry their entire nipa hut using bamboo poles. No one asked for payment; the meal the family prepared as thanks was enough. Although it is rarely seen in its literal form anymore, the spirit of bayanihan is still alive, especially whenever there is a typhoon or disaster. During the pandemic, for example, community pantries sprang up where people took food according to their needs and gave according to their means.',
          questions: [
            { q: 'Ano ang ibig sabihin ng "bayan"?', options: ['Bahay', 'Bansa, bayan, o komunidad', 'Kapitbahay', 'Kawayan'], answer: 1, explain: '"nangangahulugang bansa, bayan, o komunidad".' },
            { q: 'Ano ang kapalit ng tulong ng mga kapitbahay?', options: ['Pera', 'Salu-salo', 'Kawayan', 'Wala talaga'], answer: 1, explain: '"sapat na ang salu-salong inihahanda…".' },
            { q: '"binubuhat ng mga kapitbahay ang buong bahay-kubo" — ano ang paksa (ang)?', options: ['ang mga kapitbahay', 'ang buong bahay-kubo', 'ang kawayan', 'ang pamilya'], answer: 1, explain: 'Object focus (-in-): the house is the topic.' },
            { q: 'Ano ang ibig sabihin ng "nagsulputan"?', options: ['Nagsara', 'Biglang lumitaw nang marami', 'Nawala', 'Nagbayad'], answer: 1, explain: 'sulpot = pop up; mag-…-an = many, all at once.' },
          ],
          vocab: [['diwa', 'spirit, essence'], ['buhatin', 'to lift, carry'], ['kawayan', 'bamboo'], ['bagaman', 'although'], ['sakuna', 'disaster'], ['pangangailangan', 'need']],
        },
        {
          id: 'tl-ar-2', title: 'Ang mga Bagong Bayani',
          sentences: ['Milyun-milyong Pilipino ang nagtatrabaho sa ibang bansa bilang mga Overseas Filipino Worker, o OFW.', 'Ipinapadala nila ang malaking bahagi ng kanilang sahod sa kanilang mga pamilya sa Pilipinas.', 'Dahil dito, napapag-aral nila ang kanilang mga anak at napapagawa ang kanilang mga bahay.', 'Ngunit may kapalit ang sakripisyong ito: maraming bata ang lumalaki nang malayo sa kanilang mga magulang.', 'Kaya naman tinatawag silang "mga bagong bayani" ng bansa.'],
          translation: 'Millions of Filipinos work abroad as Overseas Filipino Workers, or OFWs. They send a large part of their wages to their families in the Philippines. Because of this, they are able to send their children to school and have their houses built. But this sacrifice comes at a cost: many children grow up far from their parents. That is why they are called the nation\'s "new heroes".',
          questions: [
            { q: 'Ano ang ipinapadala ng mga OFW?', options: ['Mga regalo', 'Bahagi ng kanilang sahod', 'Mga sulat', 'Pagkain'], answer: 1, explain: '"malaking bahagi ng kanilang sahod".' },
            { q: '"napapag-aral nila ang kanilang mga anak" — what does it mean?', options: ['They study with their kids', 'They are able to put their kids through school', 'Their kids taught them', 'They stopped studying'], answer: 1, explain: 'na- (abilitative) + pa- (causative) + aral.' },
            { q: 'Ano ang kapalit ng sakripisyo?', options: ['Mas malaking bahay', 'Lumalaki ang mga bata nang malayo sa magulang', 'Mas mababang sahod', 'Wala'], answer: 1, explain: '"maraming bata ang lumalaki nang malayo…".' },
          ],
          vocab: [['sahod', 'wage, salary'], ['bahagi', 'part'], ['kapalit', 'price, exchange'], ['bayani', 'hero'], ['lumaki', 'to grow up']],
        },
      ],
      listening: [
        {
          id: 'tl-al-1', title: 'Radyo: Usapang Taglish',
          sentences: ['Magandang gabi po sa ating mga tagapakinig.', 'Ngayong gabi, pag-uusapan natin ang Taglish, ang paghahalo ng Tagalog at Ingles.', 'Para sa ilan, tanda raw ito ng pagkasira ng wika.', 'Pero para sa mga dalubwika, natural lang itong nangyayari kapag dalawang wika ang ginagamit araw-araw.', 'Kayo, mga kaibigan, ano sa tingin ninyo?'],
          translation: "Good evening to our listeners. Tonight we'll talk about Taglish, the mixing of Tagalog and English. For some, it is supposedly a sign of the language's decay. But for linguists, it naturally happens when two languages are used every day. What about you, friends, what do you think?",
          questions: [
            { q: 'Ano ang Taglish?', options: ['Isang diyalekto ng Cebu', 'Paghahalo ng Tagalog at Ingles', 'Pormal na Tagalog', 'Isang radyo'], answer: 1, explain: '"ang paghahalo ng Tagalog at Ingles".' },
            { q: 'Ano ang opinyon ng mga dalubwika?', options: ['Sumisira ito sa wika', 'Natural itong nangyayari', 'Dapat itong ipagbawal', 'Wala silang opinyon'], answer: 1, explain: '"natural lang itong nangyayari".' },
            { q: 'Ano ang ipinapahiwatig ng "raw" sa "tanda raw ito"?', options: ['Opinyon ng nagsasalita', 'Sinasabi ng iba (reported)', 'Utos', 'Tanong'], answer: 1, explain: 'raw/daw = hearsay.' },
          ],
          dictation: [1, 3],
          vocab: [['tagapakinig', 'listener'], ['pag-usapan', 'to discuss'], ['tanda', 'sign'], ['dalubwika', 'linguist'], ['sa tingin ninyo', 'in your opinion']],
        },
        {
          id: 'tl-al-2', title: 'Balita: Paparating na Bagyo',
          sentences: ['Itinaas na ng PAGASA ang Signal Number 3 sa ilang bahagi ng Bicol.', 'Pinapayuhan ang mga residente sa mabababang lugar na lumikas agad.', 'Kinansela na rin ang lahat ng biyahe ng barko papuntang Visayas.', 'Inaasahang tatama sa kalupaan ang bagyo bukas ng madaling-araw.'],
          translation: 'PAGASA has raised Signal Number 3 in some parts of Bicol. Residents in low-lying areas are advised to evacuate immediately. All ship trips to the Visayas have also been cancelled. The typhoon is expected to make landfall tomorrow at dawn.',
          questions: [
            { q: 'Ano ang payo sa mga residente sa mabababang lugar?', options: ['Manatili sa bahay', 'Lumikas agad', 'Bumili ng pagkain', 'Sumakay ng barko'], answer: 1, explain: '"lumikas agad".' },
            { q: 'Kailan inaasahang tatama ang bagyo?', options: ['Ngayong gabi', 'Bukas ng madaling-araw', 'Sa susunod na linggo', 'Kahapon'], answer: 1, explain: '"bukas ng madaling-araw".' },
            { q: 'In "Itinaas na ng PAGASA ang Signal Number 3", what is the topic (ang)?', options: ['PAGASA', 'Signal Number 3', 'Bicol', 'none'], answer: 1, explain: 'i- conveyance focus: the signal is what was raised.' },
          ],
          dictation: [1, 3],
          vocab: [['itaas', 'to raise'], ['payuhan', 'to advise'], ['lumikas', 'to evacuate'], ['tumama sa kalupaan', 'to make landfall'], ['inaasahan', 'expected']],
        },
      ],
    },
  },
};
