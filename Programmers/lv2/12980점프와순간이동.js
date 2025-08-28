//school.programmers.co.kr/learn/courses/30/lessons/12980

https: function solution(n) {
	let answer = 1;
	while (n !== 1) {
		if (n % 2 === 1) {
			n -= 1;
			answer++;
		} else {
			n = n / 2;
		}
	}

	return answer;
}
