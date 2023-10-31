const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const bookCount = +input[0];

let v = [];

let a = input[1].split(' ').map(Number);
v.push(a[0]);
for (let i = 1; i < N; i++) {
  const idx = v.findIndex((element) => element >= a[i]);
  if (idx !== -1) {
    v[idx] = a[i];
  } else {
    v.push(a[i]);
  }
}

console.log(N - v.length);
