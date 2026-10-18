// Tagalog grammar lessons, written for learners with no grammar background.
// Markup: {{tagalog|meaning}} shows a word with its meaning; [[term]] links to the glossary.
// Examples: [tagalog, english, word-by-word breakdown "word=meaning|word=meaning"].

const mc = (q, options, answer, explain) => ({ type: 'mc', q, options, answer, explain });
const fill = (q, answer, explain) => ({ type: 'fill', q, answer: [].concat(answer), explain });

const beginner = [
  // ------------------------------------------------------------------ 1
  {
    id: 'tl-b-1', title: '1 · How a Tagalog sentence works',
    summary: 'No word for "is", the comment comes first, and ang marks what you\'re talking about.',
    body: `<p>Tagalog sentences are built differently from English ones. Three ideas unlock almost everything in this course, so take your time here.</p>

<h3>Idea 1 — There is no word for "is / am / are"</h3>
<p>English needs "is" to connect things: <i>The house <b>is</b> beautiful.</i> Tagalog simply puts the two parts side by side:</p>
<p class="callout">{{Maganda ang bahay.}} — literally <i>"Beautiful the house."</i> → The house is beautiful.</p>

<h3>Idea 2 — The comment comes FIRST</h3>
<p>Every sentence has two parts: the thing you're talking about, and what you say about it. Grammar books call these the [[topic]] and the [[predicate]]. English puts the topic first (<i>The house</i> … is beautiful). Tagalog normally puts the <b>comment first</b> and the <b>topic second</b>:</p>
<table class="conj"><tr><th>Comment (predicate)</th><th>Topic</th><th>Meaning</th></tr>
<tr><td>{{Maganda|beautiful}}</td><td>{{ang bahay|the house}}</td><td>The house is beautiful.</td></tr>
<tr><td>{{Masarap|delicious}}</td><td>{{ang pagkain|the food}}</td><td>The food is delicious.</td></tr>
<tr><td>{{Guro|teacher}}</td><td>{{ang babae|the woman}}</td><td>The woman is a teacher.</td></tr></table>
<p>Notice the last one: a noun can be the comment too. And Tagalog has no word for "a/an", so {{Guro ang babae}} means "The woman is <b>a</b> teacher."</p>

<h3>Idea 3 — ang marks the topic</h3>
<p>{{ang}} is a [[marker]]: a little word that labels the job of the noun right after it. {{ang}} says <i>"this is what the sentence is about."</i> It also makes the noun specific, a lot like English "the". You'll meet two more markers in the next lesson.</p>

<h3>More than one: mga</h3>
<p>To make a noun [[plural]], put {{mga}} (said <i>"ma-NGA"</i>) in front of it: {{ang bata|the child}} → {{ang mga bata|the children}}. The noun itself doesn't change.</p>

<h3>The other word order: ay</h3>
<p>You will also see the topic placed first, joined with {{ay}}: {{Ang bahay ay maganda.}} It means exactly the same thing but sounds more formal, like a speech or a textbook. This is called [[ay-inversion]]. In everyday conversation, use comment-first.</p>

<div class="callout warn"><b>Reading tips.</b> Tagalog spelling is very regular: every letter is pronounced, and vowels sound like Spanish (a = "ah", e = "eh", i = "ee", o = "oh", u = "oo"). The marker {{ng}} is pronounced <b>"nang"</b>, and {{mga}} is pronounced <b>"ma-nga"</b>. Click any Tagalog word on this page to hear it and see its meaning.</div>`,
    examples: [
      ['Maganda ang bahay.', 'The house is beautiful.', 'Maganda=beautiful|ang=the (topic)|bahay=house'],
      ['Masarap ang pagkain.', 'The food is delicious.', 'Masarap=delicious|ang=the (topic)|pagkain=food'],
      ['Mabait ang guro.', 'The teacher is kind.', 'Mabait=kind|ang=the (topic)|guro=teacher'],
      ['Malaki ang aso.', 'The dog is big.', 'Malaki=big|ang=the (topic)|aso=dog'],
      ['Guro ang babae.', 'The woman is a teacher.', 'Guro=teacher|ang=the (topic)|babae=woman'],
      ['Mabait ang mga bata.', 'The children are kind.', 'Mabait=kind|ang=the (topic)|mga=(plural)|bata=child'],
      ['Ang bahay ay maganda.', 'The house is beautiful. (formal order)', 'Ang=the (topic)|bahay=house|ay=(joins topic to comment)|maganda=beautiful'],
    ],
    vocab: [['ang', 'the (marks the topic)'], ['mga', 'plural marker'], ['maganda', 'beautiful'], ['masarap', 'delicious'], ['mabait', 'kind'], ['malaki', 'big'], ['maliit', 'small'], ['bahay', 'house'], ['pagkain', 'food'], ['guro', 'teacher'], ['bata', 'child'], ['babae', 'woman'], ['lalaki', 'man'], ['aso', 'dog']],
    exercises: [
      mc('How do you say "The dog is big"?', ['Malaki ang aso.', 'Ang aso malaki.', 'Aso ang malaki.', 'Malaki aso ang.'], 0, 'Comment first (malaki = big), then ang + topic (ang aso = the dog).'),
      mc('In "Masarap ang pagkain", which word is the TOPIC (what the sentence is about)?', ['masarap (delicious)', 'ang', 'pagkain (food)'], 2, 'pagkain comes right after ang, so the food is what we\'re talking about. ang itself is just the label.'),
      mc('What does "ang" do?', ['It means "is"', 'It labels the topic, a bit like "the"', 'It means "and"', 'It makes a question'], 1, 'ang marks the topic. Tagalog has no word for "is".'),
      fill('"The teacher is kind" → Mabait ___ guro.', 'ang', 'ang marks guro (teacher) as the topic.'),
      mc('"The children are kind" =', ['Mabait ang bata.', 'Mabait ang mga bata.', 'Mga mabait ang bata.', 'Mabait mga ang bata.'], 1, 'mga goes right before the noun to make it plural: ang mga bata.'),
      mc('Which sentence means the same as "Maganda ang bahay"?', ['Ang bahay ay maganda.', 'Bahay maganda ang.', 'Ay maganda ang bahay.', 'Ang maganda bahay.'], 0, 'Topic first + ay + comment = the formal order.'),
      mc('"Guro ang lalaki" means…', ['The teacher is a man.', 'The man is a teacher.', 'The man and the teacher.', 'A teacher\'s man.'], 1, 'The topic follows ang (ang lalaki = the man); the comment comes first (guro = teacher).'),
    ],
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'tl-b-2', title: '2 · The three markers: ang, ng, sa',
    summary: 'Three little words that tell you each noun\'s job: topic, "of", and place.',
    body: `<p>English shows a noun's job with word order and prepositions ("<i>of</i> the teacher", "<i>at</i> the house"). Tagalog puts a [[marker]] in front of the noun instead. There are three for ordinary nouns.</p>

<table class="conj"><tr><th>Marker</th><th>Its job</th><th>Like English…</th><th>Example</th></tr>
<tr><td>{{ang}}</td><td>the [[topic]]: what we're talking about</td><td>"the"</td><td>{{ang bahay|the house}}</td></tr>
<tr><td>{{ng}} <span class="gloss">(say "nang")</span></td><td>the owner, and some objects</td><td>"of", "'s"</td><td>{{ng guro|of the teacher}}</td></tr>
<tr><td>{{sa}}</td><td>place or direction ([[locative]])</td><td>"in, at, on, to, from"</td><td>{{sa bahay|at / to the house}}</td></tr></table>

<h3>ng — "of" (who owns it)</h3>
<p>To say whose something is, put the <b>thing first</b>, then {{ng}} + the owner. It reads like English "the house <i>of</i> the teacher":</p>
<p class="callout">{{bahay ng guro}} — the teacher's house (house <i>of</i> teacher)</p>
<p>ng has a second job you'll meet when we get to verbs: it marks the thing being acted on, as in {{kumain ng mangga|ate a mango}}. For now, think "of".</p>

<h3>sa — where, and to where</h3>
<p>The word [[locative]] just means "about place". {{sa}} covers almost every English place word, so the meaning comes from context: {{sa bahay}} can be "at the house", "in the house" or "to the house".</p>
<p>To say where something <b>is</b>, use {{nasa}} (na + sa = "is at / is in"):</p>
<p class="callout">{{Nasa bahay ang aso.}} — The dog is in the house. (literally "Is-at house the dog")</p>
<p>Same pattern as Lesson 1: comment first ({{nasa bahay|is in the house}}), then the topic ({{ang aso|the dog}}).</p>

<h3>Plurals</h3><p>Add {{mga}} after any marker: {{ang mga aso|the dogs}}, {{ng mga bata|of the children}}, {{sa mga bahay|in the houses}}.</p>`,
    examples: [
      ['Malaki ang bahay ng guro.', "The teacher's house is big.", 'Malaki=big|ang=the (topic)|bahay=house|ng=of|guro=teacher'],
      ['Nasa bahay ang aso.', 'The dog is in the house.', 'Nasa=is in/at|bahay=house|ang=the (topic)|aso=dog'],
      ['Nasa paaralan ang mga bata.', 'The children are at school.', 'Nasa=is at|paaralan=school|ang=the (topic)|mga=(plural)|bata=child'],
      ['Masarap ang pagkain sa restawran.', 'The food at the restaurant is delicious.', 'Masarap=delicious|ang=the (topic)|pagkain=food|sa=at|restawran=restaurant'],
      ['Maganda ang kotse ng babae.', "The woman's car is beautiful.", 'Maganda=beautiful|ang=the (topic)|kotse=car|ng=of|babae=woman'],
      ['Nasa mesa ang libro.', 'The book is on the table.', 'Nasa=is on/at|mesa=table|ang=the (topic)|libro=book'],
    ],
    vocab: [['ng', 'of (owner); marks some objects — said "nang"'], ['sa', 'in / at / on / to (place)'], ['nasa', 'is at / is in'], ['paaralan', 'school'], ['kotse', 'car'], ['restawran', 'restaurant'], ['palengke', 'market'], ['mesa', 'table'], ['libro', 'book']],
    exercises: [
      mc('"The teacher\'s book" =', ['libro ng guro', 'guro ng libro', 'libro sa guro', 'ang guro libro'], 0, 'Thing first, then ng + owner: libro ng guro ("book of teacher").'),
      fill('"The book is on the table" → Nasa mesa ___ libro.', 'ang', 'ang marks the topic (the book).'),
      mc('Which marker is about place (in / at / to)?', ['ang', 'ng', 'sa'], 2, 'sa is the locative (place) marker.'),
      mc('"Masarap ang pagkain sa palengke" means…', ['The food at the market is delicious.', 'The market is delicious.', 'The food is going to the market.', 'The market\'s food is small.'], 0, 'masarap = delicious, ang pagkain = the food (topic), sa palengke = at the market.'),
      fill('"The child\'s dog" → aso ___ bata', 'ng', 'Owner → ng.'),
      mc('How is the marker "ng" pronounced?', ['"ng" like the end of "sing"', '"nang"', '"neg"', '"ning"'], 1, 'The marker ng is always said "nang".'),
      mc('"The children are at school" =', ['Nasa paaralan ang mga bata.', 'Ang paaralan nasa bata.', 'Nasa mga bata ang paaralan.', 'Paaralan ng mga bata.'], 0, 'nasa + place, then ang + topic.'),
    ],
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'tl-b-3', title: '3 · Names: si, ni, kay',
    summary: 'People\'s names (and family titles) use their own set of markers.',
    body: `<p>When the noun is a <b>person's name</b>, the three markers change shape. The jobs stay exactly the same.</p>
<table class="conj"><tr><th>Job</th><th>Ordinary nouns</th><th>Names (one person)</th><th>Names (a group)</th></tr>
<tr><td>Topic</td><td>{{ang}}</td><td>{{si}}</td><td>{{sina}}</td></tr>
<tr><td>Owner ("of", "'s")</td><td>{{ng}}</td><td>{{ni}}</td><td>{{nina}}</td></tr>
<tr><td>Place / to / for ([[locative]])</td><td>{{sa}}</td><td>{{kay}}</td><td>{{kina}}</td></tr></table>
<p>Family titles used like names take these markers too: {{si Nanay|Mom}}, {{si Tatay|Dad}}, {{si Lola|Grandma}}, {{si Lolo|Grandpa}}.</p>

<h3>Group forms</h3>
<p>{{sina}}, {{nina}} and {{kina}} mean "the people named" or "X and company": {{sina Ana at Ben|Ana and Ben}}, {{kina Lola|at Grandma's (family's) place}}.</p>

<h3>"For" = para sa / para kay</h3>
<p>{{para}} means "for". It is followed by {{sa}} for ordinary nouns and {{kay}} for names: {{para sa bata|for the child}}, {{para kay Ana|for Ana}}.</p>

<div class="callout warn">Never put {{ang}} before a name: say {{si Maria}}, not ✗ <i>ang Maria</i>.</div>`,
    examples: [
      ['Guro si Ana.', 'Ana is a teacher.', 'Guro=teacher|si=(topic, for names)|Ana=Ana'],
      ['Mabait si Lola.', 'Grandma is kind.', 'Mabait=kind|si=(topic, names)|Lola=Grandma'],
      ['Malaki ang bahay ni Ben.', "Ben's house is big.", 'Malaki=big|ang=the (topic)|bahay=house|ni=of (names)|Ben=Ben'],
      ['Nasa bahay ni Lola si Ana.', "Ana is at Grandma's house.", "Nasa=is at|bahay=house|ni=of (names)|Lola=Grandma|si=(topic, names)|Ana=Ana"],
      ['Para kay Marco ang libro.', 'The book is for Marco.', 'Para=for|kay=(to/for, names)|Marco=Marco|ang=the (topic)|libro=book'],
      ['Doktor sina Ana at Ben.', 'Ana and Ben are doctors.', 'Doktor=doctor|sina=(topic, group of names)|Ana=Ana|at=and|Ben=Ben'],
    ],
    vocab: [['si', 'topic marker for names'], ['ni', '"of" for names'], ['kay', 'to / for / at, for names'], ['sina', 'topic marker for several names'], ['para', 'for'], ['at', 'and'], ['Nanay', 'Mom'], ['Tatay', 'Dad'], ['Lola', 'Grandma'], ['Lolo', 'Grandpa'], ['kaibigan', 'friend'], ['regalo', 'gift'], ['doktor', 'doctor']],
    exercises: [
      mc('___ Pedro ay doktor. (Pedro is a doctor.)', ['Ang', 'Si', 'Ni', 'Kay'], 1, 'Pedro is the topic and a name → si.'),
      mc('"Ana\'s car" =', ['kotse si Ana', 'kotse ni Ana', 'kotse kay Ana', 'kotse ang Ana'], 1, 'Owner + name → ni.'),
      fill('"The gift is for Ben" → Para ___ Ben ang regalo.', 'kay', 'para + name → para kay.'),
      mc('Which is correct?', ['Mabait ang Maria.', 'Mabait si Maria.', 'Mabait ni Maria.', 'Mabait kay Maria.'], 1, 'Names never take ang as topic; use si.'),
      fill('"Grandpa\'s house" → ang bahay ___ Lolo', 'ni', 'Owner + name/title → ni.'),
      mc('"Ana and Ben are doctors" =', ['Doktor si Ana at Ben.', 'Doktor sina Ana at Ben.', 'Doktor ni Ana at Ben.', 'Doktor kay Ana at Ben.'], 1, 'Two or more names as the topic → sina.'),
    ],
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'tl-b-4', title: '4 · Pronouns: I, you, he/she, we, they',
    summary: 'Three sets of pronouns that match the three markers.',
    body: `<p>[[pronoun|Pronouns]] are words like "I", "you" and "they". Tagalog has <b>three sets</b>, and each matches one of the markers you already know:</p>
<ul><li><b>ang-set</b>: when the person is the topic → {{ako|I}}</li><li><b>ng-set</b>: when the person is the owner ("my", "your") → {{ko|my}}</li><li><b>sa-set</b>: after {{sa}} ("to me", "for me"), and as "my" placed before a noun → {{akin|me / mine}}</li></ul>`,
    table: { title: 'The three pronoun sets', plain: [0], headers: ['English', 'ang (topic)', 'ng (owner: my, your…)', 'sa (to / for me…)'], rows: [['I / me', 'ako', 'ko', 'akin'], ['you (one person)', 'ikaw / ka', 'mo', 'iyo'], ['he OR she', 'siya', 'niya', 'kaniya'], ['we (not you)', 'kami', 'namin', 'amin'], ['we (including you)', 'tayo', 'natin', 'atin'], ['you (several, or polite)', 'kayo', 'ninyo', 'inyo'], ['they', 'sila', 'nila', 'kanila']] },
    examples: [
      ['Pagod ako.', "I'm tired.", 'Pagod=tired|ako=I'],
      ['Guro siya.', "She's a teacher. / He's a teacher.", 'Guro=teacher|siya=he or she'],
      ['Estudyante ka.', "You're a student.", 'Estudyante=student|ka=you'],
      ['Masaya kami.', 'We (not you) are happy.', 'Masaya=happy|kami=we (not you)'],
      ['Kain tayo!', "Let's eat! (you and me)", 'Kain=eat|tayo=we (incl. you)'],
      ['Bahay ko ito.', 'This is my house.', 'Bahay=house|ko=my|ito=this'],
      ['Para sa iyo ang regalo.', 'The gift is for you.', 'Para sa=for|iyo=you|ang=the (topic)|regalo=gift'],
    ],
    vocab: [['ako', 'I'], ['ikaw / ka', 'you'], ['siya', 'he / she'], ['kami', 'we (not including you)'], ['tayo', 'we (including you)'], ['kayo', 'you (plural / polite)'], ['sila', 'they'], ['ko', 'my / by me'], ['mo', 'your'], ['niya', 'his / her'], ['pagod', 'tired'], ['masaya', 'happy'], ['gutom', 'hungry'], ['estudyante', 'student']],
    exercises: [
      mc('To a friend: "Let\'s go!" — which "we"?', ['kami', 'tayo', 'sila', 'kayo'], 1, 'tayo includes the person you\'re talking to.'),
      mc('"My friend" =', ['kaibigan ako', 'kaibigan ko', 'kaibigan akin', 'ako kaibigan'], 1, 'Owner after the noun → ng-set: ko.'),
      fill('"I am hungry" → Gutom ___.', 'ako', 'Comment (gutom) + topic pronoun (ako).'),
      mc('"You\'re tired" =', ['Pagod ka.', 'Ka pagod.', 'Pagod mo.', 'Pagod ikaw ka.'], 0, 'After the first word, use the short form ka.'),
      mc('"siya" means…', ['he only', 'she only', 'he or she', 'they'], 2, 'Tagalog pronouns have no gender.'),
      fill('"her dog" → aso ___', 'niya', 'Owner → ng-set: niya.'),
      mc('"for me" =', ['para sa akin', 'para sa ako', 'para kay ako', 'para ko'], 0, 'After sa → sa-set: akin.'),
      mc('Telling a shopkeeper "We\'re leaving" (you and your family, not them) uses…', ['tayo', 'kami', 'kayo', 'sila'], 1, 'The listener isn\'t included → kami.'),
    ],
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'tl-b-5', title: '5 · This, that, here, there',
    summary: 'ito, iyan, iyon, and dito, diyan, doon.',
    body: `<p>Tagalog has <b>three</b> [[demonstrative|pointing words]] where English has two ("this" and "that"), based on how far the thing is from each person:</p>
<table class="conj"><tr><th>Distance</th><th>Thing</th><th>Place</th><th>"is here / there"</th></tr>
<tr><td>Near me (the speaker)</td><td>{{ito|this}}</td><td>{{dito|here}}</td><td>{{nandito|is here}}</td></tr>
<tr><td>Near you (the listener)</td><td>{{iyan|that (by you)}}</td><td>{{diyan|there (by you)}}</td><td>{{nandiyan|is there}}</td></tr>
<tr><td>Far from both of us</td><td>{{iyon|that (over there)}}</td><td>{{doon|over there}}</td><td>{{nandoon|is over there}}</td></tr></table>

<h3>Asking and answering</h3>
<p>{{Ano ito?|What is this?}} → {{Libro ito.|It's a book.}} The comment (libro) comes first, then the pointing word as the topic, just like Lesson 1.</p>

<h3>"This is my…" — a useful twist</h3>
<p>When you want to <i>point something out</i>, put the pointing word first and the thing after {{ang}}:</p>
<p class="callout">{{Ito ang bahay ko.}} — This is my house. (literally "This [is] the house of mine")</p>
<p>Compare {{Bahay ko ito}} ("This is my house" as a plain statement). Both are correct; the first one points at <i>which</i> one.</p>`,
    examples: [
      ['Ano ito?', 'What is this?', 'Ano=what|ito=this'],
      ['Libro ito.', "It's a book. (This is a book.)", 'Libro=book|ito=this'],
      ['Ito ang kotse ko.', 'This is my car.', 'Ito=this|ang=the (topic)|kotse=car|ko=my'],
      ['Maganda iyan.', "That's beautiful. (the thing near you)", 'Maganda=beautiful|iyan=that (near you)'],
      ['Malayo iyon.', "That (over there) is far.", 'Malayo=far|iyon=that (over there)'],
      ['Nandito ako.', "I'm here.", 'Nandito=is here|ako=I'],
      ['Nandoon ang palengke.', 'The market is over there.', 'Nandoon=is over there|ang=the (topic)|palengke=market'],
    ],
    vocab: [['ito', 'this'], ['iyan', 'that (near you)'], ['iyon', 'that (over there)'], ['dito', 'here'], ['diyan', 'there (near you)'], ['doon', 'over there'], ['nandito', 'is here'], ['ano', 'what'], ['malayo', 'far'], ['malapit', 'near']],
    exercises: [
      mc('Holding a pen yourself: "this" =', ['ito', 'iyan', 'iyon'], 0, 'Near the speaker → ito.'),
      mc('Pointing at the cup your friend is holding: "What is that?"', ['Ano ito?', 'Ano iyan?', 'Ano iyon?'], 1, 'Near the listener → iyan.'),
      fill('"I\'m here" → Nandito ___.', 'ako', 'nandito (is here) + topic ako.'),
      mc('"This is my book" (pointing it out) =', ['Ito ang libro ko.', 'Libro ang ito ko.', 'Ko libro ito ang.', 'Ang ito libro ko.'], 0, 'Pointing word first, then ang + the thing.'),
      mc('"over there" (far from both of you) =', ['dito', 'diyan', 'doon'], 2, 'Far → doon.'),
      mc('"Malapit ang palengke" means…', ['The market is near.', 'The market is far.', 'The market is here.', 'Where is the market?'], 0, 'malapit = near.'),
    ],
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'tl-b-6', title: '6 · The linker: na / -ng',
    summary: 'The connector Tagalog puts between a describing word and the word it describes.',
    body: `<p>When one word describes another in Tagalog, for example "beautiful woman" or "big house", you can't just put them side by side. You need a tiny connector called the [[linker]]. English has nothing like it, and it is never translated.</p>

<h3>Which form to use</h3>
<table class="conj"><tr><th>If the first word ends in…</th><th>Do this</th><th>Example</th></tr>
<tr><td>a vowel (a, e, i, o, u)</td><td>add <b>-ng</b> to it</td><td>{{maganda}} + {{babae}} → {{magandang babae|beautiful woman}}</td></tr>
<tr><td>the letter <b>n</b></td><td>change the n to <b>-ng</b></td><td>{{luntian|green}} + {{dahon|leaf}} → {{luntiang dahon|green leaf}}</td></tr>
<tr><td>any other consonant</td><td>put the word <b>na</b> between them</td><td>{{mabait}} + {{bata}} → {{mabait na bata|kind child}}</td></tr></table>

<h3>Either order works</h3>
<p>The describing word can come first or second; the linker attaches to whichever word comes <b>first</b>:</p>
<p class="callout">{{malaking bahay}} = {{bahay na malaki}} — big house</p>

<h3>Other places the linker shows up</h3>
<ul><li>Numbers: {{isa|one}} → {{isang aso|one dog}}, {{tatlo|three}} → {{tatlong bata|three children}}</li>
<li>"my" before a noun: {{akin}} → {{aking bahay|my house}}, {{iyo}} → {{iyong kotse|your car}}</li>
<li>Joining "want / like" to an action: {{Gusto kong kumain.|I want to eat.}} ({{ko}} + -ng → {{kong}})</li></ul>`,
    examples: [
      ['Magandang umaga!', 'Good morning!', 'Magandang=beautiful/good (+ linker)|umaga=morning'],
      ['Malaking bahay iyon.', "That's a big house.", 'Malaking=big (+ linker)|bahay=house|iyon=that'],
      ['Mabait na tao si Ana.', 'Ana is a kind person.', 'Mabait=kind|na=(linker)|tao=person|si=(topic, names)|Ana=Ana'],
      ['May tatlong anak si Lito.', 'Lito has three children.', 'May=has/there is|tatlong=three (+ linker)|anak=child (son/daughter)|si=(topic)|Lito=Lito'],
      ['Ito ang aking kaibigan.', 'This is my friend.', 'Ito=this|ang=the (topic)|aking=my (+ linker)|kaibigan=friend'],
      ['Gusto kong matuto ng Tagalog.', 'I want to learn Tagalog.', 'Gusto=want|kong=I (+ linker)|matuto=to learn|ng=(object marker)|Tagalog=Tagalog'],
    ],
    vocab: [['na / -ng', 'linker (connects describer + described)'], ['umaga', 'morning'], ['tao', 'person'], ['anak', 'child (son or daughter)'], ['isa', 'one'], ['dalawa', 'two'], ['tatlo', 'three'], ['gusto', 'want / like'], ['bago', 'new'], ['luma', 'old (things)']],
    exercises: [
      fill('malaki + bahay → ___ bahay', 'malaking', 'malaki ends in a vowel → add -ng.'),
      mc('"kind teacher" =', ['mabaitng guro', 'mabait na guro', 'mabait guro', 'mabaiting guro'], 1, 'mabait ends in t (a consonant) → na.'),
      fill('dalawa + aso → ___ aso (two dogs)', 'dalawang', 'Numbers take the linker too.'),
      mc('"I want to sleep" =', ['Gusto ko matulog.', 'Gusto kong matulog.', 'Gusto akong matulog.', 'Ako gusto matulog.'], 1, 'ko + -ng → kong links gusto to the action.'),
      fill('bago + kotse → ___ kotse (new car)', 'bagong', 'Vowel ending → -ng.'),
      mc('Which means the same as "malaking bahay"?', ['bahay na malaki', 'bahay malaki', 'bahayng malaki', 'malaki bahay'], 0, 'Flip the order; the linker goes after the first word (bahay ends in y → na).'),
    ],
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'tl-b-7', title: '7 · Having & existing: may, mayroon, wala',
    summary: '"There is", "I have", and "there isn\'t / I don\'t have".',
    body: `<p>Tagalog uses the same words for "there is" and "to have". These are called [[existential]] words. Literally, "I have a dog" is said as "There is a dog of mine".</p>
<table class="conj"><tr><th>Word</th><th>Meaning</th><th>How it's used</th></tr>
<tr><td>{{may}}</td><td>there is / has</td><td>followed <b>directly</b> by the thing: {{May aso ako.|I have a dog.}}</td></tr>
<tr><td>{{mayroon}} <span class="gloss">(casual: meron)</span></td><td>there is / has</td><td>used when a pronoun or little word comes next, with the [[linker]]: {{Mayroon akong aso.|I have a dog.}}</td></tr>
<tr><td>{{wala}}</td><td>there isn't / doesn't have</td><td>always with the linker: {{Wala akong aso.|I don't have a dog.}}</td></tr></table>

<h3>Short answers</h3>
<p>"Do you have…?" → {{Mayroon.}} / {{Meron.}} (Yes, I do.) or {{Wala.}} (No, I don't / There isn't any.)</p>

<h3>"There is nobody / nothing"</h3><p>{{wala}} + linker + noun: {{Walang tao.|There's nobody.}} {{Walang pagkain.|There's no food.}}</p>

<div class="callout warn">Use {{wala}} to say something doesn't <b>exist</b> or you don't <b>have</b> it. To say something <b>is not</b> a certain way, use {{hindi}} (next lesson): {{Hindi ako pagod.|I'm not tired.}}</div>`,
    examples: [
      ['May tanong ako.', 'I have a question.', 'May=there is/have|tanong=question|ako=I'],
      ['Mayroon akong kapatid.', 'I have a sibling.', 'Mayroon=there is/have|akong=I (+ linker)|kapatid=sibling'],
      ['Wala akong pera.', "I don't have money.", 'Wala=there isn\'t/don\'t have|akong=I (+ linker)|pera=money'],
      ['Walang tao sa bahay.', "There's nobody at the house.", 'Walang=there isn\'t (+ linker)|tao=person|sa=at|bahay=house'],
      ['May aso ba sila?', 'Do they have a dog?', 'May=have|aso=dog|ba=(question)|sila=they'],
      ['Wala kaming klase bukas.', "We don't have class tomorrow.", 'Wala=don\'t have|kaming=we (+ linker)|klase=class|bukas=tomorrow'],
    ],
    vocab: [['may', 'there is / has'], ['mayroon / meron', 'there is / has'], ['wala', "there isn't / doesn't have"], ['tanong', 'question'], ['kapatid', 'sibling (brother or sister)'], ['pera', 'money'], ['klase', 'class'], ['bukas', 'tomorrow'], ['oras', 'time / hour']],
    exercises: [
      mc('"I have a dog" =', ['Mayroon aso ako.', 'May aso ako.', 'Wala aso ako.', 'May ako aso.'], 1, 'may + the thing directly.'),
      fill('"I don\'t have siblings" → ___ akong kapatid.', ['wala', 'Wala'], 'wala + linker on the pronoun (akong).'),
      mc('"Do you have time?" =', ['May ka bang oras?', 'Mayroon ka bang oras?', 'Mayroon oras ka ba?', 'Wala ka oras?'], 1, 'A pronoun comes next → mayroon.'),
      mc('"There\'s no food" =', ['Walang pagkain.', 'Hindi pagkain.', 'Wala pagkain.', 'May walang pagkain.'], 0, 'wala + linker (-ng) + noun.'),
      mc('"Hindi ako pagod" vs "Wala akong pera" — which word negates having?', ['hindi', 'wala'], 1, 'wala = not have / not exist; hindi = not (a description).'),
    ],
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'tl-b-8', title: '8 · No, not, yes/no questions & politeness',
    summary: 'hindi, ba, oo/opo and po, plus the rule about short words that move.',
    body: `<h3>"Not": hindi</h3>
<p>Put {{hindi}} at the very start of the sentence:</p>
<p class="callout">{{Masarap ang pagkain.}} → {{Hindi masarap ang pagkain.|The food isn't delicious.}}</p>

<h3>The rule of short words that move</h3>
<p>Some short words can't stand at the start of a sentence. Instead they jump to the spot <b>right after the first word</b>. Grammar books call these [[enclitic|enclitics]]. They include {{ako}}, {{ka}}, {{siya}}, {{ko}}, {{mo}}, and question/politeness words like {{ba}} and {{po}}.</p>
<p>So when {{hindi}} becomes the first word, a pronoun moves up next to it:</p>
<p class="callout">{{Pagod ako.|I'm tired.}} → {{Hindi ako pagod.|I'm not tired.}} <span class="gloss">(not ✗ Hindi pagod ako)</span></p>

<h3>Yes/no questions: ba</h3>
<p>To turn a statement into a [[question|yes/no question]], add {{ba}} after the first word (after any short pronoun), and raise your voice at the end:</p>
<ul><li>{{Pagod ka.|You're tired.}} → {{Pagod ka ba?|Are you tired?}}</li><li>{{Masarap ang pagkain.}} → {{Masarap ba ang pagkain?|Is the food delicious?}}</li></ul>
<p>Answers: {{Oo.|Yes.}} / {{Hindi.|No.}}</p>

<h3>Being polite: po and opo</h3>
<p>With older people, strangers, customers and anyone you want to show respect to, add {{po}} (or the slightly less formal {{ho}}). It goes in the same "after the first word" spot. This is one of the [[politeness|politeness markers]].</p>
<ul><li>{{Salamat.}} → {{Salamat po.|Thank you (respectfully).}}</li><li>"Yes" becomes {{Opo.}}; "No" becomes {{Hindi po.}}</li><li>When using po, say {{kayo}} ("you", plural) instead of {{ka}} even to one person: {{Pagod po ba kayo?|Are you tired? (polite)}}</li></ul>`,
    examples: [
      ['Hindi ako pagod.', "I'm not tired.", 'Hindi=not|ako=I|pagod=tired'],
      ['Hindi guro si Ben.', "Ben isn't a teacher.", 'Hindi=not|guro=teacher|si=(topic, names)|Ben=Ben'],
      ['Gutom ka ba?', 'Are you hungry?', 'Gutom=hungry|ka=you|ba=(question)'],
      ['Mabait ba ang guro?', 'Is the teacher kind?', 'Mabait=kind|ba=(question)|ang=the (topic)|guro=teacher'],
      ['Opo, gutom po ako.', "Yes, I'm hungry. (polite)", 'Opo=yes (polite)|gutom=hungry|po=(polite)|ako=I'],
      ['Salamat po.', 'Thank you. (polite)', 'Salamat=thank you|po=(polite)'],
    ],
    vocab: [['hindi', 'not / no'], ['ba', 'yes/no question word'], ['oo', 'yes'], ['opo', 'yes (polite)'], ['po / ho', 'politeness word'], ['salamat', 'thank you'], ['busog', 'full (after eating)'], ['handa', 'ready']],
    exercises: [
      mc('"I\'m not hungry" =', ['Hindi gutom ako.', 'Hindi ako gutom.', 'Gutom hindi ako.', 'Ako hindi gutom.'], 1, 'ako jumps up to sit right after hindi.'),
      mc('"Are you ready?" =', ['Handa ba ka?', 'Handa ka ba?', 'Ba handa ka?', 'Ka handa ba?'], 1, 'ka comes before ba (short pronoun first).'),
      mc('Polite "yes" to your grandmother:', ['Oo', 'Opo', 'Hindi po', 'Ba'], 1, 'opo.'),
      fill('"Is the food delicious?" → Masarap ___ ang pagkain?', 'ba', 'ba after the first word.'),
      mc('Politely asking an older man "Are you full?" =', ['Busog ka ba?', 'Busog po ba kayo?', 'Busog ba po ka?', 'Po busog kayo ba?'], 1, 'po ba in the second spot, and kayo instead of ka.'),
      mc('"Hindi masarap ang pagkain" means…', ['The food is delicious.', "The food isn't delicious.", 'There is no food.', 'Is the food delicious?'], 1, 'hindi = not.'),
    ],
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'tl-b-9', title: '9 · Question words',
    summary: 'What, who, where, when, why, how, how much.',
    body: `<p>Question words go at the <b>start</b> of the sentence. Like {{hindi}}, they pull short pronouns up right after them ([[enclitic]] rule).</p>
<table class="conj"><tr><th>Tagalog</th><th>English</th><th>Example</th></tr>
<tr><td>{{Ano}}</td><td>What</td><td>{{Ano ang pangalan mo?|What is your name?}}</td></tr>
<tr><td>{{Sino}}</td><td>Who</td><td>{{Sino ang guro?|Who is the teacher?}}</td></tr>
<tr><td>{{Saan}}</td><td>Where (to / from, with actions)</td><td>{{Saan ka nakatira?|Where do you live?}}</td></tr>
<tr><td>{{Nasaan}}</td><td>Where is…? (location of a thing)</td><td>{{Nasaan ang banyo?|Where is the bathroom?}}</td></tr>
<tr><td>{{Kailan}}</td><td>When</td><td>{{Kailan ang kaarawan mo?|When is your birthday?}}</td></tr>
<tr><td>{{Bakit}}</td><td>Why</td><td>{{Bakit ka pagod?|Why are you tired?}}</td></tr>
<tr><td>{{Paano}}</td><td>How</td><td>{{Paano ito?|How does this go? / How about this?}}</td></tr>
<tr><td>{{Magkano}}</td><td>How much (price)</td><td>{{Magkano ito?|How much is this?}}</td></tr>
<tr><td>{{Ilan}}</td><td>How many</td><td>{{Ilan ang anak mo?|How many children do you have?}}</td></tr></table>

<h3>The pattern "Question word + ang + thing"</h3>
<p>Many questions are built just like Lesson 1, with the question word as the comment: {{Ano|what}} + {{ang pangalan mo|your name}} → "What [is] your name?"</p>

<h3>Answering</h3>
<p>Answer by replacing the question word: {{Ano ang pangalan mo?}} → {{Maria ang pangalan ko.|My name is Maria.}} or simply {{Ako si Maria.|I'm Maria.}}</p>`,
    examples: [
      ['Ano ang pangalan mo?', "What's your name?", 'Ano=what|ang=the (topic)|pangalan=name|mo=your'],
      ['Sino siya?', 'Who is he/she?', 'Sino=who|siya=he/she'],
      ['Nasaan ang banyo?', 'Where is the bathroom?', 'Nasaan=where is|ang=the (topic)|banyo=bathroom'],
      ['Saan ka nakatira?', 'Where do you live?', 'Saan=where|ka=you|nakatira=living (residing)'],
      ['Bakit ka malungkot?', 'Why are you sad?', 'Bakit=why|ka=you|malungkot=sad'],
      ['Magkano po ito?', 'How much is this? (polite)', 'Magkano=how much|po=(polite)|ito=this'],
      ['Ilan ang kapatid mo?', 'How many siblings do you have?', 'Ilan=how many|ang=the (topic)|kapatid=sibling|mo=your'],
    ],
    vocab: [['ano', 'what'], ['sino', 'who'], ['saan', 'where'], ['nasaan', 'where is'], ['kailan', 'when'], ['bakit', 'why'], ['paano', 'how'], ['magkano', 'how much (price)'], ['ilan', 'how many'], ['pangalan', 'name'], ['banyo', 'bathroom'], ['kaarawan', 'birthday'], ['malungkot', 'sad']],
    exercises: [
      mc('At a market: "How much is this?"', ['Ilan po ito?', 'Magkano po ito?', 'Ano po ito?', 'Saan po ito?'], 1, 'magkano = how much (price).'),
      mc('"Where is the bathroom?"', ['Saan ang banyo?', 'Nasaan ang banyo?', 'Ano ang banyo?', 'Kailan ang banyo?'], 1, 'Location of a thing → nasaan.'),
      fill('"Why are you sad?" → Bakit ___ malungkot?', 'ka', 'ka jumps up after the question word.'),
      mc('"Sino ang guro?" means…', ['Where is the teacher?', 'Who is the teacher?', 'Is that the teacher?', 'What does the teacher do?'], 1, 'sino = who.'),
      fill('"What\'s your name?" → ___ ang pangalan mo?', ['Ano', 'ano'], 'ano = what.'),
      mc('"How many siblings do you have?"', ['Magkano ang kapatid mo?', 'Ilan ang kapatid mo?', 'Sino ang kapatid mo?', 'Ano ang kapatid mo?'], 1, 'Counting → ilan.'),
    ],
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'tl-b-10', title: '10 · Verbs, part 1: roots, affixes & aspect',
    summary: 'How Tagalog builds verbs, and why it marks "done / ongoing / not yet" instead of past/present/future.',
    body: `<p>This is the biggest difference between Tagalog and English, so it gets two lessons.</p>

<h3>Verbs are built from root words</h3>
<p>Most Tagalog verbs start as a [[root|root word]], for example {{kain|eat}}. You make actual verbs by adding small pieces called [[affix|affixes]]. One common affix is {{-um-}}, which is an [[infix]]: it goes <b>inside</b> the word, right after the first consonant:</p>
<p class="callout">k + <b>um</b> + ain → {{kumain|ate / to eat}}</p>
<p>If the root starts with a vowel, {{um-}} just goes in front: {{inom|drink}} → {{uminom}}.</p>

<h3>Aspect, not tense</h3>
<p>English verbs show <i>when</i> something happens: ate / eat / will eat ([[tense]]). Tagalog verbs show <b>whether the action has started and whether it's finished</b>. This is called [[aspect]]. There are three:</p>
<table class="conj"><tr><th>Aspect</th><th>Meaning</th><th>Usual English</th></tr>
<tr><td>[[completed|Completed]]</td><td>started and finished</td><td>ate</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>started, not finished: happening now, or a habit</td><td>is eating / eats / was eating</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>not started yet</td><td>will eat</td></tr></table>
<p>Words like {{kahapon|yesterday}}, {{ngayon|now}} and {{bukas|tomorrow}} tell you the actual time when it matters.</p>

<h3>How to build each aspect with -um-</h3>
<p>Two of the forms use [[reduplication]]: repeating the first consonant + vowel of the root (ka-, i-, bi-…).</p>
<ul><li><b>Completed</b>: just add -um- → {{kumain|ate}}</li><li><b>Incomplete</b>: add -um- AND repeat the first syllable → k-um-a-kain → {{kumakain|is eating / eats}}</li><li><b>Contemplated</b>: repeat the first syllable, NO -um- → ka-kain → {{kakain|will eat}}</li></ul>
<p>The [[infinitive]] ("to eat", also used for commands) looks the same as the completed form for -um- verbs: {{kumain}}. Context makes it clear: {{Gusto kong kumain.|I want to eat.}} vs {{Kumain ako kahapon.|I ate yesterday.}}</p>`,
    table: { title: '-um- verbs in all three aspects', plain: [0], headers: ['Root (meaning)', 'Completed', 'Incomplete', 'Contemplated'], rows: [['kain (eat)', 'kumain', 'kumakain', 'kakain'], ['inom (drink)', 'uminom', 'umiinom', 'iinom'], ['bili (buy)', 'bumili', 'bumibili', 'bibili'], ['punta (go)', 'pumunta', 'pumupunta', 'pupunta'], ['alis (leave)', 'umalis', 'umaalis', 'aalis'], ['takbo (run)', 'tumakbo', 'tumatakbo', 'tatakbo']] },
    examples: [
      ['Kumain ako.', 'I ate.', 'Kumain=ate (completed)|ako=I'],
      ['Kumakain ako.', "I'm eating. / I eat.", 'Kumakain=eating (incomplete)|ako=I'],
      ['Kakain ako.', 'I will eat.', 'Kakain=will eat (contemplated)|ako=I'],
      ['Umalis siya kahapon.', 'She left yesterday.', 'Umalis=left (completed)|siya=she/he|kahapon=yesterday'],
      ['Tumatakbo ang aso.', 'The dog is running.', 'Tumatakbo=running (incomplete)|ang=the (topic)|aso=dog'],
      ['Pupunta kami sa Cebu bukas.', "We're going to Cebu tomorrow.", 'Pupunta=will go (contemplated)|kami=we (not you)|sa=to|Cebu=Cebu|bukas=tomorrow'],
    ],
    vocab: [['kain', 'eat (root)'], ['inom', 'drink (root)'], ['bili', 'buy (root)'], ['punta', 'go (root)'], ['alis', 'leave (root)'], ['takbo', 'run (root)'], ['kahapon', 'yesterday'], ['ngayon', 'now / today'], ['bukas', 'tomorrow'], ['araw-araw', 'every day']],
    exercises: [
      mc('Which aspect is "kakain"?', ['Completed (ate)', 'Incomplete (is eating)', 'Contemplated (will eat)'], 2, 'Repeated first syllable (ka-kain) with no -um- = contemplated.'),
      fill('Completed form of takbo (run): ___', 'tumakbo', 't + um + akbo.'),
      fill('Incomplete form of bili (buy): ___', 'bumibili', 'b-um-i + bili: -um- plus the repeated syllable bi.'),
      mc('"She is eating now" =', ['Kumain siya ngayon.', 'Kumakain siya ngayon.', 'Kakain siya ngayon.', 'Kain siya ngayon.'], 1, 'Happening now → incomplete.'),
      fill('Contemplated form of inom (drink): ___', 'iinom', 'Repeat the first syllable (i-) with no -um-.'),
      mc('Tagalog verbs mainly show…', ['whether the action is done, ongoing, or not started (aspect)', 'exactly what time it is (tense)', 'whether the speaker is male or female', 'how many people are involved'], 0, 'Tagalog marks aspect; time words give the exact time.'),
      mc('"Umiinom siya ng kape araw-araw" means…', ['She drank coffee yesterday.', 'She drinks coffee every day.', 'She will drink coffee.', 'She wants coffee.'], 1, 'Incomplete aspect + araw-araw (every day) = a habit.'),
    ],
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'tl-b-11', title: '11 · Verbs, part 2: -um- verbs in real sentences',
    summary: 'Who does it, what they do it to, and where.',
    body: `<p>Now let's put -um- verbs into full sentences. The order follows the same "comment first" idea: the <b>verb comes first</b>.</p>

<h3>The basic pattern</h3>
<table class="conj"><tr><th>Verb</th><th>Who (the [[actor]], marked with ang / si / ako…)</th><th>What (ng + thing)</th><th>Where (sa + place)</th></tr>
<tr><td>{{Bumili|bought}}</td><td>{{si Ana|Ana}}</td><td>{{ng isda|(some) fish}}</td><td>{{sa palengke|at the market}}</td></tr></table>
<p class="callout">{{Bumili si Ana ng isda sa palengke.}} — Ana bought (some) fish at the market.</p>
<p>With -um- verbs, the person doing the action is the topic, so they get {{ang}}, {{si}}, or an ang-pronoun like {{ako}}. The thing being acted on (the [[object]]) gets {{ng}}. That's the second job of {{ng}} we mentioned in Lesson 2. This object is usually <i>non-specific</i>: "some fish", "a book". (To talk about <i>the</i> fish, Tagalog uses a different verb form; that's the Intermediate level.)</p>

<h3>Pronouns go right after the verb</h3>
<p>By the short-word rule, a pronoun actor jumps right after the verb: {{Uminom ako ng tubig.|I drank (some) water.}}</p>

<h3>Wanting and not wanting</h3>
<p>{{gusto|want}} and {{ayaw|don't want}} + pronoun + linker + the verb's infinitive:</p>
<ul><li>{{Gusto kong kumain.|I want to eat.}}</li><li>{{Ayaw niyang umalis.|He/She doesn't want to leave.}}</li></ul>

<h3>Useful time words</h3>
<p>{{kanina|earlier today}} · {{kahapon|yesterday}} · {{ngayon|now}} · {{mamaya|later today}} · {{bukas|tomorrow}} · {{araw-araw|every day}} · {{tuwing umaga|every morning}}</p>`,
    examples: [
      ['Kumain ako ng mangga.', 'I ate a mango.', 'Kumain=ate|ako=I|ng=(object)|mangga=mango'],
      ['Uminom si Ben ng kape.', 'Ben drank coffee.', 'Uminom=drank|si=(topic, names)|Ben=Ben|ng=(object)|kape=coffee'],
      ['Bumibili si Nanay ng gulay sa palengke.', 'Mom buys vegetables at the market.', 'Bumibili=buys/is buying|si=(topic)|Nanay=Mom|ng=(object)|gulay=vegetables|sa=at|palengke=market'],
      ['Pupunta ako sa Maynila mamaya.', "I'm going to Manila later.", 'Pupunta=will go|ako=I|sa=to|Maynila=Manila|mamaya=later today'],
      ['Gusto kong uminom ng tubig.', 'I want to drink (some) water.', 'Gusto=want|kong=I (+ linker)|uminom=to drink|ng=(object)|tubig=water'],
      ['Hindi siya kumain kanina.', "He didn't eat earlier.", 'Hindi=not|siya=he/she|kumain=ate|kanina=earlier today'],
    ],
    vocab: [['isda', 'fish'], ['kape', 'coffee'], ['tubig', 'water'], ['gulay', 'vegetables'], ['mangga', 'mango'], ['tinapay', 'bread'], ['ayaw', "don't want"], ['kanina', 'earlier today'], ['mamaya', 'later today']],
    exercises: [
      mc('"Ben bought bread" =', ['Bumili si Ben ng tinapay.', 'Bumili ng Ben si tinapay.', 'Si Ben bumili tinapay.', 'Bumili ang tinapay ni Ben.'], 0, 'Verb + actor (si Ben) + ng + object.'),
      fill('"I drank coffee" → Uminom ___ ng kape.', 'ako', 'Pronoun actor right after the verb.'),
      mc('In "Kumain si Ana ng isda", what does "ng" mark?', ['The owner', 'The thing eaten (object)', 'The place', 'The time'], 1, 'With -um- verbs, ng marks the object.'),
      mc('"I want to leave" =', ['Gusto kong umalis.', 'Gusto ko umalis.', 'Gusto akong umalis.', 'Umalis gusto ko.'], 0, 'gusto + kong (linker) + infinitive.'),
      fill('"We will go to the market tomorrow" → ___ kami sa palengke bukas. (punta)', 'pupunta', 'Contemplated: pu-punta.'),
      mc('"Hindi siya kumain" means…', ["He/She didn't eat.", 'He/She is eating.', 'He/She will eat.', 'He/She eats a lot.'], 0, 'hindi + completed verb.'),
    ],
  },
];

