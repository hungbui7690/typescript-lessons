"use strict";
// *** Generic Type
class HoldAnything {
}
// type === number
const holdNumber = new HoldAnything();
holdNumber.data = 123;
// type === string
const holdString = new HoldAnything();
holdString.data = 'hello';
// without the type > type === unknown
const holdData = new HoldAnything();
