"use strict";
/*
  Issues with Type Definition Files
  - pic
  - loginRoutes.ts

  - modify d.ts file
    From:
    + body: ReqBody
    To:
    + body: {[key: string] : string | undefined};

  > we need "type def file" to work with TS > but if TDF is not good > it does not help us too much

  (***) need to change back TDF to default

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const loginRoutes_1 = require("./routes/loginRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});
