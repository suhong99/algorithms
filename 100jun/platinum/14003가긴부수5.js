const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const lis = [arr[0]];
const d = [0];
let arrIndex = 1;
let max = 0;

while (arrIndex < n) {
  if (lis[max] < arr[arrIndex]) {
    lis[++max] = arr[arrIndex];
    d[arrIndex] = max;
  } else {
    let i = lowerBound(arr[arrIndex], 0, max);
    lis[i] = arr[arrIndex];
    d[arrIndex] = i;
  }
  arrIndex++;
}

let answer = [];

const maxIdx = d.indexOf(max);
for (let i = maxIdx; i >= 0 && max >= 0; i--) {
  if (d[i] == max) {
    answer.push(arr[i]);
    max--;
  }
}

console.log(answer.length);
console.log(answer.reverse().join(' '));

function lowerBound(target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (lis[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
