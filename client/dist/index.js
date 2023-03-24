"use strict";
/*
  Reading CSV Files P2

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n') // ***
    .map((row) => [row]); // *** turn each row in to array
console.log(matches); // now we have [[row1], [row2]... [rowN]] > string[][]
