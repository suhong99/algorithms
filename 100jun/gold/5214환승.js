class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex++];
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }

  getHead() {
    return this.headIndex;
  }

  getTail() {
    return this.tailIndex;
  }
}

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let [n, k, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(' ').map(Number);
  for (let x of arr) {
    graph[x].push(n + i);
    graph[n + i].push(x);
  }
}

let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1, 1]);
let found = false;
while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue();
  if (now == n) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }
  for (let y of graph[now]) {
    if (!visited.has(y)) {
      queue.enqueue([dist + 1, y]);
      visited.add(y);
    }
  }
}
if (!found) console.log(-1);

/* 메모리초과  
const [n, k, m] = input[0].split(' ').map(Number);

let visited = Array(n + 1).fill(false);
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

for (let i = 1; i <= m; i++) {
  const hyperTube = input[i].split(' ').map(Number);
  for (let j = 0; j < k; j++) {
    for (let index = j + 1; index < k; index++) {
      const start = hyperTube[j];
      const end = hyperTube[index];
      if (!graph[start][end]) {
        graph[start][end] = true;
        graph[end][start] = true;
      }
    }
  }
}

visited[1] = true;
let answer = -1;
function bfs(start, depth) {
  let nextPoint = [];
  let stop = false;
  start.map((e) => {
    for (let i = 1; i <= n; i++) {
      if (graph[e][i] && !visited[i]) {
        if (i === n) {
          answer = depth + 1;
          stop = true;
          break;
        }
        visited[i] = true;
        nextPoint.push(i);
      }
    }
  });
  if (stop) {
    return;
  }
  bfs(nextPoint, depth + 1);
}

bfs([1], 1);
console.log(answer);
*/
