// https://school.programmers.co.kr/learn/courses/30/lessons/340212?language=javascript

// 이분 탐색

function solution(diffs, times, limit) {
  let left = 1;
  let right = 100000;

  function calculateTime(level) {
    let totalTime = 0;
    let prevTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        totalTime += times[i];
      } else {
        totalTime += (prevTime + times[i]) * (diffs[i] - level) + times[i];
      }

      if (totalTime > limit) return totalTime;
      prevTime = times[i];
    }

    return totalTime;
  }

  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const time = calculateTime(mid);
    if (time <= limit) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

//시간 초과

function solutionTimeOver(diffs, times, limit) {
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

      prev = times[i];
    }

    if (answer <= limit) return level;

    level++;
  }
}
