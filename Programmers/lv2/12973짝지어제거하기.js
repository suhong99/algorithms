// https://school.programmers.co.kr/learn/courses/30/lessons/12973
function solution(s) {
	const stack = [];

	for (let char of s) {
		if (stack.length && stack[stack.length - 1] === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0 ? 1 : 0;
}
