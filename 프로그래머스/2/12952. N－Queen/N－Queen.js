function solution(n) {
    let queens = [];
    let cnt = 0;

    function possible(x, y) {
      for (let [a, b] of queens) {
        if (b == y) return false;
        if (Math.abs(a - x) == Math.abs(b - y)) return false;
      }
      return true;
    }
  
    function dfs(row) {
      if (row == n) cnt += 1;
      for (let i = 0; i < n; i++) {
        if (!possible(row, i)) continue;
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
      }
    }
    dfs(0);
    return cnt
}