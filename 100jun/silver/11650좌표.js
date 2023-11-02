const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const count = +input[0];
let newInput = [];
for (let i = 1; i <= count; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  newInput.push([x, y]);
}
newInput.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
});

let answer = '';
newInput.map((e) => {
  answer += e[0] + ' ' + e[1] + '\n';
});

console.log(answer);
