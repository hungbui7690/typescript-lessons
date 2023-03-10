/*
  Functions in Interfaces P2
  - now, we wan to make the interface more generic 
  

*/

// (***)
interface Reportable {
  summary(): string
}

// (***) more generic
const printItem = (item: Reportable): void => {
  console.log(item.summary())
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

printItem(oldCivic)
