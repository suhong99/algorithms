const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, target] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let right = 0;
let count = 0;
let sum = 0;

for (let left = 0; left < n; left++) {
  while (sum < target && right < n) {
    sum += arr[right];
    right += 1;
  }

  if (sum === target) count++;
  sum -= arr[left];
}

console.log(count);
