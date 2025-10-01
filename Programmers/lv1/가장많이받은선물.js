// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
	// 친구 명단을 값이 index인 객체로 변경
	const nameToIndex = friends.reduce((obj, name, index) => {
		obj[name] = index;
		return obj;
	}, {});

	const matrix = Array(friends.length)
		.fill()
		.map(() => Array(friends.length).fill(0));

	const giftPoint = Array(friends.length).fill(0);
	const gift = Array(friends.length).fill(0);

	// 선물 거래 내역 반영
	for (let i = 0; i < gifts.length; i++) {
		const [from, to] = gifts[i].split(' ').map((name) => nameToIndex[name]);
		matrix[from][to] -= 1;
		matrix[to][from] += 1;
		giftPoint[from] -= 1;
		giftPoint[to] += 1;
	}

	// j의 인덱스를 i보다 크게하여 중복되게 선물을 더하지 않게 함
	for (let i = 0; i < friends.length - 1; i++) {
		for (let j = i + 1; j < friends.length; j++) {
			if (matrix[i][j] > 0) {
				gift[j] += 1;
			} else if (matrix[i][j] < 0) {
				gift[i] += 1;
			} else if (giftPoint[i] > giftPoint[j]) {
				gift[j] += 1;
			} else if (giftPoint[i] < giftPoint[j]) {
				gift[i] += 1;
			}
		}
	}

	return Math.max(...gift);
}

// 아래 코드가 더 빠름.
// 이유 : 나는 주고 받는 거 모든 음양으로 기록해씅ㅁ
// 사실 줬다는 사실만 기록해도 충분하고, 대칭되는 열을 비교하는게 빠름

function solution(friends, gifts) {
	const length = friends.length;
	const giftPoints = new Array(length).fill(0);
	const index = {};
	const record = [];
	const points = new Array(length).fill(0);
	for (let i = 0; i < length; i++) {
		record[i] = new Array(length).fill(0);
		index[friends[i]] = i;
	}
	for (const gift of gifts) {
		const [giver, taker] = gift.split(' ');
		record[index[giver]][index[taker]] += 1;
		giftPoints[index[giver]] += 1;
		giftPoints[index[taker]] -= 1;
	}
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (record[i][j] > record[j][i]) {
				points[i] += 1;
			} else if (record[i][j] === record[j][i]) {
				if (giftPoints[i] > giftPoints[j]) {
					points[i] += 1;
				}
			}
		}
	}
	return Math.max(...points);
}

solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']);
