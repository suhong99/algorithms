//https://school.programmers.co.kr/learn/courses/30/lessons/12900
function solution(n) {
	if (n === 1) return 1;
	if (n === 2) return 2;

	let a = 1;
	let b = 2;

	for (let i = 3; i <= n; i++) {
		const temp = (a + b) % 1000000007;
		a = b;
		b = temp;
	}

	return b;
}
