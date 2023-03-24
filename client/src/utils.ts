// self implementation
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/')
  const [day, month, year] = dateParts

  return new Date(`${day}/${month}/${year}`)
}

console.log(dateStringToDate('10/08/2018'))
