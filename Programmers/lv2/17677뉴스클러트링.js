function solution(str1, str2) {
	const arr1 = make(str1).sort();
	const arr2 = make(str2).sort();

	let i = 0,
		j = 0;
	let intersection = 0;
	let union = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {
			intersection++;
			union++;
			i++;
			j++;
		} else if (arr1[i] < arr2[j]) {
			union++;
			i++;
		} else {
			union++;
			j++;
		}
	}

	// 남은 것 처리
	union += arr1.length - i + (arr2.length - j);

	if (union === 0) return 65536;

	return Math.floor((intersection / union) * 65536);
}

function make(str) {
	const result = [];
	str = str.toLowerCase();

	for (let i = 0; i < str.length - 1; i++) {
		const a = str[i];
		const b = str[i + 1];

		if (isAlpha(a) && isAlpha(b)) {
			result.push(a + b);
		}
	}

	return result;
}

function isAlpha(ch) {
	return ch >= 'a' && ch <= 'z';
}
