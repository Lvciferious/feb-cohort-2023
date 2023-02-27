/*
beautyAdd

write a function that takes in the string (str) 'Hello World' as an arg.
Return the string with 'beautiful' inserted between the two words.

*/

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
