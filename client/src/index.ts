/*
  Concurrent Compilation and Execution
  - node .\build\index.js

    > npm init -y
    > npm install nodemon concurrently

  - package.json
      "start:build": "tsc -w",
      "start:run": "nodemon build/index.js",
      "start": "concurrently npm:start:*"

*/

console.log('hello world')

const logSomething = () => {
  console.log('something')
}
