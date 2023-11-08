const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [days, period] = input[0].split(' ').map(Number);

const visitors = input[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i < period; i++) {
  max += visitors[i];
}

let current = max;
let count = 1;

for (let i = 1; i < days - period + 1; i++) {
  current = current - visitors[i - 1] + visitors[i + period - 1];
  if (current > max) {
    max = current;
    count = 1;
  } else if (current === max) {
    count++;
  }
}
console.log(max ? max + '\n' + count : 'SAD');
