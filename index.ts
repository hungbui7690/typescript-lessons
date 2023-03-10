/*
  When Inference Doesn't Work P1

*/

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero = false // this variable in this case maybe users, blog posts whereas there's no way for us to predict the values

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
