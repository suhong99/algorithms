const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

for (let t = 0; t < input.length - 1; t++) {
  findList(t);
}

function findList(t) {
  let array = input[t].split(' ').map(Number);
  let selected = [];
  let answer = '';
  function dfs(depth, start) {
    if (depth === 6) {
      answer += selected.join(' ') + '\n';
      return;
    }
    for (let i = start; i < array.length; i++) {
      selected.push(array[i]);
      dfs(depth + 1, i + 1);
      selected.pop();
    }
  }

  dfs(0, 1);
  console.log(answer);
}
