// https://school.programmers.co.kr/learn/courses/30/lessons/388351

function solution(schedules, timelogs, startday) {
	let result = schedules.length;

	for (let j = 0; j < schedules.length; j++) {
		let isFailed = false;
		let limit = (schedules[j] + 10) % 100 >= 60 ? schedules[j] + 50 : schedules[j] + 10;
		for (let i = 0; i < 7; i++) {
			let curDay = (i + startday) % 7;
			if (curDay === 6 || curDay === 0) continue;
			if (timelogs[j][i] > limit) {
				result--;
				break;
			}
		}
	}

	return result;
}
