// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function primeNum(nums) {
  const prime = new Array(nums + 1).fill(1);
  let count = nums - 1;
  for (let i = 2; i < Math.sqrt(nums); i++) {
    if (prime[i]) {
      for (let j = i ** 2; j <= nums; j += i) {
        if (prime[j]) count--, (prime[j] = 0);
      }
    }
  }
  return count;
}

function solution(nums) {
  let answer = 0;

  const sumsMap = new Map();

  nums.map((num1, i) =>
    nums.slice(i + 1).map((num2, j) =>
      nums.slice(i + j + 2).map((num3) => {
        const sum = num1 + num2 + num3;
        sumsMap.set(sum, true);
      })
    )
  );

  const length = nums.length;
  const maxNum = nums[length - 1] + nums[length - 2] + nums[length - 3];
  const prime = new Array(maxNum + 1).fill(1);
  for (let i = 2; i < Math.sqrt(maxNum); i++) {
    if (prime[i]) {
      for (let j = i ** 2; j <= maxNum; j += i) {
        if (prime[j]) prime[j] = 0;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));
