//https://school.programmers.co.kr/learn/courses/30/lessons/72413

// n : 지점 갯수 ,s: 출발지점 , a,b : A와 B의 각각의 도착지점 ,fare: 운임비 배열
function solution(n, s, a, b, fares) {
	const INF = 1e9;

	// 1. 거리 배열 초기화
	const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

	for (let i = 1; i <= n; i++) {
		dist[i][i] = 0;
	}

	// 2. 주어진 간선 정보 삽입
	for (const [u, v, w] of fares) {
		dist[u][v] = w;
		dist[v][u] = w;
	}

	// 3. 플로이드-워셜 알고리즘
	for (let k = 1; k <= n; k++) {
		for (let i = 1; i <= n; i++) {
			for (let j = 1; j <= n; j++) {
				if (dist[i][j] > dist[i][k] + dist[k][j]) {
					dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
		}
	}

	// 4. 합승 경유지 k를 기준으로 최소값 탐색
	let minCost = INF;
	for (let k = 1; k <= n; k++) {
		const cost = dist[s][k] + dist[k][a] + dist[k][b];
		minCost = Math.min(minCost, cost);
	}

	return minCost;
}

console.log(
	solution(6, 4, 6, 2, [
		[4, 1, 10],
		[3, 5, 24],
		[5, 6, 2],
		[3, 1, 41],
		[5, 1, 24],
		[4, 6, 50],
		[2, 4, 66],
		[2, 3, 22],
		[1, 6, 25],
	]),
); //82
