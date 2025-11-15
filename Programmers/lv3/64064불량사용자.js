// https://school.programmers.co.kr/learn/courses/30/lessons/64064

//
function solution(user_id, banned_id) {
	const n = banned_id.length;
	const list = Array.from({ length: n }, () => []);
	const set = new Set();

	// 각 banned 패턴에 매칭되는 user 인덱스 목록 만들기
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < user_id.length; j++) {
			if (scan(banned_id[i], user_id[j])) list[i].push(j);
		}
	}

	const visited = Array(user_id.length).fill(false);

	function dfs(depth) {
		if (depth === n) {
			// 현재 선택된 제재 아이디 조합을 정렬 후 문자열로 변환
			const key = visited
				.map((v, i) => (v ? i : -1))
				.filter((v) => v !== -1)
				.join(',');

			set.add(key); // 중복 제거
			return;
		}

		for (const target of list[depth]) {
			if (visited[target]) continue;

			visited[target] = true;
			dfs(depth + 1);
			visited[target] = false;
		}
	}

	dfs(0);

	return set.size;
}

function scan(pattern, user) {
	if (pattern.length !== user.length) return false;
	for (let i = 0; i < pattern.length; i++) {
		if (pattern[i] !== '*' && pattern[i] !== user[i]) return false;
	}
	return true;
}

// 틀린코드 : 벤 당한 순서를 고려해버림..

function solution(user_id, banned_id) {
	const n = banned_id.length;
	const list = Array.from(Array(n), () => []);
	let result = 0;

	for (let i = 0; i < n; i++) {
		user_id.forEach((id, idx) => {
			if (scan(banned_id[i], id)) list[i].push(idx);
		});
	}

	const visited = Array(user_id.length).fill(false);

	dfs(0);

	function dfs(depth) {
		if (depth === n) {
			console.log(depth, visited);

			return result++;
		}

		const cur = list[depth];

		for (let i = 0; i < cur.length; i++) {
			const target = cur[i];
			if (visited[target]) continue;

			visited[target] = true;
			dfs(depth + 1);
			visited[target] = false;
		}
	}

	return result;
}

function scan(a, b) {
	// a : 벤 아이디 , b : user
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i] && a[i] !== '*') return false;
	}
	return true;
}
