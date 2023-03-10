/*
  Catching More Errors P1

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

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  // (2) if we pass with incorrect order of params
  logTodo(id, completed, title)
})

// (1)
const logTodo = (id, title, completed) => {
  console.log(`
  The Toto with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`)
}
