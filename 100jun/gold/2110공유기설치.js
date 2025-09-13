const fs = require('fs');

let input = fs
	.readFileSync(__dirname + '/input.txt')
	.toString()
	.trim()
	.split('\n');

const [N, C] = input.shift().split(' ').map(Number);
const houses = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = houses[houses.length - 1] - houses[0];
let answer = 0;

while (left <= right) {
	const mid = Math.floor((left + right) / 2);

	let count = 1;
	let last = houses[0];
	for (let i = 1; i < N; i++) {
		if (houses[i] - last >= mid) {
			count++;
			last = houses[i];
		}
	}

	if (count >= C) {
		answer = mid;
		left = mid + 1;
	} else {
		right = mid - 1;
	}
}

console.log(answer);
