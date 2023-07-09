//https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution1(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    // 미리 더함
    answer += 1;
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        //console.log(j);
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}

// 에라토네스체
function solution(nums) {
  const prime = new Array(nums + 1).fill(1);
  console.log(prime + " 프라임");
  let count = nums - 1;
  for (let i = 2; i < Math.sqrt(nums); i++)
    if (prime[i])
      for (let j = i ** 2; j <= nums; j += i)
        if (prime[j]) count--, (prime[j] = 0);
  return count;
}

solution(10); // 4
