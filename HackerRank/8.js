//String Chains

function longestChain(words) {
  // Write your code here
  words.sort((a, b) => a.length - b.length);

  const chainLengths = new Map();

  for (const word of words) {
    chainLengths.set(word, 1);
  }

  let maxLength = 1;
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      const reducedWord = word.slice(0, i) + word.slice(i + 1);
      if (chainLengths.has(reducedWord)) {
        const chainLength = chainLengths.get(reducedWord) + 1;
        chainLengths.set(word, Math.max(chainLengths.get(word), chainLength));
        maxLength = Math.max(maxLength, chainLength);
      }
    }
  }

  return maxLength;
}
