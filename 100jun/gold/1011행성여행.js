// https://www.acmicpc.net/problem/1011
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
function solution(input) {
  const [start, end] = input.split(' ').map(Number);
  //   const distance = Math.abs(start - end);
  let maxSpeed = 1;
  let leftDistance = Math.abs(start - end);
  let count = 0;
  let i = 2;
  while (true) {
    if (2 * (i - 1) <= leftDistance) {
      leftDistance -= 2 * (i - 1);
      maxSpeed = i;
      count += 2;
      i = i + 1;
    } else {
      break;
    }
  }
  console.log(count + Math.ceil(leftDistance / maxSpeed));
}

solution('6 10');

solution('0 3');
solution('1 5');
solution('45 50');
//
/*


const fs = require('fs');
const [start, end] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
 let maxSpeed = 1;
 let leftDistance = Math.abs(start - end);
 let count = 0;
 while (true) {
    let i = 1;
    if (2 * i <= leftDistance) {
      console.log(leftDistance);
      leftDistance -= 2 * i;
      maxSpeed = i;
      count += 2;
      i++;
    } else {
      break;
    }
 }
 console.log(count + Math.ceil(leftDistance / maxSpeed));

 */
