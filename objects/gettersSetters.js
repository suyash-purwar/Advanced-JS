/**
 * Getters and Setters
 * 
 * There are two kinds of object properties:
 *  1. Data Properties (self-explanatory)
 *  2. Accessor Properties
 * 
 * Accessor Properties are functions that execute on setting/getting a value.
 * Accessor propertes are represented by 'setter' and 'getter' methods
 */

/**
 * The object user has first_name and last_name prop
 * But we might want something like full_name to get the full_name of the user
 * Declaring a new prop doesn't make sense as it increases data redundancy
 * A getter function could be used to create a sort of virtual prop
 * A getter function is basically a function that can be accessed as any other property
 */

let user = {
    first_name: 'Suyash',
    last_name: 'Purwar',

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    }
}

console.log(user.full_name); // Accessing just like any other property
// user.full_name = "Shubham Purwar"; throws error as setter function does not exist

/**
 * You might want to edit this virtual prop
 * For that setter function must be in place
 */

let user_two = {
    first_name: 'Suyash',
    last_name: 'Purwar',

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    },

    set full_name(value) {
        [this.first_name, this.last_name] = value.split(' ');
    }
}

user_two.full_name = 'Shubahm Purwar'; // Setting like any other property
const { first_name, last_name } = user_two;
console.log(first_name, last_name);

// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

let user_three = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
};