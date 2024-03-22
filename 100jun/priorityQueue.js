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

//
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

// class PriorityQueue {
//   constructor(comparator) {
//     this._comparator = comparator;
//     this._elements = [];
//   }

//   isEmpty = function () {
//     return this.size() === 0;
//   };

//   peek = function () {
//     if (this.isEmpty()) throw new Error('PriorityQueue is empty');
//     return this._elements[0];
//   };

//   deq = function () {
//     let first = this.peek();
//     let last = this._elements.pop();
//     let size = this.size();

if (size === 0) return first;

//     this._elements[0] = last;
//     let current = 0;

//     while (current < size) {
//       let largest = current;
//       let left = 2 * current + 1;
//       let right = 2 * current + 2;

//       if (left < size && this._compare(left, largest) >= 0) {
//         largest = left;
//       }

//       if (right < size && this._compare(right, largest) >= 0) {
//         largest = right;
//       }

//       if (largest === current) break;

//       this._swap(largest, current);
//       current = largest;
//     }

//     return first;
//   };

//   enq = function (element) {
//     let size = this._elements.push(element);
//     let current = size - 1;

//     while (current > 0) {
//       let parent = Math.floor((current - 1) / 2);

//       if (this._compare(current, parent) <= 0) break;

//       this._swap(parent, current);
//       current = parent;
//     }

//     return size;
//   };

//   size = function () {
//     return this._elements.length;
//   };

//   forEach = function (fn) {
//     return this._elements.forEach(fn);
//   };

//   _compare = function (a, b) {
//     return this._comparator(this._elements[a], this._elements[b]);
//   };

//   _swap = function (a, b) {
//     let aux = this._elements[a];
//     this._elements[a] = this._elements[b];
//     this._elements[b] = aux;
//   };
// }
