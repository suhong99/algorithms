
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
    console.log(mid,time)
      if (time <= limit) {
        answer = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return answer;

}
