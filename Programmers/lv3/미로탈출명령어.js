function solution(n, m, x, y, r, c, k) {
	const dirs = { d: [1, 0], l: [0, -1], r: [0, 1], u: [-1, 0] };
	const order = ['d', 'l', 'r', 'u'];

	const dist = (a, b, c, d) => Math.abs(a - c) + Math.abs(b - d);

	// 불가능한 경우
	const minDist = dist(x, y, r, c);
	if (minDist > k || (k - minDist) % 2 !== 0) return 'impossible';

	let path = '';
	let steps = 0;

	while (steps < k) {
		// 각 우선순위로 정렬된 방향에 대해서
		for (let d of order) {
			const [dx, dy] = dirs[d];
			const nx = x + dx;
			const ny = y + dy;

			// 이동 불가능하면 다음 방향
			if (nx < 1 || nx > n || ny < 1 || ny > m) continue;

			// 잔여거리, 이동에 필요한 거리
			const remaining = k - (steps + 1);
			const need = dist(nx, ny, r, c);

			// 이동 가능하다면 이동
			if (need <= remaining && (remaining - need) % 2 === 0) {
				path += d;
				x = nx;
				y = ny;
				steps++;
				break;
			}
		}
	}

	return path;
}
