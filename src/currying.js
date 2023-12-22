//  Currying
//  Currying means transforming a function which takes multiple arguments to nested functions each taking single argument at a time

const sum = (a, b, c) => a + b + c;
console.log(sum(3, 5, 7));

// Now Transforming this function

const curriedSum = (fn) => {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
};

console.log(curriedSum(sum)(3)(5)(7));

const fn = curriedSum(sum);
const add3 = fn(3);
const add8 = add3(5);

console.log(add8(10));

// Overall Currying is used to prrovide more flexibility and reusability of code. It becomes very easy to read and understand as each function takes only one argument

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

const totalPriceWithFixedQuantity = calculateTotalPrice.bind(null, 10);

console.log(totalPriceWithFixedQuantity(3));

// Here we used the bind function to pass the first argument of the calculateTotalPrice() and made a new function totalPriceWithFixedQuantity()

// Same function withoun bind function

function calculateTotalPrice2(quantity) {
  return function (pricePerItem) {
    return quantity * pricePerItem;
  };
}

const totalPriceWithFixedQuantity2 = calculateTotalPrice2(10);

console.log(totalPriceWithFixedQuantity2(3));
