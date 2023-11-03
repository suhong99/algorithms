const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/input.txt').toString());

const minN = Math.floor(-1 / 2 + Math.sqrt(1 + 8 * input) / 2);
console.log(minN);
