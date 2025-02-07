// https://softeer.ai/practice/9505
// 문제조건이..?

function solve(input) {
  const allCase = 60 * 60 * 60;
  const meetCase = getCase(input);
  const gcd = getGCD(allCase, meetCase);
  console.log(meetCase, '만난 경우의 수');
  console.log(meetCase / gcd + '/' + allCase / gcd);

  function getCase(input) {
    let sum = 0;
    for (let i = 0; i < 60; i++) {
      const meetLength =
        Math.min(Math.abs(i - input), i) + Math.min(input, 59 - i);
      sum += meetLength * meetLength;
    }

    return sum;
  }

  function getGCD(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
}

solve(30);
