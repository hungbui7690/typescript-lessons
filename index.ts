/*
  Interfaces
  - pic
  
////////////////////////////

  Long Type Annotations

*/

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
}

// (***) type is has so many properties > hard to read
const printVehicle = (vehicle: {
  name: string
  year: number
  broken: boolean
}): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)
