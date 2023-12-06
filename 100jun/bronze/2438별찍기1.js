const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

let answer = '';
for (let i = 1; i <= input; i++) {
  answer += '*'.repeat(i) + '\n';
}

console.log(answer);
