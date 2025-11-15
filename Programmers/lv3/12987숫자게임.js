// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => a - b);

	let i = 0;
	let j = 0;
	let score = 0;

	while (i < A.length && j < B.length) {
		if (B[j] > A[i]) {
			score++;
			i++;
			j++;
		} else {
			j++;
		}
	}

	return score;
}
