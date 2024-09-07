function twoSum(nums, target) {
    let numMap = {}; // To store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i]; // Return the indices of the two numbers
        }

        numMap[nums[i]] = i; // Store the current number and its index
    }

    return []; // Return an empty array if no solution is found
}


/*




The "Two Sum" problem is a common interview question where you need to find two numbers in an array that add up to a specific target sum. The task is to return the indices of these two numbers. 

### Approach:
1. **Use a hash map (or object in JavaScript):**
   - As you iterate through the array, check if the complement of the current element (i.e., `target - current element`) exists in the hash map.
   - If the complement exists, you have found the two numbers, and you can return their indices.
   - If not, store the current element and its index in the hash map.

### JavaScript Implementation:

```javascript
function twoSum(nums, target) {
    let numMap = {}; // To store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i]; // Return the indices of the two numbers
        }

        numMap[nums[i]] = i; // Store the current number and its index
    }

    return []; // Return an empty array if no solution is found
}
```

### Example:

```javascript
let array = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(array, target)); // Output: [0, 1] (because 2 + 7 = 9)
```

### Explanation:
- **Initialization:** Create a hash map to store elements and their indices.
- **Iteration 1:** `nums[0] = 2`, `complement = 9 - 2 = 7`. Since `7` is not in the map, add `2` to the map (`numMap = {2: 0}`).
- **Iteration 2:** `nums[1] = 7`, `complement = 9 - 7 = 2`. `2` is in the map, so return `[0, 1]`.

### Edge Cases:
- If there are multiple pairs that add up to the target, the algorithm returns the first pair it finds.
- If no such pair exists, the function returns an empty array.

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed only once.
  
- **Space Complexity:** O(n)
  - The hash map stores up to `n` elements in the worst case.

### Summary:
The hash map-based approach to the "Two Sum" problem is efficient, with a linear time complexity. It works well even for large arrays, making it a popular solution in coding interviews.




*/