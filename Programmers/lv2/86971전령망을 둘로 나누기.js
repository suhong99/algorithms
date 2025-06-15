// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  // 그래프 만들기 (1-indexed)
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  let answer = n;

  // 간선 하나씩 끊어본다
  for (const [cutA, cutB] of wires) {
    const visited = Array(n + 1).fill(false);
    let count = bfs(cutA, cutA, cutB, graph, visited);
    answer = Math.min(answer, Math.abs(n - 2 * count));
  }

  return answer;
}

function bfs(start, cutA, cutB, graph, visited) {
  let queue = [start];
  visited[start] = true;
  let count = 1;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (
        !visited[next] &&
        !(node === cutA && next === cutB) &&
        !(node === cutB && next === cutA)
      ) {
        visited[next] = true;
        queue.push(next);
        count++;
      }
    }
  }
  return count;
}
