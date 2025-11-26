// https://school.programmers.co.kr/learn/courses/30/lessons/12971
// 선형 문제로 고려하기 위해서는 첫 번째 선택 여부에 따라서 결과가 달라짐
// 첫 번쨰를 골랐을 때 , 아닐떄로 dp로 풀어줌
// dp를 배열에 계속 담는게 아니라 prev 변수에 각각 할다

function solution(sticker) {
	const n = sticker.length;
	if (n === 1) return sticker[0];

	let prev1 = sticker[0];
	let prev2 = sticker[0];
	for (let i = 2; i < n - 1; i++) {
		const cur = Math.max(prev2, prev1 + sticker[i]);
		prev1 = prev2;
		prev2 = cur;
	}
	const pickFirst = prev2;

	prev1 = sticker[1];
	prev2 = Math.max(sticker[1], sticker[2] ?? 0);
	for (let i = 3; i < n; i++) {
		const cur = Math.max(prev2, prev1 + sticker[i]);
		prev1 = prev2;
		prev2 = cur;
	}
	const notPickFirst = prev2;

	return Math.max(pickFirst, notPickFirst);
}
