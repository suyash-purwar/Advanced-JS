// 'use strict';

// Nullish Coalescing Operator (??)

let prop1;
let age = 19

let obj = {
    name: 'Suyash',
    age,
    [prop1 ?? (function() {
        return age >= 18 ? 'msgToAdult' : 'msgToChild'
    })()]: (age => {
        const msgToChild = 'Be curious'
        const msgToAdult = 'Take responsibility in life';
        return age >= 18 ? msgToAdult : msgToChild;
    })()
}

console.log(obj);

// Polyfill for Promises
function MyPromise(callback) {
    this.then = res => {
        this.resolve = res;
        return this;
    }
    this.catch = rej => {
        this.reject = rej;
        callback(this.resolve, this.reject);
    }
}

function makeSomeAPICall() {
    return new MyPromise((resolve, reject) => {
        // Making some API call
        const isDataRetrieved = true;
        const data = { message: "Aye Papp!!" };
        if (isDataRetrieved) return resolve(data);
        return reject(new Error("You fucked up boi!"));
    });
}

const response = makeSomeAPICall()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

// Function Declaration v/s Function Expression
let myAge = 19;

if (myAge >= 18) {
    function message() {
        return "You are an adult!";
    }
} else {
    function message() {
        return "Kiddo";
    }
}

console.log(message()); // With 'use strict' command this wouldn't work [ReferenceError]

// In strict mode if we want to make this function globally visible, function expression can be used
let message2;
if (myAge >= 18) {
    message2 = function() {
        return 'You are an adult!'
    }
} else {
    message2 = function() {
        return 'Kiddo'
    }
}
console.log(message2());

// simpler version
let message3 =
    myAge >= 18 ?
    function () { return 'You are an adult!'} :
    function () { return 'Kiddo'};
console.log(message3());