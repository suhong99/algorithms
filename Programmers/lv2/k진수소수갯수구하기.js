// https://school.programmers.co.kr/learn/courses/30/lessons/92335

// 소수갯수가 적게 나올 거 예측하고 각각을 비교하는게 더 효율적이었음

function solution(n, k) {
	const cv = n.toString(k);
	let nums = cv
		.split('0')
		.filter((e) => e !== '')
		.map(Number);

	if (nums.length === 0) return 0; // ✅ 빈 배열 예외 처리

	const max = Math.max(...nums);
	if (max < 2) return 0; // ✅ 1 이하 숫자 제외

	// ✅ 매우 큰 값이면 배열 생성 대신 개별 판정으로 fallback
	if (max > 10_000_000) {
		const isPrime = (num) => {
			if (num < 2) return false;
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) return false;
			}
			return true;
		};
		return nums.reduce((cnt, n) => cnt + (isPrime(n) ? 1 : 0), 0);
	}

	// ✅ 일반 경우: 에라토스테네스
	const isPrime = Array(max + 1).fill(true);
	isPrime[0] = false;
	isPrime[1] = false;

	for (let i = 2; i * i <= max; i++) {
		if (!isPrime[i]) continue;
		for (let j = i * i; j <= max; j += i) {
			isPrime[j] = false;
		}
	}

	let result = 0;
	nums.forEach((num) => {
		if (isPrime[num]) result++;
	});

	return result;
}
