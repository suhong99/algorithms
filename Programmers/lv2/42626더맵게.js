function solution(scoville, K) {
	const heap = new MinHeap();

	for (let s of scoville) {
		heap.push(s);
	}

	let count = 0;

	while (heap.size() > 1 && heap.peek() < K) {
		const first = heap.pop();
		const second = heap.pop();

		const mixed = first + second * 2;
		heap.push(mixed);

		count++;
	}

	return heap.peek() >= K ? count : -1;
}

class MinHeap {
	constructor() {
		this.heap = [];
	}

	push(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.heap.length - 1;

		while (idx > 0) {
			let parent = Math.floor((idx - 1) / 2);

			if (this.heap[parent] <= this.heap[idx]) break;

			[this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
			idx = parent;
		}
	}

	pop() {
		if (this.heap.length === 1) return this.heap.pop();

		const top = this.heap[0];
		this.heap[0] = this.heap.pop();

		this.bubbleDown();
		return top;
	}

	bubbleDown() {
		let idx = 0;
		const length = this.heap.length;

		while (true) {
			let left = idx * 2 + 1;
			let right = idx * 2 + 2;
			let smallest = idx;

			if (left < length && this.heap[left] < this.heap[smallest]) {
				smallest = left;
			}

			if (right < length && this.heap[right] < this.heap[smallest]) {
				smallest = right;
			}

			if (smallest === idx) break;

			[this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
			idx = smallest;
		}
	}

	size() {
		return this.heap.length;
	}

	peek() {
		return this.heap[0];
	}
}
