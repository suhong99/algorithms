const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const t = +input[0];

const arr = [[+input[1]]];

for (let i = 2; i <= t; i++) {
  const row = input[i].split(' ').map(Number);
  const rowArray = [];
  for (let j = 0; j < row.length; j++) {
    if (j === 0) {
      rowArray.push(arr[i - 2][j] + row[j]);
    } else if (j === row.length - 1) {
      rowArray.push(arr[i - 2][j - 1] + row[j]);
    } else {
      rowArray.push(Math.max(arr[i - 2][j], arr[i - 2][j - 1]) + row[j]);
    }
  }
  arr.push(rowArray);
}

const max = arr[arr.length - 1].reduce((max, cur) => Math.max(max, cur), 0);

console.log(max);
