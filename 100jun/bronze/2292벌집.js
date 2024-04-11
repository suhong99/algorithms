const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

let answer = 1;
let sum = 1;
while (true) {
  sum += 6 * (answer - 1);
  console.log(sum);
  if (sum >= input) {
    break;
  }
  answer++;
}

console.log(answer);
