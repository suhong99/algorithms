function solution(nums) {
  let answer = 0;
  const prime = Array(3000).fill(0);
  for (let i = 2; i < Math.sqrt(3000); i++) {
    if (!prime[i]) {
      for (let j = 2; j <= 3000 / i; j++) {
        if (!prime[i * j]) prime[i * j] = 1;
      }
    }
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (prime[nums[i] + nums[j] + nums[k]] === 0) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));
