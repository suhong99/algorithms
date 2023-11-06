const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [r, c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let visited = {};
for (
  let charCode = 'a'.charCodeAt(0);
  charCode <= 'z'.charCodeAt(0);
  charCode++
) {
  const char = String.fromCharCode(charCode);
  visited[char] = false;
}
let maxDepth = 0;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited[arr[nx][ny]]) continue;
    visited[arr[nx][ny]] = true;
    dfs(depth + 1, nx, ny);
    visited[arr[nx][ny]] = false;
  }
}

visited[arr[0][0]] = true;
dfs(1, 0, 0);
console.log(maxDepth);
