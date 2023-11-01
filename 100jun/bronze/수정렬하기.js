const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// let arr2 = [1, 4, 5, -3, 8];

// arr2.sort((a, b) => a - b);

// console.log(arr2);
