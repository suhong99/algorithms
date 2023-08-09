// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let number = 3000;
  const prime = new Array(number + 1).fill(1); // 소수값이 1이 나오는 배열
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (prime[i]) {
      for (let j = i ** 2; j <= number; j += i) {
        if (prime[j]) prime[j] = 0;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (prime[sum] === 1) {
          count++;
        }
      }
    }
  }

  return count;
}

solution([1, 2, 3, 4]);
v