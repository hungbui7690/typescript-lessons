/*
  More on Decorators P3
  - apply on the class
  - also can apply on static method, static properties...

*/

@classDecorator // ***
class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  pilot(speed: string): void {
    if (speed === 'fast') console.log('swish')
    else console.log('nothing')
  }
}

// ***
function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}
