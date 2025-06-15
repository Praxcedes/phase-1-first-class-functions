// 1. receivesAFunction(callback)
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction()
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// 3. returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}

// Export functions if required (CommonJS format for Node.js tests)
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
