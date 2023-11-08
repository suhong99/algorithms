const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const arrayLength = +input[0];
const array = input[1].split(' ').map(Number);
const trial = +input[2];

const prefix = [0];
let summary = 0;
for (let i = 0; i < arrayLength; i++) {
  summary += array[i];
  prefix.push(summary);
}

let answer = '';
for (let t = 3; t <= 2 + trial; t++) {
  const [left, right] = input[t].split(' ').map(Number);
  answer += prefix[right] - prefix[left - 1] + '\n';
}

console.log(answer);
