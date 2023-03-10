/*
  Functions in Interfaces P1
  

*/

// (***) we remove all properties > no error > because the oldCivic satisfy the Vehicle Interface
interface Vehicle {
  summary(): string
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

// (***) this object has more properties than Interface > but no err, because it satisfies the Interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

printVehicle(oldCivic)
