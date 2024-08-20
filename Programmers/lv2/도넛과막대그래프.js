// https://school.programmers.co.kr/learn/courses/30/lessons/258711

// 풀이
// 1. 그래프를 각각 들어오는 것과 나가는 번호를 기록해서 정리함
// 2. 들어오는 값이 없는 점을 정점

// 임의의 점이라 틀린 방법
// 3. 정점에서 나가는 점들을 기준으로 나가는 값이 2개면 8자
// 4. 나머지 중 도넛 들어오는 값이 2개면
// 5. 나머진 막대

// 리턴은 정점,도넛 막대 8자

function solution(edges) {
  let point;
  let stick = 0,
    oct = 0;

  const graphOut = [];
  const graphIn = [];
  edges.forEach((element) => {
    const [start, end] = element;
    insert(start, end, graphOut);
    insert(end, start, graphIn);
  });

  const max = Math.max(graphIn.length, graphOut.length);

  for (let i = 1; i < graphIn.length; i++) {
    if (graphIn[i] === undefined) {
      point = i;
      break;
    }
  }

  const connected = graphOut[point];
  connected.forEach((element) => {
    graphIn[element] = graphIn[element].filter((e) => e !== point);
  });

  for (let i = 1; i < max; i++) {
    if (i === point) continue;
    if (graphIn[i] === undefined || graphIn[i].length === 0) {
      stick++;
      continue;
    }
    if (graphOut[i] && graphOut[i].length === 2) {
      oct++;
    }
  }

  return [point, connected.length - stick - oct, stick, oct];
}

function insert(i, val, arr) {
  if (arr[i] === undefined) {
    arr[i] = [val];
  } else {
    arr[i].push(val);
  }
}
console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);
