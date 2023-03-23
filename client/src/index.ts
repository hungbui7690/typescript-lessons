/*
  Two Huge Issues
  - now, this algo works with only number[]
  - if, collection: string > won't work
  - pic:
    + string is immutable
    + comparison does not work well

//////////////////////////////////

  Typescript is Really Smart
  - pic


*/

class Sorter {
  // *** collection: number[] | string
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection

    // this.collection. // *** we can see the common methods & properties of number[] & string

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        // *** number[]
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j]
          this.collection[j] = this.collection[j + 1] // err because string does not support update > hover to see the error
          this.collection[j + 1] = temp
        }

        // *** string
        // ~~~ logic to compare and swap characters in a string
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])

sorter.sort()
console.log(sorter.collection)
