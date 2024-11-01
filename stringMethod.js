// 시작하는지
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));

const sentence = 'The quick brown fox jumps over the lazy dog.';

// 소문자 <=> toUpperCase
console.log(sentence.toLowerCase());

// 포함여부
const word = 'quick';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`
);
