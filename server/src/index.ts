/*
  Decorators in Typescript
  - "target": "es5" 
  - "experimentalDecorators": true
  - "emitDecoratorMetadata": true

  - pic

*/

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @testDecorator // apply decorator
  pilot(): void {
    console.log('swish')
  }
}

// *** define decorator
function testDecorator(target: any, key: string): void {
  console.log(target)
  console.log(key)
}
