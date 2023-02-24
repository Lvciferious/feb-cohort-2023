/*

Sum Array Recall
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

*/

//GAMEPLAN
//non-tech solution:
//take group of numbers and add them all together.
//tech solution:
//for loop
//sum the nums in the array
//return sum array

function sumArray(array) {
    sum = 0;
    // your code here...
    for (let i = 0; i < array.length; i++) {
        num = array[i];
        sum += num;


    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
