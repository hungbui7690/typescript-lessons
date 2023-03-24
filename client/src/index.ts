/*
  Alternate Refactor
  - pic > we use interface instead of abstract class

////////////////////////////////////////////

  InterfaceBased Approach
  - backup abstract approach in "abstract approach"/ folder
  - refactor MatchReader.ts
    > hold interface & class

*/

import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('football.csv')
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
