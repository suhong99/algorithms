// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
	const n = elements.length;
	// 원형 수열이라 2개 연결
	const extended = [...elements, ...elements];
	// 누적합으로 풀기 위한 배열
	const prefix = Array(extended.length + 1).fill(0);

	// 누적합 계산
	for (let i = 0; i < extended.length; i++) {
		prefix[i + 1] = prefix[i] + extended[i];
	}

	// 누적합 기반으로 연속부분수열 합을 더할 set객체(중복 제거 위해)
	const sums = new Set();

	// 길이 1 ~ n까지 연속부분수열합 더하기
	for (let len = 1; len <= n; len++) {
		for (let i = 0; i < n; i++) {
			const sum = prefix[i + len] - prefix[i];
			sums.add(sum);
		}
	}

	return sums.size;
}

console.log(solution([7, 9, 1, 1, 4]));
