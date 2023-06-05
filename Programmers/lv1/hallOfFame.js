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
