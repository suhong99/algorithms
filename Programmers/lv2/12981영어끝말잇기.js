//https://school.programmers.co.kr/learn/courses/30/lessons/12981
function solution(n, words) {
	const used = [];
	let answer = 0;
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (used.findIndex((e) => e === word) === -1 && (i === 0 || words[i - 1][words[i - 1].length - 1] === word[0])) {
			used.push(word);
		} else {
			console.log(i, word);
			answer = i;
			break;
		}
	}

	return answer === 0 ? [0, 0] : [(answer % n) + 1, Math.floor(answer / n) + 1];
}
