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

