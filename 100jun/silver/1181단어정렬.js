const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  }
  return a.length - b.length;
});

let answer = '';
input.map((e, i) => {
  if (e !== input[i - 1]) {
    answer += e + '\n';
  }
});

console.log(answer);
