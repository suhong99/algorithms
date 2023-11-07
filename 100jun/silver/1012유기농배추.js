const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let T = Number(input[0]);
let index = 1;

while (T--) {
  let [m, n, k] = input[index].split(' ').map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[index + i].split(' ').map(Number);
    graph[x][y] = 1;
  }
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }
  index += k + 1;
  console.log(answer);
}

function dfs(graph, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  if (graph[x][y] === 1) {
    graph[x][y] = -1;
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}
