// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = "";
  let left = 10; //*
  let right = 11; // # 을 숫자로 표현

  const distance2 = [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4]; // 2번을 기준으로 거리
  const distance5 = [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3]; // 5번을 기준으로 거리
  const distance8 = [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2]; // 8번을 기준으로 거리
  const distance0 = [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1]; //0 번을 기준으로 거리
  const list = { 2: distance2, 5: distance5, 8: distance8, 0: distance0 };
  // 25 8 10 일 경우 사용함수
  const whichHand = (number) => {
    const array = list[number];
    if (array[left] < array[right]) {
      answer += "L";
      left = number;
    } else if (array[left] === array[right]) {
      // 거리 같으면
      if (hand === "left") {
        left = number;
        answer += "L";
      } else {
        right = number;
        answer += "R";
      }
    } else if (array[left] > array[right]) {
      answer += "R";
      right = number;
    }
  };

  numbers.forEach((number) => {
    if (number % 3 === 1) {
      answer += "L";
      left = number;
    } else if (number % 3 === 0 && number !== 0) {
      answer += "R";
      right = number;
    } else {
      whichHand(number);
    }
  });
  console.log(answer);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
