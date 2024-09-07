
// A generator function is a special type of function that can be used to control the flow of execution by yielding values one at a time instead of returning them all at once. When a generator function is called, it does not execute immediately but instead returns a generator object that can be used to control the execution of the function.

// The generator object has a next() method that can be used to resume execution of the function, and each time the function encounters a yield statement, it returns the yielded value and suspends execution until the next() method is called.

// Generator functions are useful for creating iterators and writing asynchronous code using async/await syntax. They allow you to write code that looks like synchronous code but executes asynchronously in the background.

// Generator functions are declared using the function* syntax, which is similar to regular function syntax but with an asterisk (*) after the function keyword.


function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = myGenerator();
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }


  function* fibonacciGenerator() {
    let current = 0;
    let next = 1;
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  // Create an instance of the Fibonacci generator
  const fibonacci = fibonacciGenerator();
  
  // Generate the first 10 Fibonacci numbers
  for (let i = 0; i < 10; i++) {
    console.log(fibonacci.next().value);
  }
  

  
  //https://medium.com/simform-engineering/iterators-and-generators-in-javascript-22da731b7fe3