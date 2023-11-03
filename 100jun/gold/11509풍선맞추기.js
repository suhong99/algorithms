const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const count = Number(input[0]);
let balloonList = input[1].split(' ').map(Number);

let answer = 0;
for (let i = 0; i < count; i++) {
  let h = balloonList[i];
  if (h) {
    answer++;
    h--;
    for (let j = i + 1; j < count; j++) {
      if (balloonList[j] && balloonList[j] === h) {
        h--;
        balloonList[j] = 0;
        if (h === 0) {
          break;
        }
      }
    }
  }
}

console.log(answer);

// 이중 반복문이라 안 좋은 코드
