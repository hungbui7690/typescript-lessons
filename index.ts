/*
  Tuples in Typescript
  > pic: tuple

*/

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// hover > we don't see the format > now, in this array, this can be string OR boolean OR number
const pepsi = ['brown', true, 40]
pepsi[0] = 40
pepsi[2] = 'brown' // (***) if we do this, we list information

// (***) tuple > have the order
const coke: [string, boolean, number] = ['brown', true, 40]
coke[0] = 40 // err

// (***) tuple: alternative method > use TYPE ALIAS === type keyword
type Drink = [string, boolean, number]
const tea = ['brown', false, 0]
