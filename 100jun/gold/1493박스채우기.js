const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\r\n');

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

const [length, width, height] = input[0].split(' ').map(Number);
let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  cubes[a] = b;
}

let size = 19;

size = nearestSquare(length);

size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i;

  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if (used === length * width * height) {
  console.log(res);
} else console.log(-1);
