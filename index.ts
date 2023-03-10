/*
  Fields in Classes P1
  
*/

class Vehicle {
  // (1)
  color: string

  // (2)
  constructor(color: string) {
    this.color = color
  }

  protected honk(): void {
    console.log('beep!!')
  }
}

// (3)
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
