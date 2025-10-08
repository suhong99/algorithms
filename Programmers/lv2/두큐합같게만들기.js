// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
	const maxTrial = queue1.length * 3;
	let i = 0;
	let sumL = queue1.reduce((a, v) => a + v, 0);
	let sumR = queue2.reduce((a, v) => a + v, 0);
	if (sumL === sumR) return i;

	let li = 0;
	let ri = 0;
	while (i <= maxTrial) {
		if (sumL > sumR) {
			let m = queue1[li++];
			sumL -= m;
			sumR += m;
			queue2.push(m);
		} else if (sumR > sumL) {
			let m = queue2[ri++];
			sumL += m;
			sumR -= m;
			queue1.push(m);
		} else {
			return i;
		}

		i++;
	}

	return -1;
}
