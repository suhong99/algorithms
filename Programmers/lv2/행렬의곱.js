function solution(arr1, arr2) {
	const n = arr1.length;
	const m = arr2.length;
	const k = arr2[0].length;

	const result = Array.from({ length: n }, () => Array(k).fill(0));

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < k; j++) {
			for (let l = 0; l < m; l++) {
				result[i][j] += arr1[i][l] * arr2[l][j];
			}
		}
	}

	return result;
}
