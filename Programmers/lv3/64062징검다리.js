// function solution(stones, k) {
//   let left = 1;
//   let right = 200000000;
//   while (left <= right) {
//     const mid = ((left + right) / 2) >> 0;
//     const copy = [...stones];
//     let flag = false;
//     let count = 0;

//     for (let i = 0; i < copy.length; i++) copy[i] -= mid;

//     for (const value of copy) {
//       count = value <= 0 ? count + 1 : 0;

//       if (count === k) {
//         flag = true;
//         break;
//       }
//     }

//     flag ? (right = mid - 1) : (left = mid + 1);
//   }

//   return left;
// }

function solution(stones, k) {
  //초기값
  let answer = stones[0];
  // 배열 길이 구해놓기
  const arrayLength = stones.length;
  // 길이 보다 점프를
  if (arrayLength <= k) {
    return Math.max(...stones);
  }
  for (let i = 0; i < stones.length - k; i++) {
    let max = 0;
    const current = stones[i];
    let flag = false;
    for (let j = 1; j <= k; j++) {
      if (current < stones[i + j]) {
        flag = true;
        break;
      }
      max = Math.max(max, stones[i + j]);
    }
    if (!flag) {
      answer = Math.min(answer, max);
    }
  }
  return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(solution([7, 2, 8, 7, 2, 5, 9], 3));
console.log(solution([7], 3));
