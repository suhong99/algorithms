const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const graph = Array.from(Array(n), () => []);

for (let i = 1; i <= n; i++) {
  const nodes = input[i].split(' ').map(Number);
  nodes.map((e, j) => {
    graph[i - 1].push(nodes[j]);
  });
}

let cost = Array.from(Array(n), () => Array(1 << n).fill(-1));

const dfs = (now, visited) => {
  if (visited == (1 << n) - 1) {
    if (graph[now][0] == 0) return Infinity;
    else return graph[now][0];
  }

  if (cost[now][visited] != -1) return cost[now][visited];

  cost[now][visited] = Infinity;

  for (let i = 0; i < n; i++) {
    if (graph[now][i] == 0) continue;
    if (visited & (1 << i)) continue;
    cost[now][visited] = Math.min(
      cost[now][visited],
      graph[now][i] + dfs(i, visited | (1 << i))
    );
  }
  return cost[now][visited];
};
console.log(dfs(0, 1));
