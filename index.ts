/*
  Fields in Classes P3
  
*/

class Vehicle {
  // (***) private/protected > cannot access outside of class
  constructor(private color: string) {}

  protected honk(): void {
    console.log('beep!!')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color) // (***) err

/////////////////////////

class Car extends Vehicle {
  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.honk()
  }
}
