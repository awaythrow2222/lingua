// Advanced English: grammar, literary excerpts (public domain) and a daily vocabulary bank.
import LIBRARY from './en-library.js';

// [word, part of speech, definition, example, memory hook, usage note]
const WORDS = [
  ['ubiquitous', 'adjective', 'present, appearing, or found everywhere', 'Smartphones have become ubiquitous, even in remote villages.', 'UBIQUITous — "you be quick" to find it, because it is everywhere.', 'Latin ubique, "everywhere".'],
  ['pragmatic', 'adjective', 'dealing with things sensibly and realistically rather than by theory', 'She took a pragmatic approach: fix what breaks first, perfect it later.', 'PRAGMATIC → "practical automatic" — the practical choice, every time.', 'Noun: pragmatism; a pragmatist.'],
  ['nuance', 'noun', 'a subtle difference in meaning, expression, or tone', 'The translation lost the nuance of the original joke.', 'NUANCE — a "new ounce" of meaning: tiny, but it changes the weight.', 'Verb: to nuance an argument; adj. nuanced.'],
  ['ambivalent', 'adjective', 'having mixed or contradictory feelings about something', "I'm ambivalent about moving: excited by the city, sad to leave friends.", 'AMBI = both (ambidextrous). Valent = strength: both feelings equally strong.', 'Not the same as indifferent (no feeling at all).'],
  ['candid', 'adjective', 'truthful and straightforward; frank', 'Thank you for your candid feedback on the draft.', 'A CANDID camera catches you as you really are.', 'Noun: candor (US) / candour (UK).'],
  ['meticulous', 'adjective', 'showing great attention to detail; very careful and precise', 'He kept meticulous records of every expense.', 'METICULOUS — "meticulously ticked" every box.', 'Synonyms: painstaking, scrupulous.'],
  ['ostensibly', 'adverb', 'apparently or purportedly, but perhaps not actually', 'He visited, ostensibly to return a book, but really to see her.', 'OSTENSIBLY ≈ "for show": it is what is ostentatiously displayed.', 'Signals suspicion that the stated reason is not the real one.'],
  ['juxtapose', 'verb', 'to place close together for contrasting effect', 'The exhibit juxtaposes ancient pottery with modern design.', 'JUXTA = next to; POSE = place. Pose them next to each other.', 'Noun: juxtaposition.'],
  ['mitigate', 'verb', 'to make less severe, serious, or painful', 'Planting trees can mitigate the effects of urban heat.', 'MITIGATE — put a MITT on the problem to soften the blow.', 'Not to be confused with militate (against) = to be a strong factor against.'],
  ['exacerbate', 'verb', 'to make a problem or bad situation worse', 'Skipping sleep only exacerbated his stress.', 'EXACERBATE — ex-ACERB-ate: acerbic (sour) made even more sour.', 'Opposite of mitigate / alleviate.'],
  ['conundrum', 'noun', 'a confusing and difficult problem or question', 'Funding the project without raising prices is a real conundrum.', 'A CONUNDRUM is a riddle that beats on your head like a DRUM.', ''],
  ['alleviate', 'verb', 'to make suffering or a problem less severe', 'The medicine alleviated her symptoms within an hour.', 'ALLEVIATE — "all elevate": lifts the weight off.', 'Latin levis, "light" (as in levity).'],
  ['ephemeral', 'adjective', 'lasting for a very short time', 'Fame on social media is often ephemeral.', 'EPHEMERAL — Greek "lasting a day," like a mayfly (Ephemeroptera).', 'Synonyms: fleeting, transient.'],
  ['pernicious', 'adjective', 'having a harmful effect, especially in a gradual or subtle way', 'The pernicious influence of misinformation spreads quietly.', 'PERNICIOUS sounds like "pure vicious," done slowly.', 'Latin pernicies, "ruin."'],
  ['gratuitous', 'adjective', 'uncalled for; lacking good reason; unwarranted', 'The film was criticized for its gratuitous violence.', 'GRATUITOUS — like a "gratuity" nobody asked for: extra and unnecessary.', 'Can also mean "free of charge" in older/formal use.'],
  ['obfuscate', 'verb', 'to make obscure, unclear, or unintelligible', 'The report used jargon to obfuscate the real costs.', 'OBFUSCATE — OB(scure) + FUSC (dark): make it dark and murky.', 'Noun: obfuscation.'],
  ['cogent', 'adjective', '(of an argument) clear, logical, and convincing', 'She made a cogent case for changing the policy.', 'COGENT — the COGs fit perfectly; the argument runs smoothly.', ''],
  ['salient', 'adjective', 'most noticeable or important', 'Let me summarize the salient points of the contract.', 'SALIENT — the points that SAIL out above the rest.', 'Latin salire, "to leap."'],
  ['tenuous', 'adjective', 'very weak or slight; insubstantial', 'The link between the two events is tenuous at best.', 'TENUOUS — hanging by a THIN thread (Latin tenuis, thin).', ''],
  ['innocuous', 'adjective', 'not harmful or offensive', 'It was an innocuous question, but it upset him.', 'IN-NOC-UOUS: not (in) noxious.', 'Opposite: noxious, harmful.'],
  ['insidious', 'adjective', 'proceeding in a gradual, subtle way, but with harmful effects', 'High blood pressure is insidious; many feel no symptoms.', 'INSIDIOUS works from the INSIDE without you noticing.', 'Stronger sense of treachery than pernicious.'],
  ['capricious', 'adjective', 'given to sudden and unaccountable changes of mood or behavior', 'The capricious weather ruined our hiking plans.', 'CAPRICIOUS — like a CAPRIcorn goat, leaping unpredictably.', 'Noun: caprice; a whim.'],
  ['complacent', 'adjective', 'smugly or uncritically satisfied, unaware of potential danger', 'After two wins, the team grew complacent and lost.', 'COMPLACENT — too COMfortable in their PLACE.', "Don't confuse with complaisant (eager to please)."],
  ['deference', 'noun', 'humble submission and respect', 'In deference to her wishes, we kept the ceremony small.', 'DEFERENCE — you DEFER (step back) to someone you respect.', 'Adj.: deferential.'],
  ['disparate', 'adjective', 'essentially different in kind; not able to be compared', 'The book weaves together disparate stories into one narrative.', 'DISPARATE — dis-PAR: not on a par, not equal.', 'Noun: disparity.'],
  ['empirical', 'adjective', 'based on observation or experience rather than theory', 'There is little empirical evidence for that claim.', 'EMPIRICAL — measured in the real EMPIRE of facts.', 'Contrast: theoretical.'],
  ['equivocal', 'adjective', 'open to more than one interpretation; ambiguous', 'His equivocal answer satisfied no one.', 'EQUI-VOCAL: "equal voices" saying different things.', 'Verb: equivocate (to avoid committing). Opposite: unequivocal.'],
  ['erudite', 'adjective', 'having or showing great knowledge or learning', 'The professor gave an erudite lecture on medieval music.', 'ERUDITE — "ERUDITE" ≈ "a rude ‘I read it’"; they have read everything.', 'Noun: erudition.'],
  ['facetious', 'adjective', 'treating serious issues with deliberately inappropriate humor', "Don't be facetious — this is a real problem.", 'FACETIOUS contains all five vowels in order (a-e-i-o-u), a cheeky trick.', ''],
  ['fastidious', 'adjective', 'very attentive to accuracy and detail; hard to please', 'He was fastidious about how the table was set.', 'FASTIDIOUS — FAST to notice the tiniest flaw.', ''],
  ['frivolous', 'adjective', 'not having any serious purpose or value', 'The court dismissed it as a frivolous lawsuit.', 'FRIVOLOUS — frilly and frothy, nothing underneath.', 'Noun: frivolity.'],
  ['hackneyed', 'adjective', '(of a phrase or idea) overused and unoriginal', '"Think outside the box" has become a hackneyed phrase.', 'A HACKNEY was a hired horse, worn out from overuse.', 'Synonyms: trite, clichéd.'],
  ['hubris', 'noun', 'excessive pride or self-confidence', 'The CEO\'s hubris led him to ignore every warning.', 'HUBRIS — the Greek heroes\' fatal flaw: "Who? Bris? Me? I can\'t fail."', 'Adj.: hubristic.'],
  ['idiosyncratic', 'adjective', 'peculiar to an individual; distinctive or eccentric', 'Her idiosyncratic spelling made the letters charming.', 'IDIO = one\'s own (idiom); SYNCRATIC = mixture: one\'s own mix.', 'Noun: idiosyncrasy (note the -sy).'],
  ['impetuous', 'adjective', 'acting quickly without thought or care', 'In an impetuous moment, he quit his job.', 'IMPETUOUS — full of IMPETUS, no brakes.', ''],
  ['incongruous', 'adjective', 'not in harmony or keeping with the surroundings', 'A tuxedo looked incongruous at the beach party.', 'IN-CONGRU-ous: not congruent, does not fit.', ''],
  ['indelible', 'adjective', 'not able to be forgotten or removed', 'The trip left an indelible impression on her.', 'IN-DELE-IBLE: cannot be deleted.', ''],
  ['inexorable', 'adjective', 'impossible to stop or prevent', 'The inexorable rise of sea levels threatens the coast.', 'INEXORABLE — cannot be "exorcised" or begged away (Latin exorare, to entreat).', ''],
  ['laconic', 'adjective', 'using very few words', 'His laconic reply was simply: "No."', 'From LACONIA (Sparta), famous for terse replies: "If."', 'Opposite: verbose, garrulous.'],
  ['magnanimous', 'adjective', 'generous or forgiving, especially toward a rival', 'She was magnanimous in victory, praising her opponent.', 'MAGNA (great) + ANIMUS (spirit): a great soul.', ''],
  ['malleable', 'adjective', 'easily influenced or shaped', 'Young minds are malleable.', 'MALLEABLE — can be shaped with a MALLET.', 'Originally of metals.'],
  ['mundane', 'adjective', 'lacking interest or excitement; dull; ordinary', 'He found joy even in mundane tasks like washing dishes.', 'MUNDANE — the MONDAY-ish routine of the world (Latin mundus, world).', ''],
  ['nefarious', 'adjective', 'wicked or criminal', 'The villain had a nefarious plan to steal the formula.', 'NEFARIOUS — "Ne-FARIOUS": far-reaching furious evil.', ''],
  ['nonchalant', 'adjective', 'appearing casually calm and relaxed', 'She gave a nonchalant shrug, as if nothing had happened.', 'NON-CHALANT — French "not heating up."', ''],
  ['obsequious', 'adjective', 'excessively eager to please or obey', 'The obsequious waiter refilled our glasses every minute.', 'OBSEQUIOUS — obsessed with being "sequential" behind you, following and fawning.', ''],
  ['onerous', 'adjective', 'involving heavy effort or burden', 'The new rules place an onerous burden on small businesses.', 'ONEROUS — an ONUS so heavy it hurts.', ''],
  ['palpable', 'adjective', 'so intense as to seem almost tangible', 'The tension in the room was palpable.', 'PALPABLE — you could PALPATE (touch) it.', ''],
  ['pedantic', 'adjective', 'excessively concerned with minor details or rules', "It's pedantic to correct every comma in a text message.", 'A PEDANT is pedaling backward over every tiny rule.', ''],
  ['perfunctory', 'adjective', 'carried out with minimal effort or reflection', 'He gave a perfunctory nod and kept typing.', 'PERFUNCTORY — "per function" only: the bare minimum.', ''],
  ['precarious', 'adjective', 'not securely held; dangerously likely to fall or collapse', 'The vase sat in a precarious position on the edge.', 'PRECARIOUS — like a CAR parked on a cliff edge.', ''],
  ['prolific', 'adjective', 'producing much fruit, work, or offspring', 'Agatha Christie was a remarkably prolific author.', 'PROLIFIC — a PRO at producing LIFE and work.', ''],
  ['propensity', 'noun', 'an inclination or natural tendency to behave a certain way', 'He has a propensity to exaggerate.', 'PROPENSITY — the way you are PRONE to lean.', ''],
  ['quintessential', 'adjective', 'representing the most perfect or typical example', 'Paris is the quintessential romantic city.', 'QUINTESSENCE — the "fifth essence," purest element above earth, air, fire, water.', ''],
  ['recalcitrant', 'adjective', 'having an uncooperative attitude toward authority', 'The recalcitrant student refused to hand in the essay.', 'RE-CALC: kicks back with the heel (Latin calx) like a mule.', ''],
  ['resilient', 'adjective', 'able to recover quickly from difficulties', 'Children are often remarkably resilient.', 'RESILIENT — springs back like a RE-SILIcone band.', 'Noun: resilience.'],
  ['reticent', 'adjective', 'not revealing one\'s thoughts or feelings readily', 'She was reticent about her past.', 'RETICENT — keeps it in a "net" of silence (Latin tacere, be silent).', 'Not a synonym of reluctant, though often misused that way.'],
  ['sanguine', 'adjective', 'optimistic, especially in a bad situation', 'He remains sanguine about the company\'s future.', 'SANGUINE — rosy-cheeked, full of blood (sang): hopeful.', ''],
  ['scrutinize', 'verb', 'to examine or inspect closely and thoroughly', 'Investors will scrutinize the quarterly report.', 'SCRUTINIZE — look like a SCREW-tight inspector.', 'Noun: scrutiny.'],
  ['serendipity', 'noun', 'the occurrence of events by chance in a happy way', 'By pure serendipity, they met again in Rome.', 'From the Persian tale "The Three Princes of Serendip," always finding lucky things.', 'Adj.: serendipitous.'],
  ['spurious', 'adjective', 'not genuine; false or fake; based on false reasoning', 'The study drew spurious conclusions from tiny samples.', 'SPURIOUS — sounds like "spur-of-the-moment" made up.', ''],
  ['superfluous', 'adjective', 'unnecessary, especially through being more than enough', 'Cut the superfluous adjectives from your essay.', 'SUPER-FLU-OUS: flowing over the top.', ''],
  ['surreptitious', 'adjective', 'kept secret, especially because it would not be approved of', 'She took a surreptitious glance at her phone during the meeting.', 'SURREPTITIOUS — "sir, reptile-ish": sneaky like a lizard.', ''],
  ['tacit', 'adjective', 'understood or implied without being stated', 'There was a tacit agreement not to mention the divorce.', 'TACIT — tacet (musical "be silent"): agreed in silence.', 'Related: taciturn (habitually silent).'],
  ['tantamount', 'adjective', 'equivalent in seriousness to; virtually the same as', 'His silence was tantamount to an admission of guilt.', 'TANTAMOUNT — "tant amounte": amounts to as much.', 'Always followed by "to".'],
  ['trepidation', 'noun', 'a feeling of fear or agitation about something that may happen', 'With some trepidation, she opened the envelope.', 'TREPIDATION — TREMBLING in TREPIDation.', ''],
  ['unprecedented', 'adjective', 'never done or known before', 'The pandemic caused unprecedented disruption.', 'UN-PRECEDENT: there is no earlier case to point to.', 'Overused in news; reserve for true firsts.'],
  ['vacillate', 'verb', 'to alternate or waver between opinions or actions', 'He vacillated between accepting and declining the offer.', 'VACILLATE — sways like a fan OSCILLATing.', ''],
  ['venerable', 'adjective', 'accorded great respect because of age, wisdom, or character', 'The venerable professor had taught for fifty years.', 'VENERABLE — worthy of VENERATION.', ''],
  ['vicarious', 'adjective', 'experienced in the imagination through another person', 'She took vicarious pleasure in her daughter\'s travels.', 'VICARIOUS — like a VICAR, who acts in another\'s place.', ''],
  ['vindicate', 'verb', 'to clear of blame or suspicion; to show to be right', 'The new evidence vindicated the scientist\'s theory.', 'VINDICATE — VINDICTIVE\'s kinder cousin: justice served.', ''],
  ['volatile', 'adjective', 'liable to change rapidly and unpredictably, especially for the worse', 'Oil prices have been volatile this year.', 'VOLATILE — VOLAre (to fly): could fly off at any moment.', ''],
  ['zealous', 'adjective', 'having or showing great energy or enthusiasm for a cause', 'A zealous volunteer, she worked every weekend.', 'ZEAL-ous — full of ZEAL. Related: zealot (extremist).', ''],
  ['acquiesce', 'verb', 'to accept something reluctantly but without protest', 'After hours of debate, he finally acquiesced.', 'ACQUIESCE — goes "quiet" and agrees (Latin quiescere, rest).', 'Usually "acquiesce to" or "acquiesce in".'],
  ['admonish', 'verb', 'to warn or reprimand someone firmly', 'The teacher admonished the students for being late.', 'AD-MONISH — gives a MONITORing warning.', ''],
  ['alacrity', 'noun', 'brisk and cheerful readiness', 'She accepted the invitation with alacrity.', 'ALACRITY — "a la crispy": quick and lively.', ''],
  ['anomaly', 'noun', 'something that deviates from what is standard or expected', 'The cold summer was an anomaly.', 'A-NOMALY: not normal (Greek a- + homalos, even).', 'Adj.: anomalous.'],
  ['arbitrary', 'adjective', 'based on random choice or personal whim rather than reason', 'The deadline seemed completely arbitrary.', 'ARBITRARY — as if an ARBITER flipped a coin.', ''],
  ['assuage', 'verb', 'to make an unpleasant feeling less intense', 'Nothing could assuage her guilt.', 'ASSUAGE — "a sweet age" (Latin suavis, sweet): sweetens the pain.', ''],
  ['auspicious', 'adjective', 'conducive to success; favorable', "It wasn't an auspicious start: it rained on opening day.", 'AUSPICES — Roman priests read birds (avis) for good omens.', ''],
  ['belie', 'verb', 'to give a false impression of; to contradict', 'Her calm smile belied her nerves.', 'BE-LIE: the appearance tells a lie about what is underneath.', 'Not "believe" — the opposite idea.'],
  ['bolster', 'verb', 'to support or strengthen', 'The win bolstered the team\'s confidence.', 'A BOLSTER is a long firm pillow that props you up.', ''],
  ['circumvent', 'verb', 'to find a way around an obstacle or rule', 'They circumvented the ban by using a VPN.', 'CIRCUM (around) + VENT (come): come around it.', ''],
  ['clandestine', 'adjective', 'kept secret or done secretively', 'They held clandestine meetings in a basement.', 'CLANDESTINE — the CLAN meets in DESTINed secrecy.', ''],
  ['corroborate', 'verb', 'to confirm or give support to a statement or theory', 'Two witnesses corroborated her account.', 'CO-ROBORATE — co-robust: another source makes it stronger.', ''],
  ['deleterious', 'adjective', 'causing harm or damage', 'Smoking has deleterious effects on health.', 'DELETErious — it DELETEs your health.', ''],
  ['discern', 'verb', 'to perceive or recognize something, often with difficulty', 'It was hard to discern his motives.', 'DIS-CERN — sift out (Latin cernere, to separate).', 'Adj.: discerning (having good judgment).'],
  ['egregious', 'adjective', 'outstandingly bad; shocking', 'It was an egregious error that cost millions.', 'EGREGIOUS — "out of the flock" (e- + grex): stands out — badly.', ''],
  ['elicit', 'verb', 'to draw out a response or reaction', 'The joke elicited only a polite smile.', 'ELICIT — "e-LICIT": legally drawing OUT. Not to be confused with illicit (illegal).', ''],
  ['endemic', 'adjective', 'regularly found among particular people or in a certain area', 'Corruption was endemic in the old regime.', 'EN-DEMIC: in the people (demos). Epidemic = upon the people (spreading).', ''],
  ['exonerate', 'verb', 'to absolve someone from blame', 'DNA evidence exonerated the prisoner after ten years.', 'EX-ONERATE — remove the ONUS (burden).', ''],
  ['fortuitous', 'adjective', 'happening by chance, especially lucky chance', 'A fortuitous meeting led to a job offer.', 'FORTUITOUS — FORTUNE smiled.', 'Strictly "by chance"; the "lucky" sense is now common.'],
  ['galvanize', 'verb', 'to shock or excite someone into taking action', 'The speech galvanized the crowd.', 'After Galvani, whose electric shocks made frog legs twitch.', ''],
  ['implicit', 'adjective', 'implied though not plainly expressed; absolute', 'There was implicit criticism in her silence.', 'IM-PLICIT — folded in (Latin plicare). EX-plicit — unfolded, stated.', '"Implicit trust" = absolute, unquestioning trust.'],
  ['inadvertent', 'adjective', 'not resulting from deliberate planning; unintentional', 'I made an inadvertent error in the calculation.', 'IN-ADVERT — you did not turn (vert) your attention to it.', ''],
  ['inherent', 'adjective', 'existing as a permanent, essential attribute', 'Every investment carries inherent risk.', 'INHERENT — stuck IN HERE, built in.', ''],
  ['lucid', 'adjective', 'expressed clearly; easy to understand', 'She gave a lucid explanation of a complex topic.', 'LUCID — full of LUX (light): you can see through it.', ''],
  ['myriad', 'noun / adjective', 'a countless or extremely great number', 'The city offers a myriad of opportunities. / It offers myriad opportunities.', 'MYRIAD — Greek for ten thousand.', 'Both "myriad options" and "a myriad of options" are correct.'],
  ['paramount', 'adjective', 'more important than anything else; supreme', 'Safety is paramount.', 'PARAMOUNT — the MOUNTain peak above all others.', ''],
  ['poignant', 'adjective', 'evoking a keen sense of sadness or regret', 'It was a poignant reminder of what they had lost.', 'POIGNANT — French "pricking": it stings the heart.', 'The g is silent.'],
  ['prudent', 'adjective', 'acting with care and thought for the future', 'It would be prudent to save some money.', 'PRUDENT — a PRUDE about risk.', 'Noun: prudence.'],
  ['reconcile', 'verb', 'to restore friendly relations; to make compatible', 'It is hard to reconcile his words with his actions.', 'RE-CONCILE — bring back to the council table.', ''],
  ['repudiate', 'verb', 'to refuse to accept or be associated with', 'The party repudiated the senator\'s remarks.', 'REPUDIATE — RE-PUSH away.', ''],
  ['sardonic', 'adjective', 'grimly mocking or cynical', 'He gave a sardonic laugh at the news.', 'From a Sardinian plant said to make people grimace in a deadly smile.', ''],
  ['succinct', 'adjective', 'briefly and clearly expressed', 'Keep your summary succinct: one paragraph.', 'SUCCINCT — sounds like "suck it in": tight and compact.', ''],
  ['tenacious', 'adjective', 'tending to keep a firm hold; persistent', 'She was tenacious in pursuing the truth.', 'TENACIOUS — holds on with TEN fingers.', ''],
  ['untenable', 'adjective', 'not able to be maintained or defended', 'His position became untenable after the scandal.', 'UN-TEN-ABLE — you cannot hold (tenere) it.', ''],
  ['wane', 'verb', 'to decrease in vigor, power, or extent', 'Interest in the trend began to wane.', 'The moon WAXES and WANES.', ''],
];

