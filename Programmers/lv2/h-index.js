//school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript#
https: function solution(citations) {
	citations.sort((a, b) => a - b);
	const l = citations.length;

	for (let i = 0; i < l; i++) {
		if (citations[i] >= l - i) {
			return l - i;
		}
	}

	return 0;
}
