/*
  Using an Express Router
  - create routes/loginRoutes.ts

*/

import express, { Request, Response } from 'express'
const app = express()
import { router } from './routes/loginRoutes' // ***

app.use(router)

app.listen(5000, () => {
  console.log(`Listening on port 5000...`)
})
