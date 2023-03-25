/*
  Property Descriptors
  - pic
  - ES5 JS > contains configurations for object


*/

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError // ***
  pilot(): void {
    throw new Error('') // *** will use decorator to catch error below

    console.log('swish')
  }
}

// *** change to log error > add 3rd param
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(target)
  console.log(key)
}
