"use strict";
/*
  Losing Dataset Context
    [Issues] pic
    - Magic String Comparison: match[5] === 'H'
      > now we can understand this > but later, or another dev looks at this > he cannot understand unless he opens the csv file to check


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
    .map((row) => row.split(','));
// *** one possible way to fix:
const homeWin = 'H'; // use below
const awayWin = 'A';
const draw = 'D'; // this option is grey out > another dev can go here and delete in since it's unused > next lesson
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
