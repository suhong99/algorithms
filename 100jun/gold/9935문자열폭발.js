// const fs = require('fs');
// let [string, bomb] = fs
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .split('\n');

// while (true) {
//   string = string.replaceAll(bomb, '');
//   if (string === string.replaceAll(bomb, '')) {
//     break;
//   }
// }

// console.log(string === '' ? 'FRULA' : string);

/// 메모리 통과
// const fs = require('fs');
// let [string, bomb] = fs
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .split('\n');

// const bombLength = bomb.length;
// let result = [];
// let resultIndex = 0;

// for (let i = 0; i < string.length; i++) {
//   result[resultIndex++] = string[i];

//   if (
//     resultIndex >= bombLength &&
//     result.slice(resultIndex - bombLength, resultIndex).join('') === bomb
//   ) {
//     resultIndex -= bombLength;
//   }
// }

// console.log(
//   resultIndex === 0 ? 'FRULA' : result.slice(0, resultIndex).join('')
// );

// 다른사람이 푼거
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
let str = input[0];
let bomb = input[1];
let bomLen = bomb.length;
let stack = [];
let top = 0;

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  top = str[i];
  if (top === bomb[bomLen - 1]) {
    let last = stack.slice(-bomLen);
    if (last.join('') === bomb) stack.splice(-bomLen);
  }
}
console.log(stack.length ? stack.join('') : 'FRULA');
