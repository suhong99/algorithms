const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0, ...input[1].split(' ').map(Number)];

let sum = [0];
for (let i = 1; i <= n; i++) {
  sum[i] = sum[i - 1] + arr[i];
}

let processed = [];
let counter = {};
for (let i = 0; i <= n; i++) {
  processed[i] = sum[i] % m;
  if (processed[i] in counter) counter[processed[i]] += 1;
  else counter[processed[i]] = 1;
}

let result = 0;
for (let i = 0; i < m; i++) {
  if (i in counter) result += parseInt((counter[i] * (counter[i] - 1)) / 2);
}

console.log(result);
/*

//시간초과
const [arrayLength, m] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

const prefix = [0];
for (let i = 0; i < arrayLength; i++) {
  prefix.push((prefix[i] + array[i]) % m);
}

let count = 0;
for (let i = 0; i < arrayLength; i++) {
  const start = prefix[i];
  for (let j = i + 1; j <= arrayLength; j++) {
    if (start === prefix[j]) {
      count++;
    }
  }
}

console.log(count);
*/
