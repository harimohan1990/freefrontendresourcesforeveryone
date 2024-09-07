function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0; // Initialize the slow-runner

    for (let j = 1; j < arr.length; j++) { // Start fast-runner from the second element
        if (arr[j] !== arr[i]) {
            i++; // Move the slow-runner to the next position
            arr[i] = arr[j]; // Update the next unique element
        }
    }

    return i + 1; // The length of the array with unique elements
}


/*

To remove duplicates from a sorted array in-place, you can use a two-pointer approach. The idea is to iterate through the array and move unique elements to the front. Since the array is sorted, duplicates will be adjacent, and you can easily skip over them.

### Approach:
1. **Use two pointers:** 
   - `i` is the slow-runner that tracks the position of the next unique element.
   - `j` is the fast-runner that traverses the array.
2. **Iterate through the array with the fast-runner `j`:**
   - Compare each element at `j` with the element at `i`.
   - If they are different, increment `i` and update `arr[i]` with `arr[j]`.
3. The array from `arr[0]` to `arr[i]` now contains the unique elements.

### JavaScript Implementation:

```javascript
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0; // Initialize the slow-runner

    for (let j = 1; j < arr.length; j++) { // Start fast-runner from the second element
        if (arr[j] !== arr[i]) {
            i++; // Move the slow-runner to the next position
            arr[i] = arr[j]; // Update the next unique element
        }
    }

    return i + 1; // The length of the array with unique elements
}
```

### Example:

```javascript
let array = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(array);
console.log(newLength); // Output: 5
console.log(array.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
```

### Explanation:
- **Initial Array:** `[1, 1, 2, 2, 3, 4, 4, 5]`
- **First Iteration:** `i = 0, j = 1` → No change since `arr[1] = arr[0]`.
- **Second Iteration:** `i = 0, j = 2` → `arr[2] ≠ arr[0]`, so `i = 1`, `arr[1] = arr[2]`, resulting in `[1, 2, 2, 2, 3, 4, 4, 5]`.
- **Continue:** This process continues, moving unique elements to the front.

### Edge Cases:
- If the array is empty, return `0`.
- If all elements are the same, the array will be reduced to a single element.

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed once.
  
- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of extra space.

This in-place solution efficiently removes duplicates while maintaining the original order of elements. After running this function, the first `newLength` elements of the array are the unique elements, and the rest of the array can be ignored.






*/