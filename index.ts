/*
  Fixing Long Annotations with Interfaces

*/

// (***) interface === generic type
interface Vehicle {
  name: string
  year: number
  broken: boolean
}

// (***) use interface here
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
}

printVehicle(oldCivic)
