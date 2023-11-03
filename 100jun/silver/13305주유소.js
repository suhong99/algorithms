const fs = require('fs');
const [n, distances, prices] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
const count = n * 1;
const distanceArr = distances.split(' ').map(Number);
const pricesArr = prices.split(' ').map(Number);

let minPrice = pricesArr[0];
let totalPrice = BigInt(minPrice * distanceArr[0]);
for (let i = 1; i < count - 1; i++) {
  if (minPrice > pricesArr[i]) {
    minPrice = pricesArr[i];
  }

  totalPrice += BigInt(minPrice * distanceArr[i]);
}

console.log(String(totalPrice));
