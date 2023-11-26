function PriorityQueue(comparator) {
  this._comparator = comparator;
  this._elements = [];
}

PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};

PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');
  return this._elements[0];
};

PriorityQueue.prototype.deq = function () {
  let first = this.peek();
  let last = this._elements.pop();
  let size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  let current = 0;

  while (current < size) {
    let largest = current;
    let left = 2 * current + 1;
    let right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

PriorityQueue.prototype.enq = function (element) {
  let size = this._elements.push(element);
  let current = size - 1;

  while (current > 0) {
    let parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

PriorityQueue.prototype.size = function () {
  return this._elements.length;
};

PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};

PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

PriorityQueue.prototype._swap = function (a, b) {
  let aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const INF = 1e11;
const [n, m] = input[0].split(' ').map(Number);
let graph = Array.from(Array(n + 1), () => []);
let distance = new Array(n + 1).fill(INF);

for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

let lastNodes = [];

function dijkstra(start) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start, [start]]);
  distance[start] = 0;
  while (pq.size() != 0) {
    let [dist, now, nodes] = pq.deq();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]]) {
        const newNodes = [...nodes, i[0]];
        distance[i[0]] = cost;
        if (i[0] === n) {
          lastNodes = newNodes;
        }
        pq.enq([cost, i[0], newNodes]);
      }
    }
  }
}

function dijkstra2(ex1, ex2, newDistance) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, 1]);
  newDistance[1] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    if (newDistance[now] < dist) continue;
    for (let i of graph[now]) {
      if (now === ex1 && i[0] === ex2) continue;
      if (now === ex2 && i[0] === ex1) continue;

      let cost = dist + i[1];
      if (cost < newDistance[i[0]]) {
        newDistance[i[0]] = cost;

        pq.enq([cost, i[0]]);
      }
    }
  }
}

dijkstra(1);

let answer = 0;

for (let i = 0; i < lastNodes.length - 1; i++) {
  let newDistance = new Array(n + 1).fill(INF);

  dijkstra2(lastNodes[i], lastNodes[i + 1], newDistance);
  answer = Math.max(newDistance[n], answer);
}

console.log(answer);
