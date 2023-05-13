//문제링크 https://school.programmers.co.kr/learn/courses/30/lessons/131705

//내 풀이
function solution(number) {
  let answer = 0;
  // 인덱스를 통해서 하나씩 확인해서 정답인 경우 answer 값을 더하기
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] == 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

function solution2(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}
// 풀이가 특이하긴 한데 시간 복잡도는 높았음
// 서로 다른 사람 3명을 필요로하므로
// 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 count++;
// combination 함수 사용
