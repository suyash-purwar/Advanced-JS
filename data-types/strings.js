/**
 * => There are three ways to declare strings in javascript:
 * 
 *      1. "" (Double quotes)
 *      2. '' (Single quotes)
 *      3. `` (Backticks aka Template Strings)
 * 
 * Note:
 *      1. Strings are immutable. str[0] = 'a' --> Fails
 *      2. Interation can be done over strings using for.. of loop
 */

// => str.length returns the length of the string
// '\n' creates a new line and is not a part of the string stored in the memory.
// length property doesn't count that.
console.log("A String\nAnother String".length);

// => Accessing characters
str1 = "DevCreate Hackathon"
console.log(str1.charAt(3)); // C
console.log(str1[3]); // C
// Both perform the same functions. str.charAt() exists for historical reasons.
// The difference between them is below
console.log(str1[1000]); // undefined
console.log(str1.charAt(1000)); // ''

// => for.. of loop
let strArr = []
for (char of str1) {
    strArr.push(char);
}
console.log(strArr)

// => str.toUpperCase() and str.toLowerCase()
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

/**
 * => Searching for a substring
 *      1. str.indexOf(substr, start)
 *          1.1 Returns a positing integer or zero if found. Return -1 if not found.
 *          1.2 Search is case-sensitive, demonstrated below
 *          1.3 The optional second parameter allows us to start searching from a given position.
 *      2. str.includes(substr, pos)
 *          2.1 Finds if the str contains substr.
 *          2.2 Returns true/false.
 *          2.3 The optional second parameter allows us to start searching from a given position.
 *      3. str.starsWith & str.endsWith
 *          3.1 Finds if a str starts and ends with substr respectively
 *          3.2 Returns true/false
 */

let str2 = "DevCreate Hackathon is approaching!";
let str3 = "As sly as a fox, as strong as an ox";

console.log(str2.indexOf('is')); // 20 (Found)
console.log(str2.indexOf('Is')); // -1 (Not found)
console.log(str3.indexOf('as', 9));
// First 'as' ends at 9. Now, the next 'as' will be targeted

// Program to find all the occurenece of a substr in a str regardless of it's case
let occureneces = 0;
let string = "As sly as a fox, as strong as an ox.";
let substr = "as";
let pos = 0;

while(string.toLowerCase().indexOf(substr, pos) != -1) {
    pos = string.toLowerCase().indexOf(substr, pos) + 1;
    occureneces++;
}

console.log(occureneces);

let str4 = "Pain is God!";
console.log(str4.includes("is"));
console.log(str4.includes("od!"));
console.log(str4.includes("is", 8));

console.log(str4.endsWith("!"));
console.log(str4.startsWith("Pain"));

/**
 * => Getting a Substring
 * 
 *      1. str.slice(start [, end])
 *          1.1 Returns the part of the string from start to (but not including) end.
 *          1.2 Negative values for start/end are also possible. They mean the position is counted from the string end.
 * 
 *      2. str.substring(start [, end])
 *          2.1 Returns the part of the string between start and end.
 *          2.2 Position of the arguments does not matter in this function. Args could be passed like this as well: str.slice(end, start)
 *          2.3 This is almost the same as slice, but it allows start to be greater than end
 *          2.4 Negative arguments are not supported unline in the slice function
 * 
 *      3. str.substr(start [, length])
 *          3.1 Returns the substs from start to the length
 *          3.2 Only the value of start arg could be negative
 */

