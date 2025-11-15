// https://school.programmers.co.kr/learn/courses/30/lessons/12979

// 기존 풀이
function solution(n, stations, w) {
	const unpowered = [];

	let answer = 0;
	let prog = 0;

	stations.sort((a, b) => a - b);

	for (let i = 0; i < stations.length; i++) {
		const cur = stations[i];
		if (prog < cur - w - 1) {
			unpowered.push(cur - w - prog - 1);
		}

		prog = cur + w;
	}

	if (prog < n) unpowered.push(n - prog);

	unpowered.forEach((e) => {
		answer += Math.ceil(e / (2 * w + 1));
	});

	return answer;
}

// 배열에 담을 이유가 없음.
function solution(n, stations, w) {
	let answer = 0;
	let prog = 0;
	const range = 2 * w + 1;

	for (let i = 0; i < stations.length; i++) {
		const cur = stations[i];

		const left = cur - w - 1;
		if (prog < left) {
			const gap = left - prog;
			answer += Math.ceil(gap / range);
		}
		prog = cur + w;
	}

	// 마지막 기지국 이후 오른쪽 구간
	if (prog < n) {
		answer += Math.ceil((n - prog) / range);
	}

	return answer;
}
