// 하루라는 특수 조건이 있어서 간단한 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/389479

function solution(players, m, k) {
  const needs = players.map((e) => Math.floor(e / m));
  let answer = 0;
  for (let i = 0; i < 24; i++) {
    const need = needs[i];
    if (need === 0) continue;
    answer += need;

    for (let j = i + 1; j < i + k && j < 24; j++) {
      const other = needs[j];
      if (other === 0) continue;
      if (other <= need) {
        needs[j] = 0;
      } else {
        needs[j] -= need;
      }
    }
  }
  return answer;
}
