// https://school.programmers.co.kr/learn/courses/30/lessons/42898/solution_groups?language=javascript
function solution(m, n, puddles) {
	const MOD = 1000000007;
	const dp = Array.from({ length: n }, () => Array(m).fill(0));

	puddles.forEach(([x, y]) => {
		dp[y - 1][x - 1] = -1; // 좌표 보정
	});

	dp[0][0] = 1;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (dp[i][j] === -1) continue;

			// 오른쪽
			if (j + 1 < m && dp[i][j + 1] !== -1) {
				dp[i][j + 1] = (dp[i][j + 1] + dp[i][j]) % MOD;
			}

			// 아래쪽
			if (i + 1 < n && dp[i + 1][j] !== -1) {
				dp[i + 1][j] = (dp[i + 1][j] + dp[i][j]) % MOD;
			}
		}
	}

	return dp[n - 1][m - 1];
}
