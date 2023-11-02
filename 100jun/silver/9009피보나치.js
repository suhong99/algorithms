const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let pibo = [0, 1];

while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let n = Number(input[i]);
  let result = [];
  let index = pibo.length - 1;
  while (n > 0) {
    if (n >= pibo[index]) {
      n -= pibo[index];
      result.push(pibo[index]);
    }
    index--;
  }
  let answer = '';
  for (let j = result.length - 1; j >= 0; j--) {
    answer += result[j] + ' ';
  }
  console.log(answer);
}
