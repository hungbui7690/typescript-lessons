/*
  Delayed Initialization P2
  - pic: inference, any
*/

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']

// (***) fix the issue
let foundWord: boolean

// (***) best way to write this
// let foundWord = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true
}
