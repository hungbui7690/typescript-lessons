/*
  Instance Method Modifiers P1
  > pic: modifiers

  - default === public
  
  (***) private : no effects on security > we want to use private to make sure that function or fields cannot be changed by others developers
*/

class Vehicle {
  public honk(): void {
    console.log('beep!!')
  }
}

class Car extends Vehicle {
  // (***) cannot call outside of this class > because this is private > we need to remove drive() in Vehicle class
  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.drive()
  }
}

const car = new Car()
// car.drive() // error
car.startDriving()
car.honk()
