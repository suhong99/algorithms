// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
	let left = 1;
	let right = 1;
	let answer = 0;
	let sum = 1;
	while (true) {
		if (sum < n) {
			sum += ++right;
		} else if (sum > n) {
			sum -= left++;
		} else {
			answer++;
			sum += ++right;
		}

		if (right > n) break;
	}

	return answer;
}
