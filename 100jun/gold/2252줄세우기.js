const fs = require('fs');

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => []);

const inDegrees = Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
  const [small, big] = input[i].split(' ').map(Number);
  graph[small].push(big);
  inDegrees[big] += 1;
}
const queue = [];
for (let i = 1; i <= n; i++) {
  if (!inDegrees[i]) {
    queue.push(i);
  }
}

const result = [];
while (queue.length) {
  const i = queue.pop();
  result.push(i);
  graph[i].forEach((v) => {
    inDegrees[v] -= 1;
    if (!inDegrees[v]) {
      queue.push(v);
    }
  });
}

console.log(result.join(' '));
