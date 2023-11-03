/*


const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\r\n');

const n = Number(input[0]);
let budget = Number(input[2]);
const sortedAssets = input[1]
  .split(' ')
  .map((e) => {
    const asset = Number(e);
    budget -= asset;
    return asset;
  })
  .sort((a, b) => a - b);
let maxAsset = sortedAssets[sortedAssets.length - 1];

if (budget < 0) {
  let city = 0;
  for (let i = sortedAssets.length - 2; i >= 0; i--) {
    budget += (sortedAssets[i + 1] - sortedAssets[i]) * (city + 1);
    city++;
    if (budget >= 0) {
      maxAsset = sortedAssets[i] + Math.floor(budget / city);
      break;
    }

    if (i === 0) {
      maxAsset = sortedAssets[i] - Math.ceil(-budget / city);
    }
  }
}

console.log(maxAsset);

*/

const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\r\n');

const n = Number(input[0]);
let budget = Number(input[2]);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= budget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
