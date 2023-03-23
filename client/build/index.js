"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
const charactersCollection = new CharactersCollection_1.CharactersCollection('XAaDAz');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
