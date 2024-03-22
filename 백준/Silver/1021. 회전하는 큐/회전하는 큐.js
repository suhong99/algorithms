const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const positions = input[1].split(' ').map(Number);

let array = [];
for (let i = 1; i <= n; i++) {
  array.push(i);
}
let count = 0;

for (let i = 0; i < m; i++) {
  const targetIndex = array.indexOf(positions[i]);
  const left = targetIndex;
  const right = array.length - targetIndex;

  const minOperations = Math.min(left, right);
  count += minOperations;

  if (targetIndex <= array.length / 2) {
    array = array.slice(minOperations).concat(array.slice(0, minOperations));
  } else {
    array = array.slice(-minOperations).concat(array.slice(0, -minOperations));
  }

  array.shift();
}

console.log(count);
