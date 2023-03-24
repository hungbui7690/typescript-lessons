"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
// self implementation
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/');
    const [day, month, year] = dateParts;
    return new Date(`${day}/${month}/${year}`);
};
exports.dateStringToDate = dateStringToDate;
console.log((0, exports.dateStringToDate)('10/08/2018'));
