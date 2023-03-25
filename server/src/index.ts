/*
  The Refactoring Process
  - we will use the ts-express-decorators lib (deprecated), and implement some of the features in that lib to our app
    > pic
  
  > npm i ts-express-decorators

////////////////////////////////////////

  Prototypes Reminder
  - pic

*/

import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')
import cookieSession = require('cookie-session')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['secret'] }))
app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
