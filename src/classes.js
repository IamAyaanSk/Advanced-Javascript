// Classes are Syntactical Sugar over the existing prototypal inheritance
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  sayMyName() {
    console.log(`${this.fName} ${this.lName}`);
  }
}

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName); // super() calls the class Person
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fightintg Crime");
  }
}

const ironMan = new SuperHero("Tony", "Stark");

ironMan.sayMyName();
ironMan.fightCrime();