// simple English inflections so clicked forms (e.g. "mitigated") find their entry
function forms(w, pos) {
  if (pos.startsWith('verb')) {
    const stem = w.endsWith('e') ? w.slice(0, -1) : w;
    return [w + 's', stem + 'ed', stem + 'ing', w.endsWith('e') ? w + 'd' : ''].filter(Boolean);
  }
  if (pos.startsWith('adjective')) {
    const out = [w.endsWith('le') ? w.slice(0, -1) + 'y' : w.endsWith('ic') ? w + 'ally' : w + 'ly'];
    if (w.endsWith('ous')) out.push(w + 'ness');
    return out;
  }
  if (pos.startsWith('noun')) return [w.endsWith('y') ? w.slice(0, -1) + 'ies' : w + 's'];
  return [];
}

const dictionary = {};
for (const [w, pos, def, ex, mnemonic, notes] of WORDS) {
  dictionary[w] = { pos, def, examples: [[ex, '']], mnemonic, notes, forms: forms(w, pos) };
}

const ex = (q, options, answer, explain) => ({ type: 'mc', q, options, answer, explain });
const fill = (q, answer, explain) => ({ type: 'fill', q, answer: [].concat(answer), explain });

export default {
  code: 'en', name: 'English', native: 'Advanced', flag: '🇺🇸',
  elisions: [],
  onlyLevel: 'advanced',
  features: ['grammar', 'flashcards', 'words', 'reading'],
  dictionary,
  wordBank: WORDS.map((w) => w[0]),
  library: LIBRARY,

  levels: {
    advanced: {
      grammar: [
        {
          id: 'en-a-1', title: 'The subjunctive & the unreal past',
          summary: 'If I were…, I insist that he be…, It\'s time we left.',
          body: `<p>English keeps traces of a subjunctive mood. Using it correctly is a hallmark of careful, educated prose.</p>
<h3>1. The mandative subjunctive (base form)</h3><p>After verbs, adjectives and nouns of <b>demand, recommendation, or necessity</b>, the verb appears in its bare form for every subject, with no <i>-s</i>, no tense shift, and <b>be</b> for "to be":</p>
<ul><li>{{The committee recommended that she be promoted.}}</li><li>{{It is essential that every applicant submit a portfolio.}}</li><li>{{I insist that he not leave early.}} (negative: <b>not</b> + base form, no "does")</li></ul>
<p>British English often uses <i>should</i> instead ({{that every applicant should submit}}). Both are correct; the bare form is standard in American formal writing.</p>
<h3>2. The unreal past (counterfactual "were")</h3><ul><li>{{If I were you, I would apologize.}} — <i>were</i> for all persons in formal style.</li><li>{{I wish she were here.}} / {{He talks as if he were an expert.}}</li><li>{{It's (high) time we left.}} — past form, present meaning.</li><li>{{I'd rather you didn't smoke here.}} — <i>would rather</i> + another subject → past form.</li></ul>
<h3>3. Fixed expressions</h3><p>{{Be that as it may}}, {{come what may}}, {{so be it}}, {{God save the King}}, {{suffice it to say}}, {{if need be}}.</p>`,
          examples: [['The doctor advised that he rest for a week.', 'Mandative subjunctive: "rest," not "rests."'], ['If it were up to me, we would leave tomorrow.', 'Counterfactual "were."'], ["It's high time the city repaired that bridge.", 'Past form "repaired" with present meaning.'], ["I'd rather you told me the truth.", '"Would rather" + another subject.'], ['Suffice it to say, the meeting did not go well.', 'Fixed subjunctive expression.']],
          vocab: [['mandative', 'expressing a command or requirement'], ['counterfactual', 'contrary to fact'], ['be that as it may', 'nevertheless'], ['suffice it to say', "it's enough to say"]],
          exercises: [
            ex('The board demanded that the CEO ___ immediately.', ['resigns', 'resign', 'resigned', 'will resign'], 1, 'Mandative subjunctive: bare form for every subject.'),
            ex('It is vital that she ___ informed before Friday.', ['is', 'be', 'was', 'will be'], 1, '"be" after "It is vital that…".'),
            ex('If I ___ in your position, I would accept.', ['am', 'was', 'were', 'be'], 2, 'Formal counterfactual: were.'),
            fill("It's time we ___ (go) home.", 'went', '"It\'s time" + past form.'),
            ex('Which is correct in formal American English?', ['I suggest that he doesn\'t go.', 'I suggest that he not go.', 'I suggest that he not goes.', 'I suggest him not to go.'], 1, 'Negative subjunctive: not + base form.'),
            ex("I'd rather you ___ my car without asking.", ["don't borrow", "didn't borrow", "won't borrow", 'not borrow'], 1, '"Would rather" + subject → past form.'),
          ],
        },
        {
          id: 'en-a-2', title: 'Inversion for emphasis',
          summary: 'Never have I…, Only then did…, Had I known…',
          body: `<p>Moving a negative or restrictive expression to the front of a clause forces <b>subject–auxiliary inversion</b>, as in a question. The effect is emphatic and formal.</p>
<h3>Negative & restrictive adverbials</h3><ul><li>{{Never have I seen such chaos.}}</li><li>{{Rarely does she complain.}} / {{Seldom do we meet.}}</li><li>{{Not only did he lie, but he also blamed me.}}</li><li>{{No sooner had we arrived than it began to rain.}} (<b>than</b>, not "when")</li><li>{{Hardly had I sat down when the phone rang.}} (<b>when</b>, not "than")</li><li>{{Only after the vote did they reveal the costs.}} — inversion is in the <i>main</i> clause.</li><li>{{Under no circumstances should you open this door.}}</li><li>{{Little did they know…}}</li></ul>
<h3>Conditional inversion (drop "if")</h3><ul><li>{{Had I known, I would have called.}} = If I had known…</li><li>{{Were she to resign, chaos would follow.}} = If she were to resign…</li><li>{{Should you need help, call me.}} = If you should need help…</li></ul>
<p>Negative conditional: {{Had I not seen it…}} (never *Hadn't I seen it*).</p>
<h3>So / such</h3><p>{{So great was the demand that tickets sold out in minutes.}} / {{Such was his fury that no one dared speak.}}</p>`,
          examples: [['Not until the lights went out did we realize the danger.', 'Not until + inversion in the main clause.'], ['Had the warnings been heeded, the disaster might have been averted.', 'Conditional inversion.'], ['Little did she suspect that the letter was forged.', 'Little + inversion.'], ['So convincing was his performance that the audience wept.', 'So + adjective + inversion.']],
          vocab: [['heed', 'to pay attention to'], ['avert', 'to prevent'], ['no sooner … than', 'immediately after'], ['under no circumstances', 'never, for any reason']],
          exercises: [
            ex('Never ___ such a beautiful sunset.', ['I have seen', 'have I seen', 'I saw', 'saw I'], 1, 'Negative adverb fronted → inversion.'),
            ex('No sooner had we left ___ it started to snow.', ['when', 'than', 'then', 'that'], 1, 'No sooner … than.'),
            ex('___ I known about the traffic, I would have left earlier.', ['If', 'Had', 'Have', 'Would'], 1, 'Conditional inversion replaces "if I had known".'),
            ex('Only after the meeting ___ the truth.', ['we learned', 'did we learn', 'we did learn', 'learned we'], 1, 'Inversion in the main clause.'),
            fill('___ you require further information, please contact us. (= If you should)', 'Should', 'Conditional inversion with should.'),
            ex('Which is correct?', ["Hadn't I seen it, I wouldn't believe it.", "Had I not seen it, I wouldn't believe it.", "Had not I seen it, I wouldn't believe it.", "If had I not seen it…"], 1, 'Negative conditional inversion: Had + subject + not.'),
          ],
        },
        {
          id: 'en-a-3', title: 'Cleft sentences & fronting',
          summary: 'Shift focus: It was X that…, What I need is…',
          body: `<p>Clefts split one clause into two to spotlight a single element.</p>
<h3>It-clefts</h3><p>{{It was Maria who solved the problem}} (not someone else). {{It was in 1989 that the wall fell.}} {{It isn't the money that bothers me — it's the principle.}}</p>
<h3>Wh-clefts (pseudo-clefts)</h3><p>{{What I need is a holiday.}} {{What she did was (to) call the police.}} {{What surprised me most was his calm.}}</p>
<h3>Reversed & other clefts</h3><p>{{A holiday is what I need.}} {{All I want is some peace.}} {{The reason (why) I left was the noise.}} {{The thing is, …}}</p>
<h3>Fronting</h3><p>Moving an object or complement to the front for contrast or cohesion: {{Strange as it may seem, I enjoyed it.}} {{That I can understand; this I cannot.}} {{Try as he might, he could not open it.}}</p>
<p><b>Agreement:</b> in it-clefts, the verb in the relative clause agrees with the focused noun: {{It is I who am responsible}} (very formal) / {{It's me who's responsible}} (everyday).</p>`,
          examples: [["It wasn't until midnight that he finally called.", 'It-cleft with "not until".'], ['What annoys me is the constant noise.', 'Wh-cleft.'], ['Much as I admire her work, I disagree with her conclusions.', 'Concessive fronting: "much as".'], ['All we can do now is wait.', '"All" cleft: bare infinitive after "is".']],
          vocab: [['cleft', 'split into two'], ['much as', 'although (formal)'], ['try as he might', 'however hard he tried']],
          exercises: [
            ex('Rewrite to emphasize "the noise": The noise kept me awake.', ['It was the noise what kept me awake.', 'It was the noise that kept me awake.', 'It was the noise kept me awake that.', 'What the noise kept me awake.'], 1, 'It + be + focus + that/who.'),
            ex('What I really need ___ a long holiday.', ['are', 'is', 'be', 'were'], 1, 'Wh-clefts take a singular verb.'),
            fill('Strange ___ it may seem, I prefer winter.', 'as', 'Concessive fronting: adjective + as + clause.'),
            ex('Try ___ he might, he couldn\'t lift it.', ['though', 'as', 'how', 'if'], 1, 'Fixed fronted pattern: try as he might.'),
            ex('All she did ___ complain.', ['was', 'was to', 'Both are acceptable', 'is'], 2, 'After "all/what… did", "was complain" and "was to complain" are both standard.'),
          ],
        },
        {
          id: 'en-a-4', title: 'Modal perfects: deduction & regret',
          summary: 'must have, can\'t have, needn\'t have vs didn\'t need to.',
          body: `<p>Modal + <b>have</b> + past participle talks about the past with degrees of certainty or judgment.</p>
<h3>Deduction</h3><ul><li><b>must have</b> — almost certain: {{She must have missed the train.}}</li><li><b>can't / couldn't have</b> — almost certainly not: {{He can't have finished already.}} (not *mustn't have*)</li><li><b>may / might / could have</b> — possible: {{They might have taken a taxi.}}</li></ul>
<h3>Judgment & regret</h3><ul><li><b>should / ought to have</b> — the right thing didn't happen: {{You should have told me.}}</li><li><b>shouldn't have</b> — it happened, but was wrong.</li><li><b>could have</b> — unrealized ability/option: {{You could have been killed!}}</li><li><b>would have</b> — hypothetical result: {{I would have helped if you'd asked.}}</li></ul>
<h3>needn't have vs didn't need to</h3><ul><li>{{I needn't have brought an umbrella}} — I brought one, but it was unnecessary.</li><li>{{I didn't need to bring an umbrella}} — it wasn't necessary (we don't know whether I brought one; usually I didn't).</li></ul>
<p>Spelling trap: write <i>should <b>have</b></i>, never *should of*.</p>`,
          examples: [["The streets are wet; it must have rained overnight.", 'Logical deduction.'], ["She can't have seen us — she didn't wave.", 'Negative deduction.'], ['We needn\'t have hurried; the film started late.', 'Done, but unnecessary.'], ['You might have warned me!', 'Reproach: "might have" = should have.']],
          vocab: [['deduction', 'reasoning to a conclusion'], ['reproach', 'expression of disapproval'], ['unrealized', 'not achieved']],
          exercises: [
            ex("He's not answering. He ___ his phone at home.", ['must leave', 'must have left', 'should have left', "can't have left"], 1, 'Confident deduction about the past.'),
            ex("She ___ the report — it's 50 pages and she only had an hour.", ["mustn't have written", "can't have written", "needn't have written", "shouldn't write"], 1, 'Impossible → can\'t have.'),
            ex('I took a taxi, but I ___ — the station was very close.', ["didn't need to", "needn't have", "mustn't have", "couldn't have"], 1, 'Done but unnecessary → needn\'t have.'),
            fill('You should ___ called me! (correct form)', 'have', 'Never "should of".'),
            ex('"You could have been hurt!" expresses…', ['A deduction', 'A past possibility that did not happen', 'An obligation', 'Permission'], 1, 'Unrealized possibility.'),
          ],
        },
        {
          id: 'en-a-5', title: 'Participle clauses & dangling modifiers',
          summary: 'Concise sentences without logical traps.',
          body: `<p>Participle clauses compress information: {{Walking home, I saw a fox.}} {{Written in 1813, the novel is still popular.}} {{Having finished the report, she left.}}</p>
<h3>The rule</h3><p>The implied subject of the participle must be the <b>subject of the main clause</b>. Otherwise you get a <b>dangling modifier</b>:</p>
<ul><li>✗ {{Walking into the room, the lights went out.}} (the lights were walking?)</li><li>✓ {{Walking into the room, I noticed the lights go out.}}</li><li>✓ {{As I walked into the room, the lights went out.}}</li></ul>
<h3>Forms</h3><ul><li>Present (-ing): simultaneous or causal — {{Not knowing what to say, he left.}}</li><li>Perfect (having + pp): earlier action — {{Having lived abroad, she understood.}}</li><li>Past (pp): passive — {{Built in 1900, the house needs repairs.}}</li><li>Absolute construction (own subject): {{The work done, we went home.}} {{Weather permitting, we'll sail.}}</li></ul>
<p>Accepted "dangling" exceptions: {{Generally speaking}}, {{Considering…}}, {{Given…}}, {{Judging by…}}.</p>`,
          examples: [['Having read the reviews, we decided to skip the film.', 'Perfect participle: earlier action.'], ['Founded in 1636, Harvard is the oldest university in the US.', 'Past participle clause.'], ['All things considered, it was a success.', 'Absolute construction.'], ['Judging by his expression, the news was bad.', 'Accepted fixed expression.']],
          vocab: [['dangling modifier', 'a phrase with no logical subject in the sentence'], ['absolute construction', 'a participle phrase with its own subject']],
          exercises: [
            ex('Which sentence is correct?', ['Running for the bus, my bag fell open.', 'Running for the bus, I dropped my bag.', 'Running for the bus, the bag was dropped.', 'Running for the bus, it rained.'], 1, 'The runner must be the subject.'),
            ex('___ the instructions, he assembled the desk in ten minutes.', ['Having read', 'Read', 'Being read', 'Had read'], 0, 'Earlier action → perfect participle.'),
            ex('"Weather permitting, the match will go ahead" is an example of…', ['A dangling modifier', 'An absolute construction', 'A cleft', 'Inversion'], 1, 'The participle has its own subject (weather).'),
            ex('Fix: "After eating dinner, the dishes were washed."', ['After eating dinner, the dishes were washed by us.', 'After eating dinner, we washed the dishes.', 'Eating dinner, the dishes were washed.', 'The dishes, after eating dinner, were washed.'], 1, 'Make "we" the subject.'),
          ],
        },
        {
          id: 'en-a-6', title: 'Relative clauses: that, which, whom, whereby',
          summary: 'Restrictive vs. non-restrictive, and formal relatives.',
          body: `<h3>Restrictive vs. non-restrictive</h3><ul><li><b>Restrictive</b> (defines which one; no commas): {{The car that I bought is red.}} — <i>that</i> or <i>which</i> (American usage strongly prefers <i>that</i>).</li><li><b>Non-restrictive</b> (extra information; commas): {{My car, which I bought in May, is red.}} — <i>which</i>, never <i>that</i>.</li></ul>
<p>The commas change meaning: {{The students who passed celebrated}} (only some) vs {{The students, who passed, celebrated}} (all of them).</p>
<h3>who vs whom</h3><p>Use <b>whom</b> for objects, especially after prepositions: {{the colleague with whom I work}}, {{To whom it may concern}}. Test: if you'd answer with <i>him</i>, use <i>whom</i>.</p>
<h3>Formal relatives</h3><ul><li><b>whose</b> — also for things: {{a theory whose implications are vast}}</li><li><b>whereby</b> — by which: {{a system whereby users vote}}</li><li><b>wherein</b> — in which; <b>whereupon</b> — after which</li><li>Quantifiers: {{many of whom}}, {{neither of which}}, {{the best of which}}</li><li>Sentential <b>which</b> (refers to a whole clause): {{He arrived late, which annoyed everyone.}}</li></ul>`,
          examples: [['The novel, which won the Booker Prize, was adapted for film.', 'Non-restrictive: extra info.'], ['She has three brothers, two of whom are doctors.', 'Quantifier + whom.'], ['They introduced a scheme whereby employees can buy shares.', 'Formal "whereby".'], ['The candidate whom the committee selected declined.', '"Whom" as object.']],
          vocab: [['whereby', 'by which'], ['wherein', 'in which'], ['whereupon', 'immediately after which'], ['restrictive', 'essential to identify the noun']],
          exercises: [
            ex('My brother, ___ lives in Denver, is visiting.', ['that', 'which', 'who', 'whom'], 2, 'Non-restrictive, person, subject → who (never that with commas).'),
            ex('The person to ___ I spoke was very helpful.', ['who', 'whom', 'which', 'that'], 1, 'After a preposition → whom.'),
            ex('She failed the exam, ___ surprised everyone.', ['that', 'what', 'which', 'who'], 2, 'Sentential which refers to the whole clause.'),
            fill('I have two cars, neither of ___ works.', 'which', 'Quantifier + which for things.'),
            ex('"The employees who were late were fired" implies…', ['All employees were late', 'Only the late employees were fired', 'No one was fired', 'The employees were late because they were fired'], 1, 'Restrictive clause defines a subset.'),
          ],
        },
        {
          id: 'en-a-7', title: 'Mixed conditionals & alternatives to "if"',
          summary: 'But for, provided that, supposing, were it not for.',
          body: `<h3>Mixed conditionals</h3><ul><li>Past condition → present result: {{If I had taken that job, I would be living in London now.}}</li><li>Present condition → past result: {{If she weren't so stubborn, she would have apologized yesterday.}}</li></ul>
<h3>Alternatives to "if"</h3><ul><li><b>provided / providing (that)</b>, <b>as long as</b>, <b>on condition that</b> — strong condition: {{You can borrow it provided you return it.}}</li><li><b>unless</b> = if … not: {{Unless you hurry, you'll miss it.}}</li><li><b>supposing / suppose</b>, <b>what if</b>: {{Supposing it rains, what then?}}</li><li><b>but for</b> / <b>were it not for</b> / <b>had it not been for</b> = if it weren't (hadn't been) for: {{But for your help, I would have failed.}}</li><li><b>otherwise</b> / <b>or else</b>: {{Leave now; otherwise you'll be late.}}</li><li><b>in case</b> ≠ if: {{Take an umbrella in case it rains}} (as a precaution).</li><li><b>even if</b> (hypothetical) vs <b>even though</b> (fact).</li></ul>
<p>Don't use <i>will</i> in the condition clause unless it means willingness: {{If you'll wait here, I'll get the manager}} (= if you're willing).</p>`,
          examples: [['If I had studied law, I would be a judge by now.', 'Mixed: past → present.'], ['Were it not for the rain, we would be at the beach.', 'Formal alternative to "if it weren\'t for".'], ['Had it not been for her quick thinking, the fire would have spread.', 'Past counterfactual inversion.'], ['I\'ll lend you the money on condition that you pay me back by May.', 'Strong condition.']],
          vocab: [['but for', 'without; if not for'], ['on condition that', 'only if'], ['in case', 'as a precaution against']],
          exercises: [
            ex('If I had saved more money, I ___ a house now.', ['would buy', 'would have', 'would have had', 'will have'], 1, 'Past condition → present result: would + base verb.'),
            ex('___ your advice, I would have made a terrible mistake.', ['Unless', 'But for', 'Provided', 'In case'], 1, 'But for = if it hadn\'t been for.'),
            ex('Take a jacket ___ it gets cold.', ['if', 'in case', 'unless', 'provided'], 1, 'Precaution → in case.'),
            fill('___ it not for the bridge, the town would be cut off.', 'Were', 'Were it not for…'),
            ex('"I\'ll go even ___ it\'s raining" (and it IS raining)', ['if', 'though', 'unless', 'so'], 1, 'Fact → even though.'),
          ],
        },
        {
          id: 'en-a-8', title: 'Agreement traps',
          summary: 'Collective nouns, "the number of", "one of those who".',
          body: `<ul>
<li><b>A number of</b> + plural verb; <b>the number of</b> + singular: {{A number of issues were raised.}} / {{The number of complaints has doubled.}}</li>
<li><b>Either/neither … or/nor</b>: verb agrees with the nearer subject: {{Neither the manager nor the employees were told.}}</li>
<li><b>Neither/each/every one of</b> + plural noun → singular verb (formal): {{Neither of the options is ideal.}}</li>
<li><b>One of those who…</b>: the relative clause is plural: {{She is one of those people who always arrive early}}. But {{She is the only one of them who arrives early}}.</li>
<li><b>Collective nouns</b> (team, government, staff): singular in American English ({{The team is winning}}); often plural in British ({{The team are winning}}).</li>
<li><b>Intervening phrases</b> don't change the subject: {{The quality of the results is impressive.}} {{The CEO, along with her advisers, is attending.}}</li>
<li><b>Plural-looking singulars</b>: {{news}}, {{mathematics}}, {{economics}} (as a field) take singular verbs; <b>data</b> is singular or plural (singular is standard in everyday use; plural in scientific writing). <b>Criteria</b> and <b>phenomena</b> are plural.</li>
<li><b>Fewer</b> for countables, <b>less</b> for uncountables: {{fewer mistakes}}, {{less time}}.</li>
</ul>`,
          examples: [['The number of applicants is rising every year.', '"The number" → singular.'], ['Either the twins or their mother is responsible.', 'Agrees with "mother" (nearer).'], ['These criteria are unclear.', '"Criteria" is plural.'], ['He is one of the few writers who manage to be both funny and wise.', '"Who" refers to "writers".']],
          vocab: [['intervening', 'coming between'], ['collective noun', 'a noun for a group'], ['criterion / criteria', 'standard (sing. / pl.)']],
          exercises: [
            ex('A number of students ___ absent today.', ['is', 'are', 'was', 'has been'], 1, '"A number of" = several → plural.'),
            ex('The number of errors ___ decreasing.', ['are', 'is', 'were', 'have been'], 1, '"The number" → singular.'),
            ex('Neither the teacher nor the students ___ aware of the change.', ['was', 'were', 'is', 'has been'], 1, 'Nearer subject (students) is plural.'),
            ex('The president, together with his aides, ___ arrived.', ['have', 'has', 'are', 'were'], 1, '"Together with" phrase doesn\'t affect the subject.'),
            fill('There were ___ (less/fewer) people than expected.', 'fewer', 'Countable → fewer.'),
            ex('Which noun is plural?', ['news', 'phenomena', 'mathematics', 'information'], 1, 'phenomenon (sing.) / phenomena (pl.).'),
          ],
        },
        {
          id: 'en-a-9', title: 'Parallelism & ellipsis',
          summary: 'Balanced structures and elegant omission.',
          body: `<h3>Parallelism</h3><p>Items joined by <i>and, or, but</i>, or by correlatives (<i>both…and, either…or, not only…but also</i>) should share the same grammatical form.</p>
<ul><li>✗ {{She likes hiking, to swim, and riding.}} → ✓ {{She likes hiking, swimming, and riding.}}</li><li>✗ {{He not only lost the keys but also the wallet.}} → ✓ {{He lost not only the keys but also the wallet.}} (place each correlative before the parallel elements)</li><li>Comparisons: ✗ {{Her salary is higher than her boss.}} → ✓ {{Her salary is higher than her boss's / than that of her boss.}}</li></ul>
<h3>Ellipsis</h3><p>Omitting words that can be recovered from context makes prose crisper:</p><ul><li>{{I can't come, but Sarah can.}} (come)</li><li>{{Some chose tea; others, coffee.}} (the comma marks the gap)</li><li>{{She said she would call, and she did.}}</li><li>{{"Are you coming?" "I hope so / I'm afraid not."}}</li></ul>
<p>Ellipsis fails if the omitted form differs: ✗ {{The suspect has never and will never confess}} → ✓ {{The suspect has never confessed and will never confess}}.</p>`,
          examples: [['To err is human; to forgive, divine.', 'Parallel infinitives with ellipsis (Pope).'], ['The plan was ambitious, expensive, and, ultimately, doomed.', 'Parallel adjectives.'], ['She is not only talented but also hardworking.', 'Correlatives before parallel adjectives.'], ['Jack ordered the steak; Jill, the salmon.', 'Gapping with a comma.']],
          vocab: [['parallelism', 'using the same structure for related items'], ['ellipsis', 'omission of recoverable words'], ['correlative conjunctions', 'paired conjunctions like either…or']],
          exercises: [
            ex('Which is parallel?', ['The job requires patience, being creative, and to be precise.', 'The job requires patience, creativity, and precision.', 'The job requires to be patient, creativity, and precise.', 'The job requires patience, creative, and precision.'], 1, 'Three nouns.'),
            ex('Best placement of correlatives:', ['She not only speaks French but also Italian.', 'She speaks not only French but also Italian.', 'Not only she speaks French but Italian.', 'She speaks French not only but also Italian.'], 1, 'Each correlative precedes the parallel noun.'),
            ex('Fix: "My essay is longer than Tom."', ['My essay is longer than Tom is.', "My essay is longer than Tom's.", 'My essay is more long than Tom.', 'My essay is longer then Tom.'], 1, "Compare essay to essay: Tom's."),
            ex('Which ellipsis is faulty?', ["I'd go if I could.", 'He has never and will never lie.', 'Some ran; others, walked.', "She can't swim, but he can."], 1, '"has never [lied]" needs a different form than "will never lie".'),
          ],
        },
        {
          id: 'en-a-10', title: 'Precision in usage',
          summary: 'Affect/effect, comprise, lie/lay, imply/infer, and more.',
          body: `<p>Careful writers keep these distinctions. Editors and examiners notice.</p>
<ul>
<li><b>affect</b> (verb, to influence) / <b>effect</b> (noun, result; verb = to bring about): {{The policy affected sales.}} {{The new manager effected real change.}}</li>
<li><b>comprise</b> = consist of: {{The house comprises five rooms}} (not *is comprised of*, though common). <b>compose</b>: {{Five rooms compose the house}} / {{The house is composed of five rooms.}}</li>
<li><b>lie</b> (recline; lay, lain) / <b>lay</b> (put something down; laid, laid): {{I lay down yesterday.}} {{She laid the book on the table.}}</li>
<li><b>imply</b> (the speaker suggests) / <b>infer</b> (the listener deduces).</li>
<li><b>disinterested</b> (impartial) / <b>uninterested</b> (not interested).</li>
<li><b>principal</b> (main; head of school) / <b>principle</b> (rule, belief).</li>
<li><b>enormity</b> (great wickedness, traditionally) vs <b>enormousness</b> (size).</li>
<li><b>literally</b> — avoid as an intensifier in formal writing.</li>
<li><b>i.e.</b> (that is) / <b>e.g.</b> (for example).</li>
<li><b>who's</b> (who is) / <b>whose</b>; <b>its</b> (possessive) / <b>it's</b> (it is).</li>
<li><b>begs the question</b> traditionally = assumes the conclusion in the premise (circular reasoning), not "raises the question."</li>
</ul>`,
          examples: [['The weather affected our plans, but the effect was minor.', 'affect (v.) / effect (n.)'], ["I inferred from her tone that she was upset; she hadn't implied it on purpose.", 'infer vs imply'], ['A disinterested judge has no stake in the outcome.', 'disinterested = impartial'], ['The committee comprises seven members.', 'comprise = consist of']],
          vocab: [['disinterested', 'impartial'], ['enormity', 'great wickedness'], ['infer', 'to deduce'], ['comprise', 'to consist of']],
          exercises: [
            ex('The new law will ___ thousands of families.', ['effect', 'affect'], 1, 'Verb meaning "influence" → affect.'),
            ex('Yesterday I ___ on the sofa for an hour.', ['laid', 'lay', 'lied', 'layed'], 1, 'Past of lie (recline) is lay.'),
            ex('From his silence, I ___ that he disagreed.', ['implied', 'inferred'], 1, 'The listener infers.'),
            ex('A referee should be ___.', ['uninterested', 'disinterested'], 1, 'Impartial → disinterested.'),
            fill('The team ___ (comprise) eleven players.', 'comprises', 'comprise = consist of; no "of".'),
            ex('Choose the correct sentence:', ['The company and it\'s employees…', 'The company and its employees…', "The company and its' employees…", 'The company and their employees… (formal)'], 1, '"its" is the possessive.'),
          ],
        },
      ],

      reading: [
        {
          id: 'en-r-1342', title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813,
          sentences: ['It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.', 'However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.'],
          questions: [
            ex('The tone of the first sentence is best described as…', ['Earnest and philosophical', 'Ironic', 'Angry', 'Sentimental'], 1, 'The "universal truth" is really the wishful thinking of mothers with daughters — classic Austen irony.'),
            ex('Whose desire does the passage really describe?', ["The rich single man's", "The neighbourhood families'", "The narrator's", "The wife's"], 1, 'The families regard him as "rightful property".'),
            ex('"In want of" most nearly means…', ['Desiring', 'Lacking / in need of', 'Wasting', 'Avoiding'], 1, '"Want" in its older sense: lack.'),
            ex('What is the effect of "rightful property"?', ['It shows the law of the time', 'It comically reverses who is "owned" in the marriage market', 'It praises the man', 'It describes real estate'], 1, 'Women were legally subordinate, yet here the man is the "property".'),
          ],
          vocab: [['universally', 'by everyone, everywhere'], ['in want of', 'lacking, needing'], ['fixed', 'firmly established']],
        },
        {
          id: 'en-r-98', title: 'A Tale of Two Cities', author: 'Charles Dickens', year: 1859,
          sentences: ['It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'],
          questions: [
            ex('The dominant rhetorical device is…', ['Understatement', 'Antithesis (paired opposites) with anaphora (repetition)', 'Onomatopoeia', 'Flashback'], 1, '"best/worst", "wisdom/foolishness" in repeated "it was the…" frames.'),
            ex('"Incredulity" means…', ['Gullibility', 'Disbelief', 'Credit', 'Wonder'], 1, 'In- (not) + credulity (readiness to believe).'),
            ex('What is Dickens suggesting about "the present period" (his own day)?', ['It is calmer', 'It is just as prone to extreme, all-or-nothing judgments', 'It is worse', 'It has no authorities'], 1, 'Both eras insisted on describing themselves in superlatives.'),
            ex('"Received … in the superlative degree of comparison only" means people insisted the age be described…', ['Moderately', 'Only in extremes (best, worst)', 'Without comparison', 'In the past tense'], 1, 'Superlative = -est forms.'),
          ],
          vocab: [['epoch', 'a period of time'], ['incredulity', 'disbelief'], ['superlative', 'of the highest degree']],
        },
        {
          id: 'en-r-2701', title: 'Moby-Dick', author: 'Herman Melville', year: 1851,
          sentences: ['Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.'],
          questions: [
            ex('"Driving off the spleen" and "my hypos" refer to…', ['Physical illness', 'Melancholy / low spirits', 'Anger at sailors', 'Money troubles'], 1, 'The spleen was thought to cause melancholy; "hypos" = hypochondria, depression.'),
            ex('What is "my substitute for pistol and ball"?', ['Reading', 'Going to sea', 'Attending funerals', 'Knocking off hats'], 1, 'Going to sea replaces darker thoughts — said with wry humor.'),
            ex('The tone mixes…', ['Pure despair', 'Dark subject matter with comic exaggeration', 'Romantic idealism only', 'Legal formality'], 1, 'Knocking people\'s hats off "methodically" is absurdly funny.'),
            ex('Grammar: "I account it high time to get to sea" uses "it\'s high time" with…', ['A past form', 'An infinitive', 'A subjunctive "were"', 'A gerund'], 1, '"High time to + infinitive" (vs. "high time we went").'),
          ],
          vocab: [['spleen', 'bad temper / melancholy'], ['hypos', 'fits of depression (archaic)'], ['involuntarily', 'without meaning to'], ['flourish', 'a showy gesture']],
        },
        {
          id: 'en-r-1260', title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847,
          sentences: ['There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.', 'I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.'],
          questions: [
            ex('"Dreadful to me was the coming home…" is an example of…', ['A cleft sentence', 'Inversion (complement fronted)', 'A dangling modifier', 'Subjunctive'], 1, 'The adjective is fronted for emphasis, reversing subject and verb.'),
            ex('"Chidings" means…', ['Hugs', 'Scoldings', 'Songs', 'Stories'], 1, 'From "chide," to scold.'),
            ex('What do we learn about the narrator\'s situation?', ['She is the favored child', 'She feels inferior and unloved in the Reed household', 'She is the nurse', 'She loves winter walks'], 1, '"Saddened by chidings… humbled by… inferiority".'),
            ex('The weather in the first paragraph mainly…', ['Is irrelevant', 'Mirrors the bleak emotional atmosphere', 'Foreshadows a holiday', 'Shows the Reeds are poor'], 1, 'Sombre clouds, penetrating rain = mood.'),
          ],
          vocab: [['sombre', 'dark, gloomy'], ['chiding', 'a scolding'], ['raw', 'cold and damp']],
        },
        {
          id: 'en-r-145', title: 'Middlemarch', author: 'George Eliot', year: 1871,
          sentences: ['Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress. Her hand and wrist were so finely formed that she could wear sleeves not less bare of style than those in which the Blessed Virgin appeared to Italian painters; and her profile as well as her stature and bearing seemed to gain the more dignity from her plain garments, which by the side of provincial fashion gave her the impressiveness of a fine quotation from the Bible,—or from one of our elder poets,—in a paragraph of to-day’s newspaper. She was usually spoken of as being remarkably clever, but with the addition that her sister Celia had more common-sense.'],
          questions: [
            ex('"Thrown into relief by" means…', ['Hidden by', 'Made more striking by contrast with', 'Relieved by', 'Damaged by'], 1, 'Like a sculpture standing out from its background.'),
            ex('The Bible-quotation simile suggests Dorothea…', ['Looks old-fashioned and dull', 'Stands out with a grave, elevated dignity amid the ordinary', 'Is very religious only', 'Reads the newspaper'], 1, 'A fine quotation shines amid everyday newspaper prose.'),
            ex('What does the last sentence imply?', ['Dorothea is foolish', 'Her cleverness may lack practical judgment', 'Celia is cleverer', 'Both sisters are equally sensible'], 1, 'The "addition" qualifies the praise — a subtle irony.'),
            ex('"Not less bare of style" is an example of…', ['Litotes (understatement via double negative)', 'Hyperbole', 'Alliteration', 'Metaphor'], 0, '= just as plain.'),
          ],
          vocab: [['thrown into relief', 'made prominent by contrast'], ['stature', 'height; standing'], ['provincial', 'of the countryside; unsophisticated']],
        },
        {
          id: 'en-r-1400', title: 'Great Expectations', author: 'Charles Dickens', year: 1861,
          sentences: ['My father’s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.', 'I give Pirrip as my father’s family name, on the authority of his tombstone and my sister,—Mrs. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw any likeness of either of them (for their days were long before the days of photographs), my first fancies regarding what they were like were unreasonably derived from their tombstones. The shape of the letters on my father’s, gave me an odd idea that he was a square, stout, dark man, with curly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above,” I drew a childish conclusion that my mother was freckled and sickly. To five little stone lozenges, each about a foot and a half long, which were arranged in a neat row beside their grave, and were sacred to the memory of five little brothers of mine,—who gave up trying to get a living, exceedingly early in that universal struggle,—I am indebted for a belief I religiously entertained that they had all been born on their backs with their hands in their trousers-pockets, and had never taken them out in this state of existence.'],
          questions: [
            ex('"My father\'s family name being Pirrip…" opens with…', ['A dangling modifier', 'An absolute construction', 'A cleft', 'Inversion'], 1, 'Participle phrase with its own subject ("name").'),
            ex('How does Pip imagine his parents?', ['From photographs', 'From the shapes of the letters on their tombstones', 'From his sister\'s stories', 'From a painting'], 1, '"Derived from their tombstones."'),
            ex('"Gave up trying to get a living, exceedingly early" is a euphemism for…', ['Became poor', 'Died in infancy', 'Ran away', 'Stopped working'], 1, 'Dark humor through understatement.'),
            ex('The tone combines…', ['Sorrow and childlike comedy', 'Anger and revenge', 'Romance and suspense', 'Detachment and science'], 0, 'Tragic facts seen through a child\'s funny literalism.'),
          ],
          vocab: [['explicit', 'clearly stated'], ['inscription', 'words carved on stone'], ['lozenge', 'a diamond shape; here, small gravestones'], ['entertain (a belief)', 'to hold in mind']],
        },
        {
          id: 'en-r-205', title: 'Walden', author: 'Henry David Thoreau', year: 1854,
          sentences: ['I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms, and, if it proved to be mean, why then to get the whole and genuine meanness of it, and publish its meanness to the world; or if it were sublime, to know it by experience, and be able to give a true account of it in my next excursion.'],
          questions: [
            ex('"Live deliberately" means to live…', ['Slowly', 'Consciously and with intention', 'Alone', 'Dangerously'], 1, 'Deliberate = carefully considered.'),
            ex('"If it proved to be mean" — "mean" here means…', ['Cruel', 'Average', 'Poor, base, worthless', 'Intended'], 2, 'Older sense: inferior, shabby.'),
            ex('"Nor did I wish to practise resignation" shows which structure?', ['Inversion after a negative', 'A cleft', 'A mixed conditional', 'A relative clause'], 0, 'Nor + auxiliary + subject.'),
            ex('"Suck out all the marrow of life" is…', ['A literal description of hunting', 'A metaphor for extracting life\'s deepest nourishment', 'A simile', 'Irony'], 1, 'Marrow = the innermost, richest part.'),
          ],
          vocab: [['deliberately', 'intentionally, thoughtfully'], ['resignation', 'passive acceptance'], ['marrow', 'innermost, essential part'], ['sublime', 'awe-inspiringly great']],
        },
        {
          id: 'en-r-219', title: 'Heart of Darkness', author: 'Joseph Conrad', year: 1899,
          sentences: ['The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide.', 'The sea-reach of the Thames stretched before us like the beginning of an interminable waterway. In the offing the sea and the sky were welded together without a joint, and in the luminous space the tanned sails of the barges drifting up with the tide seemed to stand still in red clusters of canvas sharply peaked, with gleams of varnished sprits. A haze rested on the low shores that ran out to sea in vanishing flatness. The air was dark above Gravesend, and farther back still seemed condensed into a mournful gloom, brooding motionless over the biggest, and the greatest, town on earth.'],
          questions: [
            ex('"Interminable" means…', ['Short', 'Endless', 'Dangerous', 'Narrow'], 1, 'In- (not) + terminable (able to end).'),
            ex('"The biggest, and the greatest, town on earth" is…', ['Paris', 'London', 'Gravesend', 'New York'], 1, 'The Thames flows from London; Gravesend lies downriver.'),
            ex('What mood does the final sentence create?', ['Festive', 'Ominous and heavy', 'Neutral', 'Comic'], 1, '"Mournful gloom, brooding motionless" — darkness over the imperial capital.'),
            ex('"Being bound down the river, the only thing for it was…" is technically…', ['A perfect parallel', 'A dangling participle (the yawl, not "the only thing," is bound)', 'A cleft', 'A subjunctive'], 1, 'Even great writers dangle! The implied subject is the boat/crew.'),
          ],
          vocab: [['yawl', 'a two-masted sailing boat'], ['interminable', 'endless'], ['offing', 'the distant part of the sea visible from shore'], ['brooding', 'hanging oppressively']],
        },
        {
          id: 'en-r-105', title: 'Persuasion', author: 'Jane Austen', year: 1817,
          sentences: ['Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage; there he found occupation for an idle hour, and consolation in a distressed one; there his faculties were roused into admiration and respect, by contemplating the limited remnant of the earliest patents; there any unwelcome sensations, arising from domestic affairs changed naturally into pity and contempt as he turned over the almost endless creations of the last century; and there, if every other leaf were powerless, he could read his own history with an interest which never failed.'],
          questions: [
            ex('The Baronetage is a book listing titled families. What does Sir Walter\'s reading habit reveal?', ['His scholarship', 'His vanity and obsession with rank', 'His humility', 'His interest in history generally'], 1, 'He reads only about titles — especially his own.'),
            ex('The repeated "there… there… there…" is an example of…', ['Anaphora', 'Ellipsis', 'Litotes', 'Paradox'], 0, 'Repetition at the start of clauses builds comic momentum.'),
            ex('"If every other leaf were powerless" uses…', ['The unreal past (subjunctive "were")', 'A mixed conditional', 'Inversion', 'A modal perfect'], 0, 'Counterfactual "were".'),
            ex('Why does he feel "pity and contempt" toward "creations of the last century"?', ['They are poorly written', 'They are newly created titles, inferior to old ones like his', 'They are foreign', 'They are too long'], 1, 'Snobbery about recent baronetcies.'),
          ],
          vocab: [['baronetage', 'a register of baronets (hereditary titles)'], ['remnant', 'small remaining part'], ['patent', 'here, a royal grant of title']],
        },
        {
          id: 'en-r-158', title: 'Emma', author: 'Jane Austen', year: 1815,
          sentences: ['Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.', 'She was the youngest of the two daughters of a most affectionate, indulgent father; and had, in consequence of her sister’s marriage, been mistress of his house from a very early period. Her mother had died too long ago for her to have more than an indistinct remembrance of her caresses; and her place had been supplied by an excellent woman as governess, who had fallen little short of a mother in affection.'],
          questions: [
            ex('Which word signals that Emma\'s good fortune may be only apparent?', ['handsome', 'seemed', 'rich', 'existence'], 1, '"Seemed to unite" hints at trouble ahead.'),
            ex('"Indulgent" describes a father who…', ['Is strict', 'Readily gives in to his child\'s wishes', 'Is absent', 'Is poor'], 1, 'A clue to how Emma was raised.'),
            ex('"Fallen little short of a mother in affection" means the governess…', ['Was cold', 'Was almost as loving as a mother', 'Replaced the father', 'Was disliked'], 1, 'Litotes: little short of = nearly.'),
            ex('"Very little to distress or vex her" suggests…', ['She is wise from hardship', 'She is untested by difficulty — perhaps spoiled', 'She is unhappy', 'She is ill'], 1, 'Austen sets up Emma\'s flaws.'),
          ],
          vocab: [['disposition', 'temperament'], ['vex', 'to annoy, trouble'], ['indulgent', 'permissive, lenient']],
        },
        {
          id: 'en-r-174', title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', year: 1890,
          sentences: ['The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.', 'From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion.'],
          questions: [
            ex('The passage appeals most strongly to…', ['Sound', 'The senses, especially smell and sight', 'Taste', 'Logic'], 1, 'Odour, scent, perfume, gleam, shadows.'),
            ex('"There came through the open door the heavy scent…" uses…', ['Inversion after "there"', 'A cleft', 'A dangling modifier', 'The subjunctive'], 0, 'There + verb + subject.'),
            ex('"Tremulous" means…', ['Strong', 'Trembling', 'Dead', 'Tall'], 1, 'Related to tremble, tremor.'),
            ex('The branches "hardly able to bear the burden of a beauty" introduces which theme?', ['Beauty as something overwhelming, almost burdensome', 'Poverty', 'War', 'Religion'], 0, 'Central to the novel: the weight of beauty.'),
          ],
          vocab: [['divan', 'a long low sofa'], ['innumerable', 'too many to count'], ['tremulous', 'trembling'], ['pallid', 'pale']],
        },
        {
          id: 'en-r-1023', title: 'Bleak House', author: 'Charles Dickens', year: 1853,
          sentences: ['Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little ’prentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon and hanging in the misty clouds.'],
          questions: [
            ex('What is grammatically unusual about most of these "sentences"?', ['They are in the passive', 'They lack a main finite verb (fragments)', 'They use the subjunctive', 'They are questions'], 1, 'Verbless fragments create a stifling, piled-up effect.'),
            ex('The repetition of "fog" creates…', ['A sense of relief', 'An all-pervading, inescapable atmosphere', 'Humor', 'Speed'], 1, 'The fog — later a symbol of the murky legal system — is everywhere.'),
            ex('"(and dirty)" adds…', ['Neutral information', 'A sardonic aside undercutting "great"', 'A formal tone', 'A rhyme'], 1, 'Wry narrative voice.'),
            ex('"As if they were up in a balloon" uses…', ['The unreal past "were" after as if', 'A mixed conditional', 'Inversion', 'A modal perfect'], 0, '"As if" + counterfactual "were".'),
          ],
          vocab: [['ait', 'a small river island'], ['defiled', 'polluted'], ['wrathful', 'very angry'], ['nether', 'lower']],
        },
        {
          id: 'en-r-84', title: 'Frankenstein', author: 'Mary Shelley', year: 1818,
          sentences: ['It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.'],
          questions: [
            ex('"It was on a dreary night of November that I beheld…" is…', ['A wh-cleft', 'An it-cleft', 'Inversion', 'A dangling modifier'], 1, 'It + was + focus + that.'),
            ex('"That I might infuse a spark of being" expresses…', ['Result', 'Purpose (formal "so that I might")', 'Condition', 'Contrast'], 1, 'Archaic/formal purpose clause.'),
            ex('What is ironic about "the accomplishment of my toils"?', ['He is proud — but the "accomplishment" becomes his ruin', 'He failed', 'He is lazy', 'It is not ironic'], 0, 'Triumph instantly turns to horror.'),
            ex('"Dull yellow eye" — the adjectives suggest…', ['Beauty', 'Something sickly and unnatural', 'Joy', 'Youth'], 1, 'Revulsion begins at the moment of creation.'),
          ],
          vocab: [['beheld', 'saw (past of behold)'], ['toil', 'exhausting work'], ['infuse', 'to fill, instill'], ['convulsive', 'jerking, spasmodic']],
        },
      ],
      listening: [],
    },
  },
};
