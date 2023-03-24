/*
  Reading CSV Files P1
  - return all matches, which is not good > we need to parse these data > pic > we want to convert to 2D array of strings 
    > next lessons

*/

import fs from 'fs'

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8', // if we don't add this option > return buffer
})

console.log(matches)
