const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

const array = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
];

for (let i = 18; i <= 100; i++) {
  array.push((array[i - 1] + array[i - 2]) % 1000000007);
}

console.log(array);
