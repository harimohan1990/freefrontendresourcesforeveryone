
// html
<button id="debounce">
Debounce
</button>
//javascript

let button = document.getElementById("debounce");
        const debounce = (func, delay) => {
            let debounceTimer
            return function () {
                const context = this
                const args = arguments
                clearTimeout(debounceTimer)
                debounceTimer
                    = setTimeout(() => func.apply(context, args), delay)
            }
        }
        button.addEventListener('click', debounce(function () {
            alert("Hello\nNo matter how many times you" +
                "click the debounce button, I get " +
                "executed once every 3 seconds!!")
        }, 3000));















//https://www.geeksforgeeks.org/debouncing-in-javascript/



/* Application debouncing 

**Debouncing** in JavaScript is a programming practice used to ensure that a function is not called repeatedly within a short amount of time. It limits the rate at which a function is executed, especially in response to rapid events such as key presses, window resizing, scrolling, or button clicks. Debouncing improves performance by reducing the number of function executions.

### Use Case:

Imagine you're building a search bar with an autocomplete feature. You don't want to send a new API request every time the user presses a key, as this could result in too many unnecessary requests. Instead, you want to wait for the user to stop typing, then send a single request. Debouncing is perfect for this scenario.

### How Debouncing Works:

Debouncing delays the function execution until after a certain amount of time has passed since the last time the function was invoked. If the event occurs again before the delay is over, the timer resets.

### Debouncing Example:

Here's a simple example of a debounce function that will delay the execution of a search function until the user stops typing for 300 milliseconds:

```javascript
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

### Explanation:
- **`func`**: The function that you want to debounce (e.g., an API call).
- **`delay`**: The delay in milliseconds that must pass after the last event before the function is invoked (e.g., 300ms).
- **`timeoutId`**: This holds the ID of the timeout so that it can be cleared and reset if a new event occurs before the delay finishes.

### Example Usage:

Consider a search input field where you want to make an API request when the user stops typing:

```javascript
function search(query) {
  console.log(`Searching for ${query}`);
  // API call logic goes here
}

const debouncedSearch = debounce(search, 300);

document.getElementById("searchInput").addEventListener("input", function(event) {
  debouncedSearch(event.target.value);
});
```

In this example:
- The `search` function will only be called 300ms after the user stops typing.
- If the user types again before 300ms, the timer is reset, and the search function is delayed again.

### Real-World Applications:

1. **Search Bar Autocomplete**: Trigger the search API only after the user has stopped typing.
2. **Window Resizing**: Update the layout only after the user has stopped resizing the window.
3. **Form Validation**: Validate a form field only after the user has stopped typing or interacting with it.
4. **Button Clicks**: Prevent multiple submissions by ensuring that a button click is only processed once within a given period.

### Debounce Example for Search API:

```html
<input type="text" id="searchInput" placeholder="Search...">
<script>
  function search(query) {
    console.log(`Searching for ${query}`);
    // Perform an API call here
  }

  const debouncedSearch = debounce(search, 300);

  document.getElementById('searchInput').addEventListener('input', function(event) {
    debouncedSearch(event.target.value);
  });

  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
</script>
```

In this case:
- The search function is debounced to only trigger after the user has stopped typing for 300ms.
- This reduces the number of unnecessary API requests and improves performance.

### Conclusion:

Debouncing is a simple but powerful technique in JavaScript that improves performance by limiting the frequency at which a function is executed. It is especially useful in scenarios where events are triggered rapidly, such as user input, window resizing, and scrolling.


*/ 