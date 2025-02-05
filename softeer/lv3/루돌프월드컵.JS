// https://softeer.ai/practice/7721

const md = require('readline');
const rl = md.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on('line', (line) => {
  input = line.split(' ').map(Number);
}).on('close', () => {
  process.exit(0);
});
