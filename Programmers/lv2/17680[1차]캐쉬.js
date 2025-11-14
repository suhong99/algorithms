// https://school.programmers.co.kr/learn/courses/30/lessons/17680?language=javascript

// 이름을 통일 ( lowercase)
function solution(cacheSize, cities) {
	let answer = 0;

	const cache = [];

	for (let i = 0; i < cities.length; i++) {
		const city = cities[i].toLowerCase();
		const index = cache.findIndex((e) => e === city);
		cache.unshift(city);
		// 캐쉬되지 않았다면
		if (index === -1) {
			answer += 5;
			if (cache.length > cacheSize) cache.pop();
		} else {
			answer += 1;
			cache.splice(index + 1, 1);
		}
	}

	return answer;
}
