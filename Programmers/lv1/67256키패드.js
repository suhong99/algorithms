// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
// 남들에 비해서도 좀 더 button을 많이 등록했따.
function solution(numbers, hand) {
  let answer = "";
  let left = 10,
    right = 11;
  const buttonMap = {
    0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1],
    2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4],
    5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3],
    8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2],
  };
  for (num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      left = num;
      answer += "L";
    }

    if (num === 3 || num === 6 || num === 9) {
      right = num;
      answer += "R";
    }

    if (num === 2 || num === 5 || num === 8 || num === 0) {
      if (buttonMap[num][left] < buttonMap[num][right]) {
        left = num;
        answer += "L";
      } else if (buttonMap[num][left] === buttonMap[num][right]) {
        if (hand === "right") {
          right = num;
          answer += "R";
        } else {
          left = num;
          answer += "L";
        }
      } else {
        right = num;
        answer += "R";
      }
    }
  }
  return answer;
}

//  타인풀이
// 나처럼 모든 키패드 등록하지 않고, 층을 기록하면 더 효율적인 알고리즘이 된다.

function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers
    .map((x) => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return "L";
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return "R";
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return "L";
      }
      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}
