/*
  Configuring the TS Compiler P2
  - src/ : .ts code
  - build/ : .js code

  > tsc --init
    + "outDir": "./build"
    + "rootDir": "./src"

  > tsc -w
*/

console.log('hello world')

const logSomething = () => {
  console.log('something')
}
