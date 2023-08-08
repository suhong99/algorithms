// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;

  d.reduce((acc, curr) => {
    if (sum + curr <= budget) {
      sum += curr;
      count++;
    }
    return sum;
  }, 0);

  return count;
}
