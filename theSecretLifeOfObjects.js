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
  }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!"); // -> The killer rabbit says 'SKREEE!'
