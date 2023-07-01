//https://school.programmers.co.kr/learn/courses/30/lessons/136798

//시간초과
function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    //약수구하기
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
        if (count > limit) {
          count = power;
          break;
        }
      }
    }
    answer += count;
  }
  return answer;
}

//console.log(solution(5, 3, 2));

//시간초과
function solution(number, limit, power) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    let current = i;
    let deviderList = {};
  }
  return answer;
}

console.log(solution1(10, 3, 2));
