// *** Generic Type
class HoldAnything<TypeOfData> {
  data: TypeOfData // ***
}

// type === number
const holdNumber = new HoldAnything<number>()
holdNumber.data = 123

// type === string
const holdString = new HoldAnything<string>()
holdString.data = 'hello'

// without the type > type === unknown
const holdData = new HoldAnything()
