const fs = require('fs');
const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const n = +input[0];
const inOrderList = input[1].split(' ').map(Number);
const postOrderList = input[2].split(' ').map(Number);
const result = [];

const callStack = [[0, n - 1, 0, n - 1]];
while (callStack.length) {
  const [inStart, inEnd, postStart, postEnd] = callStack.pop();
  if (inStart > inEnd || postStart > postEnd) {
    continue;
  }
  const root = postOrderList[postEnd];
  result.push(root);
  let inRootIndex;
  for (let i = inStart; i <= inEnd; i++) {
    if (inOrderList[i] === root) {
      inRootIndex = i;
      break;
    }
  }
  const postLeftEnd = postStart + (inRootIndex - 1 - inStart);
  callStack.push([inRootIndex + 1, inEnd, postLeftEnd + 1, postEnd - 1]);
  callStack.push([inStart, inRootIndex - 1, postStart, postLeftEnd]);
}

console.log(result.join(' '));
