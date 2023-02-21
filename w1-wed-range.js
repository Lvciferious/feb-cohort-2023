/*

Range
Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive.

Define this function using function expression syntax.

*/


//GAMEPLAN
//non-tech solution:
//starting from one num, include ALL nums up to the max num.
//tech solution:
//for loop to iterate through
//return an array of all numbers between min and max (inclusive)
//ended up using .push() to execute the changes
//BONUS: see if you can refactor with forEach or .map()!
// your code here

/*
function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
       arr.push(i);
    }
    return arr;
}
*/

let arr = [];
let minMax = arr.map(function(min, max) {
    return min, max;
});



console.log(min, max);
//console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
//console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
//console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
//console.log(range(10, 3)); // []
