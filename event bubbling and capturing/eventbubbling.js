
<!DOCTYPE html>
<html>

<head>
	<script src=
"https://code.jquery.com/jquery-3.6.0.min.js">
	</script>
	<style>
		div {
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		h2 {
			color: black;
		}
		#grandparent {
			background-color: green;
			width: 300px;
			height: 300px;
		}
		#parent {
			background-color: blue;
			width: 200px;
			height: 200px;
		}
		#child {
			background-color: red;
			width: 100px;
			height: 100px;
		}
	</style>
</head>

<body>
	<div>
		<h2>Welcome To GFG</h2>
		<div id="grandparent">GrandParent
			<div id="parent">Parent
				<div id="child">Child</div>
			</div>
		</div>
	</div>

	<script>
		const grandParent = document.getElementById("grandparent");
		const parent = document.getElementById("parent");
		const child = document.getElementById("child");

		grandParent.addEventListener("click", (e) => {
			console.log("GrandParent");
		}, { capture: false });
		parent.addEventListener("click", (e) => {
			console.log("Parent");
		}, { capture: false });
		child.addEventListener("click", (e) => {
			console.log("Child");
		}, { capture: false });
	</script>
</body>
</html>


/*

**Event bubbling** is a concept in JavaScript where an event starts from the innermost target element and propagates (or "bubbles up") through its ancestors (parents, grandparents, etc.) until it reaches the document root. It allows the same event to be captured by the target element and any of its ancestor elements.

### Example of Event Bubbling:

```html
<div id="parent">
  <button id="child">Click me!</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked!");
});
```

In this example:
- If you click on the `button` with the ID `child`, the event will trigger both the `child` and `parent` event listeners.
- The console will output:
  - `"Child clicked!"`
  - `"Parent clicked!"`
  
This happens because the event "bubbles up" from the `child` element to its parent (`div` with ID `parent`), triggering any event listeners along the way.

### Use Cases of Event Bubbling:

1. **Delegating Event Handling:**
   Event bubbling can be useful when you want to handle events at a higher level rather than attaching individual event handlers to every element. This is known as **event delegation**.

   #### Example: Handling Multiple Buttons with One Listener
   Instead of attaching a separate event handler to each button inside a parent element, you can attach one event handler to the parent and let the event bubble up.

   ```html
   <ul id="menu">
     <li>Menu Item 1</li>
     <li>Menu Item 2</li>
     <li>Menu Item 3</li>
   </ul>
   ```

   ```javascript
   document.getElementById("menu").addEventListener("click", function(event) {
     console.log(`Clicked on: ${event.target.textContent}`);
   });
   ```

   Here, a single event listener is attached to the parent `ul` element. When any `li` (menu item) is clicked, the event bubbles up to the `ul`, and the event handler logs the text content of the clicked item. This is efficient because you don't have to attach a separate click handler to each `li`.

2. **Form Submission Handling:**
   Event bubbling can be helpful when handling form submissions. For example, when you have multiple input fields in a form, you might use bubbling to detect changes at the form level rather than for each individual input.

3. **Dynamic Content Handling:**
   Event bubbling is useful when dealing with dynamic content (e.g., elements that are created after the page has loaded). By attaching a single event listener to a parent element, you can ensure that newly added child elements also trigger events without needing to manually bind event listeners to them.

4. **Preventing Unintended Behavior:**
   Sometimes, you may want to stop the event from bubbling up if a specific condition is met. In such cases, you can use the `stopPropagation()` method to prevent the event from propagating to its parent elements.

   #### Example: Stopping Event Bubbling
   ```javascript
   document.getElementById("child").addEventListener("click", function(event) {
     console.log("Child clicked!");
     event.stopPropagation();  // Stops the event from bubbling up
   });

   document.getElementById("parent").addEventListener("click", function() {
     console.log("Parent clicked!");
   });
   ```

   In this example, clicking on the `child` button will only log `"Child clicked!"` because the event bubbling is stopped before it can reach the `parent`.

### Key Points to Consider:

- **Event capturing** (or "trickling") is the opposite of bubbling, where the event starts from the outermost ancestor and travels down to the target element. Both capturing and bubbling can be controlled using options when attaching event listeners.
  
- **`stopPropagation()`**: This method can be used to stop the event from bubbling up to parent elements, which can be helpful when you want to limit event handling to a specific element.

- **Event delegation**: One of the most common uses of event bubbling is event delegation. It allows you to handle events efficiently by attaching a single listener to a parent element rather than multiple listeners to each child element.

### Conclusion:

Event bubbling simplifies event handling by allowing you to manage events at a higher level in the DOM hierarchy, especially useful in scenarios like event delegation and dynamic content handling. Understanding and utilizing event bubbling can lead to cleaner and more efficient code in JavaScript applications.



*/