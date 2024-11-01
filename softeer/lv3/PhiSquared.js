const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' '));
}).on('close', () => {
  let miseng = input[1].map((e, i) => ({ idx: i + 1, size: Number(e) }));
  let stack = [];
  let si = -1;
  let di = 0;
  while (miseng.length > 1) {
    if (di === miseng.length) {
      miseng = stack;
      di = 0;
      si = -1;
      stack = [];
      continue;
    }

    const { idx, size } = miseng[di];
    di++;

    let newSize = size;
    if (di === 1) {
      const { idx: nextIdx, size: nextSize } = miseng[di];
      if (size >= nextSize) {
        newSize += nextSize;
        di++;
      }
      stack.push({ idx, size: newSize });
      si++;
      continue;
    }

    const { idx: prevIdx, size: prevSize } = stack[si];
    if (size >= prevSize) {
      newSize += prevSize;
      stack.pop();
      si--;
    }

    // 뒤의 미생물과 비교
    if (di === miseng.length) {
      stack.push({ idx, size: newSize });
      continue;
    }

    // 뒤에 올 미생물이 현재 값보다 작은 경우
    const { idx: nextIdx, size: nextSize } = miseng[di];
    if (size >= nextSize) {
      newSize += nextSize;
      di++;
    }

    stack.push({ idx, size: newSize });
    si++;
  }
  console.log(miseng[0].size);
  console.log(miseng[0].idx);
  process.exit(0);
});
