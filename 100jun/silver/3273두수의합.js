const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const target = +input[2];

let left = 0;
let right = n - 1;
let count = 0;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === target) {
    left++;
    count++;
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
