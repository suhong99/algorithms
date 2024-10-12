// 실패 케이스
//  O 개수가 X보다 작은 경우 혹은 O개수가 X+1 보다 큰 경우
// O이 세줄 이어졌는데, X+1개가 아닌 경우
// X가 이어졌는데 O 개수랑 다른 경우

function solution(board) {
  // O와 X의 개수를 셉니다.
  let countO = 0;
  let countX = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'O') countO++;
      if (board[i][j] === 'X') countX++;
    }
  }

  // 1. 개수 규칙 확인 (O는 X보다 많아야 하고 1개 이상 차이 나면 안 됨)
  if (countO < countX || countO > countX + 1) {
    return 0;
  }

  // 승리 조건을 확인하는 함수
  function checkWinner(player) {
    // 가로, 세로, 대각선에서 승리했는지 확인
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      )
        return true;
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      )
        return true;
    }
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;
    return false;
  }

  // 2. O와 X가 승리했는지 확인
  const oWins = checkWinner('O');
  const xWins = checkWinner('X');

  // O와 X가 동시에 이기는 경우는 불가능
  if (oWins && xWins) return 0;

  // O가 이겼다면, O는 X보다 정확히 1개 더 많아야 함
  if (oWins && countO !== countX + 1) return 0;

  // X가 이겼다면, O와 X의 개수가 같아야 함
  if (xWins && countO !== countX) return 0;

  // 위 조건을 모두 통과하면 규칙을 잘 지킨 상태
  return 1;
}

// 틀린 케이스 :  OXO XOX OXO 같이 2줄 동시에 달성할 수 있음
function solution(board) {
  const count = { O: 0, X: 0 };
  let winCount = { O: 0, X: 0 };

  board.map((line) => {
    if (line === 'OOO') {
      winCount.O++;
    } else if (line === 'XXX') {
      winCount.X++;
    }

    for (let i = 0; i < 3; i++) {
      if (line[i] !== '.') count[line[i]]++;
    }
  });

  if (count['O'] < count['X'] || count['O'] > count['X'] + 1) return 0;

  for (let i = 0; i < 3; i++) {
    const block = board[i][0];
    if (block === '.') continue;
    if (board[i][1] === block && board[i][2] === block) {
      winCount[block]++;
    }

    if (i === 0) {
      if (board[1][1] === block && board[2][2] === block) {
        winCount[block]++;
      }
    }

    if (i === 2) {
      if (board[1][1] === block && board[2][0] === block) {
        winCount[block]++;
      }
    }
  }

  if (winCount.O + winCount.X > 1) return 0;
  if (winCount.O && count.O === count.X) {
    return 0;
  }
  if (winCount.X && count.O > count.X) return 0;
  return 1;
}

const input = [
  ['O.X', '.O.', '..X'],
  ['OOO', '...', 'XXX'],
  ['...', '.X.', '...'],
  ['...', '...', '...'],
  ['OOO', 'O..', 'OXX'],
  ['OXX', 'OO.', 'OXX'],
  ['OOO', 'O..', 'XXX'],
];

input.map((e) => {
  console.log(solution(e));
});
