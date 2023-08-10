// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const answer = [];
  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) {
      firstCount++;
    }
    if (answers[i] === second[i % 8]) {
      secondCount++;
    }
    if (answers[i] === third[i % 10]) {
      thirdCount++;
    }
  }
  const max = Math.max(firstCount, secondCount, thirdCount);
  console.log(max);
  if (firstCount === max) {
    answer.push(1);
  }
  if (secondCount === max) {
    answer.push(2);
  }
  if (thirdCount === max) {
    answer.push(3);
  }
  return answer;
}

solution([1, 2, 3, 4, 5]);

// 필터를 사용해서가독성을 높임.. filter로 미리 answer를 거른다음에 length구함
function solution2(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
