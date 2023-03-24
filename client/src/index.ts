/*
  Reading CSV Files P2

*/

import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n') // ***
  .map((row: string): string[] => [row]) // *** turn each row in to array

console.log(matches) // now we have [[row1], [row2]... [rowN]] > string[][]
