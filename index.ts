/*
  Executing TS Code
  - create index.ts

  - to run: 
    + tsc index.ts
    + node index.js
  
  - or to combine the 2 commands:
    + ts-node index.ts

  
*/

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((resp) => {
  console.log(resp.data)
})
