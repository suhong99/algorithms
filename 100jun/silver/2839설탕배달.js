const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

const cant = { 1: true, 2: true, 4: true, 7: true };
const countAdviser = [0, 1, 2, 1, 2];
let count = 0;
if (cant[input]) {
  console.log(-1);
} else {
  count += Math.floor(input / 5);
  count += countAdviser[input % 5];
  console.log(count);
}
