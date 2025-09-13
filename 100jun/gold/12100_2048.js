const fs = require('fs');
const input = fs
	.readFileSync(__dirname + '/input.txt')
	.toString()
	.trim()
	.split('\n');

const N = Number(input.shift());
const board = input.map((line) => line.split(' ').map(Number));

let answer = 0;

// 한 줄 이동 처리 (0 제거 → 합치기 → 다시 0 채우기)
function compress(line) {
	line = line.filter((v) => v !== 0); // 0 제거
	const merged = [];
	for (let i = 0; i < line.length; i++) {
		if (i < line.length - 1 && line[i] === line[i + 1]) {
			merged.push(line[i] * 2);
			i++; // 다음 칸은 합쳐졌으므로 skip
		} else {
			merged.push(line[i]);
		}
	}
	while (merged.length < N) merged.push(0); // 0 채우기
	return merged;
}

// 보드 이동
function move(board, dir) {
	const newBoard = Array.from({ length: N }, () => Array(N).fill(0));

	for (let i = 0; i < N; i++) {
		let line = [];
		for (let j = 0; j < N; j++) {
			if (dir === 0) line.push(board[j][i]); // 위
			if (dir === 1) line.push(board[N - 1 - j][i]); // 아래
			if (dir === 2) line.push(board[i][j]); // 왼쪽
			if (dir === 3) line.push(board[i][N - 1 - j]); // 오른쪽
		}

		let merged = compress(line);

		for (let j = 0; j < N; j++) {
			if (dir === 0) newBoard[j][i] = merged[j];
			if (dir === 1) newBoard[N - 1 - j][i] = merged[j];
			if (dir === 2) newBoard[i][j] = merged[j];
			if (dir === 3) newBoard[i][N - 1 - j] = merged[j];
		}
	}

	return newBoard;
}

// DFS 탐색
function dfs(board, depth) {
	if (depth === 5) {
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
				answer = Math.max(answer, board[i][j]);
			}
		}
		return;
	}

	for (let dir = 0; dir < 4; dir++) {
		const nextBoard = move(board, dir);
		dfs(nextBoard, depth + 1);
	}
}

dfs(board, 0);
console.log(answer);
