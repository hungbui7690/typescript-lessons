"use strict";
/*
  Running an Analysis
  - 10/08/2018  Man United  Leicester       2,1,  [H]   A Marriner
  - 11/08/2018  Fulham      Crystal Palace  0,2,  [A]   M Dean
    > H: home wins
    > A: away wins

  - pic
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => row.split(',')); // *** previous lecture, we do [row] === NOT correct > need to use split()
// *** analyze code
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
// *** generate report
console.log(`Man United won ${manUnitedWins} games`);
