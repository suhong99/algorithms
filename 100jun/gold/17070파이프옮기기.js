const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

for (let i = 1; i <= n; i++) {
  const movable = input[i].split(' ').map(Number);
  for (let j = 1; j <= n; j++) {
    if (movable[j - 1] === 1) {
      graph[i][j] = true;
    }
  }
}

let dirList = [
  [0, 1],
  [1, 1],
  [1, 0],
];

let answer = 0;
function dfs(x, y, dir) {
  if (x === n && y === n) {
    answer++;
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (i === 2 && dir === 0) continue;
    if (i === 0 && dir === 2) continue;
    const nx = x + dirList[i][0];
    const ny = y + dirList[i][1];

    if (nx > n || ny > n || graph[nx][ny]) {
      continue;
    }
    if (i === 1 && (graph[nx - 1][ny] || graph[nx][ny - 1])) {
      continue;
    }

    dfs(nx, ny, i);
  }
}

dfs(1, 2, 0);

console.log(answer);
