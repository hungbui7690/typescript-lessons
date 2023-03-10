/*
  Fixing the Any Type
  - pic: inference, any
*/

const json = '{"x" : 10, "y": 20}'

// add type annotation to fix > hover on variable
const coordinates: { x: number; y: number } = JSON.parse(json)

console.log(coordinates)
