// [좌상, 좌하, 상,중,하,우상,우하]
const numMap = [
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
];

// 숫자 변환시 필요한 횟수 , 10은 무작동
const diffGraph = Array(11)
  .fill(false)
  .map(() => []);

for (let i = 0; i < 11; i++) {
  for (let j = i; j < 11; j++) {
    let differces = 0;
    for (let k = 0; k < 7; k++) {
      if (numMap[i][k] !== numMap[j][k]) differces++;
    }
    diffGraph[i][j] = differces;
    diffGraph[j][i] = differces;
  }
}

const md = require('readline');
const rl = md.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' '));
}).on('close', () => {
  const trial = input[0][0];
  function compareDiff(x, y) {
    const gap = x.length - y.length;
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      if (i < gap) {
        sum += diffGraph[x[i]][10];
      } else {
        sum += diffGraph[x[i]][y[i - gap]];
      }
    }
    return sum;
  }

  for (let i = 1; i <= trial; i++) {
    const [a, b] = input[i];
    const answer = a.length < b.length ? compareDiff(b, a) : compareDiff(a, b);
    console.log(answer);
  }
  process.exit(0);
});
