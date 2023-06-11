//문제링크 https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = [];
  commands.forEach((element) => {
    let splicedArray = [];
    for (let i = element[0] - 1; i < element[1]; i++) {
      splicedArray.push(array[i]);
    }
    splicedArray.sort((a, b) => a - b);

    answer.push(splicedArray[element[2] - 1]);
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

//다른사람의 코드

function solution2(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
//   동일한 방법인데 map과 filter를 이용해서 함
