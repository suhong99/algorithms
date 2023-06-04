//문제링크 https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let answer = [];
  const array = s.split("");
  for (let i = 0; i < array.length; i++) {
    let gap = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] == array[i]) {
        gap = i - j;
        break;
      }
    }
    answer.push(gap);
  }
  return answer;
}
let s = "banana";
console.log(solution(s));

//다른 사람 코드
function solution2(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

//전개연산자로 배열을 만들고, 해쉬라는 객체에 문자를 키 인덱스를 값으로 저장함.
// 그러고 비교할 경우 해당 문자에 존재여부로 가장 가까운 문자와 비교됨
