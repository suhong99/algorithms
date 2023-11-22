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

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let [s, t] = input[0].split(' ').map(Number);

let queue = new Queue();

queue.enqueue([s, '']);
let visited = new Set([s]);
let found = false;

if (s === t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() !== 0) {
  let [value, opers] = queue.dequeue();
  if (value > 1e9) continue;
  if (value === t) {
    console.log(opers);
    found = true;
    break;
  }

  for (let oper of ['*', '+', '/']) {
    let nextValue = value;
    if (oper === '*') nextValue *= value;
    if (oper === '+') nextValue += value;
    if (oper === '/' && value !== 0) {
      nextValue = 1;
    }

    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
