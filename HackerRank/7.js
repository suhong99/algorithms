function maxLength(a, k) {
  // Write your code here
  let answer = [0, 0];
  let left = 0;
  let right = 0;
  let sum = a[0];

  while (right < a.length) {
    if (sum > k) {
      sum -= a[left];
      left++;
    } else if (sum <= k) {
      let distance = answer[1] - answer[0];
      let currentDistance = right - left;
      if (currentDistance > distance) {
        answer = [left, right];
      }
      right++;
      sum += a[right];
    }
  }

  return answer[1] - answer[0] + 1;
}
