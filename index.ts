/*
  Syntax Around Interfaces
  - can also can define function inside Interface

*/

interface Vehicle {
  name: string
  year: Date // (***)
  broken: boolean
  summary(): string // (a) function that returns a string
}

const printVehicle = (vehicle: Vehicle): void => {
  //  (c)
  console.log(vehicle.summary())
}

const oldCivic = {
  name: 'civic',
  year: new Date(), // (***)
  broken: true,

  // (b)
  summary(): string {
    return `Name: ${this.name}`
  },
}

printVehicle(oldCivic)
