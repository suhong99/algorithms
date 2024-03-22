const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const lis = [arr[0]]; // 가긴부수
const d = [0]; // 각각의 개수
let arrIndex = 1;
let max = 0;

while (arrIndex < n) {
  console.log(lis, d, max, arr, arrIndex);
  if (lis[max] < arr[arrIndex]) {
    // 증가하면 해당값을 넣어주고, 각각의 최대값에 값을 넣음
    lis[++max] = arr[arrIndex];
    d[arrIndex] = max;
  } else {
    //아니라면 몇 계단번 째의 수인지 적음
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
  // 현재의 가장 긴 부분 수열중에서 몇 번째 숫자와 같은 단곈지 측정
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
