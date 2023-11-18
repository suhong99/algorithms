const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const [plus, minus, multi, devide] = input[2].split(' ').map(Number);
let min = 1e9;
let max = -1e9;

dfs(1, numbers[0], plus, minus, multi, devide);

function dfs(depth, current, plus, minus, multi, devide) {
  if (depth < n) {
    if (plus !== 0) {
      dfs(depth + 1, current + numbers[depth], plus - 1, minus, multi, devide);
    }
    if (minus !== 0) {
      dfs(depth + 1, current - numbers[depth], plus, minus - 1, multi, devide);
    }
    if (multi !== 0) {
      dfs(depth + 1, current * numbers[depth], plus, minus, multi - 1, devide);
    }
    if (devide !== 0) {
      dfs(
        depth + 1,
        parseInt(current / numbers[depth]),
        plus,
        minus,
        multi,
        devide - 1
      );
    }
  }
  if (depth === n) {
    min = Math.min(current, min);
    max = Math.max(current, max);
  }
}

console.log(max + '\n' + min);
