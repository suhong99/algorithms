function solution(s) {
	const n = s.length;
	let count = 0;

	const isValid = (str) => {
		const stack = [];
		const pair = { ')': '(', ']': '[', '}': '{' };

		for (const ch of str) {
			if (['(', '[', '{'].includes(ch)) stack.push(ch);
			else {
				if (stack.length === 0 || stack[stack.length - 1] !== pair[ch]) return false;
				stack.pop();
			}
		}
		return stack.length === 0;
	};

	for (let i = 0; i < n; i++) {
		const rotated = s.slice(i) + s.slice(0, i);
		if (isValid(rotated)) count++;
	}

	return count;
}
