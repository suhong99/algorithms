const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

const numbers = input.split('').map(Number);

const number = +input;

let sames = 0;
const answer = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
