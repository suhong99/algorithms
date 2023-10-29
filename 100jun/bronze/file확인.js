const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input[0];
const length = input[1].length;

let returnWord = '';

for (let i = 0; i < length; i++) {
  const char = input[1][i];
  let isMatch = true;

  for (let j = 2; j <= T; j++) {
    if (input[j][i] !== char) {
      isMatch = false;
      break;
    }
  }

  if (isMatch) {
    returnWord += char;
  } else {
    returnWord += '?';
  }
}

console.log(returnWord);
