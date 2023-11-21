const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

let k = 0;
while (true) {
  if (2 ** k === input / 3) {
    break;
  }
  k++;
}

let answer = ['  *  ', ' * * ', '*****'];
for (let i = 1; i <= k; i++) {
  const counts = 2 ** (i - 1);
  for (let j = 0; j < 3 * counts; j++) {
    answer.push(answer[j] + ' ' + answer[j]);
  }
  for (let j = 0; j < 3 * counts; j++) {
    answer[j] = '   '.repeat(counts) + answer[j] + '   '.repeat(counts);
  }
}

console.log(answer.join('\n'));
