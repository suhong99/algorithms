// function getFinalString(s) {
//   let answer = s;
//   while (s.indexOf("AWS") !== -1) {
//     answer =
//       answer.slice(0, s.indexOf("AWS")) + answer.slice(s.indexOf("AWS") + 3);
//   }
//   if (s == "") {
//     return -1;
//   } else {
//     return answer;
//   }
// }

// console.log(getFinalString("AAWSWS"));

const target = "AAWSWS";
const answer =
  target.slice(0, target.indexOf("AWS")) +
  target.slice(target.indexOf("AWS") + 3);
//   }
console.log(answer);
console.log("AAWSWS".indexOf("AWS"));
