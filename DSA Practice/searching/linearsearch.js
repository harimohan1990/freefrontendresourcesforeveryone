function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return its index
        }
    }
    return -1; // Target not found
}


/*


Linear Search is the simplest searching algorithm that checks every element in the list until the desired element is found or the list ends. It's straightforward and works on both sorted and unsorted lists.

### Steps:
1. **Start at the first element** of the array.
2. **Compare the current element** with the target value.
3. If the current element matches the target value, **return its index**.
4. If the current element does not match, move to the next element and repeat the process.
5. If the end of the array is reached without finding the target, return `-1`.

### JavaScript Implementation:

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return its index
        }
    }
    return -1; // Target not found
}
```

### Example:

```javascript
let array = [2, 3, 4, 10, 40];
let target = 10;
let result = linearSearch(array, target);
console.log(result); // Output: 3 (index of 10 in the array)
```

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - This is because, in the worst case, you might have to check every element in the array.

- **Space Complexity:** O(1)
  - Linear Search uses only a constant amount of extra space.

### Summary:
Linear Search is the most basic search algorithm, applicable to both sorted and unsorted arrays. It’s not as efficient as algorithms like Binary Search, especially for large datasets, but it's very simple to implement and understand. Linear Search is best used when the list is small or when you don't know if the list is sorted.

*/