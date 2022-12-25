/**
 * Property Flags & Descriptors
 * 
 * In an object, beside key-value pairs, three special attributes are present. These are called flags.
 * When we create an object in the usual way, all three flags are defaulty set to true.
 * We can change the value of these flags using descriptor functions.
 * When we console.log() an object, we don't see any of these attributes. It's because they are hidden.
 * To print them, we have a descripor - Object.getOwnPropertyDescriptor(obj, prop)
 * 
 * These three flags are:
 *  1. writable - if true, the value of the property can change, otherwise not
 *  2. enumerable - if true, then listed in loops, otherwise not
 *  3. configurable - if true, the property can deleted and modified, otherwise not
 */
let user = {
    id: 12100435,
    name: 'Suyash Purwar',
    age: 20,
    height: 5.7,
    isAlive: false,
    describe() {
        console.log(`Id: ${this.id}\nName: ${this.name}`);
    }
};

let nameKeyDescriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(nameKeyDescriptor);

// Object.defineProperty(object, object_property, descriptor)
// Modifies existing flags
// If object_property does not exist, then it is created and key-value pairs are added for that prop

let obj1 = {};
// For new properties, we need to explicitly mention true for all the three flags, otherwise there
// defualt value is false
Object.defineProperty(obj1, "prop1", {
    value: "prop1_value"
});

console.log(obj1.prop1);

let obj1_name_descriptor = Object.getOwnPropertyDescriptor(obj1, 'prop1');
console.log(obj1_name_descriptor);

// Non-writable props
Object.defineProperty(user, 'name', {
    writable: false
});

// In non strict mode, following line will be ignored writing is freezed on the name property
user.name = "Shubham"; // Ignored in non-strict mode
console.log(user.name); // Still "Suyash Purwar"
// In strict mode, line 49 will throw an error

// Non-enumerable
console.log('----------------');
for (let prop in user) {
    console.log(prop, user[prop]);
}
// The object method describe also gets printed but this might not be the behaviour one
// would want everytime. So, we can make it non-enumerable.
Object.defineProperty(user, 'describe', {
    enumerable: false
});
console.log('----------------');
for (let prop in user) {
    console.log(prop, user[prop]);
}
// This time, object method describe was ignored
console.log(Object.keys(user)); // Prints enumerable properties

// Non-configurable - A non-configurable property can’t be deleted, its attributes can’t be modified.
// Let's say we want to make the 'id' property of the user undeleteable and unmodifiable
Object.defineProperty(user, 'id', {
    configurable: false
});
delete user.id; // This statement is ignored in non-strict mode
console.log(user);