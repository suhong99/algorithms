const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

// let board = [];
// const n = +input[0];
// for (let i = 1; i <= n; i++) {
//   board.push(input[i].split(' ').map(Number));
// }

// let max = 0;

// function dfs(currentBoard, count) {
//   if (count === 5) {
//     // console.log(currentBoard, '현재');
//     max = Math.max(
//       max,
//       ...currentBoard.map((line) =>
//         line.reduce((acc, cur) => Math.max(acc, cur))
//       )
//     );
//     return;
//   }

//   for (let i = 0; i < 4; i++) {
//     const changedBoard = move(currentBoard, i);
//     dfs(changedBoard, count + 1);
//   }
// }

// function move(currentBoard, dir) {
//   let changedBoard = Array(n)
//     .fill()
//     .map(() => Array(n).fill(0));

//   if (dir === 0) {
//     // Up
//     for (let j = 0; j < n; j++) {
//       let index = 0;
//       for (let i = 0; i < n; i++) {
//         if (currentBoard[i][j] !== 0) {
//           // 마지막 줄이 아니고, 현재께 다음거랑 같다면
//           if (i !== n - 1 && currentBoard[i][j] === currentBoard[i + 1][j]) {
//             // 다음줄은 건너뛰고, 현재값을 2배로 함
//             changedBoard[index][j] = 2 * currentBoard[i++][j];
//           } else {
//             // 아니면 바뀐값은 현재값을 넣음
//             changedBoard[index][j] = currentBoard[i][j];
//           }
//           index++;
//         }
//       }
//     }
//   } else if (dir === 1) {
//     // Down
//     for (let j = 0; j < n; j++) {
//       // 아래쪽 끝부터
//       let index = n - 1;
//       for (let i = n - 1; i >= 0; i--) {
//         if (currentBoard[i][j] !== 0) {
//           // 시작점이 아니고, 현재께 다음꺼랑 같다면
//           if (i !== 0 && currentBoard[i][j] === currentBoard[i - 1][j]) {
//             changedBoard[index][j] = 2 * currentBoard[i--][j];
//           } else {
//             changedBoard[index][j] = currentBoard[i][j];
//           }
//           index--;
//         }
//       }
//     }
//   } else if (dir === 2) {
//     // Right
//     for (let i = 0; i < n; i++) {
//       let index = n - 1;
//       for (let j = n - 1; j >= 0; j--) {
//         if (currentBoard[i][j] !== 0) {
//           if (j !== 0 && currentBoard[i][j] === currentBoard[i][j - 1]) {
//             changedBoard[i][index] = 2 * currentBoard[i][j--];
//           } else {
//             changedBoard[i][index] = currentBoard[i][j];
//           }
//           index--;
//         }
//       }
//     }
//   } else if (dir === 3) {
//     // Left
//     for (let i = 0; i < n; i++) {
//       let index = 0;
//       for (let j = 0; j < n; j++) {
//         if (currentBoard[i][j] !== 0) {
//           if (j !== 0 && currentBoard[i][j] === currentBoard[i][j + 1]) {
//             changedBoard[i][index] = 2 * currentBoard[i][j++];
//           } else {
//             changedBoard[i][index] = currentBoard[i][j];
//           }
//           index++;
//         }
//       }
//     }
//   }

//   return changedBoard;
// }
// dfs(board, 0);
// console.log(max);

const N = Number(input.shift());
const data = input.map((line) => line.split(' ').map(Number));

let max = Number.MIN_SAFE_INTEGER;
const deltas = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(data, count) {
  if (count === 5) {
    max = Math.max(
      max,
      ...data.map((line) => line.reduce((acc, cur) => Math.max(acc, cur)))
    );
    return;
  }

  for (let i = 0; i < 4; i++) {
    dfs(rotate(data, deltas[i]), count + 1);
  }
}

function rotate(data, [dI, dJ]) {
  data = [...data.map((line) => [...line])];

  const move = ([i, j]) => {
    while (i - dI >= 0 && i - dI < N && j - dJ >= 0 && j - dJ < N) {
      if (data[i - dI][j - dJ] === 0) {
        data[i - dI][j - dJ] = data[i][j];
        data[i][j] = 0;
      } else if (
        data[i - dI][j - dJ] > 0 &&
        data[i][j] === data[i - dI][j - dJ]
      ) {
        data[i - dI][j - dJ] += data[i][j];
        data[i - dI][j - dJ] *= -1;
        data[i][j] = 0;
      }
      i -= dI;
      j -= dJ;
    }
  };

  if (dI != 0) {
    for (let j = 0; j < N; j++) {
      let i = dI < 0 ? N - 2 : 1;
      for (; i >= 0 && i < N; i += dI) {
        move([i, j]);
      }
    }
  } else if (dJ != 0) {
    for (let i = 0; i < N; i++) {
      let j = dJ < 0 ? N - 2 : 1;
      for (; j >= 0 && j < N; j += dJ) {
        move([i, j]);
      }
    }
  }

  return data.map((line) => line.map((n) => Math.abs(n)));
}

dfs(data, 0);
console.log(max);
