/*
  Inference Around Functions
  - pic: func
*/

// (***) remove type return annotation > but ts still figures out > type inference
const add = (a: number, b: number) => {
  return a + b
}

const subtract = (a: number, b: number) => {
  a - b // missing return > void
}

// (***) without return > error
const subtractX = (a: number, b: number): number => {
  a - b // missing return > void
}
