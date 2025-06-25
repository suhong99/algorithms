const test = 'How Are you?';

// console.log(test.toLowerCase());

// console.log(test[0]);

const testArr = [false, false];

const testMethod = (e) => e === false;

// console.log(testArr.every(testMethod));

const numbers = [1, 3, 546, 4, 2, 3, 4, 5, 7, 10];
const sortArr = numbers.sort((a, b) => a - b);
console.log(sortArr);
const filterArr = numbers.filter((e) => e > 8);

const multiplyArr = numbers.map((e) => e * 2);
console.log(filterArr);

const sum = numbers.reduce((e, c) => {
	console.log(e, c, 'e,c');
	return c + e;
}, 0);

console.log(sum);

const arr = [1, 2, 3, 4, 5, 6, 10, 2, 3, 4, 5];
const a = new Set(arr);
console.log(a);
a.add(20);
const uniqArr = [...a];
console.log(uniqArr);

const b = new Map();
for (let i = 0; i < uniqArr.length; i++) {
	b.set(uniqArr[i], i);
}
console.log(b);
