function solution(s) {
	s = s.slice(2, -2);
	let arr = s.split('},{');
	arr.sort((a, b) => a.length - b.length);

	const result = [];

	for (let str of arr) {
		const nums = str.split(',').map(Number);

		for (let num of nums) {
			if (!result.includes(num)) {
				result.push(num);
			}
		}
	}

	return result;
}
