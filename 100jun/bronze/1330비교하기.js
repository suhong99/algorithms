const fs = require('fs');
const [left, right] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

if (left > right) {
  console.log('>');
} else if (left < right) {
  console.log('<');
} else {
  console.log('==');
}
