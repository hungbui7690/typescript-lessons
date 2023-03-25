"use strict";
/*
  The Refactoring Process
  - we will use the ts-express-decorators lib (deprecated), and implement some of the features in that lib to our app
    > pic
  
  > npm i ts-express-decorators

////////////////////////////////////////

  Prototypes Reminder
  - pic

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['secret'] }));
app.use(loginRoutes_1.router);
app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});
