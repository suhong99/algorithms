const fs = require('fs');
let input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

let d = new Array(input + 1).fill(0);

for (let x = 2; x <= input; x++) {
  d[x] = d[x - 1];
  if (x % 2 === 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)]);
  }
  if (x % 3 === 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)]);
  }
  d[x]++;
}
console.log(d[input]);
