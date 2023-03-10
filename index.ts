/*
  Basic Inheritance
  > pic
  
*/

// super / parent class
class Vehicle {
  drive(): void {
    console.log(`bruhnnnnnnn!!!`)
  }
  honk(): void {
    console.log('beep!!')
  }
}

// (1) extends > copy all properties and methods in Vehicle to Car
class Car extends Vehicle {
  // overwritten
  drive(): void {
    console.log(`bup bup bup...`)
  }
}

// (2)
const car = new Car()
car.drive()
car.honk()
