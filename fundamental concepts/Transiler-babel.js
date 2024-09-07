//https://www.youtube.com/shorts/lICjKmYY990


/*
**Babel** is a popular JavaScript compiler that is used to convert modern JavaScript code (ES6/ES7 and beyond) into a version of JavaScript that is compatible with older browsers or environments that do not yet support modern JavaScript features. It essentially allows you to use the latest JavaScript syntax and features without worrying about browser support.

### Key Concepts of Babel:

1. **Transpiling**: Babel converts (transpiles) modern JavaScript code (like ES6+) to an older version, usually ES5, for compatibility with older environments.
   
2. **Plugins**: Babel is highly configurable through plugins. You can add plugins to transform specific JavaScript features like `arrow functions`, `async/await`, etc.
   
3. **Presets**: Presets are collections of plugins. A popular preset is `@babel/preset-env`, which enables transforming modern syntax based on the target environments (browsers you want to support).

4. **Polyfilling**: Along with transpiling syntax, Babel can also handle polyfilling for new global objects (like `Promise`, `Map`, etc.), using libraries like `core-js`.

### Example Workflow with Babel:

1. **Install Babel**:
   You need to install Babel and its presets via npm.
   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
   ```

2. **Configure Babel**:
   Create a `.babelrc` file in your project root to configure Babel:
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

3. **Transpile Code**:
   Suppose you have modern JavaScript in `src/index.js`. You can transpile it using:
   ```bash
   npx babel src/index.js --out-file dist/index.js
   ```

### Example Code Before Babel:
```js
const greet = () => {
  console.log("Hello, world!");
};

const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // Modern syntax
```

### After Babel Transpilation:
```js
"use strict";

var greet = function greet() {
  console.log("Hello, world!");
};

var numbers = [1, 2, 3];
console.log(numbers.indexOf(2) !== -1); // Transpiled syntax
```

Babel helps ensure that your code runs reliably in a wide range of environments, especially when you need to support legacy browsers.

*/