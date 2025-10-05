function solution(commands) {
	const n = 51; // 1~50 사용
	const parent = Array.from({ length: n }, () => Array.from({ length: n }, (_, j) => Array(2).fill(0)));
	const value = Array.from({ length: n }, () => Array(n).fill(''));

	// parent[r][c] = [부모 행, 부모 열]
	for (let r = 1; r < n; r++) {
		for (let c = 1; c < n; c++) {
			parent[r][c] = [r, c];
		}
	}

	// find 연산 (루트 찾기)
	function find(r, c) {
		const [pr, pc] = parent[r][c];
		if (pr === r && pc === c) return [r, c];
		return (parent[r][c] = find(pr, pc)); // 경로 압축
	}

	// union (병합)
	function union(r1, c1, r2, c2) {
		const [pr1, pc1] = find(r1, c1);
		const [pr2, pc2] = find(r2, c2);
		if (pr1 === pr2 && pc1 === pc2) return; // 이미 같은 그룹이면 무시

		// 값 우선순위: 첫 번째 셀 값이 우선
		const v1 = value[pr1][pc1];
		const v2 = value[pr2][pc2];

		parent[pr2][pc2] = [pr1, pc1]; // pr1, pc1 그룹으로 병합
		if (!v1 && v2) value[pr1][pc1] = v2; // v1이 비어있으면 v2로 채움
	}

	const answer = [];

	for (const cmd of commands) {
		const parts = cmd.split(' ');
		const op = parts[0];

		if (op === 'UPDATE') {
			if (parts.length === 4) {
				// UPDATE r c value
				const [r, c, v] = [Number(parts[1]), Number(parts[2]), parts[3]];
				const [pr, pc] = find(r, c);
				value[pr][pc] = v;
			} else {
				// UPDATE value1 value2
				const [v1, v2] = [parts[1], parts[2]];
				for (let r = 1; r < n; r++) {
					for (let c = 1; c < n; c++) {
						const [pr, pc] = find(r, c);
						if (value[pr][pc] === v1) value[pr][pc] = v2;
					}
				}
			}
		} else if (op === 'MERGE') {
			const [r1, c1, r2, c2] = parts.slice(1).map(Number);
			union(r1, c1, r2, c2);
		} else if (op === 'UNMERGE') {
			const [r, c] = parts.slice(1).map(Number);
			const [pr, pc] = find(r, c);
			const curValue = value[pr][pc];

			// 그룹에 속한 모든 셀 찾기
			const group = [];
			for (let i = 1; i < n; i++) {
				for (let j = 1; j < n; j++) {
					const [pi, pj] = find(i, j);
					if (pi === pr && pj === pc) {
						group.push([i, j]);
					}
				}
			}

			// 병합 해제
			for (const [i, j] of group) {
				parent[i][j] = [i, j];
				value[i][j] = '';
			}
			value[r][c] = curValue; // 선택한 셀만 값 유지
		} else if (op === 'PRINT') {
			const [r, c] = parts.slice(1).map(Number);
			const [pr, pc] = find(r, c);
			answer.push(value[pr][pc] || 'EMPTY');
		}
	}

	return answer;
}
