// function solution(s) {
//   max = s.length;
//   let answer = max;
//   for (let i = 1; i <= max / 2; i++) {
//     // 더는 할 필요 없을 경우 중지
//     const leftString = max % i;
//     let maxResult = parseInt(max / i) + leftString;
//     if (maxResult > answer) break;
//     // 나머지의 개수 만큼 미리 더하기
//     let currentResult = max % i;
//     let prevValue;
//     let counted = 1;
//     let lastOne = max - leftString - i;

//     for (let j = 0; j < max - leftString; j += i) {
//       currentValue = s.substring(j, j + i);
//       if (currentValue === prevValue) {
//         counted++;
//         if (j === lastOne) currentResult += (counted + '').length;
//         continue;
//       }
//       prevValue = currentValue;
//       if (counted !== 1) {
//         currentResult += (counted + '').length;
//         counted = 1;
//       }
//       currentResult += i;
//     }
//     answer = Math.min(answer, currentResult);
//   }

//   return answer;
// }

function solution(s) {
  let result = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    let temp = '';
    let cnt = 1;

    for (let j = 0; j < s.length; j += i) {
      let s1 = s.substring(j, j + i);

      while (true) {
        j += i;
        let s2 = s.substring(j, j + i);
        if (s1 === s2) {
          cnt++;
        } else {
          break;
        }
      }

      temp += cnt >= 2 ? cnt + s1 : s1;
      j -= i;
      cnt = 1;
    }
    result = Math.min(temp.length, result);
  }
  return result;
}

// console.log(solution('aabbaccc'));
console.log(solution('caca'));
