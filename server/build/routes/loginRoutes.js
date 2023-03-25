"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if (req.session && ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn))
        return next();
    res.status(403).send('Not permitted!');
}
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi' && password === 'hi') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        return res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    var _a;
    if (req.session && ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn)) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are NOT logged in</div>
        <a href='/login'>Login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in user');
});
