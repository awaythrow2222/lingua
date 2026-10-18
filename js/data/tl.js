// Tagalog course content. {{…}} marks Tagalog text inside English explanations (made clickable).
import G from './tl-grammar.js';

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

    'ang': { pos: 'marker (topic)', def: 'marks the topic: what the sentence is about; like "the"', forms: ['ang mga'], examples: [['Maganda ang bahay.', 'The house is beautiful.']], mnemonic: 'ANG = "And now, the Guest of honor": it announces the star of the sentence.', notes: 'For names use si. Plural: ang mga. Always specific ("the …").' },
    'ng': { pos: 'marker', def: '"of" (owner); also marks the object of actor-focus verbs and the actor of other verbs. Pronounced "nang".', examples: [['bahay ng guro', "the teacher's house"], ['Kumain ako ng mangga.', 'I ate a mango.']], mnemonic: 'Say it "nang". Think "of" first: bahay ng guro = house OF teacher.', notes: 'For names use ni. Not the same as nang (used before verbs/adjectives).' },
    'sa': { pos: 'marker (place / direction)', def: 'in, at, on, to, from: marks places, directions and receivers', examples: [['Nasa bahay ako.', "I'm at home."], ['Pupunta ako sa Cebu.', "I'm going to Cebu."]], mnemonic: 'SA = "Somewhere / At": the place word.', notes: 'For names use kay. Grammar term: locative.' },
    'si': { pos: 'marker (topic, names)', def: 'marks a person\'s name as the topic', forms: ['sina'], examples: [['Guro si Ana.', 'Ana is a teacher.']], mnemonic: 'SI = "Somebody Important": used for people.', notes: 'Plural: sina (Ana and others).' },
    'ni': { pos: 'marker (names)', def: '"of" / "by" for a person\'s name', forms: ['nina'], examples: [['bahay ni Ben', "Ben's house"]], mnemonic: 'ni = ng for names.', notes: 'Plural: nina.' },
    'kay': { pos: 'marker (names)', def: '"to / for / at" for a person\'s name', forms: ['kina'], examples: [['Para kay Ana ito.', 'This is for Ana.']], mnemonic: 'kay = sa for names.', notes: 'Plural: kina.' },
    'mga': { pos: 'plural marker', def: 'makes the next noun plural; pronounced "ma-NGA"', examples: [['ang mga bata', 'the children']], mnemonic: 'MGA = "Many Grouped All together".' },
    'ay': { pos: 'linking word', def: 'joins a topic placed first to its comment (formal word order)', examples: [['Ang bahay ay maganda.', 'The house is beautiful.']], mnemonic: 'AY sits where English "is" would, but only in the flipped order.', notes: 'Grammar term: ay-inversion.' },
    'na': { pos: 'particle / linker', def: '1) already, now; 2) the linker between a describing word and a noun after consonants', examples: [['Kumain na ako.', "I've already eaten."], ['mabait na bata', 'kind child']], mnemonic: 'NA = "Now / Already".', notes: 'After vowels the linker is -ng instead (magandang).' },
    'pa': { pos: 'particle', def: 'still, yet, more', examples: [['Hindi pa.', 'Not yet.'], ['Isa pa.', 'One more.']], mnemonic: 'PA = "Plus / Pending": more, or not done yet.' },
    'ba': { pos: 'particle', def: 'turns a statement into a yes/no question', examples: [['Gutom ka ba?', 'Are you hungry?']], mnemonic: 'BA = a spoken question mark.', notes: 'Goes after the first word (and after short pronouns like ka).' },
    'rin': { pos: 'particle', def: 'also, too (after a vowel); din after a consonant', forms: ['din'], examples: [['Ako rin.', 'Me too.']], mnemonic: 'rIN = "In too".' },
    'lang': { pos: 'particle', def: 'only, just', forms: ['lamang'], examples: [['Sandali lang.', 'Just a moment.']], mnemonic: 'LANG = "Lone": only.' },
    'naman': { pos: 'particle', def: 'softens a statement; "as for…", "and you?"', examples: [['Ikaw naman?', 'And you?'], ['Mabuti naman.', "I'm fine."]], mnemonic: 'NAMAN = "now, then…": a gentle turn.' },
    'nang': { pos: 'conjunction / adverb marker', def: 'when (past); how (before adjectives); over and over (between repeated verbs)', examples: [['Kumain siya nang mabilis.', 'He ate quickly.'], ['Nang dumating ako…', 'When I arrived…']], mnemonic: 'nang (long) goes before verbs/adjectives; ng (short) before nouns.' },
    'ito': { pos: 'demonstrative', def: 'this (near the speaker)', forms: ['nito', 'dito'], examples: [['Ano ito?', 'What is this?']], mnemonic: 'ITo = "IT, here": right by me.', notes: 'nito = of this; dito = here.' },
    'iyan': { pos: 'demonstrative', def: 'that (near the listener)', forms: ['niyan', 'diyan', 'yan'], examples: [['Ano iyan?', 'What is that?']], mnemonic: 'iyAN = "by yoU-AN".', notes: 'diyan = there (near you).' },
    'iyon': { pos: 'demonstrative', def: 'that (far from both speakers)', forms: ['niyon', 'noon', 'doon', 'yon'], examples: [['Malayo iyon.', "That's far."]], mnemonic: 'iyON = "Out ON the horizon".', notes: 'doon = over there.' },
    'ikaw': { pos: 'pronoun (topic)', def: 'you (one person)', forms: ['ka'], examples: [['Ikaw ba si Ana?', 'Are you Ana?'], ['Pagod ka.', "You're tired."]], mnemonic: 'iKAW = "I call you".', notes: 'Use ka after the first word, ikaw at the start or alone.' },
    'ka': { pos: 'pronoun (topic, short)', def: 'you (one person) — short form used after the first word', examples: [['Gutom ka ba?', 'Are you hungry?']], mnemonic: 'KA = short for iKAw.' },
    'siya': { pos: 'pronoun (topic)', def: 'he OR she (no gender in Tagalog)', examples: [['Guro siya.', "She's / He's a teacher."]], mnemonic: 'SIYA — "see ya": that person over there.', notes: 'ng-form: niya; sa-form: kaniya.' },
    'kami': { pos: 'pronoun (topic)', def: 'we — NOT including the listener', forms: ['namin', 'amin'], examples: [['Aalis na kami.', "We're leaving now."]], mnemonic: 'KAMI = "Kept Away from you, Me + I-group".', notes: 'Inclusive "we" is tayo.' },
    'tayo': { pos: 'pronoun (topic)', def: 'we — INCLUDING the listener; also "let\'s"', forms: ['natin', 'atin'], examples: [['Kain tayo!', "Let's eat!"]], mnemonic: 'TAYO = "Together, All of You and me".' },
    'kayo': { pos: 'pronoun (topic)', def: 'you (several people), or polite "you" to one person', forms: ['ninyo', 'inyo'], examples: [['Kumusta po kayo?', 'How are you? (polite)']], mnemonic: 'KAYO = "Kindly, You all".' },
    'sila': { pos: 'pronoun (topic)', def: 'they', forms: ['nila', 'kanila'], examples: [['Nasa bahay sila.', "They're at home."]], mnemonic: 'SILA = "See them, Left Aside".' },
    'ko': { pos: 'pronoun (ng-form)', def: 'my; by me', examples: [['bahay ko', 'my house'], ['Kinain ko.', 'I ate it.']], mnemonic: 'KO = "Kept by me, Owned".', notes: 'Topic form: ako; sa-form: akin.' },
    'mo': { pos: 'pronoun (ng-form)', def: 'your; by you (one person)', examples: [['Ano ang pangalan mo?', "What's your name?"]], mnemonic: 'MO = "Mine? nO, yours".' },
    'niya': { pos: 'pronoun (ng-form)', def: 'his / her; by him / her', examples: [['aso niya', 'his/her dog']], mnemonic: 'NIYA = ng-form of siYA.' },
    'nasa': { pos: 'existential / preposition', def: 'is at, is in, is on', examples: [['Nasa mesa ang libro.', 'The book is on the table.']], mnemonic: 'NA + SA = "is at".' },
    'para': { pos: 'preposition', def: 'for; (on a jeepney) "stop!"', examples: [['Para sa iyo ito.', 'This is for you.']], mnemonic: 'PARA (Spanish) = for.', notes: 'para sa + noun; para kay + name.' },
    'at': { pos: 'conjunction', def: 'and', examples: [['si Ana at si Ben', 'Ana and Ben']], mnemonic: 'AT = "And Together".' },
    'oo': { pos: 'interjection', def: 'yes', examples: [['Oo, gutom ako.', "Yes, I'm hungry."]], mnemonic: 'OO = "Oh-oh, yes!"', notes: 'Polite: opo.' },
    'opo': { pos: 'interjection', def: 'yes (polite, to elders/strangers)', examples: [['Opo, Lola.', 'Yes, Grandma.']], mnemonic: 'oPO = yes + PO (politeness).' },
    'ano': { pos: 'question word', def: 'what', examples: [['Ano ito?', 'What is this?']], mnemonic: 'ANO? = "Any…what?"' },
    'sino': { pos: 'question word', def: 'who', examples: [['Sino siya?', 'Who is he/she?']], mnemonic: 'SINO — "see? no idea who".' },
    'saan': { pos: 'question word', def: 'where (with actions: to/from where)', examples: [['Saan ka pupunta?', 'Where are you going?']], mnemonic: 'SAAN contains SA (place).' , notes: 'Location of a thing: nasaan.' },
  },

  levels: {
    beginner: {
      grammar: G.beginner,
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
      grammar: G.intermediate,
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
      grammar: G.advanced,
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
