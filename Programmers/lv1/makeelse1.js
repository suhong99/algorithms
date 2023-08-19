//  https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 나눌 경우 나머지가 1이 되게 하는 최소의 수

// 나눌 수의 제곱근보다 작은 소수들을 구함
//target-1  해당 소수들로 나눴을 때, 나누어 떨어지지 않는 경우 target-1을 반환 아니면 나누어지게 하는 해당 값을 반환

function solution(n) {
  const min = n - 1;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (min % i === 0) {
      return i;
    }
  }
  return min;
}
function solution2(n) {
  const min = n - 1;
  const prime = new Array(n + 1).fill(1);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (prime[i]) {
      if (min % i === 0) {
        return i;
      }
      // 배수값들 거르는 작업
      for (let j = i ** 2; j <= n; j += i) {
        if (prime[j]) prime[j] = 0;
      }
    }
  }
  return min;
}

function solution3(n) {
  const min = n - 1;
  const prime = new Array(n + 1).fill(1);
  const limit = Math.sqrt(n);
  for (let i = 2; i < limit; i++) {
    if (prime[i]) {
      if (min % i === 0) {
        return i;
      }
      // 배수값들 거르는 작업
      for (let j = i ** 2; j <= n; j += i) {
        if (prime[j]) prime[j] = 0;
      }
    }
  }
  return min;
}
