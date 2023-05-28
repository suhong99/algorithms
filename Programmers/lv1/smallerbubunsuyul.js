//문제 링크 https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;
  //부분 문자열이기에 시작점과 길이만 알면 모든 부분 문자열 구할 수 있음.
  //이후 크기 비교
  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.substring(i, i + p.length); // 길이가 p와 같은 부분 문자열 추출
    const substringInt = parseInt(substring);
    if (substringInt < parseInt(p)) {
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

solution("3141592", "271");
