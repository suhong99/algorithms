const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

const t = +input[0];

const arr = [];
let before = 1;

for (let i = 1; i <= t; i++) {
  const currentNum = input[i];
  if (before >= 1) {
    before = before * currentNum;
    arr.push(before);
  } else {
    before = currentNum;
    arr.push(before);
  }
}

console.log(Math.max(...arr).toFixed(3));
