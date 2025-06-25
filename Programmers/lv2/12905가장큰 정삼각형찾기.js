function solution(board) {
	const rowLen = board.length;
	const colLen = board[0].length;
	let max = 0;

	const dp = Array.from({ length: rowLen }, () => Array(colLen).fill(0));

	for (let i = 0; i < rowLen; i++) {
		for (let j = 0; j < colLen; j++) {
			if (i === 0 || j === 0) {
				dp[i][j] = board[i][j];
			} else if (board[i][j] === 1) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
			}
			max = Math.max(max, dp[i][j]);
		}
	}

	return max * max;
}

console.log(
	solution([
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
	]),
);
