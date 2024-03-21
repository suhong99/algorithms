//정렬
// find, findIndex,includes, substring,slice ,Object.keys, Object.values,Object.entries

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
