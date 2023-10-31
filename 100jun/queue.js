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

  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }

  getHead() {
    return this.headIndex;
  }

  getTail() {
    return this.tailIndex;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.getHead(), '헤드');
console.log(myQueue.getTail(), '꼬리');
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.getHead());
console.log(myQueue.getTail(), '꼬리');
console.log(myQueue.peek()); // 큐의 가장 앞 요소 확인 (1)
console.log(myQueue.getLength()); // 큐의 길이 확인 (3)
console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); //2
console.log(myQueue.getHead());
console.log(myQueue.getTail(), '꼬리');
console.log(myQueue.getLength()); // 큐의 길이 확인 (3)
console.log(myQueue.getHead());
console.log(myQueue.getTail(), '꼬리');
