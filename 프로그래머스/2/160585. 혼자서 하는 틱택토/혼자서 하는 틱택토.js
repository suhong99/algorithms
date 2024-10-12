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
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
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