const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, s] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);
const sumArr = [0, arr[0]];

for (let i = 2; i <= n; i++) {
  sumArr[i] = sumArr[i - 1] + arr[i - 1];
}
let left = 0;
let right = 1;
let min = n + 1;

while (right < n + 1) {
  const sum = sumArr[right] - sumArr[left];
  if (sum >= s) {
    min = Math.min(min, right - left);
    left++;
  } else {
    right++;
  }
}

console.log(min === n + 1 ? 0 : min);
