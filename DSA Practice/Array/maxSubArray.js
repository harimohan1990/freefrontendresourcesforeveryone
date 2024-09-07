function maxSubArray(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update maxEndingHere to include the current element
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update maxSoFar to be the maximum found so far
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

/*


The problem of finding the maximum sum subarray is commonly known as **Kadane's Algorithm**. The goal is to find the contiguous subarray within a one-dimensional numeric array that has the largest sum.

### Approach:
1. **Initialize two variables:**
   - `maxEndingHere`: Tracks the maximum sum of the subarray ending at the current position.
   - `maxSoFar`: Tracks the maximum sum found so far.
2. **Iterate through the array:**
   - For each element, update `maxEndingHere` to be the maximum of the current element alone or the current element plus `maxEndingHere` (which represents adding the current element to the existing subarray).
   - Update `maxSoFar` to be the maximum of `maxSoFar` and `maxEndingHere`.
3. After iterating through the array, `maxSoFar` will contain the maximum sum of the subarray.

### JavaScript Implementation:

```javascript
function maxSubArray(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update maxEndingHere to include the current element
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update maxSoFar to be the maximum found so far
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
```

### Example:

```javascript
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(array)); // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)
```

### Explanation:
- **Initial Values:** `maxEndingHere = -2`, `maxSoFar = -2`
- **First Iteration:** `maxEndingHere = max(1, -2 + 1) = 1`, `maxSoFar = max(-2, 1) = 1`
- **Second Iteration:** `maxEndingHere = max(-3, 1 - 3) = -2`, `maxSoFar = 1`
- **Continue:** This process continues until the entire array is processed.

### Edge Cases:
- If the array contains only one element, the maximum sum is that element.
- If all elements are negative, the algorithm will correctly return the least negative number (which is the maximum sum subarray in such cases).

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed only once.
  
- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of extra space.

### Summary:
Kadane's Algorithm is an efficient way to solve the maximum sum subarray problem with linear time complexity. It's widely used due to its simplicity and effectiveness in finding the largest sum of a contiguous subarray.



*/