function solution(new_id) {
  //1단계 대소문자 --> toLowerCase())
  let answer = new_id.toLowerCase();
  // 2이후  45,(빼기),95(밑줄)46(마침표), 97~122(소문자) 가 아니면 더하지 않는다
  answer = answer.replace(/[^a-z0-9-_.]/g, "");
  //3 .이 반복되면 .개로
  answer = answer.replace(/\.{2,}/g, ".");
  //// 4단계: 처음과 끝의 마침표 제거

  answer = answer.replace(/^\./, "").replace(/\.$/, "");
  // 5단계 + 7단계 미리 반영
  if (answer === "") {
    return "aaa";
  }
  // 6단계
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    answer = answer.replace(/\.$/, ""); // 마침표로 끝나면 제거
  }
  //7단꼐
  if (answer.length <= 2) {
    const lastChar = answer[answer.length - 1];
    if (lastChar !== undefined) {
      // lastChar가 정의되어 있는 경우에만 repeat
      answer += lastChar.repeat(3 - answer.length);
    }
  }
  //

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
// let test = "2132131";
// test[2] = "i";
// console.log(test);
// console.log("1234567890123456".slice(0, 15));
