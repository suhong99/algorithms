// 스텍

function solution(prices) {
	const n = prices.length;
	const answer = Array(n).fill(0);
	const stack = [];

	for (let i = 0; i < n; i++) {
		while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
			const idx = stack.pop();
			answer[idx] = i - idx;
		}
		stack.push(i);
	}

	while (stack.length) {
		const idx = stack.pop();
		answer[idx] = n - 1 - idx;
	}

	return answer;
}
