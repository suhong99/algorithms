function solution(id_list, report, k) {
  let report_list = {};
  const n = id_list.length;
  let answer = Array(n).fill(0);
  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((user) => {
    let [reporter, reportee] = user.split(' ');

    if (!report_list[reportee].includes(reporter)) {
      report_list[reportee].push(reporter);
    }
  });

  for (let key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
