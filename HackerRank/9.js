function minimumTreePath(n, edges, visitNodes) {
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  //방문한 지점이 담긴 배열 생성
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    graph[from].push(to);
    graph[to].push(from);
  }
}

console.log(
  minimumTreePath(
    3,
    [
      [1, 2],
      [1, 3],
    ],
    [2]
  )
);
