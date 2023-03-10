/*
  Why Typed Arrays
  
*/

const carMakers: string[] = ['ford', 'toyota', 'chevy']

// Help with inference when extracting values
const car = carMakers[0] // hover
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100) // error

// help with 'map
carMakers.map((car: string): string => {
  return car // car.[] > only show string methods
})
