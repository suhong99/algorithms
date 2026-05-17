function solution(record) {
	const userMap = new Map();
	const logs = [];

	for (let r of record) {
		const [cmd, uid, nick] = r.split(' ');

		if (cmd === 'Enter' || cmd === 'Change') {
			userMap.set(uid, nick);
		}

		if (cmd === 'Enter' || cmd === 'Leave') {
			logs.push([cmd, uid]);
		}
	}

	return logs.map(([cmd, uid]) => {
		const nick = userMap.get(uid);

		if (cmd === 'Enter') {
			return `${nick}님이 들어왔습니다.`;
		}

		return `${nick}님이 나갔습니다.`;
	});
}
