// https://school.programmers.co.kr/learn/courses/30/lessons/49994

// 좌표 방문이 아니라 길 탐색이라 시작점 끝점 체크해야함

function solution(dirs) {
	let answer = 0;
	let pos = [0, 0];

	const visited = new Set();

	function move(d) {
		let [x, y] = pos;
		let nx = x;
		let ny = y;

		if (d === 'U') ny += 1;
		if (d === 'D') ny -= 1;
		if (d === 'R') nx += 1;
		if (d === 'L') nx -= 1;

		// 범위 벗어나면 무시
		if (nx < -5 || nx > 5 || ny < -5 || ny > 5) return;

		// 경로 기록 (양방향)
		const path1 = `${x},${y}-${nx},${ny}`;
		const path2 = `${nx},${ny}-${x},${y}`;

		// 처음 가는 길이면 카운트
		if (!visited.has(path1)) {
			visited.add(path1);
			visited.add(path2);
			answer++;
		}

		// 이동 적용
		pos = [nx, ny];
	}

	for (let d of dirs) {
		move(d);
	}

	return answer;
}
