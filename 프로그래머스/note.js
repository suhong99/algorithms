// https://school.programmers.co.kr/learn/courses/30/lessons/12946?language=javascript

function solution(n) {
  const dp = [[], [[1, 3]]];
  for (let i = 1; i < n; i++) {
    nextDp(i, 1, 2, 3);
  }

  return dp[n];

  function nextDp(index, start, mid, end) {
    dp.push([
      ...dp[index].map((move) =>
        move.map((e) => {
          return swiper(e, start, end, mid);
        })
      ),
      [start, end],
      ...dp[index].map((move) =>
        move.map((e) => {
          return swiper(e, mid, start, end);
        })
      ),
    ]);
  }

  function swiper(e, start, mid, end) {
    switch (e) {
      case 1:
        return start;
      case 2:
        return mid;
      case 3:
        return end;
    }
  }
}

console.log(solution(3));
//dp ?
// 2 :  1->2 1->3 2->3
// 3 :  1->3 1->2 3->2  1->3 2->1 2->3 1->3
// 4 :  1->2 1->3 2->3 1->4 3->2 3->
