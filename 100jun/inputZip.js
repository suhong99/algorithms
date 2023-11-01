const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input2 = fs.readFileSync('/dev/stdin').toString().trim().split(/\s/); // 모든 공백 tab 엔터
