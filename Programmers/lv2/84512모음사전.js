// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
	const alpha = ['A', 'E', 'I', 'O', 'U'];
	// 없는거 까지 생각해서 5개를 6 단위로 증가함
	const weight = [781, 156, 31, 6, 1];

	let answer = 0;

	for (let i = 0; i < word.length; i++) {
		const idx = alpha.indexOf(word[i]);

		answer += idx * weight[i] + 1;
	}

	return answer;
}
