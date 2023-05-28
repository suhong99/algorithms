//둘만의 비밀
//문제링크
//  https://school.programmers.co.kr/learn/courses/30/lessons/155652
function solution(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  /*
const alphabet = []
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}
*/

  skip.split("").forEach((v) => {
    alphabet.splice(alphabet.indexOf(v), 1);
  });

  const answer = s
    .split("")
    .map((v) => {
      return alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
    })
    .join("");

  return answer;
}

solution("aukks", "wbqd", 5);

console.log(solution("aukks", "wbqd", 5));
