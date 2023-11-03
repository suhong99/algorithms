const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\r\n');

let [trial, remainPrice] = input[0].split(' ').map(Number);
let count = 0;
for (let i = trial; i > 0; i--) {
  count += Math.floor(remainPrice / +input[i]);
  remainPrice = remainPrice % +input[i];
  if (remainPrice === 0) {
    console.log(count);
    return;
  }
}
