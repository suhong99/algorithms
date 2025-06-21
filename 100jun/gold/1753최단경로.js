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

	size() {
		return this._elements.length;
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

// input 값을 통해 graph에 삽임  graph[a] -> a지점에서 갈 수 있는 간선들을 나타냄  b (목표 노드) , c(이동 비용)
for (let i = 2; i <= m + 1; i++) {
	let [a, b, c] = input[i].split(' ').map(Number);
	graph[a].push([b, c]);
}

// 우선 거리를 전부 무한대 표시 (못가면 무한대임)
let distance = new Array(n + 1).fill(INF);

// 다익스트라 함수
function dijkstra(start) {
	// 우선순위 큐 사용 , 규칙은
	// 양수일수록 a가 우선순위 높음, 즉  최소힙 (최단거리 구해야하니깐)
	let pq = new PriorityQueue((a, b) => b[0] - a[0]);

	// 시작점 거리는 0 , 자기자신이니깐 start를 넣어줌
	pq.enq([0, start]);
	distance[start] = 0;
	// 큐가 빌떄까지 반 복작업
	while (pq.size() != 0) {
		// 거리와 현재 노드를 넣었었음
		let [dist, now] = pq.deq();
		// 현재 거리가 최소거리가 아니라 무시
		if (distance[now] < dist) continue;
		// 최소거리라면 현재 노드에서 다른 노드로 이동한 거리를 계산함
		for (let i of graph[now]) {
			// 비용은 현재 노드까지 오는데 든 비용+ 현재노드에서 이동 비용
			let cost = dist + i[1];
			if (cost < distance[i[0]]) {
				// 목표 노드까지 가는 비용보다 현재 노드에서 이동하는 비용이 싸다면 이동 시킴
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
