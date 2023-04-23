// 주어진 숫자중 한 문자가 버그 낫을 때 가장 큰 수 - 가장 작은수 차이 구하기

function findRange(num) {
  // Write your code here
  let target = num + "";
  let answer =
    target.replaceAll(target[0], 9) - target.replaceAll(target[0], 1);
  if (target[0] === "1") {
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== "0" && target[i] !== "1") {
        answer =
          target.replaceAll(target[0], 9) - target.replaceAll(target[i], 0);
        break;
      }
    }
  } else if (target[0] === "9") {
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== "9") {
        answer =
          target.replaceAll(target[i], 9) - target.replaceAll(target[0], 1);
        break;
      }
    }
  }
  return answer;
}

const input = 123512;
// console.log(input[1]);
console.log(findRange(input));
