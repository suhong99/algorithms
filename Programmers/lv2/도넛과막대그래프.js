// https://school.programmers.co.kr/learn/courses/30/lessons/258711

// 풀이
// 1. 그래프를 각각 들어오는 것과 나가는 번호를 기록해서 정리함
// 2. 들어오는 값이 없는 점을 정점
// 3. 정점을 기준으로 정점과 이어

// 임의의 점이라 틀린 방법
// 3. 정점에서 나가는 점들을 기준으로 나가는 값이 2개면 8자
// 4. 나머지 중 도넛 들어오는 값이 2개면
// 5. 나머진 막대

// 리턴은 정점,도넛 막대 8자
//35 번 런타임에러

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
    if (
      graphIn[i] === undefined &&
      graphOut[i] !== undefined &&
      graphOut[i].length > 1
    ) {
      point = i;
      break;
    }
  }

  const connected = graphOut[point];
  connected.forEach((element) => {
    graphIn[element] = graphIn[element].filter((e) => e !== point);
  });

  let donut = connected.length;

  for (let i = 1; i < max; i++) {
    if (i === point) continue;
    if (donut === 0) break;

    if (graphIn[i] === undefined && graphOut[i] !== undefined) {
      stick++;
      donut--;
      continue;
    }

    if (graphIn[i] !== undefined && graphIn[i].length === 0) {
      stick++;
      donut--;
      continue;
    }
    if (graphOut[i] && graphOut[i].length === 2) {
      oct++;
      donut--;
    }
  }

  return [point, donut, stick, oct];
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
    [1, 12],
    [8, 3],
    [12, 7],
    [7, 11],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
    [4, 11],
    [4, 8],
  ])
);

console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ])
);
