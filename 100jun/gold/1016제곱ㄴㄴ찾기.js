// // https://www.acmicpc.net/submit/1016

// // const fs = require('fs');
// // const [min, max] = fs
// //   .readFileSync('/dev/stdin')
// //   .toString()
// //   .trim()
// //   .split(' ')
// //   .map(Number);

// const [min, max] = [10, 20000];
// let count = max - min + 1;

// const prime = new Array(max + 1).fill(1);

// for (let i = 2; i <= Math.sqrt(max); i++) {
//   if (prime[i]) {
//     for (let j = i ** 2; j <= max; j += i) {
//       if (prime[j]) prime[j] = 0;
//     }
//   }
// }

// for (let i = 2; i <= Math.sqrt(max); i++) {
//   if (prime[i]) {
//     // console.log(prime[i], i);
//     console.log(i, count, Math.floor(max / (i * i)), '인덱스와 count');
//     count -= Math.floor(max / (i * i));
//   }
// }

// console.log(count);

const [min, max] = [50000000, 51000000];

let count = max - min + 1;

const prime = new Array(max + 1).fill(1);

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (prime[i]) {
    for (let j = i ** 2; j <= max; j += i) {
      if (prime[j]) prime[j] = 0;
    }
  }
}

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (prime[i]) {
    count -= Math.floor(max / (i * i));
    count += Math.floor(min / (i * i));
  }
}

console.log(count);
