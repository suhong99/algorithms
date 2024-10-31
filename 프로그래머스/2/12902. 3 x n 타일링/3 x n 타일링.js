function solution(n) {
  if (n % 2 === 1) return 0;

  const last = n / 2;
  const dp = [1, 3, 11, 41, 153];
  for (let i = 4; i < last; i++) {
    const next = (dp[i] * 4 - dp[i - 1]) % 1000000007;
    dp.push(next >= 0 ? next : next + 1000000007);
  }

  return dp[last];
}
