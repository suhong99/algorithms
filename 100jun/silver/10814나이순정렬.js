const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

input.sort((a, b) => {
  const [age, name] = a.split(' ');
  const [age2, name2] = b.split(' ');
  if (!name || !name2) {
    return 0;
  }
  return Number(age) >= Number(age2) ? 1 : -1;
});

let answer = '';
input.map((e, i) => {
  if (i !== 0) {
    answer += e + '\n';
  }
});

console.log(answer);
