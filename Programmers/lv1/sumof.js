// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  for (i = 1; i ** 2 <= n; i++) {
    if (n % i == 0) n / i == i ? (answer += i) : (answer += i + n / i);
  }

  return answer;
}

console.log(solution(36));
