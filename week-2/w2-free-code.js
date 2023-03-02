/*
beautyAdd

write a function that takes in the string (str) 'Hello World' as an arg.
Return the string with 'beautiful' inserted between the two words.



//GAMEPLAN
//non-tech solution:
//insert 'beautiful' between 'Hello World' to make 'Hello beautiful world'.
//tech solution:
//.split and .join
//clg inside func
//return altered func

function beautyAdd(str) {
    let beautiful = str.split(' ').join(' beautiful ');
    console.log(beautiful);
    return beautiful;
}

beautyAdd('Hello world'); //Hello beautiful world
beautyAdd("It's "); //It's beautiful
beautyAdd("A tiger"); //A beautiful tiger


//multi-line fat arrow
let sayHello = name => {
    console.log('Hello ' + name);
    return 'Hello ' + name;

}

sayHello('Lucifer');

//one-line fat arrow, explicit return
let sayHello2 = name => {return 'Hello ' + name;}


console.log(sayHello2('Lucifer'));

//one-line fat arrow, implicit return
let sayHello3 = name => 'Hello ' + name;


console.log(sayHello3('Lucifer'));

/*

for in gets


letNums = (...nums) => nums;


console.log(1, 2, 3, 4, 5);
console.log(57, 0, 1);
console.log(9001);
*/
/*
let foo = function() {
    console.log("hello");
    return 42;
  };

  foo;
*/
/*
let foo = function() {
    console.log("hello");
    return 42;
  };

  console.log(foo);
*/
/*
let bar = function() {
    console.log("Ramen");
  };

  let foo = function(cb) {
    console.log("Gazpacho");
    cb();
    console.log("Egusi");
  };

  console.log("Bisque");
  foo(bar);
  console.log("Pho");
*/
/*
let foo = function(n, cb) {
    console.log("vroom");
    for (let i = 0; i < n; i++) {
      cb();
    }
    console.log("skrrt");
  };

  foo(2, function() {
    console.log("swoosh");
  });
*/
/*
let bar = function() {
    console.log("Arches");
  };

  let foo = function() {
    console.log("Everglades");
    bar();
    console.log("Sequoia");
  };

  console.log("Zion");
  foo();
  console.log("Acadia");
*/

/*
let foo = function() {
    console.log("Everglades");
    console.log("Sequoia");
  };

  console.log("Zion");
  foo();
  console.log("Acadia");
*/

/*
function foo() {
    console.log("fizz");
  }

  function bar() {
    console.log("buzz");
  }

  function boom(cb1, cb2) {
    console.log("zip");
    cb1();
    console.log("zap");
    cb2();
    console.log("zoop");
  }

  boom(bar, foo);
*/
/*
let bar = function(s) {
    return s.toLowerCase() + "...";
  };

  let foo = function(message, cb1, cb2) {
    console.log(cb1(message));
    console.log(cb2(message));
  };

  foo("Hey Programmers", bar, function(s) {
    return s.toUpperCase() + "!";
  });
*/

let bar = function(mystery) {
    mystery("sneaky");
  };

  let foo = function(secret) {
    console.log(secret);
  };

  bar(foo);
