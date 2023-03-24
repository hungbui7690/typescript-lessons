"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
  `);
});
// *** req: RequestWithBody
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // ***
    if (email) {
        return res.send(email.toUpperCase());
    }
    else {
        return res.send('You must provide an email');
    }
    res.send(email.toUpperCase());
});
