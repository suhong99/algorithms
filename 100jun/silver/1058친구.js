// 풀이 : 플로이드 워셜

// 1. 우선 각 노드간의 연결을 확인함(graph). 연결되지 않은 경우 거리는 무한으로 침 (1e9). 자기 자신은 0
// 2. 친구의 친구까지가 허용되니깐 거리가 2까지인 노드간에는 2친구임.

const fs = require('fs');
const input = fs
	.readFileSync(__dirname + '/input.txt')
	.toString()
	.split('\n');

const INF = 1e9;
const n = +input[0];

let graph = [[]];

for (let i = 1; i <= n; i++) {
	graph.push(new Array(n + 1).fill(INF));
	let line = input[i].split('');
	for (let j = 0; j < n; j++) {
		if (line[j] == 'Y') graph[i][j + 1] = 1;
	}
}

for (let i = 1; i <= n; i++) graph[i][i] = 0;

// 3. 그러기 위해서 거리를 측정함--> 측정 방법 : 각 지점을 거쳤을 때 더 가깝다면 갑을 최신화

for (let k = 1; k <= n; k++) {
	console.log(k, '\n', graph);
	for (let a = 1; a <= n; a++) {
		for (let b = 1; b <= n; b++) {
			if (a == b) continue;
			let cost = graph[a][k] + graph[k][b];
			if (graph[a][b] > cost) {
				graph[a][b] = cost;
			}
		}
	}
}

const twoFriends = new Array(n + 1).fill(0);
for (let a = 1; a <= n; a++) {
	for (let b = 1; b <= n; b++) {
		if (a != b && graph[a][b] <= 2) twoFriends[a]++;
	}
}

console.log(twoFriends.reduce((a, b) => Math.max(a, b)));
