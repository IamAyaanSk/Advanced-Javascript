// Prototype
//  Prototype is an object that is associated with every functions and objects by default in JavaScript

// Prototype is used in constructor functions to share properties or methods in every object instanciated through it

function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

// Now I want to add a method but that method must be accessible by all instances of the Person function
// Therefore here we add the method to the Prototype of the Person function

Person.prototype.getFullName = function () {
  return `${this.fName} ${this.lName}`;
};

const p1 = new Person("Ayaan", "Shaikh");
const p2 = new Person("John", "Doe");

console.log(p1.getFullName());
console.log(p2.getFullName());

// Protypal Inheritance
// We use Prototypal inheritance to extend the capabilities of child constructor function and avoid duplicate code

// const SuperHero = () => {
//   this.isSuperHero = true;
// };

// Now we want that the object instanciated from SuperHero must have properties and methods of the Person constructor function

function SuperHero(fName, lName) {
  Person.call(this, fName, lName); // Now we have the firstname and lastname properties
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting");
};

// To inherit the getFullname()
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;
// This chains the Person prototype with the SuperHero prototype
const s1 = new SuperHero("Tony", "Stark");
console.log(s1.getFullName());
console.log(s1);
