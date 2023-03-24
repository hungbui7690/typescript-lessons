/*
  Parsing Form Bodies
  - routes/

*/

import express, { Request, Response } from 'express'
const app = express()
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) // *** need to be above the route
app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
