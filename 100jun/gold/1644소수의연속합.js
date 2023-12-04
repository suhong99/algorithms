const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

const prime = new Array(input + 1).fill(true);
const primeNumbers = [];

for (let i = 2; i <= input; i++) {
  if (prime[i]) {
    primeNumbers.push(i);
    for (let j = i ** 2; j <= input; j += i) {
      if (prime[j]) prime[j] = false;
    }
  }
}

let start = 0;
let end = 0;
let sum = 2;
let count = 0;
while (end < primeNumbers.length) {
  if (sum === input) {
    count++;
    sum -= primeNumbers[start++];
  } else if (sum < input) {
    sum += primeNumbers[++end];
  } else {
    sum -= primeNumbers[start++];
  }
}

console.log(count ? count : -1);
