// https://school.programmers.co.kr/learn/courses/30/lessons/64061

// 조르디 크레인 인형뽑기 문제

function solution(board, moves) {
  let answer = 0; // 터진 개수
  const bucket = [-1]; // 첫 번째로 넣을 때 오류나지 않게 -1 설정
  const n = board.length;
  const maxCounts = new Array(n).fill(0); //각 칸에 몇 개씩 쌓여 있는지 측정
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 갯수 파악
      if (maxCounts[j] === 0 && board[i][j] !== 0) {
        maxCounts[j] = n - i;
        continue;
      }
    }
  }
  // move를 이용해서 축적 unshift사용

  moves.forEach((place) => {
    // 해당 행의 블럭이 남아있는 경우
    if (maxCounts[place - 1] !== 0) {
      // bucket에 마지막으로 담은것과 해당 번호가 일치하지 않는다면
      if (board[n - maxCounts[place - 1]][place - 1] !== bucket[0]) {
        bucket.unshift(board[n - maxCounts[place - 1]][place - 1]);
      } else {
        // console.log(bucket[0] + "bucket[0]");
        // console.log(bucket[0] + "bucket[0]");

        // 기존에 있는거 제거 후 삭제된 개수 2개 증가
        bucket.splice(0, 1);
        answer += 2;
      }
      // 이후 개수감소
      maxCounts[place - 1] = maxCounts[place - 1] - 1;
    }
  });
  // console.log(answer);
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

// 다른 사람의 풀이
const solution2 = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );
