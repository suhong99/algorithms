// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
	const stack = [];
	let answer = 0;

	for (let x of ingredient) {
		stack.push(x);
		if (stack.length >= 4) {
			if (stack[stack.length - 4] === 1 && stack[stack.length - 3] === 2 && stack[stack.length - 2] === 3 && stack[stack.length - 1] === 1) {
				stack.splice(-4);
				answer++;
			}
		}
	}
	return answer;
}
