export class Sorter {
  constructor(public collection: /* TODO: FIX THIS */) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = temp
          }
        }
      }
    }
  }
}
