/*
  More on Decorators P1
  - use decorator on an accessor (getter)

*/

class Boat {
  @testDecorator
  color: string = 'red'

  @testDecorator // ***
  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError('Oops, boat was sunk in ocean')
  pilot(): void {
    throw new Error('')
  }
}

// *** now, it will log 2 targets and 2 keys
function testDecorator(target: any, key: string) {
  console.log(target)
  console.log(key)
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function () {
      try {
        method()
      } catch (error) {
        console.log(errorMessage)
      }
    }
  }
}
