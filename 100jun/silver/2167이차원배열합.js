const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [new Array(m + 1).fill(0)];

for (let i = 1; i <= n; i++) {
  arr.push([0, ...input[i].split(' ').map(Number)]);
}
let k = +input[n + 1];
let queries = [];
for (let t = n + 2; t <= n + k + 1; t++) {
  let [i, j, x, y] = input[t].split(' ').map(Number);
  queries.push([i, j, x, y]);
}

let sum = [];
for (let i = 0; i <= n; i++) sum.push(new Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}
for (let t = 0; t < k; t++) {
  let [i, j, x, y] = queries[t];
  let current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
  console.log(current);
}
