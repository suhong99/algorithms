function solution(msg) {
	const answer = [];

	const dict = {};
	for (let i = 0; i < 26; i++) {
		dict[String.fromCharCode(65 + i)] = i + 1;
	}

	let dictIndex = 27;
	let i = 0;

	while (i < msg.length) {
		let w = msg[i];
		let j = i + 1;

		while (j <= msg.length && dict[msg.slice(i, j)]) {
			w = msg.slice(i, j);
			j++;
		}

		answer.push(dict[w]);

		if (j <= msg.length) {
			dict[msg.slice(i, j)] = dictIndex++;
		}

		i += w.length;
	}

	return answer;
}
