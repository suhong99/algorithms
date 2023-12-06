const input = +require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();
const mod = 1000000000;

const memo = Array.from(Array(input + 1), () =>
  Array.from(Array(10), () => Array(1 << 10).fill(-1))
);

function solution(len, num, state) {
  if (len == input) return state == (1 << 10) - 1 ? 1 : 0;
  if (memo[len][num][state] > -1) return memo[len][num][state];

  let cnt = 0;
  if (num - 1 >= 0) cnt += solution(len + 1, num - 1, state | (1 << (num - 1)));
  if (num + 1 < 10) cnt += solution(len + 1, num + 1, state | (1 << (num + 1)));

  return (memo[len][num][state] = cnt % mod);
}

let result = 0;
for (let i = 1; i < 10; i++) {
  result += solution(1, i, 1 << i);
  result %= mod;
}

console.log(result);
