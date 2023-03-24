import { Router, Request, Response } from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
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

// *** we see the we comment the bodyParser, but still no error here > if we check Request object > req.body has type of any
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body // type === any

  res.send({ email, password })
})

export { router }
