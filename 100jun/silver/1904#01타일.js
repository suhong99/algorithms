const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

let d = new Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= input; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[input]);
