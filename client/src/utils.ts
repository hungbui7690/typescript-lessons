// *** instructor
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((part: string) => parseInt(part))

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