const intermediate = [
  {
    id: 'tl-i-1', title: '1 · mag- verbs',
    summary: 'The second big family of actor verbs, and how it differs from -um-.',
    body: `<p>{{mag-}} is a [[prefix]] (it goes at the front) that makes [[actor focus]] verbs, just like {{-um-}}: the person doing the action is the topic.</p>
<table class="conj"><tr><th>Aspect</th><th>Rule</th><th>{{luto|cook}}</th><th>{{aral|study}}</th></tr>
<tr><td>Infinitive / command</td><td>mag- + root</td><td>{{magluto}}</td><td>{{mag-aral}}</td></tr>
<tr><td>[[completed|Completed]]</td><td>mag- → <b>nag-</b></td><td>{{nagluto}}</td><td>{{nag-aral}}</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>nag- + repeat first syllable</td><td>{{nagluluto}}</td><td>{{nag-aaral}}</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>mag- + repeat first syllable</td><td>{{magluluto}}</td><td>{{mag-aaral}}</td></tr></table>
<p>Roots that start with a vowel get a hyphen: {{mag-aral}}.</p>

<h3>-um- or mag-? How to know</h3>
<p>Mostly you learn it with the word, the way English speakers learn "go/went" but "walk/walked". Some tendencies help:</p>
<ul><li><b>-um-</b> often goes with simple or inward actions: {{kumain|eat}}, {{uminom|drink}}, {{umupo|sit}}.</li>
<li><b>mag-</b> often goes with deliberate, outward, or longer activities: {{magluto|cook}}, {{maglinis|clean}}, {{magtrabaho|work}}, {{maglaro|play}}.</li>
<li>A few roots take both, with different meanings: {{umuwi|go home}} vs {{mag-uwi|bring (something) home}}.</li></ul>
<p>Borrowed English verbs almost always use mag-: {{mag-text|to text}}, {{mag-drive|to drive}}.</p>`,
    table: { title: 'Common mag- verbs', plain: [0], headers: ['Root (meaning)', 'Completed', 'Incomplete', 'Contemplated'], rows: [['luto (cook)', 'nagluto', 'nagluluto', 'magluluto'], ['linis (clean)', 'naglinis', 'naglilinis', 'maglilinis'], ['trabaho (work)', 'nagtrabaho', 'nagtatrabaho', 'magtatrabaho'], ['laro (play)', 'naglaro', 'naglalaro', 'maglalaro'], ['aral (study)', 'nag-aral', 'nag-aaral', 'mag-aaral'], ['basa (read)', 'nagbasa', 'nagbabasa', 'magbabasa']] },
    examples: [
      ['Nagluluto si Nanay ng adobo.', 'Mom is cooking adobo.', 'Nagluluto=is cooking|si=(topic)|Nanay=Mom|ng=(object)|adobo=adobo'],
      ['Naglinis kami ng bahay kahapon.', 'We cleaned the house yesterday.', 'Naglinis=cleaned|kami=we (not you)|ng=(object)|bahay=house|kahapon=yesterday'],
      ['Nagtatrabaho siya sa ospital.', 'She works at a hospital.', 'Nagtatrabaho=works|siya=she/he|sa=at|ospital=hospital'],
      ['Mag-aaral ako mamayang gabi.', "I'll study tonight.", 'Mag-aaral=will study|ako=I|mamayang gabi=tonight'],
      ['Naglalaro ang mga bata sa labas.', 'The children are playing outside.', 'Naglalaro=are playing|ang=the (topic)|mga=(plural)|bata=child|sa=at|labas=outside'],
    ],
    vocab: [['magluto', 'to cook'], ['maglinis', 'to clean'], ['magtrabaho', 'to work'], ['maglaro', 'to play'], ['mag-aral', 'to study'], ['ospital', 'hospital'], ['labas', 'outside'], ['gabi', 'night']],
    exercises: [
      fill('Yesterday Dad cooked sinigang → Kahapon, ___ si Tatay ng sinigang. (luto)', 'nagluto', 'Completed → nag-.'),
      fill('I am reading the news now → Ngayon, ___ ako ng balita. (basa)', 'nagbabasa', 'Incomplete → nag- + ba-basa.'),
      mc('Contemplated form of maglaro:', ['naglalaro', 'maglalaro', 'naglaro', 'lalaro'], 1, 'mag- + la-laro.'),
      mc('Which verb uses mag- for "to study"?', ['umaral', 'mag-aral', 'aralin', 'nag-aral (infinitive)'], 1, 'mag-aral (hyphen before a vowel).'),
      mc('"The children played outside" =', ['Naglaro ang mga bata sa labas.', 'Maglalaro ang mga bata sa labas.', 'Naglalaro ang mga bata sa labas.', 'Laro ang mga bata sa labas.'], 0, 'Completed → naglaro.'),
    ],
  },
  {
    id: 'tl-i-2', title: '2 · What is "focus"? (read this before the next lessons)',
    summary: 'The single most important idea in Tagalog verbs, explained step by step.',
    body: `<p>So far, the person doing the action has always been the topic: {{Bumili si Ana ng libro.|Ana bought a book.}} But Tagalog can make <b>any</b> noun in the sentence the topic, and the verb's [[affix]] changes to show which one. That system is called [[focus]].</p>

<h3>An English comparison</h3>
<p>English has a small version of this:</p>
<ul><li><i>Ana bought the book.</i> (about Ana)</li><li><i>The book was bought by Ana.</i> (about the book)</li></ul>
<p>English does it by rearranging the sentence. Tagalog does it by changing the verb's affix and moving {{ang}} to the noun you're talking about. And unlike the English passive, Tagalog's versions don't sound stiff. They are completely normal everyday speech.</p>

<h3>One event, three focuses</h3>
<p>Ana gives a gift to Ben. Watch where {{ang}}/{{si}} goes. That's the topic:</p>
<table class="conj"><tr><th>Focus</th><th>Sentence</th><th>Topic (ang/si)</th><th>Natural English</th></tr>
<tr><td>[[actor focus|Actor]] ({{mag-}})</td><td>{{Nagbigay si Ana ng regalo kay Ben.}}</td><td>Ana (the giver)</td><td>Ana gave a gift to Ben.</td></tr>
<tr><td>[[conveyance focus|Object / thing given]] ({{i-}})</td><td>{{Ibinigay ni Ana ang regalo kay Ben.}}</td><td>the gift</td><td>Ana gave the gift to Ben.</td></tr>
<tr><td>[[locative focus|Locative]] ({{-an}})</td><td>{{Binigyan ni Ana ng regalo si Ben.}}</td><td>Ben (the receiver)</td><td>Ana gave Ben a gift.</td></tr></table>

<h3>What happens to the other nouns</h3>
<p>Once one noun takes {{ang}}, the others keep their roles with the other markers:</p>
<ul><li>The <b>actor</b>, if it's not the topic, gets {{ng}} / {{ni}} / the ng-pronouns ({{ko}}, {{mo}}, {{niya}}…). So {{ni Ana}} here means "by Ana".</li><li>A non-topic <b>object</b> gets {{ng}}.</li><li>A non-topic <b>place/receiver</b> gets {{sa}} / {{kay}}.</li></ul>

<h3>How to choose</h3>
<p>The most useful rule for learners: <b>the topic (ang) is always specific</b>. So:</p>
<ul><li>"I bought <b>a</b> book" (any book) → actor focus: {{Bumili ako ng libro.}}</li><li>"I bought <b>the</b> book" (that one) → object focus: {{Binili ko ang libro.}}</li></ul>
<p>Filipinos actually use object focus <i>more</i> often than actor focus, especially for questions and commands: {{Kinain mo ba ang cake?|Did you eat the cake?}}</p>

<h3>The main focus affixes</h3>
<table class="conj"><tr><th>Focus (topic is…)</th><th>Main affixes</th><th>Next lessons</th></tr>
<tr><td>[[actor focus|Actor]]: who does it</td><td>-um-, mag-</td><td>Beginner 10–11, Intermediate 1</td></tr>
<tr><td>[[object focus|Object]]: what it's done to</td><td>-in</td><td>Intermediate 3</td></tr>
<tr><td>[[locative focus|Locative]]: the place, direction or person affected</td><td>-an</td><td>Intermediate 4</td></tr>
<tr><td>[[conveyance focus|Conveyance]]: the thing moved/given</td><td>i-</td><td>Intermediate 5</td></tr>
<tr><td>[[benefactive focus|Benefactive]]: who it's done for</td><td>i-, ipag-</td><td>Advanced 1</td></tr></table>`,
    examples: [
      ['Bumili ako ng libro.', 'I bought a book. (actor focus)', 'Bumili=bought (actor focus)|ako=I (topic)|ng=(object)|libro=book'],
      ['Binili ko ang libro.', 'I bought the book. (object focus)', 'Binili=bought (object focus)|ko=by me|ang=the (topic)|libro=book'],
      ['Nagbigay si Ana ng regalo kay Ben.', 'Ana gave a gift to Ben.', 'Nagbigay=gave (actor focus)|si=(topic)|Ana=Ana|ng=(object)|regalo=gift|kay=to|Ben=Ben'],
      ['Ibinigay ni Ana ang regalo kay Ben.', 'Ana gave the gift to Ben.', 'Ibinigay=gave (object/conveyance focus)|ni=by|Ana=Ana|ang=the (topic)|regalo=gift|kay=to|Ben=Ben'],
      ['Binigyan ni Ana ng regalo si Ben.', 'Ana gave Ben a gift.', 'Binigyan=gave to (locative focus)|ni=by|Ana=Ana|ng=(object)|regalo=gift|si=(topic)|Ben=Ben'],
    ],
    vocab: [['regalo', 'gift'], ['magbigay', 'to give (actor focus)'], ['ibigay', 'to give (the thing given is topic)'], ['bigyan', 'to give to (the receiver is topic)']],
    exercises: [
      mc('In "Binili ko ang libro", what is the topic?', ['ko (me)', 'ang libro (the book)', 'binili (bought)'], 1, 'ang marks the topic; the verb form binili (-in-) shows object focus.'),
      mc('What does "focus" mean in Tagalog grammar?', ['How loudly you stress a word', 'The verb affix shows which noun is the topic (the ang-phrase)', 'Whether the action is finished', 'Speaking politely'], 1, 'Focus = which noun the verb "points to" as the topic.'),
      mc('"I bought THE fish (that one)" — which is more natural?', ['Bumili ako ng isda.', 'Binili ko ang isda.'], 1, 'Specific object → object focus with ang.'),
      mc('In "Binigyan ni Ana ng regalo si Ben", who is the topic?', ['Ana', 'the gift', 'Ben'], 2, 'si Ben carries the topic marker; binigyan (-an) = locative focus on the receiver.'),
      mc('When the actor is NOT the topic, it is marked with…', ['ang / si', 'ng / ni (or ko, mo, niya…)', 'sa / kay'], 1, 'e.g. ni Ana = by Ana; ko = by me.'),
    ],
  },
  {
    id: 'tl-i-3', title: '3 · Object focus: -in',
    summary: 'When the thing acted on is the topic.',
    body: `<p>With [[object focus]], the thing acted on takes {{ang}} (so it's specific: "<i>the</i> mango"), and the actor takes {{ng}}/{{ni}} or an ng-pronoun ({{ko}}, {{mo}}, {{niya}}…).</p>
<p class="callout">{{Kinain ko ang mangga.}} — I ate the mango. (literally "Eaten-by-me the mango")</p>

<h3>Forming the four forms</h3>
<table class="conj"><tr><th>Aspect</th><th>Rule</th><th>{{kain|eat}}</th><th>{{basa|read}}</th></tr>
<tr><td>[[infinitive|Infinitive]] / command</td><td>root + <b>-in</b> (-hin after a vowel)</td><td>{{kainin}}</td><td>{{basahin}}</td></tr>
<tr><td>[[completed|Completed]]</td><td><b>-in-</b> inside, after the first consonant</td><td>{{kinain}}</td><td>{{binasa}}</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>-in- + repeat first syllable</td><td>{{kinakain}}</td><td>{{binabasa}}</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>repeat first syllable + -in</td><td>{{kakainin}}</td><td>{{babasahin}}</td></tr></table>

<h3>Spelling adjustments you'll see</h3>
<ul><li>Some roots shorten: {{bili}} → {{bilhin|buy it}}, {{gawa}} → {{gawin|do it}}.</li><li>An <b>o</b> near the end often becomes <b>u</b>: {{inom}} → {{inumin|drink it}}, {{luto}} → {{lutuin|cook it}}.</li><li>Roots starting with <b>l</b>, <b>y</b> or a vowel usually take {{ni-}} / {{in-}} at the front in the completed form: {{niluto|cooked}}, {{ininom|drank}}.</li></ul>

<h3>Commands</h3><p>Commands are usually object focus, with {{mo}} ("you") as the actor: {{Kainin mo ito.|Eat this.}} {{Basahin mo ang libro.|Read the book.}}</p>`,
    table: { title: 'Object-focus verbs', plain: [0], headers: ['Root (meaning)', 'Command', 'Completed', 'Incomplete', 'Contemplated'], rows: [['kain (eat)', 'kainin', 'kinain', 'kinakain', 'kakainin'], ['basa (read)', 'basahin', 'binasa', 'binabasa', 'babasahin'], ['gawa (do/make)', 'gawin', 'ginawa', 'ginagawa', 'gagawin'], ['bili (buy)', 'bilhin', 'binili', 'binibili', 'bibilhin'], ['luto (cook)', 'lutuin', 'niluto', 'niluluto', 'lulutuin'], ['inom (drink)', 'inumin', 'ininom', 'iniinom', 'iinumin']] },
    examples: [
      ['Binasa ko na ang libro.', "I've already read the book.", 'Binasa=read (completed, object focus)|ko=by me|na=already|ang=the (topic)|libro=book'],
      ['Niluluto ni Lola ang adobo.', 'Grandma is cooking the adobo.', 'Niluluto=is cooking (object focus)|ni=by|Lola=Grandma|ang=the (topic)|adobo=adobo'],
      ['Gagawin namin ang proyekto bukas.', "We'll do the project tomorrow.", 'Gagawin=will do (object focus)|namin=by us|ang=the (topic)|proyekto=project|bukas=tomorrow'],
      ['Inumin mo ang gamot.', 'Take (drink) the medicine.', 'Inumin=drink it (command)|mo=you|ang=the (topic)|gamot=medicine'],
      ['Ano ang ginagawa mo?', 'What are you doing?', 'Ano=what|ang=the (topic)|ginagawa=being done|mo=by you'],
    ],
    vocab: [['kainin', 'to eat (it)'], ['basahin', 'to read (it)'], ['gawin', 'to do (it)'], ['bilhin', 'to buy (it)'], ['gamot', 'medicine'], ['proyekto', 'project'], ['pusa', 'cat']],
    exercises: [
      mc('"I read the letter" (that specific letter) =', ['Nagbasa ako ng sulat.', 'Binasa ko ang sulat.', 'Binasa ako ang sulat.', 'Nagbasa ko ang sulat.'], 1, 'Specific object → object focus; actor in ng-form (ko).'),
      fill('"The cat ate the fish" → ___ ng pusa ang isda. (kain, completed)', 'kinain', 'Completed object focus → -in- infix.'),
      fill('"Do your assignment now!" → ___ mo na ang assignment mo! (gawa, command)', ['gawin', 'Gawin'], 'gawa + -in → gawin.'),
      mc('Completed object-focus form of "luto" (cook):', ['linuto', 'niluto', 'nagluto', 'lutuin'], 1, 'l-initial root → ni-.'),
      mc('"Ano ang ginagawa mo?" literally means…', ['"What is being done by you?" → What are you doing?', '"What did you do?"', '"What will you make?"', '"Who are you?"'], 0, 'ginagawa = incomplete object focus.'),
    ],
  },
  {
    id: 'tl-i-4', title: '4 · Locative focus: -an',
    summary: 'When the place, surface, direction or person affected is the topic.',
    body: `<p>"[[locative|Locative]]" comes from "location". With [[locative focus]], the topic is the <b>place</b> where something happens, the <b>direction</b> it goes, or the <b>person/thing that receives or is affected by</b> the action, such as the surface that gets washed, the person who gets helped, or the place you visit.</p>
<table class="conj"><tr><th>Aspect</th><th>Rule</th><th>{{hugas|wash}}</th><th>{{punta|go}}</th></tr>
<tr><td>Infinitive / command</td><td>root + <b>-an</b> (-han after a vowel)</td><td>{{hugasan}}</td><td>{{puntahan}}</td></tr>
<tr><td>[[completed|Completed]]</td><td>-in- inside + -an</td><td>{{hinugasan}}</td><td>{{pinuntahan}}</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>-in- + repeat + -an</td><td>{{hinuhugasan}}</td><td>{{pinupuntahan}}</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>repeat + -an</td><td>{{huhugasan}}</td><td>{{pupuntahan}}</td></tr></table>

<h3>When to use -an instead of -in</h3>
<ul><li>Washing/cleaning a <b>surface</b>: {{Hugasan mo ang pinggan.|Wash the dishes.}}</li><li><b>Going to</b> a place or person: {{Pinuntahan namin si Lola.|We went to (visited) Grandma.}}</li><li><b>Helping</b> or giving <b>to</b> someone: {{Tulungan mo ako.|Help me.}} {{Bigyan mo siya ng tubig.|Give him/her some water.}}</li><li>Writing <b>to</b> someone: {{Sinulatan ko si Ben.|I wrote to Ben.}}</li></ul>
<p>Spelling notes: o → u ({{tulong}} → {{tulungan}}), and {{bigay}} shortens to {{bigyan}}.</p>`,
    examples: [
      ['Hugasan mo ang pinggan.', 'Wash the dishes.', 'Hugasan=wash (locative focus, command)|mo=you|ang=the (topic)|pinggan=dish/plate'],
      ['Pinuntahan namin si Lola sa probinsya.', 'We visited Grandma in the province.', 'Pinuntahan=went to (completed)|namin=by us|si=(topic)|Lola=Grandma|sa=in|probinsya=province'],
      ['Tinulungan niya ako.', 'He/She helped me.', 'Tinulungan=helped (locative focus)|niya=by him/her|ako=me (topic)'],
      ['Bibigyan kita ng regalo.', "I'll give you a gift.", 'Bibigyan=will give to|kita=I → you|ng=(object)|regalo=gift'],
      ['Sinulatan ko si Ben kahapon.', 'I wrote to Ben yesterday.', 'Sinulatan=wrote to|ko=by me|si=(topic)|Ben=Ben|kahapon=yesterday'],
    ],
    vocab: [['hugasan', 'to wash (something)'], ['puntahan', 'to go to / visit'], ['tulungan', 'to help (someone)'], ['bigyan', 'to give to (someone)'], ['pinggan', 'plate / dish'], ['probinsya', 'province'], ['kita', '"I … you" (ko + ikaw)']],
    exercises: [
      mc('"Help me!" =', ['Tumulong mo ako!', 'Tulungan mo ako!', 'Tulungin mo ako!', 'Tulong ako!'], 1, 'The person helped is the topic → locative focus tulungan.'),
      fill('"Yesterday we visited the museum" → Kahapon, ___ namin ang museo. (puntahan, completed)', 'pinuntahan', '-in- + -an.'),
      mc('In "Hinugasan ko ang kotse", what is the topic?', ['ko', 'ang kotse', 'hinugasan'], 1, 'ang marks the topic (the car that got washed).'),
      mc('What does "locative" mean?', ['About time', 'About place, direction, or the person/thing receiving the action', 'About politeness', 'About the future'], 1, 'Locative = location.'),
      mc('"I\'ll give you water" (you = the receiver) =', ['Bibigyan kita ng tubig.', 'Ibibigay kita ng tubig.', 'Magbibigay kita ng tubig.', 'Bigay ka tubig.'], 0, 'Receiver focus → bigyan; kita = I→you.'),
    ],
  },
  {
    id: 'tl-i-5', title: '5 · Conveyance focus: i-',
    summary: 'When the thing moved, put, given or thrown is the topic.',
    body: `<p>[[conveyance focus|Conveyance]] means "carrying across". With {{i-}}, the topic is the thing that gets <b>moved</b>: given, put down, thrown away, sent, or written down.</p>
<table class="conj"><tr><th>Aspect</th><th>Rule</th><th>{{bigay|give}}</th><th>{{lagay|put}}</th></tr>
<tr><td>Infinitive / command</td><td><b>i-</b> + root</td><td>{{ibigay}}</td><td>{{ilagay}}</td></tr>
<tr><td>[[completed|Completed]]</td><td>i- + -in- inside the root</td><td>{{ibinigay}}</td><td>{{inilagay}}</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>i- + -in- + repeat</td><td>{{ibinibigay}}</td><td>{{inilalagay}}</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>i- + repeat</td><td>{{ibibigay}}</td><td>{{ilalagay}}</td></tr></table>
<p>Roots starting with <b>l</b> put the {{in}} at the front: {{inilagay|put (completed)}}.</p>

<h3>-an vs i- with the same verb</h3>
<p>{{bigay}} shows the difference clearly:</p>
<ul><li>{{Ibigay mo ang libro kay Ana.|Give the book to Ana.}}: the <b>book</b> (the thing moved) is the topic.</li><li>{{Bigyan mo si Ana ng libro.|Give Ana a book.}}: <b>Ana</b> (the receiver) is the topic.</li></ul>`,
    examples: [
      ['Ibinigay ni Lolo ang relo sa akin.', 'Grandpa gave the watch to me.', 'Ibinigay=gave (conveyance focus)|ni=by|Lolo=Grandpa|ang=the (topic)|relo=watch|sa akin=to me'],
      ['Ilagay mo ang susi sa mesa.', 'Put the key on the table.', 'Ilagay=put (command)|mo=you|ang=the (topic)|susi=key|sa=on|mesa=table'],
      ['Itatapon ko na ang mga lumang damit.', "I'll throw away the old clothes now.", 'Itatapon=will throw away|ko=by me|na=now/already|ang=the (topic)|mga=(plural)|lumang=old (+ linker)|damit=clothes'],
      ['Isinulat niya ang pangalan ko.', 'She wrote down my name.', 'Isinulat=wrote down|niya=by her/him|ang=the (topic)|pangalan=name|ko=my'],
    ],
    vocab: [['ibigay', 'to give (the thing)'], ['ilagay', 'to put'], ['itapon', 'to throw away'], ['isulat', 'to write down'], ['relo', 'watch'], ['susi', 'key'], ['damit', 'clothes']],
    exercises: [
      mc('"I put the keys on the table" (the keys are the topic) =', ['Naglagay ako ng susi sa mesa.', 'Inilagay ko ang susi sa mesa.', 'Nilagyan ko ang susi sa mesa.', 'Inilagay ako ang susi.'], 1, 'Conveyance i- → inilagay (completed).'),
      fill('Tomorrow I will give this to you → Bukas, ___ ko ito sa iyo. (ibigay, contemplated)', 'ibibigay', 'i- + bi-bigay.'),
      mc('Which sentence makes the RECEIVER the topic?', ['Ibinigay ko ang pera.', 'Binigyan ko siya ng pera.', 'Nagbigay ako ng pera.'], 1, '-an (binigyan) focuses the receiver.'),
      fill('"Throw that away!" → ___ mo iyan! (tapon, command)', ['itapon', 'Itapon'], 'i- + root.'),
    ],
  },
  {
    id: 'tl-i-6', title: '6 · Little words: na, pa, rin, lang, naman…',
    summary: 'The short particles that give Tagalog its natural feel.',
    body: `<p>[[particle|Particles]] are short words that add shades of meaning. They are [[enclitic|enclitics]], so they sit right after the first word or phrase.</p>
<table class="conj"><tr><th>Particle</th><th>Meaning</th><th>Example</th></tr>
<tr><td>{{na}}</td><td>already / now</td><td>{{Tara na!|Let's go now!}} {{Kumain na ako.|I've already eaten.}}</td></tr>
<tr><td>{{pa}}</td><td>still / yet / more</td><td>{{Hindi pa.|Not yet.}} {{Isa pa.|One more.}}</td></tr>
<tr><td>{{din}} / {{rin}}</td><td>also, too (rin after a vowel)</td><td>{{Ako rin.|Me too.}} {{Gutom din siya.|She's hungry too.}}</td></tr>
<tr><td>{{lang}} / {{lamang}}</td><td>only, just</td><td>{{Sandali lang.|Just a moment.}}</td></tr>
<tr><td>{{naman}}</td><td>softens, or "and as for…"</td><td>{{Ikaw naman?|And you?}} {{Mabuti naman.|I'm fine (thanks).}}</td></tr>
<tr><td>{{nga}}</td><td>really / indeed; "please" in requests</td><td>{{Oo nga.|Yes, really / That's right.}}</td></tr>
<tr><td>{{daw}} / {{raw}}</td><td>"they say", reportedly</td><td>{{Darating daw siya.|He's supposedly coming.}}</td></tr>
<tr><td>{{kasi}}</td><td>because</td><td>{{Hindi ako sumama, pagod kasi ako.|I didn't come along because I was tired.}}</td></tr></table>

<h3>Word order when several pile up</h3>
<p>One-syllable pronouns ({{ka}}, {{ko}}, {{mo}}) come <b>before</b> particles; two-syllable pronouns ({{siya}}, {{kami}}, {{sila}}…) come <b>after</b>:</p>
<ul><li>{{Kumain ka na ba?|Have you eaten yet?}}: ka, then na, then ba</li><li>{{Kumain na ba siya?|Has he/she eaten yet?}}: na, then ba, then siya</li></ul>`,
    examples: [
      ['Hindi pa ako kumakain.', "I haven't eaten yet.", 'Hindi=not|pa=yet|ako=I|kumakain=eating'],
      ['Pagod na rin ako.', "I'm tired too now.", 'Pagod=tired|na=now|rin=too|ako=I'],
      ['Sandali lang po.', 'Just a moment, please.', 'Sandali=moment|lang=just|po=(polite)'],
      ['Darating daw siya bukas.', "He's supposedly coming tomorrow.", 'Darating=will arrive|daw=reportedly|siya=he/she|bukas=tomorrow'],
      ['Kumain ka na ba?', 'Have you eaten yet?', 'Kumain=ate|ka=you|na=already|ba=(question)'],
    ],
    vocab: [['na', 'already / now'], ['pa', 'still / yet / more'], ['rin / din', 'also, too'], ['lang', 'only, just'], ['naman', 'softener; "as for"'], ['daw / raw', 'reportedly'], ['kasi', 'because'], ['tara', "let's go"], ['sandali', 'a moment']],
    exercises: [
      mc('"Not yet" =', ['Hindi na', 'Hindi pa', 'Hindi rin', 'Hindi lang'], 1, 'pa = yet / still.'),
      mc('"Me too" =', ['Ako na', 'Ako rin', 'Ako pa', 'Ako lang'], 1, 'rin after a vowel (ako).'),
      mc('Correct word order:', ['Umalis na ba siya?', 'Umalis siya na ba?', 'Umalis ba siya na?', 'Siya umalis na ba?'], 0, 'Two-syllable pronoun after the particles.'),
      fill('"One more, please!" → Isa ___ po!', 'pa', 'pa = more.'),
      mc('"Darating daw siya" — what does daw add?', ['Certainty', '"I heard / reportedly"', 'A question', 'Politeness'], 1, 'daw/raw = hearsay.'),
    ],
  },
];

