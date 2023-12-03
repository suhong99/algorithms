const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
let edge = 0;
const graph = Array.from(Array(n), () => []);
const visited = Array(n).fill(false);

for (let i = 1; i <= n; i++) {
  const nodes = input[i].split('');
  for (let j = 0; j < n; j++) {
    if (nodes[j] === 'Y') {
      edge += 0.5;
      graph[i - 1].push(j);
    }
  }
}

if (edge < n - 1) return console.log(-1);
for (let i = 0; i < n; i++) {
  if (graph[i].length === 0 && n !== 1) return console.log(-1);
}
let comp = 0;

for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    comp++;
    dfs(i);
  }
}

function dfs(index) {
  visited[index] = true;
  for (let i = 0; i < graph[index].length; i++) {
    !visited[graph[index][i]] && dfs(graph[index][i]);
  }
}

console.log(comp - 1);
