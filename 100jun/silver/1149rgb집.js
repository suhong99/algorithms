const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let n = +input[0];
let dp = new Array(n);
const firstCase = input[1].split(' ').map(Number);
dp[0] = firstCase;

for (let i = 2; i <= n; i++) {
  const [r, g, b] = input[i].split(' ').map(Number);
  dp[i - 1] = [
    r + Math.min(dp[i - 2][1], dp[i - 2][2]),
    g + Math.min(dp[i - 2][0], dp[i - 2][2]),
    b + Math.min(dp[i - 2][0], dp[i - 2][1]),
  ];
}

console.log(Math.min(...dp[n - 1]));
