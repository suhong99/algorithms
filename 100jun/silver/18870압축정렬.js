const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const arr = input[1].split(' ').map(Number);

const uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b);

const myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = '';
for (x of arr) answer += myMap.get(x) + ' ';
console.log(answer);
