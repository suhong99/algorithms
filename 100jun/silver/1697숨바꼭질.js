const fs = require('fs');
let [N, K] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);
const visited = [...Array(100001)].fill(0);

const getFastestFindTime = (start, end) => {
  const queue = [[start, 0]];
  while (queue.length) {
    const [pos, time] = queue.shift();
    if (visited[pos]) continue;
    if (pos === end) return time;
    for (const move of [pos + 1, pos - 1, pos * 2]) {
      !visited[move] &&
        move >= 0 &&
        move <= 100000 &&
        queue.push([move, time + 1]);
    }
    visited[pos] = 1;
  }
};

console.log(getFastestFindTime(N, K));

// const MAX = 100001;
// let visited = new Array(MAX).fill(0);

// function bfs() {
//   let queue = new Queue();
//   queue.enqueue(n);
//   while (queue.getLength() != 0) {
//     let cur = queue.dequeue();
//     if (cur == k) {
//       return visited[cur];
//     }
//     for (let nxt of [cur - 1, cur + 1, cur * 2]) {
//       if (nxt < 0 || nxt >= MAX) continue;
//       if (visited[nxt] == 0) {
//         visited[nxt] = visited[cur] + 1;
//         queue.enqueue(nxt);
//       }
//     }
//   }
// }

// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }
//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }
//   peek() {
//     return this.items[this.headIndex];
//   }
//   getLength() {
//     return this.tailIndex - this.headIndex;
//   }
// }
// console.log(bfs());
