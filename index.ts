/*
  Annotations for Anonymous Functions
  
*/

function divide(a: number, b: number): number {
  return a / b
}

// (***) anonymous 1: arrow fn
const multiply = (a: number, b: number): number => {
  return a * b
}

// (***) anonymous 2: normal fn
const add = function (a: number, b: number): number {
  return a + b
}
