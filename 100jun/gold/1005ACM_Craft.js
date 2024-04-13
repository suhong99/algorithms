const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const T = +input[0];
let index = 1;

for (let t = 1; t <= T; t++) {
  const [n, k] = input[index].split(' ').map(Number);
  const timeArr = input[index + 1].split(' ').map(Number);
  index += 2;
  const graph = Array(n + 1)
    .fill()
    .map(() => []);
  const minBuild = [0, ...timeArr];
  for (let i = 0; i < k; i++) {
    const [start, end] = input[index + i].split(' ').map(Number);
    graph[end].push(start);
  }

  index += k;
  const target = input[index++];
  console.log(countTotal(target));

  function countTotal(number) {
    while (true) {
      if (graph[number].length === 0) {
        return minBuild[number];
      }
      const subTarget = graph[number].pop();
      minBuild[number] = Math.max(
        minBuild[number],
        countTotal(subTarget) + timeArr[number - 1]
      );
    }
  }
}
