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
  console.log(verticalMove, horizontalMove, '결과');
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
        let leftArea = length - i - 1; // 맞음
        // console.log(leftArea, i + ' : 끝인 경우');
        let movedArea = i - discountArea;
        console.log(leftArea, movedArea, i + ' : 끝인 경우');
        let currentMove = movedArea + leftArea + Math.min(movedArea, leftArea);

        move = Math.min(move, currentMove);
      }
    } else {
      discountArea = 0;
    }
  }
  return move;
}