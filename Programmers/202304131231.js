//분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
  const answer = [];
  let numer = numer1 * denom2 + denom1 * numer2;
  let denom = denom1 * denom2;

  for (i = denom; i >= 1; i--) {
    if (numer % i === denom % i && numer % i === 0) {
      answer.push(numer / i);
      answer.push(denom / i);
      break;
    }
  }

  return answer;
}

console.log(solution(1, 2, 3, 4));

//
function solution2(numer1, denom1, numer2, denom2) {
  let answer = [];
  let numer = numer1 * denom2 + denom1 * numer2;
  let denom = denom1 * denom2;

  for (i = denom; i >= 1; i--) {
    if (numer % i === denom % i && numer % i === 0) {
      answer = [numer / i, denom / i];
      break;
    }
  }

  return answer;
}

console.log(solution2(1, 2, 3, 4));
