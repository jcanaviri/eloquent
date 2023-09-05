let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says ${line}`);
};

rabbit.speak("I'm alive"); // I'm alive

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

hungryRabbit.speak("I could use a carrot right now");
// The hungry rabbit says 'I could use a carrot right now'

speak.call(hungryRabbit, "Burp!");
// The hungry rabbit says 'Burp!'

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

// In the call method we provide a proper this binding
normalize.call({ coords: [0, 2, 3], length: 5 }); // -> [0, 0.4, 0.6]

let empty = {};
console.log(empty.toString); // -> [Function: toString]
console.log(empty.toString()); // -> [object Object]
// This happends because even and empty object inherits from a base parent object
// the object that all objects are based on Object.prototype

console.log(Object.getPrototypeOf({}) == Object.prototype); // -> true
console.log(Object.getPrototypeOf(Object.prototype)); // -> null

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // -> true
console.log(Object.getPrototypeOf([]) == Array.prototype); // -> true

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!"); // -> The killer rabbit says 'SKREEE!'

// Prototypes
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // -> true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype); // -> true

// Class notation
class Rabbit2 {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit2 = new Rabbit2("killer");
let blackRabbit = new Rabbit2("black");

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord()); // -> hello

Rabbit2.prototype.teeth = "small";
console.log(killerRabbit2.teeth); // -> small

killerRabbit2.teeth = "long, sharp and bloody";

console.log(killerRabbit2.teeth); // -> long, sharp and bloody
console.log(blackRabbit.teeth); // -> small
console.log(Rabbit2.prototype.teeth); // -> small

// Overriting
console.log(Array.prototype.toString == Object.prototype.toString); // -> false
console.log([1, 2].toString()); // -> 1,2
console.log(Object.prototype.toString.call([1, 2])); // -> [object Array]

// Maps
let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};

console.log(`Julia is ${ages["Julia"]}`); // -> Julia is 62
console.log("Is Jack's age known?", "Jack" in ages); // -> Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages); // Is toString's age known? true

console.log("toString" in Object.create(null)); // -> false

let ages2 = new Map();
ages2.set("Boris", 39);
ages2.set("Liang", 22);
ages2.set("Julia", 62);

console.log(`Julia is ${ages2.get("Julia")}`); // -> Julia is 62
console.log("Is Jack's age known?", ages2.has("Jack")); // -> Is Jack's age known? false
console.log("Is toString's age known?", ages2.has("toString")); // Is toString's age known? false

console.log({ x: 1 }.hasOwnProperty("x")); // -> true
console.log({ x: 1 }.hasOwnProperty("toString")); // -> false

// Polimorphism
Rabbit2.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit)); // -> a black rabbit

// Symbols
// This value is unique and I cannot create the same symbol twice
let sym = Symbol("name");
console.log(sym == Symbol("name")); // -> false

Rabbit2.prototype[sym] = 55;
console.log(blackRabbit[sym]); // -> 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString()); // -> 1, 2
console.log([1, 2][toStringSymbol]()); // -> 2 cm of blue yarn

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject.toString()); // -> [object Object]
console.log(stringObject[toStringSymbol]()); // -> a jute rope

// The iterator interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // -> {value: "O", done: false}
console.log(okIterator.next()); // -> {value: "K", done: false}
console.log(okIterator.next()); // -> {value: undefined, done: true}

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

// We can now loop over a matrix with for/of
let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}
// -> 0 0 value 0, 0
// -> 1 0 value 1, 0
// -> 0 1 value 0, 1
// -> 1 1 value 1, 1

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temperture = new Temperature(10);
console.log(temperture.fahrenheit); // -> 50
temperture.fahrenheit = 86;
console.log(temperture.celsius); // -> 30

let anotherTemperture = Temperature.fromFahrenheit(100);
console.log(anotherTemperture.celsius);

// Inheritance
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x !== y) {
      super.set(y, x, value);
    }
  }
}

let symetricMatrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(symetricMatrix.get(2, 3)); // -> 3, 2

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // -> true
console.log(new SymmetricMatrix(2) instanceof Matrix); // -> true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); // -> false
console.log([1] instanceof Array); // -> true
