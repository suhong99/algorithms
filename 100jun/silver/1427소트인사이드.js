const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

const array = new Array(10).fill(0);
for (let i = 0; i < input.length; i++) {
  array[input[i]]++;
}

let answer = '';
for (let i = 9; i >= 0; i--) {
  answer += i.toString().repeat(array[i]);
}

console.log(answer);
