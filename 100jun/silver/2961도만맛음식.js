const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let visited = new Array(n).fill(false);
let result = [];
let answer = 1e9;

function dfs(depth, start) {
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    for (let i of result) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }

    answer = Math.min(answer, Math.abs(totalX - totalY));
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);
console.log(answer);
