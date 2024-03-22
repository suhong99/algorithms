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

class PriorityQueue {
  constructor(comparator) {
    this._comparator = comparator;
    this._elements = [];
  }

  peek() {
    if (this.isEmpty()) throw new Error('PriorityQueue is empty');
    return this._elements[0];
  }

  enq(element) {
    let size = this._elements.push(element);
    let current = size - 1;

    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);

      // 부모와 비교해서 우선순위가 낮으면 종료
      if (this._compare(current, parent) <= 0) break;
      this._swap(parent, current);
      current = parent;
    }
    return size;
  }

  deq = function () {
    let first = this.peek();
    // console.log(first, '시작시', this._elements);

    let last = this._elements.pop();
    let size = this.size();

    if (size === 0) {
      // console.log(first, 'first', this._elements);
      return first;
    }

    this._elements[0] = last;
    let current = 0;
    while (current < size) {
      let largest = current;
      // 다음 자식 노드들
      let left = 2 * current + 1;
      let right = 2 * current + 2;
      if (left < size && this._compare(left, largest) >= 0) {
        largest = left;
      }

      if (right < size && this._comparator(right, largest) >= 0) {
        largest = right;
      }

      if (largest === current) break;
      this._swap(largest, current);
      current = largest;
    }

    return first;
  };
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._elements.length;
  }

  _swap(a, b) {
    let temp = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = temp;
  }

  _compare(a, b) {
    this._comparator(this._elements[a], this._elements[b]);
  }

  forEach(fn) {
    return this._elements.forEach(fn);
  }
}

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
let INF = 1e9;
let line = 0;

let n;
let m;
let distance;
let graph;
let reversed_graph;

while (true) {
  [n, m] = input[line].split(' ').map(Number);
  if (n == 0 && m == 0) break;
  [start, end] = input[line + 1].split(' ').map(Number);
  graph = [];
  reversed_graph = []; // 경로 추적을 위한 역순 그래프
  for (let i = 0; i < n; i++) {
    graph.push([]);
    reversed_graph.push([]);
  }
  // 문제블럭이 line에서 시작해서 < line+2 까지임
  for (let i = line + 2; i < line + 2 + m; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c]);
    reversed_graph[b].push([a, c]);
  }
  distance = new Array(n).fill(INF);

  //최단거리distance를 구함
  dijkstra();
  // console.log(graph, '기존');
  // console.log(distance, '거리');

  //해당 distance를 바탕으로 경로역추적하고 이를 제거후 새 그래프
  graph = getNewGraph();
  // console.log(graph, '변경');
  // 다시 최단경오
  distance = new Array(n).fill(INF);
  dijkstra();
  // console.log(distance, '거리');

  // 마지막 최단경로를 바타으로 리턴
  if (distance[end] == INF) console.log(-1);
  else console.log(distance[end]);
  line += m + 2;
}

function dijkstra() {
  //최소 힙
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    // 최단거리면 무시
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

// 최단경로 역추적함수
function bfs() {
  let queue = new Queue();
  let visited = new Set();
  queue.enqueue(end);
  let removes = [];
  // 남은 queue가 없어 도착 못한다면 종료

  // console.log(graph, '기존');
  // console.log(reversed_graph, '뒤집은거');
  while (queue.getLength() != 0) {
    let now = queue.dequeue();
    // 시작점에 도착했다면 종료
    if (now == start) {
      continue;
    }
    for (let i of reversed_graph[now]) {
      // i는 reversed_graph[now]의 element (e라고 이름 지을껄)
      let cost = distance[i[0]] + i[1];
      if (cost == distance[now]) {
        // 최단경로와 일치하는 위치에 도착했다면, 해당 간선 집어넣기
        removes.push([i[0], now]);
        if (!visited.has(i[0])) {
          // 해당 간선 방문치 않았다면 집어넣고 방문처리
          queue.enqueue(i[0]);
          visited.add(i[0]);
        }
      }
    }
  }
  return removes;
}

function getNewGraph() {
  removes = bfs();
  // console.log(removes, '삭제대상');
  let newGraph = [];
  for (let i = 0; i < n; i++) newGraph.push([]);
  for (let a = 0; a < n; a++) {
    for (let [b, c] of graph[a]) {
      let check = true;
      for (let [x, y] of removes) {
        if (a == x && b == y) check = false;
      }
      if (check) newGraph[a].push([b, c]);
    }
  }
  return newGraph;
}
