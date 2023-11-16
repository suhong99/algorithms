const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

// let first = input[0].split('');
// let second = input[1].split('');

// let table = Array.from(Array(input[0].length + 1), () =>
//   Array(input[1].length + 1).fill(0)
// );

// for (let i = 1; i <= first.length; i++) {
//   for (let k = 1; k <= second.length; k++) {
//     if (first[i - 1] === second[k - 1]) {
//       table[i][k] = table[i - 1][k - 1] + 1;
//     } else {
//       table[i][k] = Math.max(table[i - 1][k], table[i][k - 1]);
//     }
//   }
// }
// console.log(table[first.length][second.length]);

let first = input[0].split('');
let second = input[1].split('');
const firstLength = first.length;
const secondLength = second.length;
let table = Array.from(Array(firstLength + 1), () =>
  Array(secondLength + 1).fill(0)
);

for (let i = 1; i <= firstLength; i++) {
  for (let k = 1; k <= secondLength; k++) {
    if (first[i - 1] === second[k - 1]) {
      table[i][k] = table[i - 1][k - 1] + 1;
    } else {
      table[i][k] = Math.max(table[i - 1][k], table[i][k - 1]);
    }
  }
}
console.log(table[firstLength][secondLength]);
