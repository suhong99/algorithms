// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
	const n = topping.length;
	const left = new Array(n).fill(0);
	const right = new Array(n).fill(0);

	// 왼쪽 종류 수 계산
	const leftSet = new Set();
	for (let i = 0; i < n; i++) {
		leftSet.add(topping[i]);
		left[i] = leftSet.size;
	}

	// 오른쪽 종류 수 계산
	const rightSet = new Set();
	for (let i = n - 1; i >= 0; i--) {
		rightSet.add(topping[i]);
		right[i] = rightSet.size;
	}

	// 공평한 위치 세기
	let count = 0;
	for (let i = 0; i < n - 1; i++) {
		if (left[i] === right[i + 1]) count++;
	}

	return count;
}
