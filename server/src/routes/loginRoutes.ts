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

// by default req.sessions = undefined because req object does not have sessions
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  // ***
  if (email && password && email === 'hi' && password === 'hi') {
    // mark this person as logged in
    req.session = { loggedIn: true }

    // redirect
    res.redirect('/')
  } else {
    return res.send('Invalid email or password')
  }
})

export { router }
