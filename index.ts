/*
  Catching Error with TS P1
  - check API > properties are wrong, but we don't know

  - there should be a way for us to write out: 
    + reps.data has properties of: 
      > id
      > title
      > completed
*/

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// (***)
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((resp) => {
  const todo = resp.data as Todo // (***) after this > show error > hover to check

  const ID = todo.ID
  const title = todo.Title
  const finished = todo.finished

  console.log(`
    The Toto with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `)
})
