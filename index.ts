/*
  The Any Type - When to use annotations
  - pic: inference, any
*/

// Functions that returns the 'any' type
const json = '{"x" : 10, "y": 20}'
const coordinates = JSON.parse(json) // hover parse > return any type > we can get many types from this function > check pic: any
console.log(coordinates) // { x: 10, y: 20 }
