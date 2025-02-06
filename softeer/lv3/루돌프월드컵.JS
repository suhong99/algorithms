const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let powers;
rl.on('line', (line) => {
  powers = line.split(' ').map(Number);
}).on('close', () => {
  const battleArr = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ];

  let probSum = 0.0;

  // 1. 모든 경기 결과 조합 생성
  const battleResultArr = [];
  const battleStack = [];
  generateBattles(battleStack, battleResultArr);

  // 2. 각 조합에서 루돌프 승점 및 확률 계산
  for (const resultArr of battleResultArr) {
    const points = Array(4).fill(0);
    let probSumTmp = 1.0;

    for (let idx = 0; idx < resultArr.length; idx++) {
      const rst = resultArr[idx];
      const [i, j] = battleArr[idx];

      if (rst === 'W') {
        points[i] += 3;
        probSumTmp *= winProbability(powers[i], powers[j]);
      } else if (rst === 'L') {
        points[j] += 3;
        probSumTmp *= loseProbability(powers[i], powers[j]);
      } else if (rst === 'S') {
        points[i] += 1;
        points[j] += 1;
        probSumTmp *= sameProbability(powers[i], powers[j]);
      }
    }

    const biggerThan1st = points.slice(1).filter((p) => p > points[0]).length;

    if (biggerThan1st <= 1) {
      probSum += probSumTmp;
    }
  }

  console.log((probSum * 100).toFixed(3));
});

// 모든 경기 결과 조합 생성 함수
function generateBattles(stack, resultArr) {
  if (stack.length === 6) {
    resultArr.push([...stack]);
    return;
  }

  const results = ['W', 'L', 'S'];
  for (const rst of results) {
    stack.push(rst);
    generateBattles(stack, resultArr);
    stack.pop();
  }
}

function winProbability(Fi, Fj) {
  return (4.0 * Fi) / (5 * Fi + 5 * Fj);
}

function loseProbability(Fi, Fj) {
  return (4.0 * Fj) / (5 * Fi + 5 * Fj);
}

function sameProbability(Fi, Fj) {
  return (Fi + Fj) / (5.0 * Fi + 5.0 * Fj);
}
