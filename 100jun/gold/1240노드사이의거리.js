const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  const [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

let visited = [];
let distance = [];
function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  const [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}
