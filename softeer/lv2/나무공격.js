const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line.split(' ').map(Number));
}).on('close', () => {
  const [n, m] = lines[0];
  const counts = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    lines[i].map((e) => {
      if (e === 1) {
        counts[i]++;
      }
    });
  }

  for (let i = n + 1; i < n + 3; i++) {
    const [start, end] = lines[i];
    for (let j = start; j <= start + 4; j++) {
      if (counts[j] > 0) counts[j]--;
    }
  }
  console.log(counts.reduce((acc, cur) => acc + cur, 0));
  process.exit(0);
});
