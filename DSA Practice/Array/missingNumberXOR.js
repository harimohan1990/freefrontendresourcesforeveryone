function missingNumberXOR(nums) {
    let xor = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        xor ^= i ^ nums[i];
    }

    xor ^= n; // XOR with the last index

    return xor;
}

/*  

The "Missing Number" problem involves finding the single missing number in an array containing `n` distinct numbers taken from the range `0` to `n`. The array will have a length of `n`, meaning one number in the range is missing.

### Approach 1: Using the Sum Formula
One efficient way to solve this problem is by using the mathematical formula for the sum of the first `n` natural numbers. The difference between the expected sum and the actual sum of the array gives the missing number.

### Formula:
The sum of the first `n` natural numbers is given by:

\[
\text{Sum} = \frac{n \times (n + 1)}{2}
\]

### Steps:
1. **Calculate the expected sum** using the formula above.
2. **Calculate the actual sum** of the elements in the array.
3. **The missing number** is the difference between the expected sum and the actual sum.

### JavaScript Implementation:

```javascript
function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
```

### Example:

```javascript
let array = [3, 0, 1];
console.log(missingNumber(array)); // Output: 2
```

### Explanation:
- **Expected Sum:** For `n = 3`, the sum should be `0 + 1 + 2 + 3 = 6`.
- **Actual Sum:** The sum of the array `[3, 0, 1]` is `4`.
- **Missing Number:** `6 - 4 = 2`.

### Edge Cases:
- If the array is empty (`n = 0`), the missing number is `0`.
- If no number is missing (not possible with the problem constraints), the function should return `n`.

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed once to calculate the actual sum.
  
- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of extra space.

### Approach 2: Using XOR (Bit Manipulation)
Another approach is to use XOR, which leverages the property that `a ^ a = 0` and `a ^ 0 = a`. By XORing all the indices and all the numbers in the array, the result will be the missing number.

### JavaScript Implementation:

```javascript
function missingNumberXOR(nums) {
    let xor = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        xor ^= i ^ nums[i];
    }

    xor ^= n; // XOR with the last index

    return xor;
}
```

### Example:

```javascript
let array = [3, 0, 1];
console.log(missingNumberXOR(array)); // Output: 2
```

### Explanation:
- **XOR the Indices and Values:** 
  - XOR of all indices `0 ^ 1 ^ 2 ^ 3` gives `3`.
  - XOR of all elements in the array `3 ^ 0 ^ 1` gives `2`.
- **Result:** The missing number is `2`.

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed once.
  
- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of extra space.

### Summary:
Both the sum formula and XOR methods efficiently find the missing number in linear time with constant space. The sum formula is more straightforward, while the XOR method is a bit trickier but equally effective.

*/


