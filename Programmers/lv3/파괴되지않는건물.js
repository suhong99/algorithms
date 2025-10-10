// https://school.programmers.co.kr/learn/courses/30/lessons/92344

// 1 누적합을 이용한 풀이
// 2 건물의 데미지 정보의 시작점과 끝점만 기록
// 3. 누적합을 통해 마지막에 각각의 건물이 입는 데미지를 계산

// https://tech.kakao.com/posts/488
function solution(board, skill) {
	const n = board.length;
	const m = board[0].length;

	// 누적합을 담아야하기에 배열보다 1칸 길게 설계 (끝점 +1을 해야해서)
	const acc = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

	// 스킬들을 차분 배열에 반영
	for (const s of skill) {
		const [type, r1, c1, r2, c2, degree] = s;
		const val = type === 1 ? -degree : degree;

		acc[r1][c1] += val;
		acc[r1][c2 + 1] -= val;
		acc[r2 + 1][c1] -= val;
		acc[r2 + 1][c2 + 1] += val;
	}

	// 행 기준 누적합 (왼쪽 -> 오른쪽)
	for (let i = 0; i < n; i++) {
		for (let j = 1; j < m; j++) {
			acc[i][j] += acc[i][j - 1];
		}
	}

	// 열 기준 누적합 (위 -> 아래)
	for (let j = 0; j < m; j++) {
		for (let i = 1; i < n; i++) {
			acc[i][j] += acc[i - 1][j];
		}
	}

	// 원래 보드에 적용하고 살아남은 건물 수 세기
	let answer = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (board[i][j] + acc[i][j] > 0) answer++;
		}
	}

	return answer;
}
