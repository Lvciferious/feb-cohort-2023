/*

Declare Keys/Values
Given the following declaration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and bracket notation.

*/

const obj = {};
obj.firstKey = "firstValue";
obj.numeric = "2";
obj.boolean = "false";
obj.object = "{}";
// Write your code here.


console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}



let obj2 = {};
obj2.firstKey = "firstValue";
obj2['numeric'] = "2";

let variable = 'boolean';
obj2[variable] = "false";
obj2.object = "{}";
// Write your code here.


console.log(obj2['firstKey']);       // firstValue
console.log(obj2['numeric']);        // 2
console.log(obj2['boolean']);        // false
console.log(obj2['object']);         // {}
