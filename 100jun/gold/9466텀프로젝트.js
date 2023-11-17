const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
let visited = [];
const testCase = +input[0];
let favorite = [];
let selected = [];
let count = 0;
for (let t = 0; t < testCase; t++) {
  const memberCnt = +input[1 + 2 * t];
  // 케이스마다 좋아하는 배열 초기화
  favorite = input[2 + 2 * t].split(' ').map((e) => e - 1);
  // 조 못이룬 사람 수
  count = 0;
  // 확인 한 경우
  visited = new Array(memberCnt).fill(false);

  for (let i = 0; i < memberCnt; i++) {
    //아직 확인 안 한 사람중에
    if (!visited[i]) {
      // 현재 순회중인 대상
      selected = [i];
      visited[i] = true;
      const like = favorite[i];
      if (like === i) {
        // 혼자 하는 놈
      } else if (visited[like]) {
        // 이미 탐색이 끝난 애(조를 이루거나 조가 이루어 질 수 없는 애랑 하고 싶어하면 실패)
        count++;
      } else {
        // 나머진 탐색
        dfs(like);
      }
    }
  }
  console.log(count);
}

function dfs(like) {
  visited[like] = true;
  const favOfLike = favorite[like];
  if (favOfLike === like) {
    // 혼자 하고 싶어하면 순회중인 나머진 조 못 이룸
    count += selected.length;
  } else if (visited[favOfLike]) {
    // 이미 방문했던 애를 좋아한다면
    const targetIndex = selected.findIndex((e) => e === favOfLike);
    if (targetIndex === -1) {
      // 순회 중이지 않다면
      count += selected.length;
    } else {
      // 만약 대상이 현재 순회중인 애 라면
      count += targetIndex;
    }
  } else {
    // 순회 대상에 추가하고 새로운 애를 통해 순회
    selected.push(like);
    dfs(favOfLike);
  }
}

/* 강의 모범 답안
const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

let testCases = +input[0];
let line = 1;
while (testCases--) {
  let n = +input[line];
  let graph = [0, ...input[line + 1].split(' ').map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  line += 2;
  console.log(n - result.length);
}
function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
 */
