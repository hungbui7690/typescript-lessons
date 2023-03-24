/*
  Why Doesn't Express Play Nicely with TS
  - pic 
  - if we comment the body parser middleware 
    > req.body.email === req.undefined.email > error
  - middleware has the jobs of receive Request, Response, NextFunction Object as parameter > then add / remove / modify those properties in those objects
  - TS job is to manage the types of those objects 
    > but the middleware keeps adding/removing properties > how TS can handle that 

  (***) check loginRoutes.ts

*/

import express, { Request, Response } from 'express'
const app = express()
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: true })) // *** comment this line
app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
