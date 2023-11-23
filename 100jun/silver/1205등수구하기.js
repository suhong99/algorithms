const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, score, p] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

if (n === 0) {
  console.log(1);
  process.exit();
}
if (n < p) {
  const length = array.findIndex((e) => e === score);
  if (length !== -1) {
    console.log(length + 1);
    process.exit();
  }
}
const length = array.findIndex((e) => e < score);
if (length === -1) {
  n < p ? console.log(n + 1) : console.log(-1);
  process.exit();
}

let duplicate = 0;
for (let i = length - 1; i >= 0; i--) {
  if (array[i] !== score) {
    break;
  }
  duplicate++;
}

console.log(length - duplicate + 1);
