/*
  Void and Never
  
*/

// (***) void: not return anything
const logger = (message: string): void => {
  console.log(message)

  // return null // err
  // return undefined // NO err
}

// (***) never
const throwError = (message: string): never => {
  throw new Error(message)

  // return undefined // error
}
