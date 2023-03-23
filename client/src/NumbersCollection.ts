import { Sorter } from './Sorter'

// *** extends
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super() // *** require 1 argument for Sorter() > but we don't care about collection anymore
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }

  get length(): number {
    return this.data.length
  }
}
