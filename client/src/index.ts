/*
  Losing Dataset Context
    [Issues] pic
    - Magic String Comparison: match[5] === 'H'
      > now we can understand this > but later, or another dev looks at this > he cannot understand unless he opens the csv file to check


*/

import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','))

// *** one possible way to fix:
const homeWin = 'H' // use below
const awayWin = 'A'
const draw = 'D' // this option is grey out > another dev can go here and delete in since it's unused > next lesson

let manUnitedWins = 0
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
