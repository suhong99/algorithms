// function solution(triangle) {
//   let array = [triangle[0][0]];
//   for (let i = 1; i < triangle.length; i++) {
//     const currentLength = array.length;
//     array.push(array[currentLength - 1] + triangle[i][currentLength]);
//     for (let j = currentLength - 1; j > 0; j--) {
//       array[j] = Math.max(array[j - 1], array[j]) + triangle[i][j];
//     }
//     array[0] += triangle[i][0];
//   }
//   return Math.max(...array);
// }

function solution(triangle) {
  const dp = triangle.slice();

  // (원본 배열 길이 - 2) 라인부터 0까지 진행하는 것에 주의하자
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
