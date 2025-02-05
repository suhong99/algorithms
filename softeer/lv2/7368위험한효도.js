// https://softeer.ai/practice/7368

const md = require('readline');
const rl = md.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input = line.split(' ').map(Number);
}).on('close', () => {
  const [a, b, d] = input;
  let answer = 0;
  answer += (d % a) + (d % b);

  if (d % a === 0) answer -= b;
  if (d % b === 0) answer -= a;
  answer += (a + b) * (Math.floor(d / a) + Math.floor(d / b));
  console.log(answer);
  process.exit(0);
});
