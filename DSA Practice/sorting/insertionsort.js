function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Place the key at its correct position
    }
    return arr;
}


/*


Insertion Sort is a simple and efficient comparison-based sorting algorithm, particularly useful for small datasets or when the array is nearly sorted. The algorithm builds the sorted array one item at a time, by repeatedly taking the next element from the unsorted portion and inserting it into the correct position within the sorted portion.

### Steps:
1. Start with the first element, considering it as a sorted portion of the array.
2. Take the next element from the unsorted portion and compare it with the elements in the sorted portion.
3. Shift all elements in the sorted portion that are greater than the current element to the right.
4. Insert the current element into its correct position in the sorted portion.
5. Repeat until the entire array is sorted.

### JavaScript Implementation:

```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Place the key at its correct position
    }
    return arr;
}
```

### Example:

```javascript
let array = [12, 11, 13, 5, 6];
console.log(insertionSort(array)); // Output: [5, 6, 11, 12, 13]
```

### Space and Time Complexity:

- **Time Complexity:**  
  - Worst-case: O(n²) (when the array is sorted in reverse order)  
  - Best-case: O(n) (when the array is already sorted)  
  - Average-case: O(n²)

- **Space Complexity:** O(1) (only a constant amount of extra space is used for the `key` variable)

Insertion Sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements. It's efficient for small datasets or for arrays that are already partially sorted. Its simplicity and efficiency for small or nearly sorted datasets make it a good choice for certain applications, like sorting small subarrays in more complex algorithms like Quick Sort.





*/