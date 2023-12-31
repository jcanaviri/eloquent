// This code defines a function square that recibes a number and returns its square.
const square = function (x) {
  return x * x;
};

console.log(square(12)); // -> 144

// A function might not have any parameter or parameters
const makeNoise = function () {
  console.log("Pling!");
};

makeNoise(); // -> Pling!

// A function can have parameters
const power = function (base, exponent) {
  let result = 1;
  for (let counter = 0; counter < exponent; counter++) result *= base;

  return result;
};

console.log(power(2, 10)); // -> 1024

// The scope
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // -> 60
}
// y is not visible here
console.log(x + z); // -> 40

// A function can live inside another function
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) unit += "s";
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeans");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

console.log("Hummus with 1 portion");
hummus(1);

console.log("Hummus with 4 portion");
hummus(4);

// We can declare a function with the 'function' keyword but it has this little inconvinient
console.log("The future says: " + future());
function future() {
  return "You'll never have a flying car";
}

// Optional arguments
function square2(x) {
  return x * x;
}
console.log(square2(6, true, "hey"));

function minus(a, b) {
  if (b === undefined) return -a;
  return a - b;
}

console.log(minus(10));
console.log(minus(10, 4));

function power2(base, exponent = 2) {
  let result = 1;
  for (let counter = 0; counter < exponent; counter++) {
    result *= base;
  }

  return result;
}

console.log(power2(4));
console.log(power2(2, 6));

// Clorsure
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // -> 1
console.log(wrap2()); // -> 2

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// Recursion
function power3(base, exponent) {
  if (exponent === 0) return 1;
  else return base * power(base, exponent - 1);
}
console.log(power3(2, 3));

// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
// would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?
// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }

  return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(13));

// Growing functions

// This is our first attempt
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// Now this is the second attempt
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) numberString = "0" + numberString;
  console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory2(7, 11, 13);

// It works! But that name, printZeroPaddedWithLabel, is a little awkward.
// It conflates three things—printing, zero-padding, and adding a label—into a
// single function.
// Instead of lifting out the repeated part of our program wholesale, let’s try
// to pick out a single concept.
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

// Exercises

// Minimum
const min = (a, b) => {
  if (a <= b) return a;
  return b;
};

console.log(min(2, 2));
console.log(min(1, 12));
console.log(min(42, 12));

// Recursion
const isEven = (number) => {
  if (number === 0) return true;
  if (number === 1) return false;
  if (number < 0) return isEven(-number);
  return isEven(number - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean counting
const countChar = (string, character) => {
  let counter = 0;
  for (let letter of string) {
    if (letter === character) counter++;
  }
  return counter;
};

const countBs = (string) => {
  return countChar(string, "B");
};

console.log(countBs("ABCBAABB"));
