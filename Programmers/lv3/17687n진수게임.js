// https://school.programmers.co.kr/learn/courses/30/lessons/17687

/**
 * 진법 변환 toString 때문에 js는 쉽게 풀 수 있는 문제..
 */

function solution(n, t, m, p) {
  let result = "";
  let total = "";
  let num = 0;

  // 총 필요한 문자 수는 t * m 이상이어야 함
  while (total.length < t * m) {
    total += num.toString(n); // 진법 변환 후 대문자 처리
    num++;
  }

  // 튜브가 말해야 할 문자만 추출
  for (let i = 0; i < t; i++) {
    ``;
    result += total[i * m + (p - 1)];
  }

  return result.toUpperCase();
}
console.log(solution(2, 4, 2, 1)); //	"0111"
console.log(solution(16, 16, 2, 1)); //	"02468ACE11111111"
console.log(solution(16, 16, 2, 2)); //	"13579BDF01234567"
