//문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let answer = [];
  let listScore = [];
  score.forEach((Element) => {
    //오른차순으로 정렬
    let index = listScore.findIndex((value) => Element < value);
    if (index === -1) {
      listScore.push(Element);
    } else {
      listScore.splice(index, 0, Element);
    }
    // 길이보다 길 경우 하나 빼기
    if (listScore.length > k) {
      listScore.splice(0, 1);
    }
    answer.push(listScore[0]);
  });
  return answer;
}

//다른 사람 풀이
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
// 내장 함수 sort와 shift를 씀. 근데 애초에 미리 정리하면 될 걸 계쏙 돌리면 시간 복잡도가 오름. 내 코드가 나을듯?
