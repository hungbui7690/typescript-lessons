"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([1, 2, 99, -400, 0, -10]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('xdabDZ');
charactersCollection.sort();
console.log(charactersCollection.data);
const ll = new LinkedList_1.LinkedList();
ll.add(34);
ll.add(-34);
ll.add(500);
ll.add(-99);
ll.add(0);
ll.sort();
ll.print();
