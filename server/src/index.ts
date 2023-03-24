/*
  Basic Routes with Express
  > npm install express body-parser cookie-session
    + body-parser: parse body 
    + cookie-session: store login info
  > npm install @types/express @types/cookie-session @types/body-parser

*/

// *** ctrl + click > search for "Request" > we will see interfaces Request
import express, { Request, Response } from 'express'
const app = express()

// *** type annotation here: depends on how deep we want to integrate with TS
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `)
})

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
