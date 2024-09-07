function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest
}


/*



Finding the second largest number in an array can be done efficiently in a single pass through the array. Here’s a step-by-step approach and the implementation in JavaScript:

### Approach:
1. **Initialize two variables:** 
   - `largest` to track the largest number.
   - `secondLargest` to track the second largest number.
2. **Iterate through the array:**
   - For each element, check if it's greater than the `largest`. If it is, update `secondLargest` to be `largest`, and then update `largest` to be the current element.
   - If the element is not greater than `largest` but is greater than `secondLargest`, update `secondLargest` to be the current element.
3. At the end of the iteration, `secondLargest` will hold the second largest number in the array.

### JavaScript Implementation:

```javascript
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest
}
```

### Example:

```javascript
let array = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(array)); // Output: 34
```

### Explanation:
- **Initialize:** `largest = -Infinity`, `secondLargest = -Infinity`
- **First Iteration:** `arr[0] = 12` → `largest = 12`, `secondLargest = -Infinity`
- **Second Iteration:** `arr[1] = 35` → `secondLargest = 12`, `largest = 35`
- **Subsequent Iterations:** The largest remains 35, and 34 becomes the second largest.

### Edge Cases:
- If the array has fewer than 2 elements, return `null` since there is no second largest number.
- If all elements are the same, return `null` as there’s no distinct second largest number.

### Space and Time Complexity:

- **Time Complexity:** O(n)  
  - The array is traversed only once.
  
- **Space Complexity:** O(1)  
  - The algorithm uses a constant amount of extra space.

This method is both time-efficient and space-efficient, making it ideal for large datasets.


*/

