// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function solution(bandage, health, attacks) {
	let attackIndex = 0;
	let hp = health;
	const [casting, th, ph] = bandage;

	while (attackIndex < attacks.length) {
		const [turn, dmg] = attacks[attackIndex++];
		hp -= dmg;

		if (hp <= 0) {
			return -1;
		}

		// 마지막 턴이면 종료
		if (attackIndex === attacks.length) break;

		// 회복
		const [nextTurn] = attacks[attackIndex];

		const gap = nextTurn - turn - 1;

		const heal = gap * th + Math.floor(gap / casting) * ph;

		hp = recover(hp, heal);
	}

	return hp;

	function recover(cur, heal) {
		return cur + heal < health ? cur + heal : health;
	}
}

console.log(
	solution([5, 1, 5], 30, [
		[2, 10],
		[9, 15],
		[10, 5],
		[11, 5],
	]),
); //5
console.log(
	solution([3, 2, 7], 20, [
		[1, 15],
		[5, 16],
		[8, 6],
	]),
); // -1

console.log(
	solution([4, 2, 7], 20, [
		[1, 15],
		[5, 16],
		[8, 6],
	]),
); // -1
console.log(
	solution([1, 1, 1], 5, [
		[1, 2],
		[3, 2],
	]),
); // 	3
