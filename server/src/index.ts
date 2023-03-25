/*
  Decorator Factories

*/

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError('Oops, boat was sunk in ocean') // *** pass parameter to decorator
  pilot(): void {
    throw new Error('')
  }
}

// *** decorator factory: decorator that returns function
function logError(errorMessage: string) {
  // *** return
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function () {
      try {
        method()
      } catch (error) {
        console.log(errorMessage) // ***
      }
    }
  }
}

new Boat().pilot()
