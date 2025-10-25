// 뒤에값이 더 크면 최소힙(다익스트라), 앞이면 최대힙
//최소힙
// let pq = new PriorityQueue((a, b) => b[0] - a[0]);
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

		// 최상 노드 될떄까지
		while (current > 0) {
			let parent = Math.floor((current - 1) / 2);

			// 부모와 비교해서 우선순위가 낮으면 종료
			if (this._compare(current, parent) <= 0) break;
			this._swap(parent, current);
			current = parent;
		}
		return size;
	}

	deq() {
		// 부모
		let first = this.peek();
		// 우선순위 가장 낮은애
		let last = this._elements.pop();
		// 한개 추출한 후의 사이즈
		let size = this.size();

		if (size === 0) return first;

		// 우선순위 낮은애를 부모로 만듬
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

			if (right < size && this._compare(right, largest) >= 0) {
				largest = right;
			}

			if (largest === current) break;
			this._swap(largest, current);
			current = largest;
		}

		return first;
	}
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
		return this._comparator(this._elements[a], this._elements[b]);
	}

	forEach(fn) {
		return this._elements.forEach(fn);
	}
}

const a = [5, 1, 4, 10, 9];
a.sort((a, b) => a - b);
console.log(a);

const nums = [5, 1, 4, 10, 9];
const pq = new PriorityQueue((a, b) => b - a);
nums.forEach((n) => pq.enq(n));
console.log(pq);
const top3 = [pq.deq(), pq.deq(), pq.deq()];
console.log(top3);
