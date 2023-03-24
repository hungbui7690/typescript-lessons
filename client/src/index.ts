/*
  Creating Abstract Class
  - create MatchReader.ts

  (***) after done, check CsvFileReader > we want this to work with all types of data 
    > but we still use MatchData in this file 
    > we need to somehow extract MatchData type outside, and don't use any of MatchData in this file 

*/

import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('football.csv') // ***
reader.read()

let manUnitedWins = 0
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
