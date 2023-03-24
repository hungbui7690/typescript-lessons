/*
  Inheritance vs Composition
  - pic

////////////////////////////////////////

  More on Inheritance vs Composition
  - pic

////////////////////////////////////////

  A Huge Misconception Around "Composition"
  - *** important

////////////////////////////////////////

  Goal Moving Forward
  - pic 
  - issues below 

*/

import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

///////////////////////////////////
// *** 3 issues are here
let manUnitedWins = 0
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
