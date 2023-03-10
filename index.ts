/*
  Multiple Types in Arrays
  
*/

// Flexible types
const importantDates = [new Date(), '2030-10-10'] // hover > string | Date

const importantDatesX: (string | Date)[] = [new Date(), '2030-10-10']
importantDatesX.push(new Date())
importantDatesX.push('2033-01-01')

// (***) if empty array > need to have type > otherwise, any
const fruits = [] // any
const numbers: number[] = [] // number
