"use strict";
/*
  App Overview
  - pic

    > npm init -y
    > tsc --init
      + setup rootDir + outDir
    > npm install nodemon concurrently
  
  - package.json:
      "scripts": {
          "start:build": "tsc --w",
          "start:run": "nodemon dist/index.js",
          "start": "concurrently npm:start:*"
        },
*/
console.log('Hello World');
