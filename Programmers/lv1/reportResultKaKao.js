// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const uniqueReport = Array.from(new Set(report));
  const nameIndex = {};

  const memberCount = id_list.length; // 참여자수
  const uniqueReportCount = uniqueReport.length; // 중복없는 신고수

  const answer = Array(memberCount).fill(0);

  for (let i = 0; i < id_list.length; i++) {
    nameIndex[id_list[i]] = i;
  }

  const reporterList = [];

  // 각각의 피신고자에 대한 신고자를 기록하는 배열 빈칸
  for (let i = 0; i < memberCount; i++) {
    reporterList.push([]);
  }

  // 신고자를 기록하기
  for (let i = 0; i < uniqueReportCount; i++) {
    const [reporter, reportee] = uniqueReport[i].split(' ');
    // console.log(reporter, reportee);
    reporterList[nameIndex[reportee]].push(reporter);
  }

  // console.log(reporterList);
  for (let i = 0; i < reporterList.length; i++) {
    if (reporterList[i].length >= k) {
      for (let j = 0; j < reporterList[i].length; j++) {
        answer[nameIndex[reporterList[i][j]]]++;
      }
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

// 다른 사람의 풀이

function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
