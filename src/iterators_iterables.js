// Iterables and Iterators are protocols which have in iterating data structures easily

// An object which implements iterable protocol is called an iterable
// To implement iterable the object must have a method to the [Symbol.iterator] key
// Now the method should not take any arguments and must return an object which conforms to the iterator protocol
// The iterator protocol decides whether an object is iterartor
// The object must have a next() method which returns an object with two properties:
// value and done

// Javascript by default makes the strings, arrays, maps, sets as iterables

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    return {
      next: function () {
        step++;
        if (step === 1) {
          return {
            value: "Ayaan",
            done: false,
          };
        } else if (step === 2) {
          return {
            value: "Shaikh",
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

// Now the above object becomes an iterable

for (element of obj) {
  console.log(element);
}
