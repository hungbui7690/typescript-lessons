/*
  Catching More Errors P2

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

  // (2) error is highlighted
  logTodo(id, completed, title)
})

// (1) add types
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Toto with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`)
}
