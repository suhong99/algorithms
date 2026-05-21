function solution(weights) {
	let answer = 0;

	const map = new Map();

	weights.sort((a, b) => a - b);

	for (const w of weights) {
		// 가능한 짝 검사
		const targets = [w, (w * 2) / 3, (w * 2) / 4, (w * 3) / 4];

		for (const t of targets) {
			answer += map.get(t) || 0;
		}

		map.set(w, (map.get(w) || 0) + 1);
	}

	return answer;
}
