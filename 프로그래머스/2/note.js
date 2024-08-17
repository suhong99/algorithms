//result는 record에서 change만큼 감소됨
// 결국 uid는 최종 입장 혹은 변경한 id가 됨
// uid만 기억하고, 배열에 uid에 따른 현재 닉네임을 기록함.
// 이후 입장 혹은 변경시 닉네임 바꾸기

function solution(record) {
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

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
