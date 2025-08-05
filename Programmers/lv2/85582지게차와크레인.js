function solution(storage, requests) {
	const n = storage.length;
	const m = storage[0].length;
	const grid = storage.map((row) => row.split(''));
	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	// padding 처리 (테두리에 빈 공간 추가)
	const padded = Array.from({ length: n + 2 }, (_, i) =>
		Array.from({ length: m + 2 }, (_, j) => (i === 0 || i === n + 1 || j === 0 || j === m + 1 ? '' : grid[i - 1][j - 1])),
	);

	const inBounds = (x, y) => x >= 0 && x < n + 2 && y >= 0 && y < m + 2;

	for (const req of requests) {
		const target = req[0];
		const visit = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
		const queue = [[0, 0]];
		visit[0][0] = true;

		const toRemove = [];

		while (queue.length) {
			const [x, y] = queue.pop();

			for (const [dx, dy] of dirs) {
				const nx = x + dx;
				const ny = y + dy;

				if (!inBounds(nx, ny) || visit[nx][ny]) continue;

				visit[nx][ny] = true;

				if (padded[nx][ny] === target) {
					toRemove.push([nx, ny]);
				}

				// 지게차: 빈 공간만 이동
				if (req.length === 1 && padded[nx][ny] === '') {
					queue.push([nx, ny]);
				}
				// 크레인: 다 돌 수 있음
				else if (req.length === 2) {
					queue.push([nx, ny]);
				}
			}
		}

		for (const [x, y] of toRemove) {
			padded[x][y] = '';
		}
	}

	// 남은 컨테이너 세기
	let result = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (padded[i][j] !== '') result++;
		}
	}

	return result;
}
