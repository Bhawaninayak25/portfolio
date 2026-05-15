export const chatSuggestions = [
  'Kya kar raha hai?',
  'Khana kha liya?',
  'Bhai free hai?',
  'Mood off hai yaar.',
  'Good morning',
  'Chal chai peete hai',
  'Movie dekhega?',
  'Good night',
];

const conversations = [
  ['kya kar raha hai', 'Kuch nahi bhai, bas bhar aaya  hu.'],
  ['kuch nahi bhai bas pada hu', 'Same yaar.'],
  ['same yaar', 'Bore ho raha hu pura.'],
  ['khana kha liya', 'Haan abhi khaya.'],
  ['kya khaya', 'Rajma chawal.'],
  ['kaha hai tu', 'Ghar pe.'],
  ['ghar pe', 'Mast life. Tu bata?'],
  ['bhai free hai', 'Haan bol.'],
  ['call karu', 'Kar le.'],
  ['neend aa rahi hai', 'So ja fir.'],
  ['kaam bhi hai', 'Coffee pee le.'],
  ['kal mil raha hai kya', 'Haan milte hai.'],
  ['time bata dena', 'Done.'],
  ['baarish mast ho rahi', 'Haan yaar mood fresh ho gaya.'],
  ['pakode missing hai bas', 'Sach me.'],
  ['net chal raha tera', 'Bohot slow.'],
  ['mere yaha bhi same', 'Jio ka kamaal.'],
  ['insta chala raha', 'Haan reels dekh raha.'],
  ['kitna addict hai bhai', 'Bohot zyada.'],
  ['bhook lagi hai', 'Order kar le.'],
  ['paise nahi', 'Gareebi.'],
  ['tu online itni raat ko', 'Neend nahi aa rahi.'],
  ['neend nahi aa rahi', 'Same haal. Overthinking chal rahi?'],
  ['movie dekhega', 'Konsi?'],
  ['horror wali', 'Nahi bhai.'],
  ['kya scene hai', 'Kuch khas nahi.'],
  ['chal ghumne chalte hai', 'Chalo.'],
  ['bhai charger hai', 'Haan le ja.'],
  ['tu asli dost hai', 'Pata hai.'],
  ['match dekh raha', 'Haan IPL.'],
  ['kaun jeetega', 'Jo achha khelega.'],
  ['mood off hai', 'Kya hua?'],
  ['bas aise hi', 'Chill kar, sab theek hoga.'],
  ['tu gym ja raha aaj', 'Haan sham ko.'],
  ['motivation de', 'Body bana bhai.'],
  ['bahar bohot garmi hai', 'Sach me jaan nikal rahi.'],
  ['ac hi life hai', 'Bilkul.'],
  ['good morning', 'Morning bhai.'],
  ['jaldi uth gaya aaj', 'Majboori.'],
  ['kaam ho gaya', 'Thoda baaki hai.'],
  ['deadline hai', 'Kar raha hu.'],
  ['meme bhej', 'Ruk bhejta hu.'],
  ['jaldi', 'Check kar.'],
  ['tu itna hasta kyu hai', 'Life me aur kya rakha.'],
  ['sahi baat', 'Hamesha khush reh.'],
  ['kya sun raha hai', 'Arijit Singh.'],
  ['sad mood lag raha', 'Thoda.'],
  ['kal office hai kya', 'Haan yaar.'],
  ['weekend kab aayega', 'Intezaar hi hai.'],
  ['tu ghar pahuch gaya', 'Haan abhi aya.'],
  ['safe drive', 'Ji bhai.'],
  ['phone hang ho raha', 'Storage full hoga.'],
  ['reels bhari padi', 'Delete kar fir.'],
  ['chal chai peete hai', 'Abhi?'],
  ['haan mood hai', 'Chalo.'],
  ['kya pehna hai', 'Black tshirt.'],
  ['stylish banda', 'Hamesha.'],
  ['padhai ho rahi', 'Naam ki.'],
  ['exam me dekhte hai', 'Bas pass ho jana.'],
  ['aaj bohot thak gaya', 'Rest kar le.'],
  ['mann nahi', 'Fir suffer kar.'],
  ['paise bhej de', 'Kitne?'],
  ['200 bas', 'Gareeb aadmi.'],
  ['tu naraz hai kya', 'Nahi toh.'],
  ['dry reply kyu', 'Mood nahi tha.'],
  ['kya kha raha hai', 'Maggie.'],
  ['legend food', 'Always best.'],
  ['sunday ka plan', 'Sona.'],
  ['mast plan', 'Best plan.'],
  ['late reply kyu karta', 'Bhool jata hu.'],
  ['bura dost', 'Sorry.'],
  ['call uthaya kar', 'Silent pe tha.'],
  ['bahane mat bana', 'Sach me.'],
  ['trip pe chalte hai', 'Paise tu de.'],
  ['fir rehne de', 'Gareebi hits hard.'],
  ['tu khush lag raha aaj', 'Salary aayi.'],
  ['partyyyyy', 'Sapne mat dekh.'],
  ['kaunsi game khel raha', 'BGMI.'],
  ['add kar mujhe bhi', 'Aaja.'],
  ['kitna time waste karte hai hum', 'Bohot zyada.'],
  ['fir bhi sudhrenge nahi', 'Kabhi nahi.'],
  ['tu soya nahi abhi tak', 'Nahi yaar.'],
  ['kyu', 'Mobile.'],
  ['aaj ka din mast tha', 'Kya kiya?'],
  ['dosto ke sath tha', 'Best feeling.'],
  ['tera fav food kya hai', 'Biryani.'],
  ['respect', 'Elite taste.'],
  ['ghar wale daant rahe', 'Kis baat pe?'],
  ['phone chalane pe', 'Roz ka hai.'],
  ['result aa gaya kya', 'Haan.'],
  ['pass hua', 'Bas bach gaya.'],
  ['bahar chale', 'Garmi bohot hai.'],
  ['ice cream khayenge', 'Fir chalo.'],
  ['tera mood kaise theek hota', 'Music sun ke.'],
  ['same', 'Music therapy.'],
  ['tu bada busy rehta aajkal', 'Kaam hi kaam.'],
  ['bade log', 'Majboori.'],
  ['kitni battery hai', '2%.'],
  ['charger laga le', 'Genius.'],
  ['good night', 'Good night bhai.'],
  ['kal baat karte hai', 'Done.'],
  ['hello', 'hnji bolo'],
  ['me sonu', 'ooho bhaisaab 5 mint ruk bare aau'],
  ['sid h ', 'thodi meeting hutai call kru ']
];

