// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 아스키코드로 변환해서 풀기

// 대소문자 구분 -> 아스키 코드 >90으로 구분

//charCodeAt  --> 문자에서 아스키 코드

//fromCharCode  --> 아스키코드에서 문자로
function solution(s, n) {
  let answer = "";
  for (i in s) {
    // i == 인덱스
    let ascii = s.charCodeAt(i);
    console.log(ascii);

    if (s[i] == " ") {
      ascii = " ";
    } else if (ascii < 91) {
      ascii =
        ascii + n > 90
          ? String.fromCharCode(((ascii + n) % 90) + 64)
          : String.fromCharCode(ascii + n);
    } else {
      console.log(ascii);
      ascii =
        ascii + n > 122
          ? String.fromCharCode(((ascii + n) % 122) + 96)
          : String.fromCharCode(ascii + n);
    }
    answer += ascii;
  }
  console.log(answer);
  return answer;
}

let test = "  ";
// solution("AB", 1); // "BC"
// solution("z", 1); //	"a"
solution("a B z", 4); //	"e F d"
