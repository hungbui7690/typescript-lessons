/*
  Using Enums P2

*/

import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','))

// *** use enum: use for small set > signal to other devs that this is a collection of "very closely values"
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// *** when we create enum > we create a new type > this example function below will return that new type
const printMatchResult = (): MatchResult => {
  if (matches[0][5] === 'H') return MatchResult.HomeWin

  return MatchResult.AwayWin
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
