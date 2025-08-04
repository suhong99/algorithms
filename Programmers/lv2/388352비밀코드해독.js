// https://school.programmers.co.kr/learn/courses/30/lessons/388352

function solution(n, q, ans) {
	const numbers = Array.from({ length: n }, (_, i) => i + 1);
	let count = 0;

	for (const comb of combinations(numbers, 5)) {
		if (isValidCombination(comb, q, ans)) {
			count++;
		}
	}

	return count;
}

// 5개 조합 생성 제너레이터
function* combinations(arr, k, start = 0, path = []) {
	if (path.length === k) {
		yield path;
		return;
	}
	for (let i = start; i <= arr.length - (k - path.length); i++) {
		yield* combinations(arr, k, i + 1, [...path, arr[i]]);
	}
}

// 현재 조합이 모든 시도 조건을 만족하는지 검사
function isValidCombination(code, queries, answers) {
	const codeSet = new Set(code);
	return queries.every((query, i) => {
		let match = 0;
		for (const num of query) {
			if (codeSet.has(num)) match++;
		}
		return match === answers[i];
	});
}
