// https://school.programmers.co.kr/learn/courses/30/lessons/68645

// 이차 배열을 직접 이동하며 채운다음에 flat함 --> 이걸 각각 배열이 들어갈 인댁스를 미리 계산해서 flat작업 생략
function solution(n) {
  const answer = Array((n * (n + 1)) / 2).fill(0);

  let x = -1,
    y = 0,
    num = 1;
  let idx = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        // 아래로 이동
        x++;
      } else if (i % 3 === 1) {
        // 오른쪽 이동
        y++;
      } else {
        // 위왼쪽 대각선 이동
        x--;
        y--;
      }
      answer[getIndex(x, y)] = num++;
    }
  }

  return answer;

  // 2차원 좌표를 1차원으로 변환
  function getIndex(row, col) {
    return (row * (row + 1)) / 2 + col;
  }
}
