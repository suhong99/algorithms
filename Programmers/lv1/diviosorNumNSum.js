//문제 링크
//https://school.programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    count % 2 ? (sum -= i) : (sum += i);
  }
  return sum;
}

console.log(solution(13, 14));

//다른사람의 풀이
//제곱근의 수가 정수면 약수가 홀수
