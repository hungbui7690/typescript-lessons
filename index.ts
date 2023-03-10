/*
  Instance Method Modifiers P2
  
*/

class Vehicle {
  // (***) protected > can access from this class and child class > NOT PUBLIC
  protected honk(): void {
    console.log('beep!!')
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.honk()
  }
}

const car = new Car()
car.startDriving()

const vehicle = new Vehicle()
// vehicle.honk() // err
