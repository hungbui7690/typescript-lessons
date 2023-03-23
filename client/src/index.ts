/*
  Sorting Arbitrary Collections
  - in this lecture, we will see the power of interface 

  > create CharactersCollection.ts
  > skim through Sorter.ts


*/

import { Sorter } from './Sorter'
import { CharactersCollection } from './CharactersCollection' // ***

const charactersCollection = new CharactersCollection('XAaDAz')
const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(sorter.collection)
