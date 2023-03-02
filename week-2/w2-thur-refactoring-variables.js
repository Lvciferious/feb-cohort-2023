/*

Refactoring Variables
The "Your Code" tab shows a solution for the Anagrams problem. Anagrams are words that contain the same characters
but not necessarily in the same order. The function returns true if word1 and word2 are anagrams.



This solution only uses the var to declare all variables. The code runs as expected, but could be improved.
Refactor this solution to only use let and const instead of var.

*/
/*
var anagrams = (word1, word2) => {
    var result = true

    if (word1.length !== word2.length) {
        result = false;
        return result;
    }

    var count = {};

    for (var i = 0; i < word1.length; i++) {
        if (count[word1[i]]) {
            count[word1[i]]++;
        } else {
            count[word1[i]] = 1;
        }
    }

    for (var i = 0; i < word2.length; i++) {
        if (count[word2[i]]) {
            count[word2[i]]--;
        } else {
            count[word2[i]] = 1;
        }
    }

    for (var char in count) {
        if (count[char] !== 0) {
            result = false;
            return result;
        }
    }
    return result;
}

var wordA = "restful"
var wordB = "fluster"

var wordC = "cat"
var wordD = "dog"

console.log(anagrams(wordA, wordB));          // true
console.log(anagrams(wordC, wordD));          // false
console.log(anagrams("cat", "act"));          // true
*/

const anagrams = (word1, word2) => {
    let result = true;

    if (word1.length !== word2.length) {
        result = false;
        return result;
    }

    let count = {};

    for (let i = 0; i < word1.length; i++) {
        if (count[word1[i]]) {
            count[word1[i]]++;
        } else {
            count[word1[i]] = 1;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if (count[word2[i]]) {
            count[word2[i]]--;
        } else {
            count[word2[i]] = 1;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
            result = false;
            return result;
        }
    }
    return result;
}

const wordA = "restful"
const wordB = "fluster"

const wordC = "cat"
const wordD = "dog"

console.log(anagrams(wordA, wordB));          // true
console.log(anagrams(wordC, wordD));          // false
console.log(anagrams("cat", "act"));          // true
console.log(anagrams("boot", "bootcamp"));    // false
