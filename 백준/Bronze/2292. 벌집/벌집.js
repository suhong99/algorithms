const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString());


let answer = 1;
let sum = 1;
while (true) {
  sum += 6 * (answer - 1);
  if (sum >= input) {
    break;
  }
  answer++;
}

console.log(answer);
