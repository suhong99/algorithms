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