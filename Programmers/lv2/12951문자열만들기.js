// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  const words = s.toLowerCase().split(' ');
  const answer = words.map((e) => {
    if (e.length > 0) {
      return e[0].toUpperCase() + e.slice(1);
    } else {
      return e;
    }
  });
  return answer.join(' ');
}

console.log(solution('3people  unFollowed me'));

let a = '123';
console.log(a[0]);
console.log(a.slice(1));
