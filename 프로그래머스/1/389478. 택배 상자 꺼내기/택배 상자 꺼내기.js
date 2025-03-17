function solution(n, w, num) {
  let answer = 0;
  while (num <= n) {
    num += 2 * (w - ((num - 1) % w) - 1) + 1;
    answer++;
  }
  return answer;
}

// 타인 풀이 홀짝층의 구분을 둬서 규칙을 잘 찾음

const solution = (n, w, num) => {
  let res = 1;
  const total = Math.ceil(n / w);
  const target = Math.ceil(num / w);
  const nRemain = n % w || n;
  const numRemain = num % w || num;
  if (total % 2 === target % 2 && nRemain < numRemain) res -= 1; // 같은 홀짝이면 같은 규칙으로 칸이 쌓임. 따라서 더 적게 남으면 감소
  if (total % 2 !== target % 2 && nRemain + numRemain <= w) res -= 1; // 홀짝이 다르면, 반대반향으로 진행. 따라서 합이 w면 층 추가됨
  return total - target + res;
};
