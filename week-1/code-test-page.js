/*function createDictionary(words, translate) {
  const dictionary = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    dictionary[word] = translate(word);
  }
  return dictionary;
}

function questionMark(word) {
  return word + '?';
}

console.log(createDictionary(['hello', 'world'], questionMark));


const helloWorld = () => { hello: 'world' };

console.log(helloWorld());

function divisibleByTwo(num) {
  if (num === 2) return 1;
  debugger
  return 1 + divisibleByTwo(num / 2);
}

console.log(divisibleByTwo(16));


function eatPizza() {
  let pizza = 'Pepperoni!';
  if (true) {
    let pizza = 'Hawaiian';
  }
  debugger;
  return "Yummy!"
}

console.log(eatPizza());
*/

/*

Last Vowel

Write a function lastVowel(str) that takes in a string and returns the last vowel
that appears sequentially in the string. Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase or String.toUpperCase methods useful


//GAMEPLAN
//non-tech solution:
//look through each letter of each word and point out the last sequential vowel.
//'y' does not count (['=), it's an invalid option.
//Tech solution:
//Use a for loop to iterate through a word.
//use .includes() to target vowels
//declare and assign a variable for the vowels
//if conditional to link with .includes()
//return last vowel of word
//if .includes doesnt work, stick w/ if and for. (IT WORKED NO NEED WHOO)
//make sure function skips over the other vowels to get to the LAST vowel!
//try a nested loop! NESTED LOOP LEAD ME IN A LOOP IT WAS A CODING RED HERRING

// your code here

function lastVowel(str) {
  const vowel = 'aiueo';
  // console.log(str);
   for (let i = str.length - 1; i >= 0; i--) {
       const letter = str[i];
       if (vowel.includes(letter.toLowerCase())) { //WATCH FOR PLACEMENT MISTAKES! The code wasn't working the first b/c you typed 'str.toLowerCase(), instead of letter.toLowerCase()!
       return letter;
       }
  }
  return null;
}



console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
*/

/*

Average of Four
Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
The function should return the average of all of the numbers.

*/

function averageOfFour(num1, num2, num3, num4) {
  const sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  console.log(average);
  return average;
}

averageOfFour(10, 10, 15, 5); // 10
averageOfFour(3, 10, 11, 4); // 7
averageOfFour(1, 2, 3, 4); // 2.5


/*

Average of Two
Write a function averageOfTwo(num1, num2) that returns the
average of two numbers.

*/

function averageOfTwo(num1, num2) {
  let sum = num1 + num2;
  let average = sum / 2;
  console.log(average);
  return average;
}

averageOfTwo(3, 7); // 5
averageOfTwo(16, 5); // 10.5
averageOfTwo(2, 7.5); // 4.75

/*
console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75
*/
