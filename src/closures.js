// Nested Function Scope (Lexical Scope)
// The child function can access variables from parent function

const a = 10;
const outer = () => {
  const b = 20;
  const inner = () => {
    const c = 30;
    console.log(a, b, c);
  };
  inner();
};

outer();

// Closures
// When we return a function from a function, we are effectively returning the combination of function and the function's scope.
// This allows the function to have an associated persistent memory which could hold the data between executions.

const outer2 = () => {
  let counter = 0;
  const inner2 = () => {
    counter++;
    console.log(counter);
  };
  return inner2;
};

const fn = outer2();
fn();
fn();
