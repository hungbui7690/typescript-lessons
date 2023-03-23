/*
  A Simple Sorting Algorithm
  - pic
  - Bubble Sort 
    > find the largest > then swap 
    > 2nd iteration, don't touch the last item (sorted)

////////////////////////////////////////

  Sorter Scaffolding P1

*/

class Sorter {
  collection: number[] // we can initialize in the same line or use constructor()

  constructor(collection: number[]) {
    this.collection = collection
  }
}

const sorter = new Sorter([10, 3, -5, 0])
