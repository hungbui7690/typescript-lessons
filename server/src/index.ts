/*
  Protecting Routes
  - using middleware > loginRoutes.ts

*/

import express, { Request, Response } from 'express'
const app = express()
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')
import cookieSession = require('cookie-session')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['secret'] }))

app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
