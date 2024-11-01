const md = require('readline');
const rl = md.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  //6줄 확인
  const [a, b, c] = input;

  let price = 2;
  if (
    (a[0] === b[0] && b[0] === c[0]) ||
    (a[1] === b[1] && b[1] === c[1]) ||
    (a[2] === b[2] && b[2] === c[2]) ||
    (a[0] === a[1] && a[1] === a[2]) ||
    (b[0] === b[1] && b[1] === b[2]) ||
    (c[0] === c[1] && c[1] === c[2])
  ) {
    console.log(0);
    process.exit(0);
  }
  for (let i = 0; i < 3; i++) {
    if (
      input[i][0] === input[i][1] ||
      input[i][0] === input[i][2] ||
      input[i][1] === input[i][2]
    ) {
      if (input[i][0] === 2 || input[i][1] === 2 || input[i][2] === 2) {
        console.log(1);
        process.exit(0);
      }
    }

    if (
      input[0][i] === input[1][i] ||
      input[0][i] === input[2][i] ||
      input[1][i] === input[2][i]
    ) {
      if (input[0][i] === 2 || input[1][i] === 2 || input[2][i] === 2) {
        console.log(1);
        process.exit(0);
      }
    }
  }

  console.log(price);
  process.exit(0);
});

// 무식하게 푼듯
