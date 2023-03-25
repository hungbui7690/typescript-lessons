/*
  Decorators Around Properties 

*/

class Boat {
  @testDecorator // ***
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError('Oops, boat was sunk in ocean')
  pilot(): void {
    throw new Error('')
  }
}

// ***
function testDecorator(target: any, key: string) {
  console.log(target)
  console.log(key)

  // print out the value
  console.log(target.value) // wrong: because target points to prototype > always store methods > cannot access instance members > but decorator is executed b4 we create the instance > there's no way to access instance member when using decorator
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
