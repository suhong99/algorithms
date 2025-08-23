// https://school.programmers.co.kr/learn/courses/30/lessons/340213

function solution(video_len, pos, op_start, op_end, commands) {
	const len = convertToSec(video_len);
	const opStart = convertToSec(op_start);
	const opEnd = convertToSec(op_end);
	let curPos = convertToSec(pos);
	// 초기값 확인후 자동 변환
	if (curPos >= opStart && curPos < opEnd) {
		curPos = opEnd;
	}

	// 명령어에 따른 시간 이동
	function action(command) {
		if (command === 'prev') {
			return curPos > 10 ? curPos - 10 : 0;
		}

		if (command === 'next') {
			return len - curPos > 10 ? curPos + 10 : len;
		}
	}

	// 명령어 입력후 오프닝 시간이면 자동 이동
	commands.forEach((e) => {
		const time = action(e);
		curPos = time >= opStart && time < opEnd ? opEnd : time;
	});

	// 변환된 초를 다시 기존 형태의 시간으로 변경
	let curMin = Math.floor(curPos / 60);
	let curSec = curPos % 60;

	curMin = curMin < 10 ? '0' + curMin : curMin + '';
	curSec = curSec < 10 ? '0' + curSec : curSec + '';

	return curMin + ':' + curSec;
}

function convertToSec(time) {
	const [min, sec] = time.split(':').map(Number);
	return min * 60 + sec;
}
