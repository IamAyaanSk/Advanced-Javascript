// this Keyword
// The this keyword refers to an object the function belongs to

// Determining 'this'

// Implicit Binding

const person = {
  name: "Ayaan",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();
// Here the this keywords binds with the person object without the need of binding it explicitly

// Explicit Binding

const personAgain = {
  name: "Ayaan",
};

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName.call(personAgain);
// Here we are specifying th object explicitly with the call()

// Default Binding

// We can define name property for global object:
// globalThis.name = "Ayaan";

sayMyName();
// Here as we are not providing any object, the this keyword points the global object

// New Binding

function Person(name) {
  this.name = name;
}

const p1 = new Person("Ayaan");
const p2 = new Person("John");

// Here we use the new keyword to create instances of Parent
// Each instance refers to a new object created. The 'new' keyword assigns the value of 'this' as the new object instanciated

// Order of Precedence

// New Binding  >  Explicit Binding  >  Implicit Binding  >  Default Binding
