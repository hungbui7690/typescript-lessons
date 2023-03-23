/*
  Type Guards
  - pic

//////////////////////////////////

  Why This Is Bad
  - if we add 1 more type (later) > we need to add more logic to sort() 


*/

class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        // this.collection. // *** just show the common methods > number[] | string

        // *** type checking
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            // this.collection. // *** show all array methods > number[]

            const temp = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = temp
          }
        }

        // *** type checking
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])

sorter.sort()
console.log(sorter.collection)
