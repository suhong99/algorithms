// https://school.programmers.co.kr/learn/courses/30/lessons/43165/solution_groups?language=javascript

function solution(numbers, target) {
	const l = numbers.length;
	let answer = 0;
	function dfs(i, sum) {
		if (i === l) {
			if (sum === target) answer++;
			return;
		}
		dfs(i + 1, sum + numbers[i]);
		dfs(i + 1, sum - numbers[i]);
	}

	dfs(0, 0);

	return answer;
}
