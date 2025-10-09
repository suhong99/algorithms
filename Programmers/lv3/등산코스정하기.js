// 힙구조

class MinHeap {
	constructor() {
		this.heap = [];
	}
	push(item) {
		this.heap.push(item);
		this._bubbleUp();
	}
	pop() {
		if (this.heap.length === 0) return null;
		const top = this.heap[0];
		const end = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = end;
			this._sinkDown();
		}
		return top;
	}
	_bubbleUp() {
		let idx = this.heap.length - 1;
		const element = this.heap[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.heap[parentIdx];
			if (element[0] >= parent[0]) break;
			this.heap[idx] = parent;
			this.heap[parentIdx] = element;
			idx = parentIdx;
		}
	}
	_sinkDown() {
		let idx = 0;
		const length = this.heap.length;
		const element = this.heap[0];
		while (true) {
			let left = 2 * idx + 1;
			let right = 2 * idx + 2;
			let swap = null;

			if (left < length && this.heap[left][0] < element[0]) swap = left;
			if (right < length && this.heap[right][0] < (swap === null ? element[0] : this.heap[left][0])) swap = right;

			if (swap === null) break;
			this.heap[idx] = this.heap[swap];
			this.heap[swap] = element;
			idx = swap;
		}
	}
	size() {
		return this.heap.length;
	}
}

function solution(n, paths, gates, summits) {
	const graph = Array.from({ length: n + 1 }, () => []);
	const gateSet = new Set(gates);
	const summitSet = new Set(summits);

	// 그래프 구성 (산봉우리 → 다른 곳으로는 가지 않음)
	for (const [i, j, w] of paths) {
		if (gateSet.has(i) || summitSet.has(j)) {
			graph[i].push([j, w]);
		} else if (gateSet.has(j) || summitSet.has(i)) {
			graph[j].push([i, w]);
		} else {
			graph[i].push([j, w]);
			graph[j].push([i, w]);
		}
	}

	// 다익스트라 (intensity 최소화)
	const intensity = Array(n + 1).fill(Infinity);
	const heap = new MinHeap();

	for (const g of gates) {
		intensity[g] = 0;
		heap.push([0, g]);
	}

	while (heap.size()) {
		const [curInt, node] = heap.pop();

		if (curInt > intensity[node]) continue;
		if (summitSet.has(node)) continue;

		for (const [next, weight] of graph[node]) {
			const newInt = Math.max(curInt, weight);
			if (newInt < intensity[next]) {
				intensity[next] = newInt;
				heap.push([newInt, next]);
			}
		}
	}

	// 산봉우리 중 최소 intensity
	summits.sort((a, b) => a - b);
	let bestSummit = 0;
	let bestInt = Infinity;

	for (const s of summits) {
		if (intensity[s] < bestInt) {
			bestInt = intensity[s];
			bestSummit = s;
		}
	}

	return [bestSummit, bestInt];
}

console.log(
	solution(
		6,
		[
			[1, 2, 3],
			[2, 3, 5],
			[2, 4, 2],
			[2, 5, 4],
			[3, 4, 4],
			[4, 5, 3],
			[4, 6, 1],
			[5, 6, 1],
		],
		[1, 3],
		[5],
	),
);
