/*
  Delayed Initialization P1
  - pic: inference, any
*/

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord // hover > type === any

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true
}
