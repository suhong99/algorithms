const fs = require('fs');
let [A, B, C] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(BigInt);

const DNQ = (input) => {
  if (B === 0n) {
    return 1n % C;
  }

  let result = 1n;
  A = A % C;

  while (B > 0n) {
    if (B % 2n === 1n) {
      result = (result * A) % C;
    }
    B = B / 2n;
    A = (A * A) % C;
  }

  return result;
};

console.log(DNQ(B).toString());
