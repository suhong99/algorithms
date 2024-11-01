const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim().split(' ').map(Number));
}).on('close', () => {
  const max = Math.max(...input[1]);
  console.log(max + input[0][0] - 1);
  process.exit(0);
});

// 자바스크립트로 풀면 런타임 에러가 뜸..
