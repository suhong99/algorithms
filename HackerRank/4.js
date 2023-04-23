//대각선의 합 차이 구하기
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
function solution(arr) {
  answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += arr[i][i] - arr[i][arr.length - 1 - i];
  }

  return Math.abs(answer);
}
