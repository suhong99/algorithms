const fs = require('fs');
// let input = fs
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .split('\n')
//   .map(Number)
//   .slice(1)
//   .sort((a, b) => b - a);

// let count = 0;

// if (input.length === 1) {
//   return console.log(input[0]);
// }
// while (input.length > 1) {
//   input[input.length - 2] += input.pop();
//   count += input[input.length - 1];
//   input = input.sort((a, b) => b - a);
// }

// console.log(count);

// 큐로 풀어야함
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

class PriorityQueue {
  constructor() {
    this._element = [];
  }

  swap(a, b) {
    let temp = this._element[a];
    this._element[a] = this._element[b];
    this._element[b] = temp;
  }

  // 최소힙
  compare(a, b) {
    return this._element[a] < this._element[b];
  }

  size() {
    return this._element.length;
  }
  enq(e) {
    this._element.push(e);
    let target = this.size() - 1;
    let parent = Math.floor((target - 1) / 2);
    while (target > 0 && this.compare(target, parent)) {
      this.swap(target, parent);
      target = parent;
      parent = Math.floor((target - 1) / 2);
    }
  }

  pop() {
    if (this._element.length <= 1) {
      return this._element.pop();
    }

    const output = this._element[0];
    this._element[0] = this._element.pop();
    let index = 0;

    while (index * 2 + 1 < this._element.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (this._element[left] < this._element[next]) {
        next = left;
      }

      if (
        right < this._element.length &&
        this._element[right] < this._element[next]
      ) {
        next = right;
      }

      if (index === next) {
        break;
      }

      this.swap(index, next);
      index = next;
    }

    return output;
  }
}
const priorityQueue = new PriorityQueue();
let count = 0;

for (let i = 1; i <= input[0]; i++) {
  priorityQueue.enq(input[i]);
}

while (priorityQueue.size() > 1) {
  const sum = priorityQueue.pop() + priorityQueue.pop();
  priorityQueue.enq(sum);
  count += sum;
}

console.log(count);
