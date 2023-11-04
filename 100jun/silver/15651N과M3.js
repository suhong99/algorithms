const fs = require('fs');
const [n, m] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let visited = new Array(n).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
