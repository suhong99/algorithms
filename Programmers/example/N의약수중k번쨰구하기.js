function test1(targetNumber, grade) {
  let smallArray = [];
  let bigArray = [];
  for (let i = 1; i * i <= targetNumber; i++) {
    if (targetNumber % i === 0) {
      smallArray.push(i);
      if (i * i !== targetNumber) {
        bigArray.unshift(targetNumber / i);
      }
    }
  }
  if (grade <= smallArray.length) {
    return smallArray[grade - 1];
  } else {
    return bigArray[grade - 1 - smallArray.length];
  }
}

console.log(test1(100, 4), '풀이');
