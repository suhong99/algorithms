let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let A = input[1].split(' ').map(Number);
// dp 에는 현재 위치에서의 증가하는 부분수열길이, arr에서는 해당 값들을 넣는다.
let dp = Array(N).fill(0);
let arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1;

  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(A[i]) : [A[i]];
}

let answer = Math.max(...dp);

console.log(answer);
console.log(arr[dp.indexOf(answer)].join(' '));
