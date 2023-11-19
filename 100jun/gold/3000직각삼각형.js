const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const array = [];
const yCount = new Array(100001).fill(0);
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  if (array[x] === undefined) {
    array[x] = [y];
    yCount[y]++;
  } else {
    array[x].push(y);
    yCount[y]++;
  }
}

let result = 0;
// for (let i = 1; i < array.length; i++) {
//   if (array[i] && array[i].length > 1) {
//     for (let j = 0; j < array[i].length; j++) {
//       for (let k = j + 1; k < array[i].length; k++) {
//         result += yCount[array[i][j]] - 1;
//         result += yCount[array[i][k]] - 1;
//       }
//     }
//   }
// }

for (let i = 1; i < array.length; i++) {
  if (array[i] && array[i].length > 1) {
    for (let j = 0; j < array[i].length; j++) {
      result += (yCount[array[i][j]] - 1) * (array[i].length - 1);
    }
  }
}
console.log(result);
