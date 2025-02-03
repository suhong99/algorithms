// https://softeer.ai/practice/9497

// 파이썬 코드

/*

import sys
input = sys.stdin.readline

N = int(input())

map_list = []

for _ in range(N):
    tempList = list(map(int, input().split()))
    map_list.append(tempList)

for i in range(N):
    for _ in range(N):
        print(i + 1, end=" ")
    print("")

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {}).on('close', () => {
  for (let i = 1; i <= 6; i++) {
    console.log((i + ' ').repeat(6));
  }
  process.exit(0);
});

// 동일한 출력 값인데 오답 처리..