const fallbackReplies = [
  'Ispe main reply kar sakta hu: "Kya kar raha hai?", "Khana kha liya?", "Mood off hai", "Chal chai peete hai".',
  'Thoda simple Hinglish me pucho, jaise "Bhai free hai?" ya "Good night".',
  'Ye wala exact bank me nahi mila. Suggestion chips me se ek try karo.',
];

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^\w\s%]/g, ' ')
    .replace(/\b(h|hai|hain|he|kya|bhai|yaar)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const scoreMatch = (message, prompt) => {
  const normalizedMessage = normalize(message);
  const normalizedPrompt = normalize(prompt);

  if (!normalizedMessage || !normalizedPrompt) return 0;
  if (normalizedMessage === normalizedPrompt) return 100;
  if (normalizedMessage.includes(normalizedPrompt) || normalizedPrompt.includes(normalizedMessage)) return 80;

  const messageWords = new Set(normalizedMessage.split(' '));
  const promptWords = normalizedPrompt.split(' ');
  const hits = promptWords.filter((word) => messageWords.has(word)).length;
  return hits / promptWords.length;
};

export const getChatReply = (message) => {
  const bestMatch = conversations
    .map(([prompt, reply]) => ({ reply, score: scoreMatch(message, prompt) }))
    .sort((a, b) => b.score - a.score)[0];

  if (bestMatch && bestMatch.score >= 0.45) {
    return bestMatch.reply;
  }

  return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
};
