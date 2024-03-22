const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const target = input[3].split(' ').map(Number);

let answer = '';
const binarySearch = (arr, element) => {
  let [left, right] = [0, arr.length];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === element) return (answer += '1\n');
    if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  answer += `0\n`;
};

target.forEach((e) => binarySearch(A, e));
console.log(answer);
// includes는 시간초과
