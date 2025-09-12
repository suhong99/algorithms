// https://school.programmers.co.kr/learn/courses/30/lessons/12907

function solution(n, money) {
	const dp = Array(n + 1).fill(0);
	dp[0] = 1;
	for (let i = 0; i < money.length; i++) {
		const rest = money[i];
		for (let j = rest; j <= n; j++) {
			dp[j] = (dp[j] + dp[j - rest]) % 1000000007;
			// 계산을 더하고 나누면 시간초과함
		}
	}

	return dp[n];
}

solution(5, [1, 2, 5]);
