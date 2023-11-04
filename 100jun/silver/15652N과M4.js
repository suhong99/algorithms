const fs = require('fs');
const [n, m] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

/*
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

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
    if (selected[selected.length - 1] > i) continue;
    selected.push(i);
    dfs(arr, depth + 1, i + 1);
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);
*/

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let selected = [];

let answer = '';
function dfs(arr, depth, start) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = start; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
