//정렬

//Math.round, Math.ceil, Math.floor, Math.abs

// 배열생성
let arrTestA = Array(5).fill(0);
// console.log(arrTestA);
let failedArrTestB = Array(5).fill(Array(5).fill(1));
failedArrTestB[1][2] = 3; // 참조라 같이변함
let arrTestB = Array(5)
  .fill()
  .map(() => Array(5).fill(1));
arrTestB[1][2] = 3;
// console.log(failedArrTestB, arrTestB);

let arrTestC = Array.from(Array(4), () => new Array(5).fill(0));
arrTestC[1][2] = 3; // 참조라 같이변함

// console.log(arrTestC);

let arr = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// console.log(arr.push(1), arr);

// console.log(arr.shift(), arr); // 앞에꺼 뺴기
// console.log(arr.unshift(1), arr); // 앞에 추가
// console.log(arr.pop(), arr); // 뒤에꺼 뺴기

let arr3 = arr.concat(arr2);
// console.log(arr3);
// console.log(Math.round(4.5)); // 반올림

// 배열 중복제거

const nums = [1, 2, 3, 4, 5, 23, 4, 5, 6, 7, 2, 2, 1, 20];
const newSet = new Set(nums);
// console.log(newSet);

const uniqueNums = [...new Set(nums)];
// console.log(uniqueNums);

const arrSlice = [1, 2, 3, 4, 5];
const arrSliced = arrSlice.slice(1, 3); //[2,3]
// console.log(arrSliced); // 시작에서 끝 -1
// console.log(arrSlice.indexOf(3));

// find, findIndex,includes, substring,slice ,Object.keys, Object.values,Object.entries
// 먼저 찾은 놈들 반환
console.log(arrSlice.find((e) => e > 3)); //해당값
console.log(arrSlice.findIndex((e) => e > 3)); //해당값의 인덱스
console.log(arrSlice.includes(3)); // 있으면 true
console.log('가나다라'.substring(1, 3)); // "나다"  // 인덱스 1에서 끝 (인덱스-1)까지=== 1~2

const objectTest = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objectTest)); // ['a','b','c']
console.log(Object.values(objectTest)); //[ 1, 2, 3 ]
console.log(Object.entries(objectTest)); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
const arrayObject = Object.entries(objectTest);
console.log(Object.fromEntries(arrayObject)); //{ a: 1, b: 2, c: 3 }
