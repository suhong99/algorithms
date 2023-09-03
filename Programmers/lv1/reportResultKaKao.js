// https://school.programmers.co.kr/learn/courses/30/lessons/92334

//

function solution(id_list, report, k) {
  const answer = [];
  const uniqueReport = new Set(report);

  const memberCount = id_list.length;
  const result = Array.from({ length: memberCount }, () => []);

  uniqueReport.forEach((value) => {
    const [split1, split2] = value.split(' ');
    const index = id_list.indexOf(split2);

    result[index].push(split1);
  });

  for (i = 0; i < memberCount; i++) {
    if (result[i].length >= k) {
    }
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

console.log(
  solution(
    ['con', 'ryan'],
    [('ryan con', 'ryan con', 'ryan con', 'ryan con')],
    3
  )
);
