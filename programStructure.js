// This is how we chreate a simple definition of a variable
let caught = 5 * 5;

// We use variables so we can use their values in other parts of the code
let ten = 10;
console.log(ten * ten); // -> 100

// We can change the value any time we want
let mood = "light";
console.log(mood); // -> light

mood = "dark";
console.log(mood); // -> dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // -> 105

let one = 1,
  two = 2;
console.log(one + two); // -> 3

// We can use the keywords 'var' and 'const'
var name = "Josue";
const greeting = "Hello ";
console.log(greeting + name); // -> Hello Josue

// Functions
console.log(Math.max(2, 4)); // -> 4
console.log(Math.min(2, 4) + 100); // -> 102

// Conditional execution
let theNumber = null;

if (typeof theNumber === Number) {
  console.log(`The square root of ${theNumber} is ${theNumber * theNumber}`);
} else {
  console.log("Hey, Why didn't you give me a number");
}

// While loop
let number = 2;
while (number <= 12) {
  console.log(number);
  number += 2;
}

// The next program will calculate the result of 2^10
let result = 1;
let counter = 0;

while (counter < 10) {
  result *= 2;
  counter++;
}
console.log(result);

// do-while loop
let result2 = 1;
let counter2 = 0;
do {
  result2 *= 2;
  counter2++;
} while (counter2 < 10);

console.log(result2);

// for loop
for (let number = 0; number < 10; number += 2) {
  console.log(number);
}

let result3 = 1;
for (let counter3 = 0; counter3 < 10; counter3++) {
  result3 *= 2;
}
console.log(result3);

// Switch statement
let theWeather = "rainy";
switch (theWeather) {
  case "rainy":
    console.log("Remember to bring an umbrella");
    break;
  case "sunny":
    console.log("Dress lightly");
  case "cloudy":
    console.log("Go outside");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

// * Exercise 1 *
// LOOPING A TRIANGLE Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// This is my solution
let symbol = "";
for (let i = 1; i <= 7; i++) {
  symbol += "#";
  console.log(symbol);
}
// This is the solution in the book
for (let line = "#"; line.length < 8; line += "#") console.log(line);

// * Exercise 2 *
// FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "fizz";
  if (i % 5 === 0) output += "buzz";
  console.log(output || i);
}

// * Exercise 3 *
// Chessboard Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// This is my solution
let size = 8;
let board = "";
for (let i = 0; i < size; i++) {
  let row = "";
  if (i % 2 == 0) row += " ";

  for (let j = 0; j < size; j++) {
    if (j % 2 === 0) row += "#";
    else row += " ";
  }

  row += "\n";
  board += row;
}
console.log(board);

// This is the solution in the book
let size2 = 8;
let board2 = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) board2 += " ";
    else board2 += "#";
  }
  board2 += "\n";
}
console.log(board2);
