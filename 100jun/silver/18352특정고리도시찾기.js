const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m, k, x] = input[0].split(' ').map(Number);

let visited = Array(n + 1).fill(false);
let graph = Array.from(Array(n + 1), () => []);
let result;
for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  graph[start].push(end);
}

function dfs(x, depth) {
  const nextPoint = [];
  x.map((index) => {
    graph[index].map((next) => {
      if (!visited[next]) {
        visited[next] = true;
        nextPoint.push(next);
      }
    });
  });

  if (depth === k - 1) {
    result = nextPoint;
  } else {
    dfs(nextPoint, depth + 1);
  }
}
visited[x] = true;
dfs([x], 0);
result.sort((a, b) => a - b);
console.log(result.length ? result.join('\n') : -1);
