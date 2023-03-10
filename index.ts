/*
  General Plan with Interfaces
  > pic
  
*/

interface Reportable {
  summary(): string
}

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

// (***) both oldCivic & drink has summary() > consider as Reportable type
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

printItem(oldCivic)

// (***)
printItem(drink)
