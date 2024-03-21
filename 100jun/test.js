const test = 'How Are you?';

// console.log(test.toLowerCase());

// console.log(test[0]);

const testArr = [false, false];

const testMethod = (e) => e === false;

// console.log(testArr.every(testMethod));

const numbers = [1, 3, 546, 4, 2, 3, 4, 5, 7, 10];
const sortArr = numbers.sort((a, b) => a - b);
console.log(sortArr);
const filterArr = numbers.filter((e) => e > 100);

const multiplyArr = numbers.map((e) => e * 2);
// console.log(multiplyArr);

const sum = numbers.reduce((e, c) => {
  console.log(e, c, 'e,c');
  return c + e;
}, 0);

console.log(sum);
