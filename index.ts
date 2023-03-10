/*
  Fields with Inheritance P1
  
*/

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep!!')
  }
}

/////////////////////////

// (***) write now, we don't have constructor in Car class > every instance is created > called Vehicle constructor
class Car extends Vehicle {
  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.honk()
  }
}

const car = new Car('orange')
console.log(car.color)
