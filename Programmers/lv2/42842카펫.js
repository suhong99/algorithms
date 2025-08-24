// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
	const total = brown + yellow;

	for (let i = 1; i <= Math.sqrt(yellow); i++) {
		if (yellow % i === 0) {
			if ((i + 2) * (yellow / i + 2) === total) {
				return [yellow / i + 2, i + 2];
			}
		}
	}
}
