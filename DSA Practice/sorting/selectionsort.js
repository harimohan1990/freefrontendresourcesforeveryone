function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

/* 


Selection Sort is another simple comparison-based sorting algorithm. It divides the input list into two parts: the sorted part at the beginning of the list and the unsorted part at the end. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted part and swaps it with the leftmost unsorted element, moving the boundary of the sorted part one element to the right.

### Steps:
1. **Start with the first element** as the minimum.
2. **Compare this minimum with the rest of the array** to find the actual minimum element.
3. **Swap the found minimum** element with the first element of the unsorted part.
4. Move the boundary of the sorted array by one position to the right.
5. Repeat until the entire array is sorted.

### JavaScript Implementation:

```javascript
function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
```

### Example:

```javascript
let array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]
```

### Space and Time Complexity:

- **Time Complexity:**  
  - Worst-case: O(n²)  
  - Best-case: O(n²)  
  - The time complexity remains the same because selection sort always scans the entire unsorted portion of the list to find the minimum element.

- **Space Complexity:** O(1) (only a constant amount of extra space is used for swapping)

Selection Sort is not stable and is generally less efficient than more advanced algorithms like Quick Sort or Merge Sort, but it has the advantage of being simple and easy to understand. It's most useful for small datasets or when memory usage is a concern.




*/