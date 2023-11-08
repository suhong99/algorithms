const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

/* 
// 시간초과

const [n, k] = input[0].split(' ').map(Number);

const array = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let deleteArray = [];
let maxLength = 0;
for (let i = 0; i < n; i++) {
  const isEven = array[i] % 2 === 0;

  if (isEven) {
    if (maxLength < right - left + 1 - deleteArray.length) {
      maxLength = right - left + 1 - deleteArray.length;
    }
  } else {
    deleteArray.push(right);
    if (deleteArray.length > k) {
      left = deleteArray.shift() + 1;
    }
  }
  right++;
}

console.log(maxLength);
*/

const [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let result = 0;
let eraseCount = 0;
for (let start = 0, end = 0; start < n; start++) {
  while (end < n) {
    if (arr[end] % 2 === 0) end++;
    else {
      if (eraseCount === k) break;
      eraseCount++;
      end++;
    }
  }

  result = Math.max(result, end - start - eraseCount);

  if (arr[start] % 2 == 1) eraseCount--;
}

console.log(result);
