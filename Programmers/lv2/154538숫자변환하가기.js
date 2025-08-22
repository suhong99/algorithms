function solution(x, y, n) {
	const inf = 10 ** 7;
	const visited = Array(y + 1).fill(inf); // y까지 탐색
	visited[x] = 0;

	const queue = [[x, 0]];
	// shift로 구현시 연산시간 때문에 시간초과가 뜸
	let head = 0; // 큐 포인터

	while (head < queue.length) {
		const [cur, cnt] = queue[head++]; // shift 대신

		// 목표 도달
		if (cur === y) return cnt;

		// 다음 상태들
		for (const next of [cur + n, cur * 2, cur * 3]) {
			if (next <= y && visited[next] > cnt + 1) {
				visited[next] = cnt + 1;
				queue.push([next, cnt + 1]);
			}
		}
	}

	return -1;
}
