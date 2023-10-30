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

/*

// 중첩 처리가 완벽치 않음
const [min, max] = [1, 1000];

let count = max - min + 1;

const prime = new Array(max + 1).fill(1);

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (prime[i]) {
    for (let j = i ** 2; j <= max; j += i) {
      if (prime[j]) prime[j] = 0;
    }
  }
}

console.log(prime);
for (let i = 2; i <= Math.sqrt(max); i++) {
  if (prime[i]) {
    count -= Math.floor(max / (i * i));
    count += Math.floor(min / (i * i));
  }
}

console.log(count);

*/

function sieveOfEratosthenes(max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let p = 2; p * p <= max; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= max; i += p) {
        isPrime[i] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

const [min, max] = [30000, 510000];
let count = max - min + 1;

const maxSqrt = Math.floor(Math.sqrt(max));
const primeNumber = sieveOfEratosthenes(maxSqrt);

let notNoNo = new Set();

for (let i = 0; i < primeNumber.length; i++) {
  const primeDouble = primeNumber[i] * primeNumber[i];
  const startPoint = Math.ceil(min / primeDouble);

  for (let j = startPoint; j <= max / primeDouble; j++) {
    notNoNo.add(j * primeDouble);
  }
}

console.log(count - notNoNo.size);
