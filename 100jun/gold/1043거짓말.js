const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const [personCnt, partyCnt] = input[0].split(' ').map(Number);
let uniquePolice = new Set();
let [police, ...policeNumber] = input[1].split(' ').map(Number);
for (let i = 0; i < police; i++) {
  uniquePolice.add(policeNumber[i]);
}

const remainParty = Array(2 + partyCnt).fill(true);

let answer = partyCnt;
for (let i = 2; i < 2 + partyCnt; i++) {
  if (remainParty[i]) {
    const [people, ...numbers] = input[i].split(' ').map(Number);
    for (let j = 0; j < numbers.length; j++) {
      if (uniquePolice.has(numbers[j])) {
        remainParty[i] = false;
        numbers.forEach((value) => {
          uniquePolice.add(value);
        });
        i = 1;
        answer--;
        break;
      }
    }
  }
}

console.log(answer);
