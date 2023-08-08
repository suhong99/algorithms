//school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
  let words = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  // 주어진 각각의 단어에 대해 실행(for문)
  for (let i = 0; i < babbling.length; i++) {
    let testword = babbling[i];
    let outloop = false;
    let before = -1; // 중복 단어 기억용 변수;

    while (testword.length > 0 && outloop == false) {
      for (j = 0; j < words.length; j++) {
        // console.log(i + " : I");
        //  console.log(testword + " : testword");
        //  console.log(j + " : j");
        if (testword.startsWith(words[j]) && j != before) {
          before = j;
          testword = testword.slice(words[j].length);
          break;
        }
        if (j == words.length - 1) {
          outloop = true;
          break;
        }
      }
      if (testword.length == 0) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));

function solution2(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  // 이 패턴은 "aya", "ye", "woo", "ma" 중 하나가 반복되는 문자열을 찾습니다.
  const regexp2 = /^(aya|ye|woo|ma)+$/;
  //  "aya", "ye", "woo", "ma" 중 하나로 시작하고 끝나는 문자열을 찾습니다.
  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
const regexp3 = /(aya|ye|woo|ma)\1+/;
const regexp4 = /^(aya|ye|woo|ma)+$/;

console.log(!regexp3.test("ayahye"));
console.log(regexp4.test("ayahye"));

// console.log(solution2(["aya", "yee", "u", "maa", "ayahye"]));
