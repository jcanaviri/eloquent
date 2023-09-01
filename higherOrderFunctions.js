const SCRIPTS = require("./scripts");

// Higher order functions are a way to abstract repetition
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// -> 0
// -> 1
// -> 2
// -> 3
// -> 4
// -> 5

// We can abstract into a function
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// But what if we want to do something else
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// -> 0
// -> 1
// -> 2

let labels = [];
repeat(5, (i) => labels.push(`Unit ${i + 1}`));
console.log(labels); // -> [ 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5' ]

function greatherThan(n) {
  return (m) => m > n;
}

let greatherThanTen = greatherThan(10);
console.log(greatherThanTen(11)); // -> true

function noisy(f) {
  return (...args) => {
    console.log(`Calling with ${args}`);
    let result = f(...args);
    console.log(`Called with ${args}, returned ${result}`);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// -> Calling with 3,2,1
// -> Called with 3, 2, 1, returned 1

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(`${n} is even`);
  });
});
// -> 0 is even
// -> 2 is even

// Now there is a forEach method from arrays, that gives us this:
["A", "B"].forEach((l) => console.log(l));
// -> A
// -> B

// Filtering arrays
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, (script) => script.living));

console.log(SCRIPTS.filter((s) => s.direction === "ttb"));

// Mapping arrays
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction === "rtl");
console.log(map(rtlScripts, (s) => s.name));

// Sumarizing with reduce
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // -> 10

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);

let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count)); // -> 1165

// Strings and character codes
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }
  return null;
}

console.log(characterScript(121));

// Two emoji characters, horse and shoe
let horseShoe = "🐴👞";
console.log(horseShoe.length); // -> 4

console.log(horseShoe[0]); // -> (Invalid half-character)
console.log(horseShoe.charCodeAt(0)); // -> 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0)); // -> 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}

// Recognizing text
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);

    if (known === -1) counts.push({ name, count: 1 });
    else counts[known].count++;
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

// Exercises

// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]]; // -> [1, 2, 3, 4, 5, 6]

console.log(arrays.reduce((a, b) => a.concat(b), []));

// Your own loop
const loop = (value, test, update, body) => {
  let i = value;
  while (test(i)) {
    body(i);
    i = update(i);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// Everything
function every(array, test) {
  for (let item of array) {
    if (!test(item)) return false;
  }
  return true;
}

function every2(array, test) {
  return !array.some((i) => !test(i));
}

console.log(every2([1, 3, 5], (n) => n < 10)); // -> true
console.log(every2([2, 4, 16], (n) => n < 10)); // -> false
console.log(every2([], (n) => n < 10)); // -> true

// Dominant direction
function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!")); // -> ltr
console.log(dominantDirection("Hey, مساء الخير")); // -> rtl
