// https://school.programmers.co.kr/learn/courses/30/lessons/12938/solution_groups?language=javascript

function solution(n, s) {
	if (s < n) return [-1];

	const share = Math.floor(s / n);
	const spare = s % n;

	return Array(n - spare)
		.fill(share)
		.concat(Array(spare).fill(share + 1));
}
