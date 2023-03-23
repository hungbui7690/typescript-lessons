"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
const NumbersCollection_1 = require("./NumbersCollection");
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i; j++) {
                if (this.collection instanceof NumbersCollection_1.NumbersCollection) {
                    if (this.collection.compare(j, j + 1))
                        this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
