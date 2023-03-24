import { Router, Request, Response } from 'express'

const router = Router()

// *** overwrite
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

router.get('/login', (req: Request, res: Response) => {
  // *** change attribute name
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

// *** req: RequestWithBody
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  // ***
  if (email) {
    return res.send(email.toUpperCase())
  } else {
    return res.send('You must provide an email')
  }

  res.send(email.toUpperCase())
})

export { router }
