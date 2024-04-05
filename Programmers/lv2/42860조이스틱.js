//https://school.programmers.co.kr/learn/courses/30/lessons/42860
// 유의사항 턴하는 경우
// 끝까지 안 가는 경우 ==> 끝에 연속으로 A나오는 경우
// 시작이 "A"인 경우
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
function solution(name) {
  let firstAIdx = -1;
  let lastAIdx = -1;
  const verticalCounts = name.split('').map((e, i) => {
    if (e === 'A' && i !== 0) {
      if (firstAIdx === -1) {
        firstAIdx = i;
      }
      lastAIdx = i;
    }
    return minVerticalMove(e);
  });
  const verticalMove = verticalCounts.reduce((a, c) => a + c, 0);

  if (firstAIdx === -1) {
    return verticalMove + verticalCounts.length - 1;
  }

  const horizontalMove = minHorizontalMove(verticalCounts);
  return verticalMove + horizontalMove;
}

function minVerticalMove(target) {
  const distance = alphabet.findIndex((e) => e === target);
  return Math.min(distance, 26 - distance);
}

function minHorizontalMove(array) {
  const length = array.length;
  let move = length - 1;
  let discountArea = 0;
  for (let i = 1; i < length; i++) {
    if (array[i] === 0) {
      discountArea++;
      if (i === length - 1) {
        move = Math.min(move, length - discountArea - 1);
        break;
      }

      if (array[i + 1] !== 0) {
        let leftArea = length - i - 1;
        let movedArea = i - discountArea;
        let currentMove = movedArea + leftArea + Math.min(movedArea, leftArea);

        move = Math.min(move, currentMove);
      }
    } else {
      discountArea = 0;
    }
  }
  return move;
}
// console.log(solution('JEROEN')); //56
console.log(solution('JAN')); //23
// console.log(solution('JNAAA')); // 23
// console.log(solution('JZZAAAZ')); //16
// console.log(solution('JZZAAA')); // 13
// console.log(solution('J')); //9
// console.log(solution('N')); //13
// console.log(solution('A')); // 0

// console.log(solution('A'), solution('I'), solution('P'), solution('B'));
// // console.log(solution('BAABBAAA')); //7
console.log(solution('ABABAAAAAAABA')); //10  // 13단어
