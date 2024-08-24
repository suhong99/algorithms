// https://school.programmers.co.kr/learn/courses/30/lessons/150369

// function solution(cap, n, deliveries, pickups) {
//   let answer = 0;
//   const deli = [];
//   const pick = [];

//   const process = (tasks, positions) => {
//     let pos = n - 1;

//     while (pos > 0) {
//       for (let j = pos; j >= 0; j--) {
//         if (tasks[j]) {
//           pos = j;
//           break;
//         }
//         if (j === 0) {
//           pos = -1;
//           return;
//         }
//       }

//       positions.push(pos + 1);
//       let trunk = cap;
//       while (trunk > 0) {
//         if (trunk > tasks[pos]) {
//           trunk -= tasks[pos];
//           tasks[pos--] = 0;
//         } else {
//           tasks[pos] -= trunk;
//           trunk = 0;
//         }
//       }
//     }
//   };

//   process(deliveries, deli);
//   process(pickups, pick);

//   const maxTrial = Math.max(deli.length, pick.length);

//   for (let i = 0; i < maxTrial; i++) {
//     answer += Math.max(deli[i] ?? 0, pick[i] ?? 0) * 2;
//   }

//   console.log(answer);
//   return answer;
// }

function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  // 배송 빈칸, 처리 빈칸
  let give = 0;
  let get = 0;

  for (let i = n - 1; i >= 0; i--) {
    // 높은 수 부터
    if (deliveries[i] !== 0 || pickups[i] !== 0) {
      let cnt = 0;
      while (give < deliveries[i] || get < pickups[i]) {
        // 주거나 받을 공간이 부족하면 횟수 카운트
        cnt++;
        give += cap;
        get += cap;
      }

      give -= deliveries[i];
      get -= pickups[i];
      answer += (i + 1) * cnt * 2;
    }
  }
  return answer;
}

solution(1, 5, [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]);
// solution(2, 2, [0, 0], [0, 4]);
// solution(3, 2, [2, 4], [4, 2]);

// solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
// solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]);
