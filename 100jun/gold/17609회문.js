const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\r\n');

for (let t = 1; t < input.length; t++) {
  let count = 0;
  let left = true;
  let right = true;
  const length = input[t].length;

  for (let i = 0; i < length / 2; i++) {
    if (count === 0) {
      if (input[t][i] === input[t][length - 1 - i]) {
        continue;
      } else {
        count++;
      }
    }

    if (count === 1) {
      if (left && input[t][i + 1] !== input[t][length - 1 - i]) {
        left = false;
      }
      if (right && input[t][i] !== input[t][length - 2 - i]) {
        right = false;
      }

      if (!left && !right) {
        count++;
        break;
      }
    }
  }
  console.log(count);
}
