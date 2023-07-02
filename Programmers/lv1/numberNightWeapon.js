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
function solution1(number, limit, power) {
  let answer = 0;
  //약수의 개수
  for (let j = 1; j <= number; j++) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(j); i++) {
      if (j % i === 0) {
        if (j / i != i) {
          count += 2;
        } else {
          count++;
        }
      }
    }
    if (count <= limit) {
      answer += count;
    } else {
      answer += power;
    }
  }

  return answer;
}

console.log(solution1(10, 3, 2));
