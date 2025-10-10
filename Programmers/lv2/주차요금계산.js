// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
	const [bt, bf, pt, pf] = fees; // 기본 시간, 기본 요금, 단위 시간, 단위 요금
	const cars = {}; // 차량별 시간 기록

	// 입출차 기록 처리
	records.forEach((e) => {
		const [time, car, type] = e.split(' ');

		if (!cars[car]) cars[car] = { total: 0, in: null }; // 누적 시간 + 입차 상태 관리

		if (type === 'IN') {
			cars[car].in = time; // 입차 시각 저장
		} else {
			// 출차 → 이번 구간 시간 계산 후 누적
			cars[car].total += getDiff(cars[car].in, time);
			cars[car].in = null; // 출차 완료 → 입차 상태 해제
		}
	});

	// 출차 기록이 없는 차량은 23:59에 자동 출차 처리
	for (const car in cars) {
		if (cars[car].in !== null) {
			cars[car].total += getDiff(cars[car].in, '23:59');
			cars[car].in = null;
		}
	}

	// 차량 번호 순으로 정렬 후 요금 계산
	const result = Object.entries(cars)
		.sort((a, b) => a[0] - b[0])
		.map(([car, { total }]) => [car, calcFee(total)]);

	// 디버깅용 출력 (필요 시 주석 처리)
	console.log(result);

	return result.map(([, fee]) => fee);

	// 두 시각 차이(분) 계산 함수
	function getDiff(start, end) {
		const [sh, sm] = start.split(':').map(Number);
		const [eh, em] = end.split(':').map(Number);
		return eh * 60 + em - (sh * 60 + sm);
	}

	// 요금 계산 함수
	function calcFee(time) {
		if (time <= bt) return bf;
		return bf + Math.ceil((time - bt) / pt) * pf;
	}
}
