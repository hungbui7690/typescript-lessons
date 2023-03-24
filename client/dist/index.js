"use strict";
/*
  Not Done with FileReader Yet
  - Recall, we create CsvFileReader.ts because we want to reuse later in the future
    > but right now, if we look at it > there's no way for us to reuse later
    > because the structure of data of different csv file may not match to this football.csv [Date, string, string, number, number, MatchResult, string]
    > we will try to refactor it to make it reusable

////////////////////////////////////////

  Understanding Refactor
  - pic
  - we want our class can work on any csv file

*/
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
