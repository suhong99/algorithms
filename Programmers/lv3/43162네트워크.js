// https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
/**
 *  풀이 : 네트워크가 연결되어있는지를 판별하는거. -> 그래프 문제
 *  --> 최초 방문인 경우에만 1을 더하는 방식으로 품
 *  --> dfs의 반환값을 설정하면 굳이 매개변수로 최초 여부를 전달할 필요가 없음
 */


function solution(n, computers) {
  let visited = Array(n).fill(false);
  let network = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i, false);
  }

  function dfs(node, isContinue) {
    visited[node] = true;
    if (!isContinue) network++;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i, true);
      }
    }
  }
  return network;
}
