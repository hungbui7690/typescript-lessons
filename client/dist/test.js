"use strict";
class HoldAnything {
    // ***
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything();
holdNumber.data = 123;
holdNumber.add(4); // ***
const holdString = new HoldAnything();
holdString.data = 'hello';
holdString.add('hi there'); // ***
