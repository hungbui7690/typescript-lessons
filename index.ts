/*
  When Inference Doesn't Work P2

*/

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]

// (***) fix > either boolean or number
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
