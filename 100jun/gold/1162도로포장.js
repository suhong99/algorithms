class PriorityQueue {
	// 비교 기준 넘겨받기
	constructor(comparator) {
		this._comparator = comparator;
		this._elements = [];
	}

	// 비어있다면 에러, 아니면 부모
	peek = function () {
		if (this.isEmpty()) throw new Error('PriorityQueue is empty');
		return this._elements[0];
	};

	// 빼는거
	deq = function () {
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

	// 넣은 후 크기 이때 swap하며 재정렬
	enq = function (element) {
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
	};

	// 개수확인
	size = function () {
		return this._elements.length;
	};

	console = function () {
		return this._elements;
	};

	// 비어있는지 확인
	isEmpty = function () {
		return this.size() === 0;
	};
	// 각각의 요소 함수적용
	forEach = function (fn) {
		return this._elements.forEach(fn);
	};

	// 넘겨받은 기준을 바탕으로 크기 비교
	_compare = function (a, b) {
		return this._comparator(this._elements[a], this._elements[b]);
	};

	// 위치 바꾸기
	_swap = function (a, b) {
		let aux = this._elements[a];
		this._elements[a] = this._elements[b];
		this._elements[b] = aux;
	};
}
const fs = require('fs');
const input = fs
	.readFileSync(__dirname + '/input.txt')
	.toString()
	.split('\n');

const INF = 1e17;
let [n, m, k] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
	let [a, b, c] = input[i].split(' ').map(Number);
	graph[a].push([b, c]);
	graph[b].push([a, c]);
}

let distance = [new Array(k + 1).fill(INF)];
for (let i = 1; i <= n; i++) distance[i] = new Array(k + 1).fill(INF);
dijkstra(1);
let result = INF;
for (let i = 0; i <= k; i++) {
	result = Math.min(result, distance[n][i]);
}

function dijkstra(start) {
	let pq = new PriorityQueue((a, b) => b[0] - a[0]);
	pq.enq([0, start, 0]);
	distance[start][0] = 0;
	while (pq.size() != 0) {
		console.log(pq.console());

		let [dist, now, paved] = pq.deq();
		if (distance[now][paved] < dist) continue;
		for (let i of graph[now]) {
			let cost = dist + i[1];
			if (cost < distance[i[0]][paved]) {
				distance[i[0]][paved] = cost;
				pq.enq([cost, i[0], paved]);
			}
			if (paved < k && dist < distance[i[0]][paved + 1]) {
				distance[i[0]][paved + 1] = dist;
				pq.enq([dist, i[0], paved + 1]);
			}
		}
	}
}

console.log(result);
