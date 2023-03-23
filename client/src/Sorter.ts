// ***
interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class Sorter {
  // *** remove constructor

  sort(): void {
    // *** remove collection > error > hover > fix in next lesson
    const { length } = this

    for (let i = 0; i < length; i++) {
      // *** j < length - i - 1
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) this.swap(j, j + 1)
      }
    }
  }
}
