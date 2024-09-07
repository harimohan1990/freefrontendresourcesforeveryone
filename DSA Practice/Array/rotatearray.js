function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Normalize k

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);

    // Step 2: Reverse the first K elements
    reverse(0, k - 1);

    // Step 3: Reverse the remaining elements
    reverse(k, n - 1);

    return arr;
}


/*Rotating an array by `K` positions means shifting each element of the array to the right by `K` positions. Elements that go past the last index of the array wrap around to the beginning. Here's how you can do it in JavaScript.

### Approach:
1. **Normalize `K`:** If `K` is greater than the length of the array, we can take `K % n` (where `n` is the length of the array) because rotating by `n` or any multiple of `n` results in the same array.
2. **Reverse Parts of the Array:**
   - Reverse the entire array.
   - Reverse the first `K` elements.
   - Reverse the remaining `n-K` elements.

### JavaScript Implementation:

```javascript
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Normalize k

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);

    // Step 2: Reverse the first K elements
    reverse(0, k - 1);

    // Step 3: Reverse the remaining elements
    reverse(k, n - 1);

    return arr;
}
```

### Example:

```javascript
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(array, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
```

### Explanation:
- **Original Array:** `[1, 2, 3, 4, 5, 6, 7]`
- **Step 1 (Reverse the entire array):** `[7, 6, 5, 4, 3, 2, 1]`
- **Step 2 (Reverse the first K elements):** `[5, 6, 7, 4, 3, 2, 1]`
- **Step 3 (Reverse the remaining elements):** `[5, 6, 7, 1, 2, 3, 4]`

### Space and Time Complexity:

- **Time Complexity:** O(n)  
  - Each reversal takes O(n), and there are three reversals, so overall time complexity is O(n).

- **Space Complexity:** O(1)  
  - The algorithm modifies the array in place, so no additional space is required apart from a few variables.

This method is efficient and avoids the need for extra space, making it ideal for in-place array rotations

*/

