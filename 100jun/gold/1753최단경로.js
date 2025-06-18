class PriorityQueue {
	constructor(comparator) {
		this._comparator = comparator;
		this._elements = [];
	}

	isEmpty() {
		return this.size() === 0;
	}

	peek() {
		if (this.isEmpty()) throw new Error('PriorityQueue is empty');
		return this._elements[0];
	}

	deq() {
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
	}

	enq(element) {
		let size = this._elements.push(element);
		let current = size - 1;

		while (current > 0) {
			let parent = Math.floor((current - 1) / 2);

			if (this._compare(current, parent) <= 0) break;

			this._swap(parent, current);
			current = parent;
		}

		return size;
	}

	size() {
		return this._elements.length;
	}

	forEach(fn) {
		return this._elements.forEach(fn);
	}

	_compare(a, b) {
		return this._comparator(this._elements[a], this._elements[b]);
	}

	_swap(a, b) {
		let aux = this._elements[a];
		this._elements[a] = this._elements[b];
		this._elements[b] = aux;
	}
}

const fs = require('fs');
const input = fs
	.readFileSync(__dirname + '/input.txt')
	.toString()
	.split('\n');

const INF = 1e17;
const [n, m] = input[0].split(' ').map(Number);
const start = +input[1];
let graph = Array.from(Array(n + 1), () => []);

for (let i = 2; i <= m + 1; i++) {
	let [a, b, c] = input[i].split(' ').map(Number);
	graph[a].push([b, c]);
}
let distance = new Array(n + 1).fill(INF);
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

dijkstra(start);

let result = '';
for (let i = 1; i <= n; i++) {
	if (distance[i] === INF) {
		result += 'INF' + '\n';
	} else {
		result += distance[i] + '\n';
	}
}

console.log(result);
