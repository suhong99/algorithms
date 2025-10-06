function solution(dice) {
	const n = dice.length;

	// 각각 주사위에 해당하는 idx배열
	const allIdx = Array.from({ length: n }, (_, i) => i);
	const half = n / 2;

	let bestWin = -1;
	let bestCombo = [];

	for (const combo of getCombinations(allIdx, half)) {
		const rest = allIdx.filter((i) => !combo.includes(i));

		const arrA = getAllSums(combo.map((i) => dice[i]));
		const arrB = getAllSums(rest.map((i) => dice[i]));

		const win = countWins(arrA, arrB);
		if (win > bestWin) {
			bestWin = win;
			bestCombo = combo;
		}
	}

	return bestCombo.map((i) => i + 1); // 문제는 1-based index
}

// 주사위 조합 구하기
function getCombinations(arr, select) {
	if (select === 0) return [[]];
	if (arr.length === 0) return [];
	const [first, ...rest] = arr;
	// 포함된 조합과, 안 포함된 조합을 전개
	return [...getCombinations(rest, select - 1).map((c) => [first, ...c]), ...getCombinations(rest, select)];
}

function getAllSums(dices) {
	let sums = [0];
	// 주사위들을 순회하면서 합을 점점 더해줌
	for (const dice of dices) {
		const temp = [];
		for (const s of sums) {
			for (const d of dice) temp.push(s + d);
		}
		sums = temp;
	}
	return sums;
}

function countWins(arrA, arrB) {
	arrB.sort((a, b) => a - b);
	let wins = 0;

	//정렬 후  arrB에서 a보다 작은 원소 개수 찾기 (이분 탐색)
	for (const a of arrA) {
		let l = 0,
			r = arrB.length;
		while (l < r) {
			const mid = (l + r) >> 1;
			if (arrB[mid] < a) l = mid + 1;
			else r = mid;
		}
		wins += l;
	}
	return wins;
}

console.log(
	solution([
		[40, 41, 42, 43, 44, 45],
		[43, 43, 42, 42, 41, 41],
		[1, 1, 80, 80, 80, 80],
		[70, 70, 1, 1, 70, 70],
	]),
);
