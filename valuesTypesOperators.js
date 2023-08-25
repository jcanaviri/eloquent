// The most basic type is the number
console.log(42); // -> 42

// it also could be a decimal number, the separator must be '.'
console.log(2.54); // -> 2.54

// We can apply mathematical expressions
console.log(100 + 4 * 11); // 144

// if we want to the plus operation applies first we need to do this
console.log((100 + 4) * 11); // -> 1144

// NaN means not a number
console.log(0 / 0); // -> NaN
console.log(Infinity - Infinity); // -> NaN

// The next basic data type is the string. Strings are used to represent text.
// They are written by enclosing their content in quotes.
console.log(`Down on the sea`);
console.log("Lie on the ocean");
console.log("Float on the ocean");

// There are some special characters for example:
console.log("This is the first line\nAnd this is the second");

// Concatenation
console.log("con" + "cat" + "e" + "nate");

// Backtick-quotes
console.log(`Half of 100 is ${100 / 2}`); // -> Half of 100 is 50

// Unary Operators
console.log(typeof 2.54); // -> Number
console.log(typeof "x"); // -> String
console.log(-(10 - 2)); // -> -8

// Comparator operators
console.log(3 > 2); // -> true
console.log(3 < 2); // -> false
console.log("Aardvark" < "Zoroaster"); // -> true
console.log("Itchy" != "Scratchy"); // -> true
console.log("Apple" == "Orange"); // -> false
// Special case
console.log(NaN == NaN);

// Boolean operators
// AND
console.log(true && false); // -> false
console.log(true && true); // -> true
// OR
console.log(false || true); // -> true
console.log(false || false); // -> false
// NOT
console.log(!true); // -> false
console.log(!false); // -> true

// The ternary operator
console.log(true ? 1 : 2); // -> 1
console.log(false ? 1 : 2); // -> 2

// Empty Values
console.log(undefined);
console.log(null);

// Automatic type conversion
console.log(8 * null); // -> 0
console.log("5" - 1); // -> 4
console.log("5" + 1); // -> 6? 🙅‍♂️ -> 51
console.log("five" * 2); // -> NaN
console.log(false == 0); // -> true
console.log(null == undefined); // -> true
console.log(null == 0); // -> false

// Short-circuiting of logical operators
console.log(null || "user"); // -> user
console.log("Agnes" || "user"); // -> Agnes
