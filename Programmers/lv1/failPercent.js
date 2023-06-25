// https://school.programmers.co.kr/learn/courses/30/lessons/42889
//
function solution(N, stages) {
  let answer = [1];
  let successNum = [];
  // 초기값0 으로 설정
  for (let i = 0; i <= N; i++) {
    successNum[i] = 0;
  }
  stages.forEach((element) => {
    // 1층은 인덱스 0 으로 해서 각 층마다 성공횟수 구하기.
    successNum[element - 1] = successNum[element - 1] + 1;
  });
  let higherUser = successNum[N]; // 마지막층에 도착한유저 수
  //실패율 구하기
  let failRate = [];
  //역순으로 시작
  for (let i = N - 1; i >= 0; i--) {
    if (higherUser == 0 && successNum[i] == 0) {
      failRate[i] = 0;
      continue;
    }
    higherUser += successNum[i]; //현재층 와본 유저수
    failRate[i] = successNum[i] / higherUser; // 실패율
  }
  for (let i = 1; i < failRate.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      // 실패율이 더 낮은 수 등장시 추가
      if (failRate[i] > failRate[answer[j] - 1]) {
        answer.splice(j, 0, i + 1);
        break;
      }
      // 가장 클 경우 추가
      if (j == answer.length - 1) {
        answer.push(i + 1);
        break;
      }
    }
  }
  return answer;
}

solution1(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 다른 사람의 풀이
function solution1(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length; //도달한 사람수
    let curr = stages.filter((x) => x === i).length; // 현재 스테이지 사람수
    // 실패율과 스테이지를 같이 넣음
    result.push([i, curr / reach]);
  }
  //실패율로 정렬
  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}

// 공간복잡도는 많은데 시간복잡도가 너무 높음
