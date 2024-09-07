const btn = document.querySelector("#throttle");
 
// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

//https://www.geeksforgeeks.org/javascript-throttling/


/*


**Throttling** in JavaScript is a technique used to limit the frequency at which a function is executed. Unlike debouncing, which waits for a pause in events, throttling ensures that a function is only called at regular intervals, even if an event occurs continuously.

### Use Case:

Throttling is useful when you want to ensure that a function doesn't run too often, such as:
- **Scrolling Events**: You may want to perform an action (like loading new content) while scrolling, but you don’t want to trigger the action on every pixel scroll.
- **Window Resizing**: You might want to adjust the layout of your application, but performing layout calculations every time the window is resized can be expensive.
- **Button Clicks**: Prevent rapid repeated button clicks that could trigger multiple submissions.

### How Throttling Works:

Throttling ensures that a function is called at most once in a specified time frame. Even if the event occurs multiple times, the function will only execute once every specified delay.

### Throttling Example:

Here's a basic implementation of a `throttle` function:

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

### Explanation:
- **`func`**: The function to throttle.
- **`limit`**: The time in milliseconds that must pass between two function executions.
- **`inThrottle`**: A flag that determines whether the function can be called again. If the function has been executed within the time limit, it won't be executed again until the time has passed.

### Example Usage:

Let's say we want to throttle a function that logs the current scroll position when the user scrolls the page:

```javascript
function logScrollPosition() {
  console.log(window.scrollY);
}

const throttledLogScrollPosition = throttle(logScrollPosition, 200);

window.addEventListener('scroll', throttledLogScrollPosition);
```

In this example:
- The `logScrollPosition` function will be throttled to execute at most once every 200 milliseconds, regardless of how fast the user scrolls.
- This reduces the number of times the function is called and improves performance.

### Throttling Example for a Button Click:

Here’s an example that prevents a button click from triggering a function too frequently:

```html
<button id="myButton">Click me!</button>
<script>
  function handleClick() {
    console.log('Button clicked!');
  }

  const throttledClick = throttle(handleClick, 1000);

  document.getElementById('myButton').addEventListener('click', throttledClick);

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
</script>
```

In this example:
- The `handleClick` function is throttled to execute at most once every second, preventing rapid clicks from triggering multiple calls to the function.

### Differences Between Throttling and Debouncing:

- **Throttling**: Ensures the function is called at regular intervals, no matter how often the event is triggered. Useful for scenarios where you want to ensure consistent execution, such as responding to scroll events or API polling.
  
- **Debouncing**: Ensures the function is only called once after the event has stopped occurring. Useful for scenarios where you want to wait until the user has finished an action, such as typing in a search bar or resizing a window.

### Real-World Applications of Throttling:

1. **Scroll Event**: Limit the number of times a function is executed during scrolling to avoid performance bottlenecks.
2. **Window Resize**: Limit how often layout recalculations happen when the window is resized.
3. **API Polling**: Use throttling to limit the frequency of polling a server for updates.
4. **Form Submissions**: Prevent multiple submissions of a form by throttling the submit button action.

### Example of Throttling for Scroll Event:

```html
<script>
  function onScroll() {
    console.log('Scroll event handler executed', window.scrollY);
  }

  const throttledScroll = throttle(onScroll, 300);

  window.addEventListener('scroll', throttledScroll);

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
</script>
```

In this example, the scroll event handler is throttled to execute once every 300 milliseconds, even if the user scrolls continuously.

### Conclusion:

Throttling is a great way to control how often a function is executed during continuous events like scrolling, resizing, or button clicks. It ensures that a function is called at a consistent interval, improving performance and preventing excessive function calls.
*/