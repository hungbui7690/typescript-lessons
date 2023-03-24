"use strict";
/*
  Basic Routes with Express
  > npm install express body-parser cookie-session
    + body-parser: parse body
    + cookie-session: store login info
  > npm install @types/express @types/cookie-session @types/body-parser

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// *** ctrl + click > search for "Request" > we will see interfaces Request
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// *** type annotation here: depends on how deep we want to integrate with TS
app.get('/', (req, res) => {
    res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});
app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});
