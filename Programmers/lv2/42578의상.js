// https://programmers.co.kr/learn/courses/30/lessons/42578

// 의상별로 조합을 만들어야 하는데, 의상 종류별로 몇 개씩 있는지 세어서 곱해주면 됨
function solution(clothes) {
	const obj = {};

	for (const [name, type] of clothes) {
		obj[type] = (obj[type] || 0) + 1;
	}

	let answer = 1;

	for (const key in obj) {
		answer *= obj[key] + 1;
	}

	return answer - 1;
}
