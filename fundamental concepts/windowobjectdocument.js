
/*https://www.w3schools.com/jsref/obj_window.asp


In JavaScript, the **`window` object** and the **`document` object** are essential components of the browser's Document Object Model (DOM). They provide access to the content and structure of a web page, as well as the global browser environment. Here’s an overview of both objects and their use cases:

### 1. **The `window` Object:**

The `window` object represents the global browser window and contains everything related to the browser's global environment. It acts as the global object in client-side JavaScript, meaning all global variables and functions are properties or methods of the `window` object.

#### Key Properties and Methods of `window`:
- **`window.location`**: Provides information about the current URL and allows redirection to another URL.
  
  ```javascript
  console.log(window.location.href);  // Get current URL
  window.location.href = "https://www.example.com";  // Redirect to a new page
  ```

- **`window.alert()`**: Displays an alert dialog with a message.

  ```javascript
  window.alert("Hello, world!");
  ```

- **`window.setTimeout()` and `window.setInterval()`**: Schedule code execution after a delay or at regular intervals.

  ```javascript
  window.setTimeout(() => console.log("Hello after 2 seconds"), 2000);  // Execute after 2 seconds
  window.setInterval(() => console.log("Hello every 2 seconds"), 2000);  // Execute every 2 seconds
  ```

- **`window.navigator`**: Provides information about the browser (e.g., user agent, language).

  ```javascript
  console.log(window.navigator.userAgent);  // Information about the browser
  ```

- **`window.history`**: Allows navigation through the browser history.

  ```javascript
  window.history.back();  // Go back to the previous page
  window.history.forward();  // Go forward to the next page
  ```

- **Global Variables and Functions**: Any global variable or function is a property of the `window` object.

  ```javascript
  var myVar = 10;
  console.log(window.myVar);  // Output: 10
  ```

- **`window.innerHeight` and `window.innerWidth`**: Get the height and width of the viewport (the visible part of the browser window).

  ```javascript
  console.log(window.innerHeight, window.innerWidth);
  ```

#### Use Cases of `window` Object:
- Managing global browser environment (e.g., handling URLs, browser history).
- Controlling dialogs such as `alert()`, `confirm()`, and `prompt()`.
- Accessing or manipulating browser-specific information such as viewport dimensions, user agent, etc.
- Working with timers and intervals.
- Managing cookies via `window.document.cookie`.

### 2. **The `document` Object:**

The `document` object represents the HTML document that is displayed in the browser window. It allows you to access and manipulate the content, structure, and style of a web page.

#### Key Properties and Methods of `document`:
- **`document.getElementById()`**: Selects an element by its ID.

  ```javascript
  const element = document.getElementById("myElement");
  ```

- **`document.querySelector()` and `document.querySelectorAll()`**: Select elements using CSS selectors.

  ```javascript
  const element = document.querySelector(".myClass");  // Single element
  const elements = document.querySelectorAll("div");  // All div elements
  ```

- **`document.createElement()`**: Creates a new HTML element.

  ```javascript
  const newDiv = document.createElement("div");
  ```

- **`document.body`**: Refers to the `<body>` element of the page.

  ```javascript
  document.body.style.backgroundColor = "lightblue";  // Change body background color
  ```

- **`document.title`**: Gets or sets the title of the web page.

  ```javascript
  console.log(document.title);  // Get the current title
  document.title = "New Title";  // Set a new title
  ```

- **`document.getElementsByTagName()`**: Retrieves all elements of a specific tag name.

  ```javascript
  const paragraphs = document.getElementsByTagName("p");  // Get all paragraph elements
  ```

- **`document.getElementsByClassName()`**: Retrieves all elements with a specific class name.

  ```javascript
  const elements = document.getElementsByClassName("myClass");  // Get all elements with class "myClass"
  ```

- **`document.cookie`**: Gets or sets cookies for the current page.

  ```javascript
  document.cookie = "username=JohnDoe";  // Set a cookie
  console.log(document.cookie);  // Get all cookies
  ```

- **`document.addEventListener()`**: Adds an event listener to the document or specific elements.

  ```javascript
  document.addEventListener("click", () => {
    console.log("Document clicked!");
  });
  ```

#### Use Cases of `document` Object:
- Manipulating the DOM (Document Object Model) to dynamically change the content, structure, and style of the web page.
- Selecting and modifying specific elements using methods like `getElementById()`, `querySelector()`, etc.
- Creating and inserting new elements into the document dynamically.
- Handling user events, such as clicks, form submissions, key presses, etc.
- Managing the web page's cookies, metadata, and document state.

### Differences Between `window` and `document`:

1. **Scope**:
   - **`window`** represents the entire browser window and all global resources related to it (e.g., history, location, timers, cookies).
   - **`document`** represents the HTML content of the page displayed in the browser.

2. **Hierarchy**:
   - **`document`** is a property of `window`. The `window` object is the top-level object, and `document` exists within it.
   - `window.document` refers to the document object associated with the window.

3. **Usage**:
   - **`window`** is used to interact with the browser environment, control dialogs, manage cookies, handle navigation, and work with timers.
   - **`document`** is used to manipulate the web page's DOM (e.g., selecting elements, adding content, handling events).

### Example Combining Both Objects:

Here’s an example that uses both the `window` and `document` objects:

```javascript
window.addEventListener("load", function() {
  // This code runs when the page has fully loaded
  document.body.style.backgroundColor = "lightyellow";  // Access the document object to change the body style

  // Display an alert using the window object
  window.alert("Welcome to the page!");

  // Set the document title
  document.title = "Hello World!";
  
  // Log the current page URL using the window object
  console.log(window.location.href);
});
```

### Conclusion:

The `window` object represents the global browser environment and provides access to global properties like location, history, and timers. The `document` object represents the HTML document and allows manipulation of the DOM, including selecting elements, modifying content, and handling events. Both objects are integral to creating interactive web pages and dynamic content in JavaScript.

*/