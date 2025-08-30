// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
	function gcd(a, b) {
		while (b !== 0) {
			let temp = a % b;
			a = b;
			b = temp;
		}
		return a;
	}

	function lcm(a, b) {
		return (a * b) / gcd(a, b);
	}
	return arr.reduce((acc, cur) => lcm(acc, cur));
}

console.log(solution([2, 6, 8, 14])); //168
console.log(solution([1, 2, 3])); // 6
