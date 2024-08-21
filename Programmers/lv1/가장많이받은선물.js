// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
  const nameToIndex = friends.reduce((obj, name, index) => {
    obj[name] = index;
    return obj;
  }, {});

  const matrix = Array(friends.length)
    .fill()
    .map(() => Array(friends.length).fill(0));

  const giftPoint = Array(friends.length).fill(0);
  const gift = Array(friends.length).fill(0);
  console.log(matrix, 'matrix');
  for (let i = 0; i < gifts.length; i++) {
    const [from, to] = gifts[i].split(' ').map((name) => nameToIndex[name]);
    matrix[from][to] -= 1;
    matrix[to][from] += 1;
    giftPoint[from] -= 1;
    giftPoint[to] += 1;
  }

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (matrix[i][j] > 0) {
        gift[j] += 1;
      } else if (matrix[i][j] < 0) {
        gift[i] += 1;
      } else if (giftPoint[i] > giftPoint[j]) {
        gift[j] += 1;
      } else if (giftPoint[i] < giftPoint[j]) {
        gift[i] += 1;
      }
    }
  }

  return Math.max(...gift);
}

solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']);
