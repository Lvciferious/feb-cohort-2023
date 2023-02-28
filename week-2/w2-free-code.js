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
*/

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
