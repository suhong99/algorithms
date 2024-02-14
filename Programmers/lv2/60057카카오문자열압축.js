function solution(s) {
  max = s.length;
  let answer = max;
  for (let i = 1; i <= s / 2; i++) {
    // 더는 할 필요 없을 경우 중지
    let maxResult = parseInt(max / s) + (max % s);
    if (maxResult > answer) break;
    let currentResult = max % s;
    let prevValue;
    let counted = false;
    for (let j = 0; j < s / i; j += i) {
      currentValue = s.subString(j, j + i);
      if (currentValue === prevValue) {
        if (!counted) {
          counted = true;
          currentResult++;
        }
        continue;
      }
      prevValue = currentValue;
      counted = 0;
      currentResult += i;
    }
    answer = Math.min(answer, currentResult);
  }

  return answer;
}

console.log(solution('aabbaccc'));
