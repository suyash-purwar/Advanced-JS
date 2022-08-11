/** 
 * => Types of numbers
 *
 * -> Regular Numbers
 * -> BigInt
 * 
 * Source: javascript.info
 * Link: https://javascript.info/number
 */

// Ways to write a long number
let billion_regular = 1000000000;
let billion_better = 1_000_000_000;
// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.
console.log(billion_better);

// The need to write so many zeroes can altogether be avoided by this format
let longNum1 = 9320000;
let longNum1_better = 932e3;
// e multiplies the number by 1 with the given zeroes count.
console.log(longNum1_better);
console.log(932e3 == 932 * 1 * 1000);

// Writing something very small with 'e'
let smallNum1 = 0.00002;
let smallNum1_better = 2e-5; // 4 zeroes to the left of 2
console.log(smallNum1_better);

/**
 * => Representing Hex, Octal, and Binary numbers
 * 
 * -> To represent the hex, octal, and binary digits, some prefixes are used
 * -> '0x' for Hexadecimal
 * -> '0o' for Octal
 * -> '0b' for Binary
 * 
 * Note: Hexadecimal number system is usually used to represent the color codes.
 */

// Hexadecimal
console.log(0xff23ab);
// Octal
console.log(0o1231);
// Binary
console.log(0b10011110101);

/**
 * => toString(base) function: Allows to convert the number of one base to the other
 * 
 * -> The method num.toString(base) returns a string representation of num in the numeral system with the given base.
 * -> The base can vary from 2 to 36. By default it’s 10.
 * -> base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36
 */

let binaryDigit = 0b1010011101;
console.log(binaryDigit.toString(16));
console.log(binaryDigit.toString(30));
let octalDigit = 0o2532376572;
console.log(octalDigit.toString(2));
console.log(octalDigit.toString(36));
console.log(0x23ab02ef0.toString(23));
console.log(2323..toString(2)); // Not a typo!
// Why have we used two dots?
// If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.
// If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.
// Also could write (123456).toString(36).

/**
 * => parseInt() and parseFloat()
 * 
 * -> Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails: Number("100px") --> Fails
 * -> In real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
 * -> That’s what parseInt and parseFloat are for.
 * -> They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
 */

let pixels = "500px";
let myHeight = "5.7 inch";
let ip = "1022.123.21.03";
console.log(parseInt(pixels)); // 500
console.log(parseFloat(myHeight)); // 5.7
console.log(parseInt(myHeight)); // 5 -> Stops at the '.' as integer types values do not accept '.'
console.log(parseFloat(ip)); // 1022.123 -> Stops at the second '.' as floating point type values do not accept second '.'

// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
console.log(parseInt("S18")); // NaN