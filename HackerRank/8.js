//String Chains

function longestChain(words) {
  // Write your code here
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (
        words[j].includes(words[i]) &&
        words[j].length - words[i].length > answer
      ) {
        answer = words[j].length - words[i].length;
      }
    }
  }
  return answer + 1;
}
