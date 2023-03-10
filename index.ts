/*
  Fields in Classes P2
  
*/

class Vehicle {
  // (***) shot-cut
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep!!')
  }
}

// (***)
const vehicle = new Vehicle('orange')
console.log(vehicle.color)

/////////////////////////

class Car extends Vehicle {
  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.honk()
  }
}
