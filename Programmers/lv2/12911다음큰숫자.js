function solution(n) {
	var pivot = n & -n;
	var before = ((n ^ (n + pivot)) / pivot) >> 2;
	return (n + pivot) | before;
}


function solution1(n) {
	const ones = n.toString(2).split('1').length - 1;

	while (true) {
		n++;
		const nextOnes = n.toString(2).split('1').length - 1;
		if (nextOnes === ones) return n;
	}
}
