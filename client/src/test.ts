class HoldAnything<T> {
  data: T // "strictPropertyInitialization": false

  // ***
  add(a: T): T {
    return a
  }
}

const holdNumber = new HoldAnything<number>()
holdNumber.data = 123
holdNumber.add(4) // ***

const holdString = new HoldAnything<string>()
holdString.data = 'hello'
holdString.add('hi there') // ***
