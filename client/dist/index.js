"use strict";
/*
  Reading CSV Files P1
  - return all matches, which is not good > we need to parse these data > pic > we want to convert to 2D array of strings
    > next lessons

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8', // if we don't add this option > return buffer
});
console.log(matches);
