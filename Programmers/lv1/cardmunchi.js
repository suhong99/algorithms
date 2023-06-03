//https://school.programmers.co.kr/learn/courses/30/lessons/159994 문제링크

//풀이방법

// goal에 있는 값을 반복문을 통하여서 cards에 있는 인덱스와 같은 지 비교한다 이후 존재한다면 다음 인덱스로 넘어가고 해당 카드의 인덱스를 올린다.
function solution(cards1, cards2, goal) {
  let answer = "Yes";
  let cards1Index = 0;
  let cards2Index = 0;
  for (i = 0; i < goal.length; i++) {
    if (cards1[cards1Index] == goal[i]) {
      cards1Index++;
      continue;
    } else if (cards2[cards2Index] == goal[i]) {
      cards2Index++;
      continue;
    } else {
      answer = "No";
      break;
    }
  }
  return answer;
}

const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log(cards1.includes(goal[i]));

// 다른 사람의 풀이, 인덱스를 고정하고 배열의 앞의  값을 빼는 식으로 구서앟ㅁ
function solution2(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
