function solution(maps) {
	const n = maps[0].length;
	const m = maps.length;

	let dist = Array.from(Array(m), () => Array(n).fill(Infinity));

	let queue = [[0, 0]];
	dist[0][0] = 1;

	while (queue.length > 0) {
		const [x, y] = queue.shift();

		const d = dist[y][x];

		if (x > 0 && maps[y][x - 1] === 1 && dist[y][x - 1] > d + 1) {
			dist[y][x - 1] = d + 1;
			queue.push([x - 1, y]);
		}

		if (x < n - 1 && maps[y][x + 1] === 1 && dist[y][x + 1] > d + 1) {
			dist[y][x + 1] = d + 1;
			queue.push([x + 1, y]);
		}

		if (y > 0 && maps[y - 1][x] === 1 && dist[y - 1][x] > d + 1) {
			dist[y - 1][x] = d + 1;
			queue.push([x, y - 1]);
		}

		if (y < m - 1 && maps[y + 1][x] === 1 && dist[y + 1][x] > d + 1) {
			dist[y + 1][x] = d + 1;
			queue.push([x, y + 1]);
		}
	}

	return dist[m - 1][n - 1] === Infinity ? -1 : dist[m - 1][n - 1];
}
