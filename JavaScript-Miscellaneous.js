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

// 2. Number Parsing
// parseInt(str, radix): Parses string from left to right and returns integer; always pass radix (usually 10)

// Example 1: Basic integer parsing with radix
console.log(parseInt("42", 10)); // Output: 42

// Example 2: Parsing CSS measurement strings
console.log(parseInt("16px", 10)); // Output: 16

// Example 3: Parsing binary strings using radix
console.log(parseInt("1010", 2)); // Output: 10

// Topic 2.2: parseFloat()
// parseFloat(str): Parses string and returns floating-point number; preserves decimals

// Example 1: Parsing decimal values
console.log(parseFloat("3.14")); // Output: 3.14

// Example 2: Stripping trailing non-numeric characters
console.log(parseFloat("12.5em")); // Output: 12.5

// Example 3: Strings with scientific notation
console.log(parseFloat("314e-2")); // Output: 3.14

// 3. JSON Manipulation
// JSON.stringify(obj, replacer, space): Converts JS object/value into JSON string

// Example 1: Serializing an object
const user2 = { name: "Alice", age: 25 };
console.log(JSON.stringify(user2)); // Output: '{"name":"Alice","age":25}'

// Example 2: Pretty printing with indentation
console.log(JSON.stringify(user, null, 2));
/* Output:
{
  "name": "Alice",
  "age": 25
}
*/
