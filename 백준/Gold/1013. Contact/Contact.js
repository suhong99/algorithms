const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n');

const T = +input[0];
for (let i = 1; i <= T; i++) {
  const pattern = /^(100+1+|01)+$/;
  const result = pattern.test(input[i]);
  console.log(result ? 'YES' : 'NO');
}

