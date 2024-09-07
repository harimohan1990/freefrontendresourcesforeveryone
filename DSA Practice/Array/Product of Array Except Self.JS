function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Left Pass: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Right Pass: Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}


/*




The "Product of Array Except Self" problem asks you to create a new array where each element at index `i` is the product of all elements in the original array except the one at `i`. This must be done without using division and with a time complexity of O(n).

### Approach:
To achieve this, we can use a two-pass approach:
1. **Left Pass:** Calculate the product of all elements to the left of each element and store it in the result array.
2. **Right Pass:** Calculate the product of all elements to the right of each element and multiply it with the corresponding element in the result array from the left pass.

### JavaScript Implementation:

```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Left Pass: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Right Pass: Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}
```

### Example:

```javascript
let array = [1, 2, 3, 4];
console.log(productExceptSelf(array)); // Output: [24, 12, 8, 6]
```

### Explanation:

- **Left Pass:**
  - Start with `result = [1, 1, 1, 1]`.
  - For each element, store the product of all elements to the left:
    - After processing the first element: `result = [1, 1, 1, 1]`
    - After processing the second element: `result = [1, 1, 2, 1]`
    - After processing the third element: `result = [1, 1, 2, 6]`

- **Right Pass:**
  - Now, multiply the result by the product of all elements to the right:
    - After processing the last element: `result = [1, 12, 8, 6]`
    - After processing the third element: `result = [24, 12, 8, 6]`
    - After processing the second element: `result = [24, 12, 8, 6]`

- Final `result = [24, 12, 8, 6]`.

### Edge Cases:
- If the input array contains only one element, the result should be `[1]`.
- If the array contains zeros, elements corresponding to the zeros will affect the output.

### Space and Time Complexity:

- **Time Complexity:** O(n) because we traverse the array twice.
  
- **Space Complexity:** O(1) for extra space (excluding the output array), as we use the `result` array directly for the output without additional space.

### Summary:
This approach efficiently computes the product of all elements except the current one, without using division, in O(n) time complexity. It uses a two-pass technique to ensure the result is computed with minimal additional space usage.





*/