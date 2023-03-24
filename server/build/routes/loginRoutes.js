"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    // *** change name property to something wrong
    res.send(`
    <form method='POST'>
      <div>
        <label>Email</label>
        <input name='em' type='text'/>
      </div>
      <div>
        <label>Password</label>
        <input name='pw' type='password'/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body; // type of email === any > if we change the name attributes in these fields > there's no way that server knows > TS cannot check it as well > this is the problem with server
    // *** type guard
    if (email) {
        email.toUpperCase();
    }
    else {
        res.send('You must provide an email property');
    }
    // *** ctrl click on req.body > modify type definition file > now we see the error
    res.send(email.toUpperCase()); // type === any > no code suggestion
});
