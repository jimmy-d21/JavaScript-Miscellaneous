// 1. Type Checking
// Topic 1.1: typeof Operator
// typeof: Returns string representing primitive data type ("string", "number", "boolean", "undefined", "function", "object")

// Example 1: Checking primitive types
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42); // Output: "number"
console.log(typeof true); // Output: "boolean"

// Example 2: Checking undefined and functions
let unassigned;
console.log(typeof unassigned); // Output: "undefined"
console.log(typeof function () {}); // Output: "function"

// Example 3: The famous null bug
console.log(typeof null); // Output: "object"

// Topic 1.2: instanceof Operator
// instanceof: Checks if an object is an instance of a specific class/constructor prototype

// Example 1: Custom class instance check
class User {}
const user = new User();
console.log(user instanceof User); // Output: true

// Example 2: Checking built-in complex types
const arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true

// Example 3: Primitive values vs Object wrappers
console.log("hello" instanceof String); // Output: false
console.log(new String("hello") instanceof String); // Output: true
