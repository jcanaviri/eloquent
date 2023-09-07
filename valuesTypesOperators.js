// The most basic type is the number
console.log(42); // Output: 42

// Decimal numbers are written with a dot '.'
console.log(2.54); // Output: 2.54

// We can apply mathematical expressions
console.log(100 + 4 * 11); // 144

// if we want to the plus operation applies first we need to use parenthesis
console.log((100 + 4) * 11); // Output: 1144

// NaN means not a number
console.log(0 / 0); // Output: NaN
console.log(Infinity - Infinity); // Output: NaN

// Strings
console.log(`Down on the sea`);
// prettier-ignore
console.log('Lie on the ocean');
console.log("Float on the ocean");

// Special characters
console.log("This is the first line\nAnd this is the second");

// Concatenation
console.log("con" + "cat" + "e" + "nate");

// Backtick-quotes
console.log(`Half of 100 is ${100 / 2}`); // Output: Half of 100 is 50

// Unary Operators
console.log(typeof 2.54); // Output: Number
console.log(typeof "x"); // Output: String
console.log(-(10 - 2)); // Output: -8

// Comparator operators
console.log(3 > 2); // Output: true
console.log(3 < 2); // Output: false
console.log("Aardvark" < "Zoroaster"); // Output: true
console.log("Itchy" != "Scratchy"); // Output: true
console.log("Apple" == "Orange"); // Output: false
// Special case
console.log(NaN == NaN);

// Boolean operators
// AND
console.log(true && false); // Output: false
console.log(true && true); // Output: true
// OR
console.log(false || true); // Output: true
console.log(false || false); // Output: false
// NOT
console.log(!true); // Output: false
console.log(!false); // Output: true

// The ternary operator
console.log(true ? 1 : 2); // Output: 1
console.log(false ? 1 : 2); // Output: 2

// Empty Values
console.log(undefined);
console.log(null);

// Automatic type conversion
console.log(8 * null); // Output: 0
console.log("5" - 1); // Output: 4
console.log("5" + 1); // Output: 6? 🙅‍♂️ Output: 51
console.log("five" * 2); // Output: NaN
console.log(false == 0); // Output: true
console.log(null == undefined); // Output: true
console.log(null == 0); // Output: false

// Short-circuiting of logical operators
console.log(null || "user"); // Output: user
console.log("Agnes" || "user"); // Output: Agnes
