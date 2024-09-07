function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
}



/*



Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the search continues in the lower half; otherwise, it continues in the upper half. This process is repeated until the item is found or the interval is empty.

### Steps:
1. **Start with the entire array.**
2. Find the **middle element** of the array.
3. If the middle element is equal to the target value, **return its index**.
4. If the target value is less than the middle element, **repeat the search on the left half** of the array.
5. If the target value is greater than the middle element, **repeat the search on the right half** of the array.
6. If the search interval becomes empty, the target value is not in the array.

### JavaScript Implementation:

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}
```

### Example:

```javascript
let array = [2, 3, 4, 10, 40];
let target = 10;
let result = binarySearch(array, target);
console.log(result); // Output: 3 (index of 10 in the array)
```

### Space and Time Complexity:

- **Time Complexity:** O(log n)
  - This is because the array is divided in half during each step, reducing the search space exponentially.

- **Space Complexity:** O(1) for the iterative version, as it only uses a constant amount of extra space.

### Recursive Version of Binary Search:

You can also implement Binary Search recursively:

```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
}
```

### Example with Recursive Binary Search:

```javascript
let array = [2, 3, 4, 10, 40];
let target = 10;
let result = binarySearchRecursive(array, target);
console.log(result); // Output: 3 (index of 10 in the array)
```

### Summary:
Binary Search is highly efficient for searching in a sorted array, with a time complexity of O(log n). It is much faster than linear search algorithms for large datasets. However, it requires the array to be sorted before performing the search. The iterative version is generally preferred for its simplicity and lower space complexity, but the recursive version can be easier to understand conceptually.





*/