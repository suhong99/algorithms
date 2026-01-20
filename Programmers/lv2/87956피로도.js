function solution(k, dungeons) {
	let answer = 0;
	const n = dungeons.length;
	const visited = Array(n).fill(false);

	function dfs(currentK, count) {
		answer = Math.max(answer, count);

		for (let i = 0; i < n; i++) {
			if (!visited[i] && currentK >= dungeons[i][0]) {
				visited[i] = true;
				dfs(currentK - dungeons[i][1], count + 1);
				visited[i] = false;
			}
		}
	}

	dfs(k, 0);
	return answer;
}
