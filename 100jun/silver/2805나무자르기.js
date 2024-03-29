const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\r\n');

let [n, target] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    if (x > mid) total += x - mid;
  }
  if (total < target) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
