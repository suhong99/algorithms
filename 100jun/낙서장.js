// 뒤에값이 더 크면 최소힙(다익스트라), 앞이면 최대힙
//최대힙
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
    let last = this._elements.pop();
    let size = this.size();

    if (size === 0) return first;

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
