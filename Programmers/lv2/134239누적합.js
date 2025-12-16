// https://school.programmers.co.kr/learn/courses/30/lessons/134239

function solution(k, ranges) {
	// 우박 수열 생성
	const nums = [k];

	while (k !== 1) {
		if (k % 2 === 0) {
			k = k / 2;
		} else {
			k = k * 3 + 1;
		}
		nums.push(k);
	}

	// 누적 면적(dp)
	const dp = [];
	dp.push((nums[0] + nums[1]) / 2);

	for (let i = 1; i < nums.length - 1; i++) {
		dp.push(dp[i - 1] + (nums[i] + nums[i + 1]) / 2);
	}

	const result = [];
	const n = nums.length - 1;

	// 구간 처리
	for (let i = 0; i < ranges.length; i++) {
		let [start, b] = ranges[i];
		const endX = n + b;

		if (start > endX) {
			result.push(-1.0);
			continue;
		}

		if (start === endX) {
			result.push(0.0);
			continue;
		}

		const endSeg = endX - 1;

		if (start === 0) {
			result.push(Number(dp[endSeg].toFixed(1)));
		} else {
			result.push(Number((dp[endSeg] - dp[start - 1]).toFixed(1)));
		}
	}

	return result;
}
