const fs = require('fs');
const [ball, basket] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

const min = (basket * (basket + 1)) / 2;
if (min > ball) {
  console.log(-1);
} else {
  (ball - min) % basket === 0 ? console.log(basket - 1) : console.log(basket);
}
