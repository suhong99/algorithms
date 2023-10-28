//https://www.acmicpc.net/problem/1003

// 시간 초과
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const T = +input[0];
/*  // 실패

const zeroOneCounterFailed = (input) => {
  let oneCount = 0;
  let zeroCount = 0;

  const fibonachi = (n) => {
    if (n === 0) {
      zeroCount++;
      return;
    }
    if (n === 1) {
      oneCount++;
      return;
    }
    return fibonachi(n - 1) + fibonachi(n - 2);
  };
  fibonachi(input);

  console.log(zeroCount + ' ' + oneCount);
};

for (let i = 1; i <= T; i++) {
    zeroOneCounterFailed(+input[i]);
}

*/

// let max = 0;
// for (let i = 1; i <= T; i++) {
//   if (max > +input[i]) {
//     max = +input[i];
//   }
// }

// if (max > 20) {
//   for (let i = 21; i <= max; i++) {
//     fibonachiIndex.push(fibonachiIndex[i - 1] + fibonachiIndex[i - 2]);
//   }
// }

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
const fibonachiIndex = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
  39088169, 63245986, 102334155,
];

const zeroOneCounter = (input) => {
  if (input === 0) {
    console.log(1 + ' ' + 0);
    return;
  }

  console.log(fibonachiIndex[input - 1] + ' ' + fibonachiIndex[input]);
};

for (let i = 1; i <= T; i++) {
  zeroOneCounter(+input[i]);
}

// 1 0  0
// 0 1  1
// 1 1  2
// 1 2  3
// 2 3  4 2
// 3 5  5 3
// 5 8  6
// 8 13

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
const fibonachiIndex = [
  '1 0',
  '0 1',
  '1 1',
  '1 2',
  '2 3',
  '3 5',
  '5 8',
  '8 13',
  '13 21',
  '21 34',
  '34 55',
  '55 89',
  '89 144',
  '144 233',
  '233 377',
  '377 610',
  '610 987',
  '987 1597',
  '1597 2584',
  '2584 4181',
  '4181 6765',
  '6765 10946',
  '10946 17711',
  '17711 28657',
  '28657 46368',
  '46368 75025',
  '75025 121393',
  '121393 196418',
  '196418 317811',
  '317811 514229',
  '514229 832040',
  '832040 1346269',
  '1346269 2178309',
  '2178309 3524578',
  '3524578 5702887',
  '5702887 9227465',
  '9227465 14930352',
  '14930352 24157817',
  '24157817 39088169',
  '39088169 63245986',
  '63245986 102334155',
];
const zeroOneCounter = (input) => {
  console.log(fibonachiIndex[input]);
};

for (let i = 1; i <= T; i++) {
  zeroOneCounter(+input[i]);
}
