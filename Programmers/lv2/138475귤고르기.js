// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
	const countMap = new Map();

	for (let size of tangerine) {
		countMap.set(size, (countMap.get(size) || 0) + 1);
	}

	const counts = Array.from(countMap.values()).sort((a, b) => b - a);

	let kinds = 0;
	for (let c of counts) {
		k -= c;
		kinds++;
		if (k <= 0) break;
	}

	return kinds;
}
