/*
  Issues with Type Definition Files
  - pic 
  - loginRoutes.ts

  - modify d.ts file 
    From: 
    + body: ReqBody
    To: 
    + body: {[key: string] : string | undefined};

  > we need "type def file" to work with TS > but if TDF is not good > it does not help us too much 

  (***) need to change back TDF to default

*/

import express, { Request, Response } from 'express'
const app = express()
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
