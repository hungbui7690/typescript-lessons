"use strict";
/*
  Executing TS Code
  - create index.ts
  - to run:
    + tsc index.ts
    + node index.js

  
*/
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (resp) {
    console.log(resp.data);
});
