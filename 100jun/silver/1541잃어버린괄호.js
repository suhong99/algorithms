const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('-');

let answer = input[0]
  .split('+')
  .map(Number)
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);

for (let i = 1; i < input.length; i++) {
  answer -= input[i]
    .split('+')
    .map(Number)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
}

console.log(answer);
