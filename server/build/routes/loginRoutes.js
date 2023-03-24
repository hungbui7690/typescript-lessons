"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
  `);
});
// by default req.sessions = undefined because req object does not have sessions
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // ***
    if (email && password && email === 'hi' && password === 'hi') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        // redirect
        res.redirect('/');
    }
    else {
        return res.send('Invalid email or password');
    }
});
