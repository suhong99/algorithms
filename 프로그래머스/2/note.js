function solution(diffs, times, limit) {
  let level = 1;

  function solveCur(i, prev) {
    if (diffs[i] <= level) return times[i];
    return (prev + times[i]) * (diffs[i] - level) + times[i];
  }

  while (true) {
    let prev = 0;
    let answer = 0;
    for (let i = 0; i < diffs.length; i++) {
      answer += solveCur(i, prev);
      if (level < 3) console.log(answer, prev, '답합산');

      prev = times[i];
    }

    if (answer <= limit) return level;

    level++;
  }
}

console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
//result는 record에서 change만큼 감소됨
// 결국 uid는 최종 입장 혹은 변경한 id가 됨
// uid만 기억하고, 배열에 uid에 따른 현재 닉네임을 기록함.
// 이후 입장 혹은 변경시 닉네임 바꾸기

function solution33(record) {
  const answer = [];
  const nameList = {};
  record.forEach((element) => {
    const [fc, uid, name] = element.split(' ');
    if (nameList[uid] === undefined || fc !== 'Leave') {
      nameList[uid] = name;
    }
    if (fc !== 'Change')
      answer.push([
        uid,
        fc === 'Leave' ? '님이 나갔습니다.' : '님이 들어왔습니다.',
      ]);
  });

  return answer.map((e) => {
    return nameList[e[0]] + e[1];
  });
}

solution33([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
