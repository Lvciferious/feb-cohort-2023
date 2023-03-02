/*

Closure REPL

Complete the function named sundaeOrder(). This function will
return another function that should accept a string (topping) to add to the sundae.
A sundae will start off with a default "A bowl of ice cream with hot fudge". Each incoming
topping should be separated by "and". The function skeleton has already been created for
you - your job is to fill in the missing logic.



Look at the example test cases to see how this function is invoked:

*/

//GAMEPLAN
//non-tech solution:
//make a sundae! start with the ice cream and fudge, and pile on the toppings
//tech solution:
//helper function
//for x if OTP


function sundaeOrder() {
  let sundae = "A bowl of ice cream with hot fudge";
return function (topping) {
  return sundae = sundae + " and" + topping

}
};

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
