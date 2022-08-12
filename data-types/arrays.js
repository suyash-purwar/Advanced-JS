/**
 * => There are two ways to declare arrays in JavaScript:
 *      1. let arr = new Array();
 *      2. let arr = [];
 */

let regularArray = [
    true,
    () => {
        let name = "Suyash", reversed = "";
        for (let a = name.length-1; a >= 0; a--) {
            reversed += name[a];
        }
        return reversed;
    },
    ["Suyash", "Nikhil", "Krishnesh"],
    {
        name: "Suyash",
        age: 19,
        height: "5'7",
    }
];
let newArray = new Array(3, "something", { name: "Suyash", age: 19 });

console.log(newArray);

newArray[1] = "Hey, there";
console.log(newArray);
console.log(newArray[2].age);

console.log(regularArray);
console.log(regularArray[1]());
console.log(regularArray.length);

/**
 * => Accessing last element of the array
 * 
 * -> There are two ways to access last element of the array.
 *      1. array[array.length-1]
 *      2. array.at(-1) 
 *          This is a recent addition to the language. Old browsers may need plyfill
 */

console.log(regularArray.at(-1)); // Doesn't work with Node 14 version
console.log(newArray[newArray.length - 1]);

/**
 * => pop(), push(), shift(), and unshift()
 * 
 * -> pop() - Removes element from the end. Returns the removed element.
 * -> push() - Adds element fromt the end. Returns the updated length.
 * 
 * -> shift() - Removes element from the start. Returns the removed element.
 * -> unshift() - Adds element from the start. Returns the updated length.
 */

let names = ["Suyash", "Kirsheshh", "Nikhil", "Ashish", "Abhishek"];
console.log(names.pop());
console.log(names.push("Yash"));
console.log(names);

console.log(names.shift());
console.log(names.unshift("Aniket"));
console.log(names);

/**
 * => Internals
 * 
 * -> An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
 * -> They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.
 * -> But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.
 * -> But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.
 * -> For instance, technically we can do this:
 */

let fruits = [];
fruits[9999] = "Apple";
fruits.anotherApple = "Organge";
console.log(fruits);
console.log(fruits.length);

/**
 * -> That’s possible, because arrays are objects at their base. We can add any properties to them.
 * -> But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.
 * -> The ways to misuse an array:
 *      -> Add a non-numeric property like arr.test = 5.
 *      -> Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
 *      -> Fill the array in the reverse order, like arr[1000], arr[999] and so on.
 */

/**
 * => Loops
 * 
 * -> Both for-of and for-in loop are applicable
 * -> for-of loop traverse over the arrays 10-100 times faster than for-in loop.
 * -> for-of loop does not traverse over non-numeric indexes where for-in loop does.
 * -> Notes on for-in loops:
 *      -> The loop for..in iterates over all properties, not only the numeric ones.
 *      -> There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.
 *      -> The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.
 * -> Generally, we shouldn't use for-in loop
 */

let pureArray = ["Suyash", false, { model: "Alto" }];
let arrayLike = ["Nikhil"];
arrayLike[4] = "Kirshnesh";
arrayLike.nikhilRelative = "Vandana";
arrayLike.myFriends = ["Samuel", "Jonas", "Saini", "Akansha"];

for (let element of arrayLike) {
    console.log(element); // Only numerically indexed values are printed
}

// Important Note: arr.length property is actually not the count of values in the array, but the greatest numberic index plus one. arr.length ignores non-numeric keys.
// In the above array arrayLike, the greatest index is 5. Non-numeric keys like 'nikhilRelative' and 'myFriends' are ignored.

console.log(arrayLike.length); // 5 Only numerically indexed values are printed (0 - 4)

// for-in loop treats array like objects ---> unordered set of key-value pairs
// Unassigned indexs (1, 2, 3) are not listed as the values to them are not assigned
// Non-numeric keys and corresponding values are listed
for (let element in arrayLike) {
    console.log(element, arrayLike[element]);
}

/**
 * Clearing the array using length property
 */

let numArr = [1, 2, 3, 4, 5, 6];
numArr.length = 4; // Removes the last two elements
console.log(numArr);
numArr.length = 0;
console.log(numArr); // Empty array

/**
 * toString() on Arrays
 */

console.log(arrayLike.toString());
console.log(pureArray.toString());