const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(''));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let result1 = 0;
let result2 = 0;
let visited = [];
let visited2 = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(n).fill(false));
  visited2.push(new Array(n).fill(false));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      result1++;
      visited[i][j] = true;
      dfs(i, j);
    }
    if (!visited2[i][j]) {
      result2++;
      visited2[i][j] = true;
      dfs2(i, j);
    }
  }
}

function dfs(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (graph[x][y] === graph[nx][ny] && !visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(nx, ny);
    }
  }
}

function dfs2(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (
      graph[x][y] === 'B' &&
      graph[x][y] === graph[nx][ny] &&
      !visited2[nx][ny]
    ) {
      visited2[nx][ny] = true;
      dfs2(nx, ny);
    }
    if (graph[x][y] !== 'B' && graph[nx][ny] !== 'B' && !visited2[nx][ny]) {
      visited2[nx][ny] = true;
      dfs2(nx, ny);
    }
  }
}

console.log(result1 + ' ' + result2);

// const n = +input[0];
// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph.push(input[i].split(''));
// }

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// let result1 = 0;
// let result2 = 0;
// let visited = [];
// let visited2 = [];
// for (let i = 0; i < n; i++) {
//   visited.push(new Array(n).fill(false));
//   visited2.push(new Array(n).fill(false));
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (!visited[i][j]) {
//       result1++;
//       visited[i][j] = true;
//       dfs(i, j, false);
//     }
//     if (!visited2[i][j]) {
//       result2++;
//       visited2[i][j] = true;
//       dfs(i, j, true);
//     }
//   }
// }

// function dfs(x, y, isRGCB) {
//   if (!isRGCB) {
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
//       if (graph[x][y] === graph[nx][ny] && !visited[nx][ny]) {
//         visited[nx][ny] = true;
//         dfs(nx, ny, false);
//       }
//     }
//   }

//   if (isRGCB) {
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
//       if (
//         graph[x][y] === 'B' &&
//         graph[x][y] === graph[nx][ny] &&
//         !visited2[nx][ny]
//       ) {
//         visited2[nx][ny] = true;
//         dfs(nx, ny, true);
//       }
//       if (graph[x][y] !== 'B' && graph[nx][ny] !== 'B' && !visited2[nx][ny]) {
//         visited2[nx][ny] = true;
//         dfs(nx, ny, true);
//       }
//     }
//   }
// }
