const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

const a = input[0];
let b = input[1];

//최소값이지만 결국 하나는 해당함
let result = 1;
let flag = false;
while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }

  if (b % 2 === 0) {
    b = b / 2;
  } else if (b % 10 === 1) {
    b = Math.floor(b / 10);
  } else {
    break;
  }
  result++;
}

flag ? console.log(result) : console.log(-1);
