//시간초과

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(Number);

const count = input[0];
let answer = 0;
const height = {};
const list = [];

for (let i = 1; i <= count; i++) {
  getHeight(input[i]);
}

function lowerBound(key, end) {
  let start = 0;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < key) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

function getHeight(node) {
  let size = list.length;

  let lb = lowerBound(node, size);

  let left = lb > 0 ? height[list[lb - 1]] || 0 : 0;
  let right = lb < size ? height[list[lb]] || 0 : 0;

  const depth = Math.max(left, right) + 1;
  list.splice(lb, 0, node);
  answer += depth;
  height[node] = depth;
}

console.log(answer);

/*
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value, depth) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
        answer += depth;
      } else {
        this.left.insert(value, depth + 1);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
        answer += depth;
      } else {
        this.right.insert(value, depth + 1);
      }
    }
  }
}

const tree = new BinarySearchTree(input[1]);
for (let i = 2; i <= count; i++) {
  tree.insert(input[i], 2);
}
*/
