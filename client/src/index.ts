/*
  Solving All Issues with Abstract Classes
  - do the same for CharactersCollection & LinkedList

///////////////////////////////////////

  Interfaces vs Abstract Classes
  - pic
  - we don't need interfaces in this implementation anymore

*/

import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// *** test
const numbersCollection = new NumbersCollection([1, 2, 99, -400, 0, -10])
numbersCollection.sort()
console.log(numbersCollection.data)

// *** test
const charactersCollection = new CharactersCollection('xdabDZ')
charactersCollection.sort()
console.log(charactersCollection.data)

// ***
const ll = new LinkedList()
ll.add(34)
ll.add(-34)
ll.add(500)
ll.add(-99)
ll.add(0)

ll.sort()
ll.print()
