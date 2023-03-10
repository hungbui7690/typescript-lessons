/*
  Catching Error with TS P2
  - fix the error 
  
*/

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((resp) => {
  const todo = resp.data as Todo

  const ID = todo.id
  const title = todo.title
  const finished = todo.completed // (***)

  console.log(`
    The Toto with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `)
})
