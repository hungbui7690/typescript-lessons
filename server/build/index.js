"use strict";
/*
  Parsing Form Bodies
  - routes/

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const loginRoutes_1 = require("./routes/loginRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // *** need to be above the route
app.use(loginRoutes_1.router);
app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
});
