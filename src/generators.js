// Generators are used to make iterators without us implementing them
// Generators are used to oppose the default run to completion behaviour of functions

function* generatorFunction() {
  yield "Ayaan";
  yield "Shaikh";
}

console.log(generatorFunction().next().value); // This helps in obtaining values from generator

// The generator function when called returns an iterator

const generatorObj = generatorFunction();

for (word of generatorObj) {
  console.log(word);
}
