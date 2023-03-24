/*
  When to Use Enums
  - pic
    > use for small set of values

////////////////////////////////////

  Extracting CSV Reading P1 
  - check list of issues: 
    > [Source of data is hardcoded]
      > below
  - pic: one possible solution is to create a class
    > next lesson

*/

import fs from 'fs'

// *** football.csv is hardcoded > if we have another csv file > we need to restructure this function > we need to find the way to make this reusable
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','))

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
