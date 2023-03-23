/*
  Integrating the Sort Method
  - pic

///////////////////////////////////////

  Issues with Inheritance
  - NumbersCollection.ts

*/

import { Sorter } from './Sorter'
import { LinkedList } from './LinkedList'

const ll = new LinkedList()
ll.add(9)
ll.add(3)
ll.add(2)
ll.add(-500)
ll.add(-3)

const sorter = new Sorter(ll)

sorter.sort()
ll.print()
