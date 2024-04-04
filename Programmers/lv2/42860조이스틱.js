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
  let sum =
    verticalCounts.reduce((a, c) => a + c, 0) + verticalCounts.length - 1;

  if (firstAIdx === -1) {
    return sum;
  }

  return sum;
}

function minVerticalMove(target) {
  const distance = alphabet.findIndex((e) => e === target);
  return Math.min(distance, 26 - distance);
}

function minRouteFinder(array) {
  let left = 1;
  let right = 1;
  const length = array.length;
  while (right < length) {}
}
// console.log(solution('JEROEN')); //56
// console.log(solution('JAN')); //23
// console.log(solution('JNAAA')); // 23
// console.log(solution('JZAAAZ')); //14 // 그냥 가면 5칸 이동, 오른쪽에서 돌면 3칸 이득 2개
// console.log(solution('JZZAAA')); // 13
// console.log(solution('J')); //9
// console.log(solution('N')); //13
console.log(solution('A')); // 0

// console.log(solution('A'), solution('I'), solution('P'), solution('B'));
// // console.log(solution('BAABBAAA')); //7
console.log(solution('ABABAAAAAAABA')); //11
