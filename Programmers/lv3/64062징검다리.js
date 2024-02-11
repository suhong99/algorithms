function solution(stones, k) {
  // 이분탐색을 사용한다.
  let left = 1;
  let right = 200000000;

  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) count++;
      else count = 0;

      if (count === k) break;
    }

    if (count === k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}

// 13번에서 걸림
// function solution(stones, k) {
//   const arrayLength = stones.length;
//   if (arrayLength <= k) {
//     return Math.max(...stones);
//   }

//   let answer = stones[0];

//   for (let i = 1; i < k; i++) {
//     if (stones[i] > answer) {
//       answer = stones[i];
//     }
//   }

//   for (let i = 0; i < arrayLength - k; i++) {
//     let max = 0;
//     const current = stones[i];
//     let flag = false;
//     for (let j = 1; j <= k; j++) {
//       if (current < stones[i + j]) {
//         flag = true;
//         break;
//       }
//       max = Math.max(max, stones[i + j]);
//     }
//     if (!flag) {
//       answer = Math.min(answer, max);
//     }
//   }
//   return answer;
// }

// 더 느림
function solution(stones, k) {
  const arrayLength = stones.length;
  if (arrayLength <= k) {
    return Math.max(...stones);
  }

  let answer = Math.max(...stones.slice(0, k));
  for (let i = 0; i < arrayLength - k; i++) {
    let max = 0;
    const current = stones[i];
    let flag = false;
    for (let j = 1; j <= k; j++) {
      if (current < stones[i + j]) {
        flag = true;
        break;
      }
      if (stones[i + j] > max) {
        max = stones[i + j];
      }
    }
    if (max < answer && !flag) {
      answer = max;
    }
  }
  return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(solution([7, 2, 8, 7, 2, 5, 9], 3));
console.log(solution([7], 3));
