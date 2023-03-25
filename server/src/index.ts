/*
  Wrapping Methods with Descriptors

*/

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error('') // ***

    console.log('swish')
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value

  // *** redefine function
  desc.value = function () {
    try {
      method()
    } catch (error) {
      console.log('Oops, boat was sunk')
    }
  }
}

new Boat().pilot() // *** we are successfully intercept the pilot()
