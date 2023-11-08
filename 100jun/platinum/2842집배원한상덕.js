const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(''));
}

const height = [];
for (let i = n + 1; i <= n + n; i++) {
  height.push(input[i].split(' ').map(Number));
}

let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

let uniqueHeight = new Set();
let target = 0;
let result = 1e9;
let startX;
let startY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    uniqueHeight.add(height[i][j]);

    if (arr[i][j] === 'P') {
      startX = i;
      startY = j;
    }
    if (arr[i][j] === 'K') target += 1;
  }
}

uniqueHeight = [...uniqueHeight].sort((a, b) => a - b);
let left = 0;
let right = 0;
let middle = 0;
let cnt = 0;
for (let i = 0; i < uniqueHeight.length; i++) {
  if (uniqueHeight[i] === height[startX][startY]) {
    right = i;
    middle = i;
    break;
  }
}
let visited = [];
while (true) {
  while (true) {
    visited = [];
    cnt = 0;
    for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));

    dfs(startX, startY);
    if (right < uniqueHeight.length - 1 && cnt < target) right += 1;
    else break;
  }
  if (cnt === target) {
    result = Math.min(result, uniqueHeight[right] - uniqueHeight[left]);
  }
  left += 1;
  if (left > middle || right >= uniqueHeight.length) break;
}

console.log(result);

function dfs(x, y) {
  visited[x][y] = true;
  if (arr[x][y] === 'K') cnt += 1;
  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny > n) continue;
    if (!visited[nx][ny]) {
      if (
        height[nx][ny] >= uniqueHeight[left] &&
        height[nx][ny] <= uniqueHeight[right]
      ) {
        dfs(nx, ny);
      }
    }
  }
}
