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
