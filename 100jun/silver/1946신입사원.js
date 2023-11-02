const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const trial = +input[0];
let i = 1;
let answer = '';
for (let t = 1; t <= trial; t++) {
  const start = Number(i);
  const end = start + input[i] * 1;
  let count = 1;
  let array = [];
  for (let j = start + 1; j <= end; j++) {
    array.push(input[j].split(' ').map(Number));
  }
  array.sort((a, b) => a[0] - b[0]);
  let minGrade = array[0][1];
  for (let k = 1; k < array.length; k++) {
    if (array[k][1] < minGrade) {
      minGrade = array[k][1];
      count++;
    }
  }
  answer += count + '\n';
  i = end + 1;
}
console.log(answer);

// 남이 쓴 건데 input을++로 높이는게 좋은듯 배열에 인덱스로 직접 할당
/*

let t = Number(inputs[0])

let i = 1;
while (t) {
    let n = Number(inputs[i++]);
    const l1 = [];
    for (let j=0; j<n; j++) {
        l1[j] = inputs[i++].split(' ').map(Number);
    }
    l1.sort((a, b) => a[0] - b[0]);
    
    let k = l1[0][1];
    let cnt = 1;
    for (let j=1; j<n; j++) {
        if (l1[j][1] < k ) {
            cnt++
            k = l1[j][1];
        }
    }
    console.log(cnt);
    t--;
}



*/
