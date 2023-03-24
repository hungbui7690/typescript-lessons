"use strict";
/*
  Typescript with JS Libraries
  - pic
  - as we learn so far about TS, we use classes and interfaces to connect the classes together > but in the real world, we don't use classes too much
    > https://www.npmjs.com/package/ts-express-decorators
      > check this link, we can see most of the code using class, which we don't use too much in Express
    >
  - because we don't want to use classes too much, we will need a TS adapter library that has helpers for using lib with TS
  - or Twist lib to work with TS classes (most of the time we will use this)

////////////////////////////////////////

  App Overview
  - pic
  - we will first work with Express normally, with basic Type Annotation > then later, we will twist it to work with TS classes

//////////////////////////////////////////

  Project Setup
  - tsc --init
  - npm install nodemon concurrently
  - setup outDir & rootDir
  - package.json

*/
console.log('Hi there');
