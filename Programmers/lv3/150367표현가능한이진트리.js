// https://school.programmers.co.kr/learn/courses/30/lessons/150367

function solution(numbers) {
	const answer = [];

	for (let num of numbers) {
		const binary = num.toString(2);

		// 포화 이진트리 크기 구하기
		let size = 1;
		while (size < binary.length) {
			size = size * 2 + 1;
		}

		// 길이가 부족하면 포화이진트리를 만들기 위해 앞에 0을 붙임
		const padded = binary.padStart(size, '0');

		function check(str) {
			// 끝까지 왔으면 참
			if (str.length === 1) return true;

			const mid = Math.floor(str.length / 2);
			const root = str[mid];

			const left = str.slice(0, mid);
			const right = str.slice(mid + 1);

			// 0이 나왔다면 틀렸으니 추가 분석 x
			if (root === '0' && (left.includes('1') || right.includes('1'))) {
				return false;
			}

			return check(left) && check(right);
		}

		answer.push(check(padded) ? 1 : 0);
	}

	return answer;
}
