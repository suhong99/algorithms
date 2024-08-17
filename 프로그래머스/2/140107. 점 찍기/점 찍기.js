function solution(k, d) {
  let answer = 0;
  const maxSqrt = d ** 2;
  for (let i = 0; i <= d; i += k) {
  
    answer += Math.floor(Math.sqrt(maxSqrt - i ** 2) / k) + 1;
  }
  return answer;
}

console.log(solution(2, 4));
