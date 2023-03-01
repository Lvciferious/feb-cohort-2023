/*

Iterate Through Obj
Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

HINT: use a for loop

*/let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };

function printObject(obj) {
    let bKeys = Object.bKeys(obj);
    for (let key of bKeys) {
        console.log(obj[key]);
    }
  }



  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120
