/*
  Extracting CSV Reading P2
  - create CsvFileReader.ts

*/

import { CsvFileReader } from './CsvFileReader'

// ***
const reader = new CsvFileReader('football.csv')
reader.read() // do not need to store into anything

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0
// *** use reader.data
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
