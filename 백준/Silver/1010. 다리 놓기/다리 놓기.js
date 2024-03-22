const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n');

const n = +input[0];
for (let i = 1; i <= n; i++) {
  const [k, n] = input[i].split(' ').map(Number);
  console.log(combine(k, n));
}

function combine(k, n) {
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n - i + 1) / i;
  }
  return Math.round(result);
}
