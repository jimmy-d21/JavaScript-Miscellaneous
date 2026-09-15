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
