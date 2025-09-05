// https://school.programmers.co.kr/learn/courses/30/lessons/87390

// 규칙 행과 열에 따라서 k번째 숫자가 결정됨

function solution(n, left, right) {
	const result = [];

	for (let k = left; k <= right; k++) {
		const row = Math.floor(k / n);
		const col = k % n;
		result.push(Math.max(row, col) + 1); // 몇 번째 행이냐 따라서 열의 값을 결정
	}

	return result;
}
