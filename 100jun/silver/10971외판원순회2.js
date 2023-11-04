const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = Number(input[0]);
let price = [];
let arr = [];
for (let i = 1; i <= n; i++) {
  price.push(input[i].split(' ').map(Number));
  arr.push(i - 1);
}

let visited = new Array(n).fill(false);
let selected = [];
let answer = 0;
function dfs(arr, depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < selected.length - 1; i++) {
      if (price[selected[i]][selected[i + 1]] === 0) {
        return;
      }
      sum += price[selected[i]][selected[i + 1]];
    }
    if (price[selected[selected.length - 1]][selected[0]] === 0) {
      return;
    }
    sum += price[selected[selected.length - 1]][selected[0]];
    if (answer) {
      answer = Math.min(answer, sum);
    } else {
      answer = sum;
    }

    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
