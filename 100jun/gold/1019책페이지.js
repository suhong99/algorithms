const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();
// 각각의 자릿수를 담은 배열
const numberList = input.split('').map(Number);
// 입력값 number로 변환
const number = +input;

//0~9까지 반복되는 횟수
let sames = 0;

const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 자릿수
const digit = numberList.length;

for (let i = digit - 1; i >= 0; i--) {
  const depth = 10 ** (digit - i);
  //
  sames += parseInt(number / depth) - 1;
  const target = numberList[i];
  if (target === 0 && digit - i !== 1) {
    answer[0] -= depth / 10 - 1 - (number % (depth / 10));
  }
  for (let j = target; j >= 1; j--) {
    if (j === target) {
      answer[j] += (number % (depth / 10)) + 1;
    } else {
      answer[j] += depth / 10;
    }
  }
}

let counts = answer.map((e) => e + sames).join(' ');
console.log(counts);
