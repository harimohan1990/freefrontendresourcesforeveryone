
//with bind 

function mul(val1, val2){  
    console.log("<p>" + val1 * val2 + "</p>");  
}  
let var1 = mul.bind(this, 5);  
var1(4);  
var1(7);  
let var2 = mul.bind(this, 4);  
console.log("var2 method")  
var2(2);  
var2(4);  

// with clousure 

//Without currying

function multiply(a, b, c) {  
    return a * b * c;  
 }  
document.write(multiply(2, 5, 8));  

// with currying 

function multiply(a) {  
    return function(b) {  
       return function(c) {  
          return a * b * c;  
       }  
    }  
 }  
document.write(multiply(2)(5)(8));  


//https://www.javatpoint.com/currying-in-javascript




/*It seems like you might be referring to **currying** in JavaScript, which is a functional programming concept. Let me explain what currying is and how it’s useful.

### What is Currying?

**Currying** is a technique where a function, instead of taking all its arguments at once, takes them one at a time. It transforms a function that takes multiple arguments into a series of functions, each taking one argument.

### Example of Currying:

Let’s say we have a regular function that adds three numbers:

```javascript
function add(x, y, z) {
  return x + y + z;
}

console.log(add(1, 2, 3));  // Output: 6
```

With **currying**, we transform this function into a chain of functions, where each one takes one argument at a time:

```javascript
function curriedAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

console.log(curriedAdd(1)(2)(3));  // Output: 6
```

### How Currying Works:
1. **`curriedAdd(1)`**: Returns a function that expects the next argument `y`.
2. **`curriedAdd(1)(2)`**: Returns a function that expects the final argument `z`.
3. **`curriedAdd(1)(2)(3)`**: Finally calculates and returns the result.

### Benefits of Currying:

1. **Partial Application:**
   Currying allows partial application of functions. This means you can create a new function by pre-filling some of the arguments. For example, you can fix the first argument and then reuse the curried function:

   ```javascript
   const add5 = curriedAdd(5);
   console.log(add5(3)(2));  // Output: 10
   ```

2. **Reusability:**
   Curried functions can be reused for different contexts by passing in arguments progressively. This makes functions more modular and reusable.

3. **Higher-Order Functions:**
   Currying works well with higher-order functions, where you can return specialized versions of functions by supplying certain arguments earlier.

### Practical Example with Currying:

Imagine a scenario where you want to apply a discount to prices:

```javascript
function discount(rate) {
  return function(price) {
    return price - price * rate;
  };
}

const tenPercentOff = discount(0.1);
console.log(tenPercentOff(100));  // Output: 90
console.log(tenPercentOff(200));  // Output: 180
```

Here, `discount(0.1)` returns a function that applies a 10% discount to any price you pass in.

### Utility in Functional Programming:

In functional programming, currying is often used to create more granular, composable functions that can be combined and reused in various ways. It makes the code more declarative, focusing on what you want to achieve rather than how.

### Conclusion:

**Currying** helps in breaking down functions that take multiple arguments into smaller, reusable functions that take one argument at a time. This technique is powerful in functional programming as it promotes partial application, function reusability, and higher-order functions, making code more modular and flexible. */