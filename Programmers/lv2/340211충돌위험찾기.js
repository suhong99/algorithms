function solution(points, routes) {
	const pos = {};
	points.forEach(([r, c], i) => (pos[i + 1] = [r, c]));

	const robotPaths = [];

	// 로봇별 시간 경로 생성
	for (const route of routes) {
		let path = [];
		let [cr, cc] = pos[route[0]];
		path.push(`${cr},${cc}`);

		for (let i = 1; i < route.length; i++) {
			let [nr, nc] = pos[route[i]];

			// r 좌표 먼저 이동
			while (cr !== nr) {
				cr += nr > cr ? 1 : -1;
				path.push(`${cr},${cc}`);
			}
			// c 좌표 이동
			while (cc !== nc) {
				cc += nc > cc ? 1 : -1;
				path.push(`${cr},${cc}`);
			}
		}
		robotPaths.push(path);
	}

	let time = 0;
	let dangerCount = 0;

	// 경로 확인
	while (true) {
		let locMap = {};
		let active = false;

		// 시간에 대한 경로 확인
		for (const path of robotPaths) {
			// 해당 시간대에 움직이는 로봇있는지 확인 및 반영
			if (time < path.length) {
				active = true;
				const loc = path[time];
				locMap[loc] = (locMap[loc] || 0) + 1;
			}
		}

		// 움직이는 로봇 없으면 반복문 종료
		if (!active) break;

		for (const count of Object.values(locMap)) {
			if (count >= 2) dangerCount++;
		}

		// 시간 증가
		time++;
	}

	return dangerCount;
}
