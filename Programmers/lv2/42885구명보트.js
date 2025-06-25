// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
	let left = 0,
		right = people.length - 1;
	people.sort((a, b) => a - b);
	let count = 0;
	while (right >= left) {
		count++;
		if (people[left] + people[right] > limit || left === right) {
			right--;
		} else {
			right--;
			left++;
		}
	}
	return count;
}
