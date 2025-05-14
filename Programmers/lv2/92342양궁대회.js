//school.programmers.co.kr/learn/courses/30/lessons/92342

https: function solution(n, info) {
  let maxDiff = -1;
  let answer = [-1];

  function dfs(idx, arrowsLeft, ryanInfo) {
    if (idx === 11) {
      if (arrowsLeft > 0) ryanInfo[10] += arrowsLeft;

      let ryanScore = 0;
      let apeachScore = 0;

      for (let i = 0; i < 11; i++) {
        if (info[i] === 0 && ryanInfo[i] === 0) continue;
        if (ryanInfo[i] > info[i]) ryanScore += 10 - i;
        else apeachScore += 10 - i;
      }

      const diff = ryanScore - apeachScore;

      if (diff <= 0) return;

      if (diff > maxDiff) {
        maxDiff = diff;
        answer = [...ryanInfo];
      } else if (diff === maxDiff) {
        for (let i = 10; i >= 0; i--) {
          if (ryanInfo[i] > answer[i]) {
            answer = [...ryanInfo];
            break;
          } else if (ryanInfo[i] < answer[i]) {
            break;
          }
        }
      }

      if (arrowsLeft > 0) ryanInfo[10] -= arrowsLeft;
      return;
    }

    // 1. 이기기 위해 더 쏘는 경우
    if (arrowsLeft > info[idx]) {
      const tmp = [...ryanInfo];
      tmp[idx] = info[idx] + 1;
      dfs(idx + 1, arrowsLeft - (info[idx] + 1), tmp);
    }

    // 2. 아예 안 쏘는 경우
    const tmp2 = [...ryanInfo];
    tmp2[idx] = 0;
    dfs(idx + 1, arrowsLeft, tmp2);
  }

  dfs(0, n, new Array(11).fill(0));
  return answer;
}