const advanced = [
  {
    id: 'tl-a-1', title: '1 · Benefactive focus: ipag- and i-',
    summary: 'When the person something is done FOR is the topic.',
    body: `<p>[[benefactive focus|Benefactive]] means "benefiting". These verbs make the <b>person who benefits</b> (for whom the action is done) the topic.</p>
<ul><li>Verbs that use {{mag-}} for actor focus usually take {{ipag-}}: {{magluto}} → {{ipagluto|cook for (someone)}}</li><li>Verbs that use {{-um-}} usually take {{i-}}: {{bumili}} → {{ibili|buy for (someone)}}</li></ul>
<table class="conj"><tr><th>Aspect</th><th>{{ipagluto|cook for}}</th><th>{{ibili|buy for}}</th></tr>
<tr><td>Infinitive / command</td><td>{{ipagluto}}</td><td>{{ibili}}</td></tr>
<tr><td>[[completed|Completed]]</td><td>{{ipinagluto}}</td><td>{{ibinili}}</td></tr>
<tr><td>[[incomplete|Incomplete]]</td><td>{{ipinagluluto}}</td><td>{{ibinibili}}</td></tr>
<tr><td>[[contemplated|Contemplated]]</td><td>{{ipagluluto}}</td><td>{{ibibili}}</td></tr></table>
<p>Notice {{i-}} also makes [[conveyance focus]] (Intermediate 5). Context tells you which: {{Ibili mo ako ng kape}} must be "buy coffee <b>for me</b>", since you can't "buy me" as a thing.</p>`,
    examples: [
      ['Ipinagluto ako ni Nanay ng sinigang.', 'Mom cooked sinigang for me.', 'Ipinagluto=cooked for|ako=me (topic)|ni=by|Nanay=Mom|ng=(object)|sinigang=sinigang (sour soup)'],
      ['Ibili mo naman ako ng kape.', 'Buy me a coffee, would you?', 'Ibili=buy for|mo=you|naman=(softener)|ako=me (topic)|ng=(object)|kape=coffee'],
      ['Ipagluluto kita ng paborito mo.', "I'll cook your favorite for you.", 'Ipagluluto=will cook for|kita=I → you|ng=(object)|paborito=favorite|mo=your'],
    ],
    vocab: [['ipagluto', 'to cook for'], ['ibili', 'to buy for'], ['ipaglaba', 'to do laundry for'], ['paborito', 'favorite'], ['sinigang', 'sour tamarind soup']],
    exercises: [
      mc('"Cook for me!" =', ['Magluto mo ako!', 'Ipagluto mo ako!', 'Lutuin mo ako!', 'Iluto ako!'], 1, 'Beneficiary as topic → ipag-.'),
      fill('Grandma cooked pancit for me → ___ ako ni Lola ng pansit. (ipagluto, completed)', ['ipinagluto', 'Ipinagluto'], 'ipag- completed → ipinag-.'),
      mc('"Ibili mo ako ng tinapay" means…', ['Sell me some bread', 'Buy some bread for me', 'I bought bread', 'Bread was bought'], 1, 'Benefactive i-.'),
      mc('Why is "Lutuin mo ako!" a bad way to say "Cook for me"?', ['It is impolite', 'It means "Cook ME!" (object focus: I would be the food)', 'It is the future tense', 'It is correct'], 1, 'Object focus makes the topic the thing cooked!'),
    ],
  },
  {
    id: 'tl-a-2', title: '2 · Ability & accidents: maka- and ma-',
    summary: '"Can / managed to", and actions that happen without intention.',
    body: `<p>[[abilitative|Abilitative]] verbs express <b>ability</b> ("can, be able to"), <b>achievement</b> ("managed to"), or an action that happened <b>without trying</b>.</p>
<h3>maka-: actor focus</h3>
<table class="conj"><tr><th>Aspect</th><th>Form</th><th>Meaning</th></tr><tr><td>Infinitive</td><td>{{makakain}}</td><td>to be able to eat</td></tr><tr><td>[[completed|Completed]]</td><td>{{nakakain}}</td><td>managed to eat / was able to eat</td></tr><tr><td>[[incomplete|Incomplete]]</td><td>{{nakakakain}}</td><td>is able to eat</td></tr><tr><td>[[contemplated|Contemplated]]</td><td>{{makakakain}}</td><td>will be able to eat</td></tr></table>
<p>Very common in the negative: {{Hindi ako makatulog.|I can't sleep.}} And in "have you ever…?" questions: {{Nakapunta ka na ba sa Boracay?|Have you ever been to Boracay?}}</p>
<h3>ma-: object focus</h3>
<p>With the object as topic, especially with senses and understanding: {{makita|see}}, {{marinig|hear}}, {{maintindihan|understand}}.</p>
<ul><li>{{Nakita ko siya.|I saw him/her.}} ({{na-}} = completed)</li><li>{{Naintindihan mo ba?|Did you understand?}}</li><li>{{Hindi kita marinig.|I can't hear you.}}</li></ul>
<h3>Things that just happen</h3>
<p>Some {{ma-}} verbs describe events no one intended: {{maligaw|get lost}}, {{mahulog|fall}}, {{masira|break down}}: {{Nasira ang cellphone ko.|My phone broke.}}</p>`,
    examples: [
      ['Hindi ako makatulog kagabi.', "I couldn't sleep last night.", 'Hindi=not|ako=I|makatulog=able to sleep|kagabi=last night'],
      ['Nakapunta ka na ba sa Baguio?', 'Have you ever been to Baguio?', 'Nakapunta=managed to go|ka=you|na=already|ba=(question)|sa=to|Baguio=Baguio'],
      ['Nakita mo ba ang susi ko?', 'Did you see my key?', 'Nakita=saw (abilitative)|mo=by you|ba=(question)|ang=the (topic)|susi=key|ko=my'],
      ['Naintindihan ko na!', 'I get it now!', 'Naintindihan=understood|ko=by me|na=now'],
      ['Naligaw kami sa Quiapo.', 'We got lost in Quiapo.', 'Naligaw=got lost|kami=we (not you)|sa=in|Quiapo=Quiapo'],
    ],
    vocab: [['makakain', 'to be able to eat'], ['makatulog', 'to be able to sleep'], ['makita', 'to see'], ['marinig', 'to hear'], ['maintindihan', 'to understand'], ['maligaw', 'to get lost'], ['kagabi', 'last night']],
    exercises: [
      fill('Yesterday I saw Ben at the mall → Kahapon, ___ ko si Ben sa mall. (makita, completed)', 'nakita', 'ma- completed → na-.'),
      mc('"He wasn\'t able to come" =', ['Hindi siya nakapunta.', 'Hindi siya pumunta.', 'Hindi siya pupunta.', 'Hindi siya pupuntahan.'], 0, 'Completed abilitative → naka-.'),
      mc('"Nakapunta ka na ba sa Cebu?" asks…', ['Are you going to Cebu?', 'Have you ever been to Cebu?', 'Do you live in Cebu?', 'Why did you go to Cebu?'], 1, 'naka- + na ba = have you ever.'),
      mc('"I can\'t understand" =', ['Hindi ko maintindihan.', 'Hindi ako intindi.', 'Hindi ko inintindi.', 'Wala akong intindi.'], 0, 'Negative + ma- abilitative.'),
    ],
  },
  {
    id: 'tl-a-3', title: '3 · Making or having someone do something: pa-',
    summary: 'magpa-, ipa-, pa-…-in, and polite requests with paki-.',
    body: `<p>[[causative|Causative]] verbs mean <b>making, having, or letting</b> someone do something. Tagalog adds {{pa}} to the verb.</p>
<table class="conj"><tr><th>Form</th><th>Topic is…</th><th>Example</th></tr>
<tr><td>{{magpa-}}</td><td>the person who arranges it</td><td>{{Nagpagupit ako.|I had my hair cut.}}</td></tr>
<tr><td>{{ipa-}}</td><td>the thing to be done/fixed</td><td>{{Ipinaayos ko ang kotse.|I had the car fixed.}}</td></tr>
<tr><td>{{pa-…-in}}</td><td>the person made to act</td><td>{{Pinakain niya ang aso.|She fed the dog (made the dog eat).}}</td></tr></table>
<h3>Polite requests: paki-</h3>
<p>{{paki-}} + root = "please (do this for me)". It's the everyday polite way to ask: {{Pakiabot ng asin.|Please pass the salt.}} {{Pakisara ng pinto.|Please close the door.}}</p>`,
    examples: [
      ['Nagpasundo ako sa kapatid ko.', 'I had my sibling pick me up.', 'Nagpasundo=had (someone) pick me up|ako=I|sa=(by)|kapatid=sibling|ko=my'],
      ['Ipinadala niya ang pera sa probinsya.', 'He had the money sent to the province.', 'Ipinadala=had sent|niya=by him|ang=the (topic)|pera=money|sa=to|probinsya=province'],
      ['Pinaupo ng guro ang mga estudyante.', 'The teacher had the students sit down.', 'Pinaupo=made to sit|ng=by|guro=teacher|ang=the (topic)|mga=(plural)|estudyante=student'],
      ['Pakisara ng pinto.', 'Please close the door.', 'Pakisara=please close|ng=(object)|pinto=door'],
    ],
    vocab: [['magpagupit', 'to get a haircut'], ['ipaayos', 'to have (something) fixed'], ['pakainin', 'to feed'], ['paki-', 'please (request)'], ['pinto', 'door'], ['asin', 'salt']],
    exercises: [
      mc('"I had my phone repaired" =', ['Inayos ko ang cellphone.', 'Ipinaayos ko ang cellphone.', 'Nag-ayos ako ng cellphone.', 'Naayos ko ang cellphone.'], 1, 'ipa- = have something done.'),
      mc('"She fed the baby" =', ['Kumain siya ng baby.', 'Pinakain niya ang baby.', 'Kinain niya ang baby.', 'Nagpakain ang baby.'], 1, 'pa-…-in = make the baby eat. (Kinain niya ang baby means she ATE the baby!)'),
      fill('"Please pass the water" → ___abot ng tubig.', ['paki', 'Paki'], 'paki- = please.'),
    ],
  },
  {
    id: 'tl-a-4', title: '4 · "Just did": ka- + repeated syllable',
    summary: 'The recent perfective, and its unusual marking.',
    body: `<p>To say something <b>just</b> happened, Tagalog uses the [[recent perfective]]: {{ka-}} + the first syllable repeated + the root, usually with {{lang}} ("just"):</p>
<ul><li>{{kain}} → {{kakakain|just ate}}</li><li>{{alis}} → {{kaaalis|just left}}</li><li>{{gising|wake}} → {{kagigising|just woke up}}</li><li>{{dating|arrive}} → {{kararating|just arrived}} (d becomes r between vowels)</li></ul>
<h3>The quirk: no topic, and the actor takes ng</h3>
<p>This form has <b>no ang-topic</b>. The person who did it takes the <b>ng-form</b>: {{Kakakain ko lang.|I just ate.}} — not ✗ <i>Kakakain ako lang</i>.</p>
<p>In casual speech you'll also hear {{kakarating}}, {{kakaalis}} (with "ka-ka-").</p>`,
    examples: [
      ['Kakakain ko lang, busog pa ako.', "I just ate, I'm still full.", 'Kakakain=just ate|ko=by me|lang=just|busog=full|pa=still|ako=I'],
      ['Kararating lang ni Mia galing Dubai.', 'Mia just arrived from Dubai.', 'Kararating=just arrived|lang=just|ni=by|Mia=Mia|galing=from|Dubai=Dubai'],
      ['Kaaalis lang nila.', 'They just left.', 'Kaaalis=just left|lang=just|nila=by them'],
      ['Kagigising ko lang.', 'I just woke up.', 'Kagigising=just woke up|ko=by me|lang=just'],
    ],
    vocab: [['kakakain', 'just ate'], ['kararating', 'just arrived'], ['kaaalis', 'just left'], ['kagigising', 'just woke up'], ['galing', 'coming from'], ['busog', 'full']],
    exercises: [
      mc('"I just arrived" =', ['Kararating ako lang.', 'Kararating ko lang.', 'Dumating lang ako.', 'Darating ko lang.'], 1, 'Recent perfective → ng-form actor (ko).'),
      fill('"I just woke up" → ___ ko lang. (gising)', ['kagigising', 'Kagigising'], 'ka + gi + gising.'),
      mc('Who did the action in "Kaaalis lang ni Paolo"?', ['Nobody', 'Paolo', 'lang', 'unclear'], 1, 'ni Paolo = the actor (ng-form for names).'),
    ],
  },
  {
    id: 'tl-a-5', title: '5 · ng vs. nang',
    summary: 'Two words that sound identical but do different jobs.',
    body: `<p>{{ng}} and {{nang}} are both pronounced "nang", and even native speakers mix them up in writing. The rule:</p>
<table class="conj"><tr><th>Word</th><th>Comes before…</th><th>Jobs</th></tr>
<tr><td>{{ng}}</td><td>a <b>noun</b></td><td>the [[marker]] ("of", object, non-topic actor): {{bahay ng guro}}, {{kumain ng mangga}}</td></tr>
<tr><td>{{nang}}</td><td>a <b>verb, adjective or adverb</b>, or starts a clause</td><td>see below</td></tr></table>
<h3>The jobs of nang</h3>
<ul>
<li><b>How</b> something is done (with an adjective): {{Kumain siya nang mabilis.|He ate quickly.}}</li>
<li><b>When</b> (starting a past [[clause]]): {{Nang dumating ako, umuulan.|When I arrived, it was raining.}}</li>
<li><b>Doing something over and over</b> (repeated verb): {{Takbo nang takbo ang bata.|The child keeps running around.}}</li>
<li><b>By how much</b>: {{Tumaas nang sampung piso ang presyo.|The price went up by ten pesos.}}</li>
<li><b>So that</b> (formal): {{Mag-aral ka nang pumasa ka.|Study so that you pass.}}</li>
</ul>`,
    examples: [
      ['Kumain siya nang mabilis.', 'He ate quickly.', 'Kumain=ate|siya=he/she|nang=(how)|mabilis=fast'],
      ['Nang dumating ako, umuulan.', 'When I arrived, it was raining.', 'Nang=when|dumating=arrived|ako=I|umuulan=raining'],
      ['Takbo nang takbo ang bata.', 'The child keeps running around.', 'Takbo=run|nang=(over and over)|takbo=run|ang=the (topic)|bata=child'],
      ['Magsalita ka nang malakas.', 'Speak loudly.', 'Magsalita=speak|ka=you|nang=(how)|malakas=loud/strong'],
    ],
    vocab: [['nang', 'how / when / so that (before verbs & adjectives)'], ['mabilis', 'fast'], ['malakas', 'loud / strong'], ['dumating', 'to arrive'], ['umuulan', 'raining'], ['presyo', 'price']],
    exercises: [
      mc('"He spoke slowly" → Nagsalita siya ___ mabagal.', ['ng', 'nang'], 1, 'Before an adjective describing how → nang.'),
      mc('"The teacher\'s book" → ang libro ___ guro', ['ng', 'nang'], 0, 'Before a noun (owner) → ng.'),
      mc('"___ umalis siya, umiyak ako." (When he left, I cried.)', ['Ng', 'Nang'], 1, '"When" → nang.'),
      fill('"Kain ___ kain ang bata" (the child keeps eating)', 'nang', 'Repeated verb → nang.'),
    ],
  },
];

export default { beginner, intermediate, advanced };
