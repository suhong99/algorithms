// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
function solution(progresses, speeds) {
	const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

	const result = [];
	let currentDay = days[0];
	let count = 1;

	for (let i = 1; i < days.length; i++) {
		if (days[i] <= currentDay) {
			count++;
		} else {
			result.push(count);
			currentDay = days[i];
			count = 1;
		}
	}

	result.push(count);
	return result;
}
