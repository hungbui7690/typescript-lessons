/*
  Data Types
  - Issue: [Data Array is all strings, even though it might have numbers/date in it]
  - pic

  - 10/08/2018,Man United,Leicester,2,1,H,A Marriner
    > Date
    > string
    > number
    > MatchResult 
    
*/

import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read()

console.log(reader.data) // ***

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
