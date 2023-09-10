// // const a = [1, 2];
// // const b = a.map((x) => x * 2);
// // console.log(b);

// // console.log(a);
// const list = [1, 2, 3, 4, 5];
// list[2] = -list[2];
// console.log(list);

// let alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// console.log(alphabet.length);
// let skip = "wbqd";
// console.log(alphabet.findIndex((element) => element == "w"));

let students = new Array(5).fill(1);
console.log(students);

//

const socialLog = {
  kakao: { img: '카카오이미지', background: '' },
  google: { img: '구글이미지', background: '' },
};

const select = (key) => {
  console.log(socialLog[key].img);
};
select('kakao');

//  테스트

const value = 'example123@example.com';

const legTest = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(legTest.test(value));

const testArray = [0, 0];

testArray[1]++;

console.log(testArray);
