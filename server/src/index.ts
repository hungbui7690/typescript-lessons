/*
  Dealing with Poor Type Defs
  - from last lesson, we know that req.body has type of any 
    > but we should not change TDF 
  - loginRoutes.ts
    > we will create interface to overwrite the body property of Request object

  (***) this is not an ideal solution
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
