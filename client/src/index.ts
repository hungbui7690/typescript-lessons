/*
  Linked List Implementation
  - pic
  - create LinkedList.ts
    > LL must follow the interface > need to have: length, compare(), swap()

*/

import { Sorter } from './Sorter'
import { CharactersCollection } from './CharactersCollection' // ***

const charactersCollection = new CharactersCollection('XAaDAz')
const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(sorter.collection)
