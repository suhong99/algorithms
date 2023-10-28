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

function test2(targetNumber, grade) {
  const array = [];
  for (let i = 1; i <= targetNumber; i++) {
    if (targetNumber % i === 0) {
      array.push(i);
    }
  }
  return array[grade - 1];
}

// console.log(test1(120000000, 4), '1번 풀이');
console.log(test2(120000000, 4), '2번 풀이');
