function solution(info, n, m) {
  let answer = Infinity;
  const memo = new Set();

  function stealNext(rn, rm, index) {
    if (index === info.length) {
      return (answer = Math.min(rn, answer));
    }
    const key = `${index}-${rn}-${rm}`;
    if (memo.has(key)) {
      return;
    }
    memo.add(key);

    const [costN, costM] = info[index];
    const newRn = rn + costN;
    const newRm = rm + costM;
    if (newRn < n && newRn < answer) {
      stealNext(newRn, rm, index + 1);
    }

    if (newRm < m) {
      stealNext(rn, newRm, index + 1);
    }
  }

  stealNext(0, 0, 0);
  return answer === Infinity ? -1 : answer;
}

// dp 예시

function solution2(info, n, m) {
  const len = info.length;
  const INF = 9999;

  // 이중 배열에 미리 무한을 채워놓음.

  //  dp[i][j]의 값은  i번쨰 물건을 b가 j만큼의 흔적으로 훔쳤을 때 a가 사용한 흔적량
  let dp = Array.from({ length: len + 1 }, () => Array(m).fill(INF));

  // 시작점에는 a와 b모두 안 훔쳤으니 0
  dp[0][0] = 0;

  for (let i = 0; i < len; i++) {
    // 시작점에서부터 물건 한 개씩 훔치기 시작
    let aTrace = info[i][0],
      bTrace = info[i][1];

    // b 가 흔적을 많이 남긴것부터 감소시킴
    for (let j = m - 1; j >= 0; j--) {
      // 만약 b가 j만큼 훔친게 불가능한 경우라면 무시
      if (dp[i][j] === INF) continue;

      // a가 훔친 경우
      let newA = dp[i][j] + aTrace;
      let newB = j;
      // a가 최대흔적보다 적게 훔쳤으면 도둑질. 이때 이미 b가 j만큼 훔친 값이 존재하면 최솟값으로 변경
      if (newA < n) dp[i + 1][newB] = Math.min(dp[i + 1][newB], newA);

      let newA2 = dp[i][j];
      let newB2 = j + bTrace;
      // b가 최대흔적보다 적게 훔쳤으면 도둑질. 이때 이미 b가 j만큼 훔친 값이 존재하면 최솟값으로 변경

      if (newB2 < m) dp[i + 1][newB2] = Math.min(dp[i + 1][newB2], newA2);
    }
  }

  // 마지막 물건까지 훔친 경우의 수 중에서 최솟값을 선택
  let result = Math.min(...dp[len]);
  // 만약 해당 값이 무한이 나온다면 불가능한 경우
  return result === INF ? -1 : result;
}

console.log(
  solution2(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4
  )
);
