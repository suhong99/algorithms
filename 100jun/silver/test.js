const fibonachiIndex = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
  39088169, 63245986,
];

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

const zeroOneCounter = (input) => {
  if (input === 0) {
    console.log(1 + ' ' + 0);
    return;
  }

  console.log(fibonachiIndex[input - 1] + ' ' + fibonachiIndex[input]);
};

// for (let i = 1; i <= T; i++) {
//   zeroOneCounter(+input[i]);
// }
zeroOneCounter(0);
zeroOneCounter(1);
zeroOneCounter(2);
zeroOneCounter(3);
zeroOneCounter(4);
zeroOneCounter(5);
zeroOneCounter(6);
zeroOneCounter(7);

zeroOneCounter(16);
