const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const comCnt = Number(input[0]);
const n = Number(input[1]);

const visited = Array(comCnt + 1).fill(false);
const arr = Array(comCnt + 1).fill([]);
for (let i = 2; i < 2 + n; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  arr[a] = [...arr[a], b];
  arr[b] = [...arr[b], a];
}

let count = 0;
visited[1] = true;

function dps(start) {
  for (let i = 0; i < arr[start].length; i++) {
    const target = arr[start][i];
    if (visited[target]) continue;
    visited[target] = true;
    count++;
    dps(target);
  }
}

dps(1);
console.log(count);
