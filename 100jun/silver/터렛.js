// https://www.acmicpc.net/problem/1002
// 터렛문제 제출용
// 3
// 0 0 13 40 0 37
// 0 0 3 0 7 4
// 1 1 1 1 1 5

// 입력값 받기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫번쨰가 횟수로 해당 수만큼 반복문 돌림
const T = +input[0];
for (let i = 1; i <= T; i++) {
  // 구조 분해 정수로 바꿈
  const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  // 거리 측정
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (distance === 0 && r1 === r2) {
    console.log(-1);
  } else if (distance > r1 + r2 || distance < Math.abs(r1 - r2)) {
    console.log(0);
  } else if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) {
    console.log(1);
  } else {
    console.log(2);
  }
}
