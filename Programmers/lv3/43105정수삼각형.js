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
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return (
          v +
          Math.max(
            index < cost.length ? cost[index] : 0,
            index > 0 ? cost[index - 1] : 0
          )
        );
      });
    }, [])
  );
}
console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
