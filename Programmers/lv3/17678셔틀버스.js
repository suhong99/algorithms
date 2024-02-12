function solution(n, t, m, timetable) {
  const lastBus = 540 + (n - 1) * t;
  if (m > timetable.length) {
    return timeConverter(lastBus);
  }

  const minuteTable = timetable
    .map((e) => minuteConverter(e))
    .sort((a, b) => a - b);

  console.log(timetable);
  console.log(minuteTable, '시간');
}

function minuteConverter(value) {
  const [hour, minute] = value.split(':').map(Number);
  return hour * 60 + minute;
}

function timeConverter(value) {
  const hour = parseInt(value / 60);
  const minute = value % 60;
  const stringMinute = minute < 10 ? '0' + minute : minute;
  return hour < 10
    ? '0' + hour + ':' + stringMinute
    : hour + ':' + stringMinute;
}

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00']));
console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01']));
console.log(solution(1, 1, 1, ['23:59']));
console.log(
  solution(10, 60, 45, [
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
  ])
);
