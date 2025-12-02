function solution(n, costs) {
	// 비용 기준 오름차순 정렬
	costs.sort((a, b) => a[2] - b[2]);

	// Union-Find: 부모 배열 초기화
	const parent = Array.from(Array(n), (_, i) => i);

	const find = (x) => {
		if (parent[x] === x) return x;
		return (parent[x] = find(parent[x]));
	};

	const union = (a, b) => {
		a = find(a);
		b = find(b);
		if (a !== b) parent[b] = a;
	};

	let total = 0;

	for (const [a, b, cost] of costs) {
		if (find(a) !== find(b)) {
			union(a, b);
			total += cost;
		}
	}

	return total;
}
