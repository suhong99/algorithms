// 큰돌의터전 dfs
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return;
  visited.add(here);
  //   console.log(here);
  graph[here].forEach((e) => {
    dfs(e, visited);
  });
};
dfs(1);

const targetArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 20, 50, 70];

const bs = (target, a) => {
  let lo = 0;
  let hi = a.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] === target) {
      //   console.log('찾음');
      return;
    } else if (a[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
};

bs(15, targetArr);

//dp
const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1;
  if (idx in memo) return memo[idx];
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  return memo[idx];
};

console.log(fibo(10, { 1: 1, 2: 1, 3: 2, 4: 3 }));

// 배열 스와핑
const swapTargetArr = [1, 2, 3, 4, 5];
[swapTargetArr[1], swapTargetArr[3]] = [swapTargetArr[3], swapTargetArr[1]];
console.log(swapTargetArr);
