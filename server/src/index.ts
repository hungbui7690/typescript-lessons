/*
  A Closer Integration
  - pic
  - previous lesson, we finished the 1st version, which is using the express library normally as we could with the bare minimum of TS
    > minimum Type & Error checking in our application 
  - from now on, we will try to twist our lib to work with TS classes 
    > classes & interfaces
  > below is an implementation (pic 1: left side)
    > with the code below, it does not gain anything to our app:
      + not easy to read 
      + not easy to write 
      > no benefit

  (***) this won't work > we will work on the right side of pic 1
*/

import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser = require('body-parser')
import cookieSession = require('cookie-session')

class Server {
  app: express.Express = express()

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cookieSession({ keys: ['secret'] }))
    this.app.use(router)
  }

  start() {
    this.app.listen(5000, () => {
      console.log(`Listening on port 5000...`)
    })
  }
}

new Server().start()
