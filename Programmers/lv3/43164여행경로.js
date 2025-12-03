// https://school.programmers.co.kr/learn/courses/30/lessons/43164

// 1. 시간제한이 딱히 없음.
// 2. 출발지를 key값으로 도착지를 저장
// 3. 도착지를 알파벳순으로 정렬(가능한 케이스가 여러개인 경우 알파벳순으로 정답 도출하기 위해서)
// 4. 완탐 (방문처리 대신 배열을 가공)

function solution(tickets) {
	const graph = {};

	for (const [from, to] of tickets) {
		if (!graph[from]) graph[from] = [];
		graph[from].push(to);
	}

	for (const key in graph) {
		graph[key].sort();
	}

	const result = [];
	const total = tickets.length;

	function dfs(airport) {
		result.push(airport);

		if (result.length === total + 1) {
			return true;
		}

		const destinations = graph[airport];
		if (!destinations) {
			result.pop();
			return false;
		}

		for (let i = 0; i < destinations.length; i++) {
			const next = destinations[i];

			destinations.splice(i, 1);
			if (dfs(next)) return true;
			destinations.splice(i, 0, next);
		}

		result.pop();
		return false;
	}

	dfs('ICN');

	return result;
}
