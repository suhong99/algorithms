// https://softeer.ai/practice/7628

// 소수값이 최대값이 될 수 있는 후보이기에, 소수를 방문처리하면서 최대값 측정

const md = require('readline');
const rl = md.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  const n = input[0];
  const heater = input[1];
  const visited = Array(101).fill(false);
  let count = 0;
  for (let i = 2; i < 100; i++) {
    let temp = 0;
    if (!visited[i]) {
      for (let j = i; j < 100; j++) {
        if (j % i === 0) {
          visited[j] = true;
        }
      }

      for (let k = 0; k < n; k++) {
        if (heater[k] % i === 0) {
          temp++;
        }
      }
      count = Math.max(count, temp);
    }
  }

  console.log(count);
  process.exit(0);
});
