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

const n = +input[0];
const m = +input[1];

let graph = Array.from(Array(n + 1), () => []);

for (let i = 2; i < m + 2; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = Array(n + 1).fill(false);
const queue = new Queue();
queue.enqueue([0, 1]);
visited[1] = true;
let answer = 0;
while (queue.getLength() != 0) {
  [depth, now] = queue.dequeue();
  if (depth === 2) {
    break;
  }
  for (let y of graph[now]) {
    if (!visited[y]) {
      answer++;
      queue.enqueue([depth + 1, y]);
      visited[y] = true;
    }
  }
}

console.log(answer);
