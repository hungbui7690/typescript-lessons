/*
  Details on Decorators
  - pic
    > decorators will be applied single time when a class is create > not when instantiating an object

*/

class Boat {
  color: string = 'red' // property

  // accessor
  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  // @testDecorator // method
  pilot(): void {
    console.log('swish')
  }
}

function testDecorator(target: any, key: string): void {
  console.log(target) // { pilot: [Function (anonymous)] } > prototype of class boat
  console.log(key) // pilot
}

testDecorator(Boat.prototype, 'pilot') // *** remove @decorator above > this is the way we run > just syntactic sugar
