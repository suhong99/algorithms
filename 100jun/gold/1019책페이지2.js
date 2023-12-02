function solution(input) {
  const numberList = input.split('').map(Number);
  const number = +input;

  let sames = 0;

  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const digit = numberList.length;

  for (let i = digit - 1; i >= 0; i--) {
    const depth = 10 ** (digit - i);
    sames += (parseInt(number / depth) * depth) / 10;
    const target = numberList[i];
    if (target === 0 && digit - i !== 1) {
      answer[0] -= depth / 10 - 1 - (number % (depth / 10));
    }
    for (let j = target; j >= 1; j--) {
      if (j === target) {
        answer[j] += (number % (depth / 10)) + 1;
      } else {
        answer[j] += depth / 10;
      }
    }
  }

  let counts = answer.map((e) => e + sames).join(' ');
  console.log(counts);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;

  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
