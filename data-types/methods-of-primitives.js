/*

Source: https://javascript.info/primitives-methods
Note: Very Important

=> Primitive

JavaScript allows us to work with primitives(string, number, boolean, etc) as if they were objects.

There are 7 primities in JavaScript:
-> Numbers
-> String
-> Boolean
-> Null
-> Undefined
-> BigInt
-> Symbol

=> Objects

An object is capable of storing multiple values as properties.
Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.

But, these features come with a cost!

Objects are “heavier” than primitives. They require additional resources to support the internal machinery. 

=> A primitive as an object

Here’s the paradox faced by the creator of JavaScript:

    -> There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
    -> Primitives must be as fast and lightweight as possible.

The solution looks a little bit awkward, but here it is:

    -> Primitives are still primitive. A single value, as desired.
    -> The language allows access to methods and properties of strings, numbers, booleans and symbols.
    -> In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

*/

let a = 10;
let b = new Number(10);
console.log(a == b);
console.log(typeof b); // Object

let zero = new Number(0);
console.log(typeof zero);

if (zero) console.log("This shouldn't get printed");

let num = Number("798");
console.log(num);
console.log(typeof(num)); // Number