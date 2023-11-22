const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m, x] = input[0].split(' ').map(Number);

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(101));

let answer = Array(n + 1).fill(0);
let visited = Array(n + 1);

for (let i = 1; i <= m; i++) {
  const [start, end, time] = input[i].split(' ').map(Number);
  graph[start][end] = time;
}
for (let i = 1; i <= m; i++) {
  visited.fill(false);
  dfs(i);
}
console.log(visited);

function dfs(i) {
  visited[i] = true;
  for (let j = 1; j <= m; j++) {
    if (visited[j] || graph[i][j] === 101) {
      continue;
    }
  }
}
console.log(graph);
