// https://school.programmers.co.kr/learn/courses/30/lessons/161988

function solution(sequence) {
	const n = sequence.length;

	let max1 = -Infinity,
		cur1 = 0;
	let max2 = -Infinity,
		cur2 = 0;

	for (let i = 0; i < n; i++) {
		const sign = i % 2 === 0 ? 1 : -1;

		const v1 = sequence[i] * sign;
		const v2 = sequence[i] * -sign;

		cur1 = Math.max(v1, cur1 + v1);
		cur2 = Math.max(v2, cur2 + v2);

		max1 = Math.max(max1, cur1);
		max2 = Math.max(max2, cur2);
	}

	return Math.max(max1, max2);
}
