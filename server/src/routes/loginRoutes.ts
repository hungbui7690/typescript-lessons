import { Router, Request, Response } from 'express'
const router = Router()

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email && password && email === 'hi' && password === 'hi') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    return res.send('Invalid email or password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session?.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div>You are NOT logged in</div>
        <a href='/login'>Login</a>
      </div>
    `)
  }
})

// ***
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

export { router }
