import { Router, Request, Response } from 'express'

const router = Router()

// *** change route + annotation
router.get('/login', (req: Request, res: Response) => {
  // build login form
  res.send(`
    <form method='POST'>
      <div>
        <label>Email</label>
        <input name='email' type='text'/>
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password'/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  `)
})

// *** body-parser will parse the form for us
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body

  res.send({ email, password })
})

export { router }
