const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

let array = [];
const trial = input[0] * 1;
for (let i = 1; i <= trial; i++) {
  array.push(input[i].split(' ').map(Number));
}

array.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
let answer = 1;
let endTime = array[0][1];
for (let i = 1; i < trial; i++) {
  if (array[i][0] >= endTime) {
    endTime = array[i][1];
    answer++;
  }
}

console.log(answer);
