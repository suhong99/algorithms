const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(/\s/);

input.shift();
const position = Number(input.shift());

const array = input.split(' ');
array.sort((a, b) => a - b);
console.log(array[position - 1]);
