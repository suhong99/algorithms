function solution(n, m, section) {
  let answer = 0;
  let max = 0;
  section.forEach((s) => {
    if (s > max) {
      answer++;
      max = s + m - 1;
    }
  });
  return answer;
}
solution(8, 4, [2, 4, 6]);
