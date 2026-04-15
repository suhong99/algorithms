// 스텍을  통해서 숫자가 바로 커지지 않는 경우 계속 유지.
// 스텍을 반복하다보면 숫자가 커지는 경우가 나오는데, 그 때 스텍에서  바로 다음 큰 수로 바꿔준다.

function solution(numbers) {
	const n = numbers.length;
	const answer = Array(n).fill(-1);
	const stack = [];
	for (let i = 0; i < n; i++) {
		while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
			const idx = stack.pop();
			answer[idx] = numbers[i];
		}

		stack.push(i);
	}

	return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
console.log(solution([9, 1, 10, 3, 6, 2])); // [ 10, 10, -1, 6, -1, -1 ]
