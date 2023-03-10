/*
  One Quick Change
  - return undefined > no error
  
*/

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((resp) => {
  const todo = resp.data

  const ID = todo.ID // undefined
  const title = todo.Title // undefined
  const finished = todo.finished // undefined

  console.log(`
    The Toto with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `)
})
