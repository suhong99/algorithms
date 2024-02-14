function solution(s) {
  max = s.length;
  let answer = max;
  for (let i = 1; i <= max / 2; i++) {
    // 더는 할 필요 없을 경우 중지
    const leftString = max % i;
    let maxResult = parseInt(max / i) + leftString;
    if (maxResult > answer) break;
    // 나머지의 개수 만큼 미리 더하기
    let currentResult = max % i;
    let prevValue;
    let counted = 1;
    let lastOne = max - leftString - i;

    for (let j = 0; j < max - leftString; j += i) {
      currentValue = s.substring(j, j + i);
      if (currentValue === prevValue) {
        counted++;
        if (j === lastOne) currentResult += (counted + '').length;
        continue;
      }
      prevValue = currentValue;
      if (counted !== 1) {
        currentResult += (counted + '').length;
        counted = 1;
      }
      currentResult += i;
    }
    answer = Math.min(answer, currentResult);
  }

  return answer;
}

// console.log(solution('aabbaccc'));
console.log(solution('aaaaaaaaaaaabcd'));
