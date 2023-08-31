const JOURNAL = require("./journal");

// Definition of an array
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // -> 5
console.log(listOfNumbers[0]); // -> 2
console.log(listOfNumbers[2 - 1]); // -> 1

// Ways to access a property
console.log(listOfNumbers.length); // -> 5
console.log(listOfNumbers["length"]); // -> 5

let doh = "doh";
console.log(typeof doh.toUpperCase); // -> function
console.log(doh.toUpperCase()); // -> DOH

// Methods of arrays
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);

// Squirell analogy
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel); // -> false
console.log(day1.wolf); // -> undefined
day1.wolf = false;
console.log(day1.wolf); // -> false

// If we have properties that are not valid we must quoted them
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree",
};

// The delete operator
let anObject = { left: 1, right: 2 };
console.log(anObject.left); // -> 1
delete anObject.left;
console.log(anObject.left); // -> undefined

console.log("left" in anObject); // -> false
console.log("right" in anObject); // -> true

// If I want to know the properties of an object
// I should use the Object.keys function
console.log(Object.keys({ x: 0, y: 0, z: 2 })); // -> ['x', 'y', 'z']

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA); // -> { a: 1, b: 3, c: 4{}

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];

// Objects are mutable
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2); // -> true
console.log(object1 == object3); // -> false

object1.value = 15;
console.log(object2.value); // -> 15
console.log(object3.value); // -> 10

let journal2 = [];

function addEntry(events, squirrel) {
  journal2.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanus", "beer"], true);

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1])); // -> 0.068599434

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index++;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL)); // -> [ 76, 9, 4, 1 ]

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) events.push(event);
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL)); // -> ["carrot", "exercise", "weekend", "bread", …]

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1)
    console.log(`${event}: ${correlation}`);
}

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  )
    entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL))); // -> 1

// Shift and Unshift to get the first element of an array
let todoList = [];

function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}

function rememberUrgentely(task) {
  todoList.unshift(task);
}

// The zeroPad function from the previous chapter also exists as a method.
// It is called padStart and takes the desired length and padding character as
// arguments.
console.log(String(6).padStart(3, "0")); // -> 006

// Rest parameters
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));

numbers = [1, 2, 3, 4, 5];
console.log(max(...numbers));

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

console.log(randomPointOnCircle(2));

// Destructuring
let { name } = { name: "Miguel", age: 23 };
console.log(name);

// JSON
let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);

console.log(JSON.parse(string).events);

// Exercices
// The sum of a range
const range = (start, end, step = 1) => {
  let array = [];
  if (start <= end) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
};

const sum = (items) => {
  let result = 0;
  for (let item of items) result += item;
  return result;
};

console.log(sum(range(1, 10))); // -> 55
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

// Reversing array
const reverseArray = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);
  return reversedArray;
};

const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    oldValue = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = oldValue;
  }
  return array;
};

console.log(reverseArray(["A", "B", "C"])); // -> ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // -> [5, 4, 3, 2, 1]

// A list
const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let array = [];

  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
};

const prepend = (element, list) => {
  // Adds the element to the front of the list
  return { value: element, rest: list };
};

const nth = (list, position) => {
  // Returns the element at the given position
  if (!list) return undefined;
  else if (position == 0) return list.value;
  else return nth(list.rest, position - 1);
};

console.log(arrayToList([10, 20])); // {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30]))); // -> [10, 20, 30]

console.log(prepend(10, prepend(20, null))); // -> {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // -> 20

// Deep Comparison
const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // -> true
console.log(deepEqual(obj, { here: 1, object: 2 })); // -> false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // -> true
