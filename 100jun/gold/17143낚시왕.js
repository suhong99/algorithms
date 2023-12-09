const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [r, c, n] = input[0].split(' ').map(Number);
let answer = 0;

let graph = Array.from(Array(r), () => Array(c).fill(false));
const xCount = 2 * r - 2;
const yCount = 2 * c - 2;
let newGraph;

for (let i = 1; i <= n; i++) {
  const [x, y, s, d, z] = input[i].split(' ').map(Number);
  if (d === 1 || d === 2) {
    graph[x - 1][y - 1] = [s % xCount, d, z];
  } else {
    graph[x - 1][y - 1] = [s % yCount, d, z];
  }
}

for (let i = 0; i < c; i++) {
  fishing(i);
  move();
}

function fishing(y) {
  for (let i = 0; i < r; i++) {
    if (graph[i][y]) {
      answer += graph[i][y][2];
      return (graph[i][y] = false);
    }
  }
}

function move() {
  newGraph = Array.from(Array(r), () => Array(c).fill(false));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (graph[i][j]) {
        const [s, d, z] = graph[i][j];
        if (d === 1) {
          if (s < i) {
            newX = i - s;
            eating(newX, j, [s, d, z]);
          } else if (s - i < r - 1) {
            newX = s - i;
            eating(newX, j, [s, 2, z]);
          } else {
            newX = i + (xCount - s);
            eating(newX, j, [s, d, z]);
          }
        }
        if (d === 2) {
          if (s < r - 1 - i) {
            newX = i + s;
            eating(newX, j, [s, d, z]);
          } else if (s < 2 * r - 2 - i) {
            newX = xCount - s - i;

            eating(newX, j, [s, 1, z]);
          } else {
            newX = i + s - xCount;
            eating(newX, j, [s, d, z]);
          }
        }
        if (d === 3) {
          if (s < c - 1 - j) {
            newY = j + s;
            eating(i, newY, [s, d, z]);
          } else if (s < yCount - j) {
            newY = yCount - s - j;
            eating(i, newY, [s, 4, z]);
          } else {
            newY = j + s - yCount;
            eating(i, newY, [s, d, z]);
          }
        }
        if (d === 4) {
          if (s < j) {
            newY = j - s;
            eating(i, newY, [s, d, z]);
          } else if (s - j < c - 1) {
            newY = s - j;
            eating(i, newY, [s, 3, z]);
          } else {
            newY = j + (yCount - s);
            eating(i, newY, [s, d, z]);
          }
        }
      }
    }
  }
  graph = newGraph;
}

function eating(x, y, shark) {
  if (newGraph[x][y] && newGraph[x][y][2] > shark[2]) {
    return;
  } else {
    newGraph[x][y] = shark;
  }
}
console.log(answer);
