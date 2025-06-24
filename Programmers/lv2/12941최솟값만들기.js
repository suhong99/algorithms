function solution(A, B) {
	const newA = A.sort((a, b) => a - b);
	const newB = B.sort((a, b) => b - a);
	let sum = 0;
	for (let i = 0; i < newA.length; i++) {
		sum += newA[i] * newB[i];
	}

	return sum;
}
