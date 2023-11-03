const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\r\n');

let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const search = input[3].split(' ').map(Number);

let answer = '';

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, target) {
  let rigthIndex = upperBound(arr, target, 0, arr.length);
  let leftIndex = lowerBound(arr, target, 0, arr.length);
  return rigthIndex - leftIndex;
}

for (target of search) {
  let result = countByRange(arr, target);
  answer += result + ' ';
}

console.log(answer);
