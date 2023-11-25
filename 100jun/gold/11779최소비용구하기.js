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

const n = +input[0];
const m = +input[1];

let graph = Array.from(Array(n + 1), () => []);
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
}

const [start, end] = input[m + 2].split(' ').map(Number);
const INF = 1e17;

let distance = Array.from(Array(n + 1), () => [INF, []]);
function dijkstra(start) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start, [start]]);
  distance[start][0] = 0;
  distance[start][1].push(start);
  while (pq.size() != 0) {
    let [dist, now, nodes] = pq.deq();
    if (distance[now][0] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]][0]) {
        const newNodes = [...nodes, i[0]];
        distance[i[0]] = [cost, newNodes];
        pq.enq([cost, i[0], newNodes]);
      }
    }
  }
}

dijkstra(start);

let answer = distance[end][0];
answer += '\n' + distance[end][1].length;
answer += '\n' + distance[end][1].join(' ');

console.log(answer);
