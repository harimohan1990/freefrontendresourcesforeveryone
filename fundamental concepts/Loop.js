/*
In JavaScript, loops are used to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops, each serving different use cases:

### 1. `for` Loop

The `for` loop is used when the number of iterations is known. It consists of three parts: initialization, condition, and increment/decrement.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
- **Initialization**: `let i = 0` initializes the loop counter.
- **Condition**: `i < 5` specifies that the loop will continue running as long as `i` is less than 5.
- **Increment**: `i++` increases the value of `i` by 1 after each iteration.

### 2. `while` Loop

The `while` loop is used when the number of iterations is not known beforehand. It runs as long as the condition is `true`.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 3. `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before the condition is checked.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4. `for...in` Loop

The `for...in` loop is used to iterate over the properties of an object (or the indices of an array).

```javascript
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### 5. `for...of` Loop

The `for...of` loop is used to iterate over iterable objects such as arrays, strings, or collections.

```javascript
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

### 6. `break` and `continue` Statements

- **`break`**: Exits the loop entirely.
- **`continue`**: Skips the current iteration and proceeds to the next one.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // Will stop at 2
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Skips 2
}
```

### Conclusion:
Loops are fundamental to control flow in programming and are widely used for iterating over arrays, objects, or repeating tasks until a condition is met.

*/