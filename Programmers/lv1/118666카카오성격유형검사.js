// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
	let answer = '';
	const map = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
	survey.forEach((e, i) => {
		const [kind, point] = validate(e, choices[i]);
		map[kind] += point;
	});

	if (map['R'] >= map['T']) {
		answer += 'R';
	} else {
		answer += 'T';
	}

	if (map['C'] >= map['F']) {
		answer += 'C';
	} else {
		answer += 'F';
	}
	if (map['J'] >= map['M']) {
		answer += 'J';
	} else {
		answer += 'M';
	}
	if (map['A'] >= map['N']) {
		answer += 'A';
	} else {
		answer += 'N';
	}

	return answer;
}

function validate(char, n) {
	const [a, b] = char.split('');
	if (n >= 4) return [b, n - 4];

	return [a, 4 - n];
}
