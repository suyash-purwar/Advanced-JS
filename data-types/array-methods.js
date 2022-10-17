/**
 * => Deleting any arbitrary element of array
 * 
 * -> delete keyword which can delete the key-value pair of an object, is also applicable here
 * -> but does not work as efficiently in the case of arrays as shifting the next values of the array also needs to be done
 * -> The slice() function comes to the rescue
 */

let arr1 = [1, false, 3];
delete arr1[1]; // Writes undefined in the place of 'false' value but does not change the length of the arrays
console.log(arr1, arr1.length);

/**
 * => arr.splice(start[, deleteCount, elem1, ..., elemN])
 * 
 * -> It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
 */

let arr2 = [90, true, "hey, bro!"]
let arrayOfRemovedElements = arr2.splice(1, 1, ...arr2); // Deletes 1 element from index=1 and inserts all the elements from arr2
console.log(arr2);
console.log("Array of removed elements: ", arrayOfRemovedElements);

// Complete re-write of the arr2
let deletedArray = arr2.splice(0, arr2.length, "Hey!", "Array", "is", "re-written!");
console.log(arr2);
console.log("Deleted Array: ", deletedArray);

/**
 * => arr.slice([start], [end])
 * 
 * -> It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
 */

let arr3 = [45, 0b10110111, { foo: "bar" }, false, 1_00_000e3];
console.log(arr3.slice(2)); // 2 to the end of the array by-default
console.log(arr3.slice(-5)); // -3 to to the end of the array by-default
console.log(arr3.slice(-4, -1));

/**
 * => arr.concat(arg1, arg2...)
 * 
 * -> Joins multiple arrays together and returns a new array
 */

let combinedArr = arr1.concat(arr2, arr3);
console.log(combinedArr);