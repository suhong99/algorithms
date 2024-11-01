const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const s = line.trim();
  const len = s.length;
  let result = '';

  for (let i = 0; i < len - 1; i++) {
    result += s[i];

    if (s[i] === '(' && s[i + 1] === ')') {
      result += '1';
    }
    if (s[i] === ')' && s[i + 1] === '(') {
      result += '+';
    }
  }
  result += s[len - 1];
  console.log(result);
  process.exit(0);
});
