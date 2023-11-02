const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const array = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;
array.map((e, i) => {
  answer += e * (i + 1);
});

console.log(answer);
