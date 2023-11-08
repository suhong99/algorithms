const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [leftCount, rightCount] = input[0].split(' ').map(Number);
const leftArr = input[1].split(' ').map(Number);
const rightArr = input[2].split(' ').map(Number);

let answer = '';
let left = 0;
let right = 0;
while (left < leftCount || right < rightCount) {
  if (leftArr[left] <= rightArr[right]) {
    answer += leftArr[left++] + ' ';
  } else {
    answer += rightArr[right++] + ' ';
  }
  if (left === leftCount) {
    for (let i = right; i < rightArr.length; i++) {
      answer += rightArr[i] + ' ';
    }
    break;
  }
  if (right === rightCount) {
    for (let i = left; i < leftArr.length; i++) {
      answer += leftArr[i] + ' ';
    }
    break;
  }
}

console.log(answer);
