// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let answer = [];
  let x = Math.min(n, m);
  let y = Math.max(n, m);
  for (let i = 1; i <= x; i++) {
    if (x % i == 0 && y % (x / i) == 0) {
      answer.push(x / i);
      answer.push(i * y); // x/i가 최대 공약수 이므로 x*y /(x/i)
      break;
    }
  }
  return answer;
}

// 유클리드 호제법

function solution(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
