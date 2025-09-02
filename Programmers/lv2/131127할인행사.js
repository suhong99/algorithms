// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
	const wantIndex = Object.fromEntries(
		want.map((fruit, i) => {
			return [fruit, i];
		}),
	);

	let answer = 0;
	for (let i = 0; i < 10; i++) {
		if (wantIndex[discount[i]] !== undefined) {
			number[wantIndex[discount[i]]]--;
		}
	}

	if (number.every((num) => num < 1)) {
		answer++;
	}

	for (let i = 0; i < discount.length - 10; i++) {
		const before = wantIndex[discount[i]];
		const next = wantIndex[discount[i + 10]];

		if (before !== undefined) {
			number[before]++;
		}
		if (next !== undefined) {
			number[next]--;
		}

		if (number.every((num) => num < 1)) {
			answer++;
		}
	}

	return answer;
}

console.log(
	solution(
		['banana', 'apple', 'rice', 'pork', 'pot'],
		[3, 2, 2, 2, 1],
		['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana'],
	),
);
