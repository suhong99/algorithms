function solution(n, t, m, timetable) {
  // 막차시간
  const lastBus = 540 + (n - 1) * t;
  // 무조건 탈 수 있는 경우 막차탐
  if (m > timetable.length) {
    return timeConverter(lastBus);
  }

  // 막차 이후의 사람들은 제거하고 오름차순 정렬
  const minuteTable = timetable
    .map((e) => minuteConverter(e))
    .filter((e) => e <= lastBus)
    .sort((a, b) => a - b);

  let currentIndex = 0;
  const totalCrew = minuteTable.length;
  if (totalCrew === 0) {
    return timeConverter(lastBus);
  }
  for (let i = 0; i < n; i++) {
    const busTime = 540 + i * t;
    for (let j = 1; j <= m; j++) {
      // 현재 크루가 이번 버스보드 늦는 경우
      if (minuteTable[currentIndex] > busTime) {
        break;
      }
      // 현재 크류
      if (i === n - 1 && j === m) {
        return timeConverter(minuteTable[currentIndex] - 1);
      }
      if (currentIndex === totalCrew - 1) {
        return timeConverter(lastBus);
      }

      currentIndex++;
    }
  }
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

// console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03'])); // 09:00
// console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));//09:09
// console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00'])); // 08:59
// console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01'])); //00:00
// console.log(solution(1, 1, 1, ['23:59'])); //09:00
// console.log(
//   solution(10, 60, 45, [
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//   ])
// ); //18:00
// console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00', '09:09'])); //09:08
// console.log(solution(2, 1, 2, ['08:00', '08:01', '08:02', '08:03'])); //08:02
// console.log(solution(3, 1, 2, ['08:00', '08:01', '08:02', '08:03'])); //09:02
console.log(
  solution(3, 10, 2, ['09:00', '09:01', '09:02', '09:03', '09:30', '09:29'])
); //09:20
