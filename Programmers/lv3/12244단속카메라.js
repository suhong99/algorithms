//https://school.programmers.co.kr/learn/courses/30/lessons/42884
function solution(routes) {
	// 진출 지점 기준으로 정렬
	routes.sort((a, b) => a[1] - b[1]);

	let camera = -30001; // 카메라 설치 지점
	let count = 0;

	for (let [start, end] of routes) {
		// 현재 카메라로 커버 불가한 경우 새로운 카메라 설치
		if (start > camera) {
			camera = end;
			count++;
		}
	}

	return count;
}
