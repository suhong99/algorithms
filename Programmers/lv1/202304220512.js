function solution(nums) {
  const nonDuplicatedNums = new Set(nums);
  const newNums = [...nonDuplicatedNums];

  return Math.min(newNums.length, Math.floor(nums.length / 2));
}

console.log(solution([3, 1, 2, 3]));
