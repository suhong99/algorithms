// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 정렬한다
// 젤 작은거 버린다.
// 이후 버리면서 확인한다.
// k는 필요 없을듯?

// 3~9라서 그냥 sort

// 시간초과
function solution1(k, m, score) {
  let answer = 0;
  // 오름차순으로 정렬
  score.sort();
  // 필요없는거 버리기
  let trashCount = score.length % m;
  score.splice(0, trashCount);
  while (score.length !== 0) {
    answer += score[0] * m;
    score.splice(0, m);
  }
  return answer;
}
function solution2(k, m, score) {
  let answer = 0;
  // 오름차순으로 정렬
  score.sort();
  // 필요없는거 버리기
  let trashCount = score.length % m;
  for (let i = trashCount; i <= score.length - m; i += m) {
    answer += m * score[i];
  }
  console.log(answer);
  return answer;
}

// solution1(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
solution2(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
