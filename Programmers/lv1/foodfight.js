// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let answer = "0";
  for (let i = food.length - 1; i > 0; i--) {
    answer =
      (i + "").repeat(Math.floor(food[i] / 2)) +
      answer +
      (i + "").repeat(Math.floor(food[i] / 2));
  }
  return answer;
}

// 잘 푼듯
solution([1, 3, 4, 6], "1223330333221");

console.log(Math.floor(7 / 2));
