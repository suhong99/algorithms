function solution(numbers) {
	const visited = Array(numbers.length).fill(false);
	const set = new Set();

	// 모든 숫자 조합 생성
	function dfs(current) {
		if (current !== '') {
			set.add(Number(current));
		}

		for (let i = 0; i < numbers.length; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			dfs(current + numbers[i]);
			visited[i] = false;
		}
	}

	dfs('');

	let answer = 0;

	for (const num of set) {
		if (isPrime(num)) answer++;
	}

	return answer;
}

function isPrime(num) {
	if (num < 2) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}

	return true;
}
