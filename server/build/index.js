"use strict";
/*
  Why Doesn't Express Play Nicely with TS
  - pic
  - if we comment the body parser middleware
    > req.body.email === req.undefined.email > error
  - middleware has the jobs of receive Request, Response, NextFunction Object as parameter > then add / remove / modify those properties in those objects
  - TS job is to manage the types of those objects
    > but the middleware keeps adding/removing properties > how TS can handle that

  (***) check loginRoutes.ts

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const loginRoutes_1 = require("./routes/loginRoutes");
// app.use(bodyParser.urlencoded({ extended: true })) // *** comment this line
app.use(loginRoutes_1.router);
app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});
