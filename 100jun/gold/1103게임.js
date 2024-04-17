const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let visited = [];
const direction = [
  [0, -1], //좌
  [-1, 0], // 상
  [0, 1], // 우
  [1, 0], // 하
];
let graph = [];
const [n, m] = input[0].split(' ').map(Number);
for (let i = 1; i <= n; i++) {
  visited.push(Array(m).fill(false));
  graph.push(
    input[i].split('').map((e) => {
      return e === 'H' ? 'H' : Number(e);
    })
  );
}

visited[0][0] = true;
let answer = 0;
counts(0, 0, 1);
console.log(answer);

function counts(x, y, count) {
  const move = graph[x][y];
  for (let dir = 0; dir < 4; dir++) {
    const newX = x + direction[dir][0] * move;
    const newY = y + direction[dir][1] * move;
    if (isEnd(newX, newY)) {
      answer = Math.max(count, answer);
      continue;
    }
    if (visited[newX][newY]) {
      process.exit(console.log(-1));
    }

    visited[newX][newY] = true;
    counts(newX, newY, count + 1);
    visited[newX][newY] = false;
  }
}

function isEnd(newX, newY) {
  if (
    newX < 0 ||
    newX >= n ||
    newY < 0 ||
    newY >= m ||
    graph[newX][newY] === 'H'
  ) {
    return true;
  }

  return false;
}

// 출처 :https://lhoiktiv.tistory.com/671
// 만약 해당 지점에 더 높은 횟수로 반복하면 무시함--> 내껀 시간 초과

// const [N, M] = input.shift().split(" ").map(Number);
// const board = input.map((v) => v.split(""));
// const dx = [0, 0, 1, -1];
// const dy = [1, -1, 0, 0];

// let dp = Array.from(Array(N), () => Array(M).fill(-1));
// dp[0][0] = 1;

// let visited = Array.from(Array(N), () => Array(M).fill(false));
// visited[0][0] = true;
// let answer = 1;

// const dfs = (x, y, visited) => {
//   const cnt = dp[x][y];
//   const value = board[x][y];

//   for (let i = 0; i < 4; i++) {
//     const nx = x + value * dx[i];
//     const ny = y + value * dy[i];

//     if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] != "H") {
//       if (visited[nx][ny]) {
//         process.exit(console.log(-1));
//       }
//       if (dp[nx][ny] >= cnt + 1) {
//         continue;
//       } else {
//         if (answer < cnt + 1) answer = cnt + 1;
//         dp[nx][ny] = cnt + 1;
//         visited[nx][ny] = true;
//         dfs(nx, ny, visited);
//         visited[nx][ny] = false;
//       }
//     }
//   }
// };

// dfs(0, 0, visited);
// console.log(answer);
