// https://school.programmers.co.kr/learn/courses/30/lessons/132266

function solution(n, roads, sources, destination) {
	const graph = Array.from({ length: n + 1 }, () => []);
	for (const [a, b] of roads) {
		graph[a].push(b);
		graph[b].push(a);
	}

	const dist = Array(n + 1).fill(-1);
	const queue = [];

	dist[destination] = 0;
	queue.push(destination);

	let head = 0;

	while (head < queue.length) {
		const cur = queue[head++];

		for (const next of graph[cur]) {
			if (dist[next] === -1) {
				dist[next] = dist[cur] + 1;
				queue.push(next);
			}
		}
	}

	return sources.map((s) => dist[s]);
}
