const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

const arr = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
for (let i = 10; i < 100; i++) {
  arr.push(arr[i - 2] + arr[i - 3]);
}
const n = input[0];
for (let i = 1; i <= n; i++) {
  console.log(arr[input[i] - 1]);
}
