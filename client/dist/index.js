"use strict";
/*
  Extracting CSV Reading P2
  - create CsvFileReader.ts

*/
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
// ***
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read(); // do not need to store into anything
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
// *** use reader.data
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
