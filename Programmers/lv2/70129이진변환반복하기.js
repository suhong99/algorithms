// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
	let answer = 0;
	let totalDeleted = 0;
	while (s.length > 1) {
		const [newS, erazedCount] = convert(s);
		s = newS;
		totalDeleted += erazedCount;
		answer++;
	}

	return [answer, totalDeleted];
}

function convert(s) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '1') {
			count++;
		}
	}
	return [count.toString(2), s.length - count];
}
