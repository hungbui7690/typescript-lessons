/*
  Fields with Inheritance P2
  
*/

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep!!')
  }
}

/////////////////////////

class Car extends Vehicle {
  // (***) constructor > super()
  // we don't put public for color, since color belongs to Vehicle class
  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log(`bup bup bup...`)
  }

  startDriving(): void {
    this.honk()
  }
}

const car = new Car(4, 'orange')
console.log(car)
