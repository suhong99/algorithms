const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input =
//   '2\n-5 1 12 1\n7\n1 1 8\n-3 -1 1\n2 2 2\n5 5 1\n-4 5 1\n12 1 1\n12 1 2\n-5 1 5 1\n1\n0 0 2'
//     .trim()
//     .split('\n');

let T = +input[0];
let startPoint = 1;
const answer = [];

while (T > 0) {
  let count = 0;
  const [x1, y1, x2, y2] = input[startPoint].split(' ');
  let planetNumber = +input[startPoint + 1];

  for (let i = startPoint + 2; planetNumber > 0; planetNumber--) {
    const [x, y, r] = input[i].split(' ');
    const isFirstOut = (x - x1) ** 2 + (y - y1) ** 2 - r ** 2 > 0;
    const isSecondOut = (x - x2) ** 2 + (y - y2) ** 2 - r ** 2 > 0;
    isFirstOut !== isSecondOut && count++;
    i++;
  }
  answer.push(count);
  T--;
  startPoint += planetNumber + 2;
}
console.log(answer.join('\n'));

//  readLine으로 해야 typeError가 안뜬다는데, 다른ㅂ ㅏㅇ법으로 푼 사람이 있길래 해보니 되네요,,
/*

const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s/);
let idx = 0;
const answer = [];
const T = +input[idx++];
for (let i=0; i<T; i++) {
    let count = 0;
    const [x1, y1, x2, y2] = input.slice(idx, idx+4).map(v => +v);
    idx += 4;
    const n = +input[idx++];
    for (let j=0; j<n; j++) {
        const [cx, cy, r] = input.slice(idx, idx+3).map(v => +v);
        idx += 3;
        if ((x1-cx)**2 + (y1-cy)**2 < r**2) count++;
        if ((x2-cx)**2 + (y2-cy)**2 < r**2) count++;
        if ((x1-cx)**2 + (y1-cy)**2 < r**2 && (x2-cx)**2 + (y2-cy)**2 < r**2) count -= 2;
    }
    answer.push(count);
}
console.log(answer.join("\n"));

*/
