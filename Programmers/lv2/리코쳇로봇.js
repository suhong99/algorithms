// 넓이 우선 탐색을 실시함
// 만약 방문한 곳에 또 방문한다면 종료
// 찾는다면 종료하고 횟수할당
// queue가 비었다면 불가능

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function solution(board) {
  let answer = 0;
  board = board.map((items) => items.split(''));

  const q = new Queue();
  const n = board.length;
  const m = board[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  board.forEach((items, i) => {
    items.forEach((item, j) => {
      if (item === 'R') {
        q.enqueue([i, j]);
        board[i][j] = 'O';
      }
    });
  });

  while (q.getLength()) {
    const size = q.getLength();

    for (let i = 0; i < size; i++) {
      const [x, y] = q.dequeue();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        while (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          board[nx][ny] !== 'D'
        ) {
          nx += dx[j];
          ny += dy[j];
        }

        nx -= dx[j];
        ny -= dy[j];

        if (board[nx][ny] === 'G') return answer + 1;

        if (board[nx][ny] !== 'O') {
          board[nx][ny] = 'O';
          q.enqueue([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}

console.log(solution(['.D.R', '..G.', '..D.', '...D']));
console.log(solution(['.D.R', '....', '..D.', '..GD']));
console.log(solution(['.D.R.', '.....', '..D..', '...D.', 'D.G..']));
console.log(solution(['GD.R.', '.....', '..D..', '...D.', 'D....']));
console.log(solution(['.D.R.', 'D....', '..D..', '...D.', 'DG...']));
console.log(solution(['.D.R.', 'D....', '..D..', '.G.D.', '.....']));
console.log(solution(['.D.R..', 'D.....', '..D..D', '...D.G', '......']));
