"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
// *** change route + annotation
router.get('/login', (req, res) => {
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
  `);
});
// *** body-parser will parse the form for us
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send({ email, password });
});
