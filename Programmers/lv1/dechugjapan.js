// 문제링크 https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  let answer = [];
  let smallestKey = {};
  //키맵을 순찰해서, 각각의 문자에 대한 최소 횟수를 구함.
  keymap.forEach((eachKey) => {
    eachKey.split("").forEach((key, idx) => {
      //존재하지 않으면 그냥 넣고(인덱스+1이 버튼 누르는 횟수)
      if (smallestKey[key] === undefined) {
        smallestKey[key] = idx + 1;
      } else {
        //존재한다면 비교해서 최소값을 넣기
        smallestKey[key] = Math.min(smallestKey[key], idx + 1);
      }
    });
  });
  // console.log(smallestKey);
  answer = targets.map((target) =>
    target.split("").reduce((acc, val) => {
      //없는 값을 찾으면 중간에 undefined가 나와서 결과값이 NaN이 됨
      return acc + smallestKey[val];
    }, 0)
  );
  // NaN이 있는 경우 다 수정
  answer = answer.map((element) => {
    return isNaN(element) ? -1 : element;
  });

  return answer;
}

function solution2(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    //NaN이 false인걸 이용한 다른분의 코드
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
console.log(Boolean(NaN));

// console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
// console.log(solution(["AA"], ["B"]));

// const least = { A: 1 };
// console.log(least["B"]);
// //문자도 인덱스로 추출가능
// let a = "2345";
// console.log(a[1]);
