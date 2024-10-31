function solution(n) {
  if (n % 2 === 1) return 0;

  const last = n / 2;
  const dp = [1, 3, 11, 41, 153];
  for (let i = 4; i < last; i++) {
    // 점화식 홀수는 0 , 짝수는 전번 *4엣 전전번 값을 뺌
    const next = (dp[i] * 4 - dp[i - 1]) % 1000000007;
    dp.push(next >= 0 ? next : next + 1000000007);
  }

  return dp[last];
}

console.log(solution(14));

// testcase
// 6, 41
// 8, 153
// 10, 571
// 12, 2131
// 14, 7953
