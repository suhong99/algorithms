const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n');

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.split(""));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let dp = Array.from(Array(N), () => Array(M).fill(-1));
dp[0][0] = 1;

let visited = Array.from(Array(N), () => Array(M).fill(false));
visited[0][0] = true;
let answer = 1;

const dfs = (x, y, visited) => {
  const cnt = dp[x][y];
  const value = board[x][y];

  for (let i = 0; i < 4; i++) {
    const nx = x + value * dx[i];
    const ny = y + value * dy[i];

    if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] != "H") {
      if (visited[nx][ny]) {
        process.exit(console.log(-1));
      }
      if (dp[nx][ny] >= cnt + 1) {
        continue;
      } else {
        if (answer < cnt + 1) answer = cnt + 1;
        dp[nx][ny] = cnt + 1;
        visited[nx][ny] = true;
        dfs(nx, ny, visited);
        visited[nx][ny] = false;
      }
    }
  }
};

dfs(0, 0, visited);
console.log(answer);