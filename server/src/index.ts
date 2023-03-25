/*
  More on Decorators P2
  - apply decorator on method parameters

*/

class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  // *** use decorator in parameter
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') console.log('swish')
    else console.log('nothing')
  }
}

// *** target can be any or Boat
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)

  /*
    pilot 1
    pilot 0
  */
}
