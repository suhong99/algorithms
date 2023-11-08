// 1초만에 20만개 NlogN알고리즘

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const arr = [];
for (let i = 0; i < n; i++) {
  const [c, s] = input[i + 1].split(' ').map(Number);
  arr.push([c, s, i]);
}

arr.sort((a, b) => a[1] - b[1]);

let summary = 0;
let colorSummary = Array(200001).fill(0);
let result = Array(n).fill(0);

let start = 0;
while (start < n) {
  let end = start;

  while (end < n && arr[start][1] === arr[end][1]) end += 1;

  for (let i = start; i < end; i++) {
    result[arr[i][2]] = summary - colorSummary[arr[i][0]];
  }
  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1];
    summary += arr[i][1];
  }
  start = end;
}

console.log(result.join('\n'));
