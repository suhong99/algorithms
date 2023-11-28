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

const INF = 1e17;
const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => []);

const [a, b] = input[m + 1].split(' ').map(Number);

for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

function dijkstra(start) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

let distance = new Array(n + 1).fill(INF);
dijkstra(1);
let distance_1_to_a = distance[a];
let distance_1_to_b = distance[b];
distance = new Array(n + 1).fill(INF);
dijkstra(a);
let distance_a_to_b = distance[b];
let distance_a_to_n = distance[n];
distance = new Array(n + 1).fill(INF);
dijkstra(b);
let distance_b_to_a = distance[a];
let distance_b_to_n = distance[n];
let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;
let result = Math.min(route1, route2);
if (result >= INF) console.log(-1);
else console.log(result);
