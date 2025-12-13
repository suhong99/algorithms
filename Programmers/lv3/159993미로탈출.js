// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {
	const y = maps.length;
	const x = maps[0].length;

	let start, end, lever;

	for (let i = 0; i < y; i++) {
		for (let j = 0; j < x; j++) {
			if (maps[i][j] === 'S') start = [i, j];
			if (maps[i][j] === 'E') end = [i, j];
			if (maps[i][j] === 'L') lever = [i, j];
		}
	}

	const bfs = (from, to) => {
		const visited = Array.from({ length: y }, () => Array(x).fill(false));
		const queue = [];
		let head = 0;

		queue.push([...from, 0]); // [row, col, time]
		visited[from[0]][from[1]] = true;

		const dirs = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];

		while (head < queue.length) {
			const [cy, cx, time] = queue[head++];

			if (cy === to[0] && cx === to[1]) return time;

			for (const [dy, dx] of dirs) {
				const ny = cy + dy;
				const nx = cx + dx;

				if (ny < 0 || nx < 0 || ny >= y || nx >= x || visited[ny][nx] || maps[ny][nx] === 'X') continue;

				visited[ny][nx] = true;
				queue.push([ny, nx, time + 1]);
			}
		}

		return -1;
	};

	const toLever = bfs(start, lever);
	if (toLever === -1) return -1;

	const toExit = bfs(lever, end);
	if (toExit === -1) return -1;

	return toLever + toExit;
}
