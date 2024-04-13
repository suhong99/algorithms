const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const T = +input[0];
// for (let i = 1; i <= T; i++) {
//   let index = 0;
//   let state = true;
//   while (index < input[i].length) {
//     if (input[i][index] === '1' && input[i][index + 1] === '0') {
//       for (let j = index + 2; index < input[i].length; j++) {
//         if (input[i][j] === '1') {
//           index = j + 1;
//           break;
//         }
//       }
//     } else if (input[i][index] === '0' && input[i][index + 1] === '1') {
//       index += 2;
//     } else {
//       state = false;
//       break;
//     }
//   }

//   console.log(state ? 'YES' : 'NO');
// }

for (let i = 1; i <= T; i++) {
  const pattern = /^(100+1+|01)+$/;
  const result = pattern.test(input[i]);
  console.log(result ? 'YES' : 'NO');
}
