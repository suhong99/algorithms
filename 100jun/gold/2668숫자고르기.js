const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

const n = input[0];
let graph = [0];
for (let i = 1; i <= n; i++) {
  graph.push(input[i]);
}
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

for (let x = 1; x <= n; x++) {
  if (!visited[x]) dfs(x, graph, visited, finished, result);
}

console.log(result.length);
result.sort((a, b) => a - b);
for (let x of result) console.log(x);

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
