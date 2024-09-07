

/*An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that is defined and executed immediately after its creation. It’s primarily used to create a new scope, avoid polluting the global scope, and isolate variables.

### Syntax of an IIFE:
An IIFE is wrapped in parentheses to ensure it is treated as an expression and immediately invoked with a set of parentheses.

```javascript
(function() {
  // Code inside IIFE
  console.log("IIFE executed!");
})();
```

The function is defined and immediately executed without needing to be explicitly called.

### Example:
```javascript
(function() {
  const message = "Hello, IIFE!";
  console.log(message);  // Output: Hello, IIFE!
})();
```
In this example, the variable `message` is scoped inside the IIFE, so it doesn't affect or get affected by other variables in the global scope.

### Use Cases:

1. **Avoid Global Namespace Pollution:**
   Variables inside an IIFE are not accessible outside the function, preventing conflicts with other variables in the global scope.

   ```javascript
   (function() {
     var counter = 0;
     console.log(counter);  // Output: 0
   })();

   console.log(counter);  // Error: counter is not defined
   ```

2. **Module Pattern:**
   IIFE is often used in the **module pattern** to encapsulate functionality and return an object that exposes methods while keeping other internal logic private.

   ```javascript
   const counterModule = (function() {
     let counter = 0;
     
     return {
       increment: function() {
         counter++;
       },
       getValue: function() {
         return counter;
       }
     };
   })();

   counterModule.increment();
   console.log(counterModule.getValue());  // Output: 1
   ```

3. **Private Variables and Functions:**
   IIFEs help create private variables and functions, limiting their scope to the function itself and protecting them from being accessed or modified externally.

   ```javascript
   const person = (function() {
     let name = "John";

     return {
       getName: function() {
         return name;
       }
     };
   })();

   console.log(person.getName());  // Output: John
   ```

4. **Initialization Code:**
   IIFEs are useful for running one-time initialization code without leaving traces in the global scope.

   ```javascript
   (function() {
     // Initialization code here
     console.log("Initialization complete!");
   })();
   ```

### Conclusion:
IIFEs are a powerful tool in JavaScript that allow developers to create scope isolation, avoid global scope pollution, and implement modular code patterns with private variables and functions. They are widely used in legacy code, modules, and libraries.

*/