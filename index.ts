/*
  Annotations Around Functions

*/

const logNumber = (i: number) => {
  console.log(i)
}

// hover
const logNumberX: (i: number) => void = (i: number) => {
  console.log(i)
}

let apples: number = 5
let orange = 5 // hover > number > that's type inference
let grapes
