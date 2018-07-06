/*
Problem: 
Find the longest word in a string

Description:
Return the length of the longest word in the provided sentence.
Your response should be a number.

*/

function findLongestWordLength(str) {
    return str.split(" ").reduce( (len, word) => {
        return (len < word.length) ? word.length : len;
    }, 0);
}

console.log( findLongestWord("The quick brown fox jumped over the lazy dog" )); // should return a number.
console.log( findLongestWord("The quick brown fox jumped over the lazy dog" )); // should return 6.
console.log( findLongestWord("May the force be with you" )); // should return 5.
console.log( findLongestWord("Google do a barrel roll" )); // should return 6.

