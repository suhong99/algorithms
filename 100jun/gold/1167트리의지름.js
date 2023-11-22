const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
// let distance = Array(n + 1);
let distance = Array.from(Array(n + 1), () => []);
let graph = Array.from(Array(n + 1), () => []);
for (let i = 1; i <= n; i++) {
  let j = 1;
  const edge = input[i].split(' ').map(Number);
  while (true) {
    if (edge[j] === -1) {
      break;
    }
    distance[i][edge[j]] = edge[j + 1];
    graph[i].push(edge[j]);
    j += 2;
  }
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  let visited = Array(n + 1).fill(false);
  let current = 0;
}

function dfs(i, visited, current) {
  for (let j = 0; j < graph[i].length; j++) {
    if (!visited[graph[i][j]]) {
      dfs();
    }
  }
}
console.log(graph);

console.log(distance);
