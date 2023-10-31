const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
  if (maxValue < arr[i]) maxValue = arr[i];
}

console.log(minValue, maxValue);

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

let minValue = arr.reduce((a, b) => Math.min(a, b));
let maxValue = arr.reduce((a, b) => Math.max(a, b));

console.log(minValue, maxValue);
*/
