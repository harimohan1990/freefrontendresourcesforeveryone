function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of one element is already sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose the pivot element
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot
        } else {
            right.push(arr[i]); // Elements greater than pivot
        }
    }

    // Recursively sort and concatenate
    return quickSort(left).concat(pivot, quickSort(right));
}

/*
Quick Sort is another divide-and-conquer sorting algorithm that's known for its efficiency and speed, especially for large datasets. The algorithm works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays: those less than the pivot and those greater than the pivot. It then recursively sorts the sub-arrays.

### Steps:
1. **Choose a pivot element** from the array.
2. **Partition the array** into two sub-arrays: one with elements less than the pivot and one with elements greater than the pivot.
3. Recursively **apply Quick Sort** to the sub-arrays.
4. Combine the sorted sub-arrays and the pivot into the final sorted array.

### JavaScript Implementation:

```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of one element is already sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose the pivot element
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot
        } else {
            right.push(arr[i]); // Elements greater than pivot
        }
    }

    // Recursively sort and concatenate
    return quickSort(left).concat(pivot, quickSort(right));
}
```

### Example:

```javascript
let array = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array)); // Output: [1, 5, 7, 8, 9, 10]
```

### Space and Time Complexity:

- **Time Complexity:**  
  - Worst-case: O(n²) (when the pivot is the smallest or largest element, leading to unbalanced partitions)  
  - Best-case: O(n log n)  
  - Average-case: O(n log n)  
  - The average and best-case time complexities arise because the array is divided into two roughly equal parts, and each part is sorted recursively.

- **Space Complexity:**  
  - O(log n) for the in-place version of Quick Sort (which reduces space usage by not creating new arrays for the partitions). However, the simple version provided above uses O(n) space due to additional array creation.

### In-place Quick Sort Implementation:

The above implementation isn't in-place because it creates new arrays for the left and right partitions. Here's a version that performs Quick Sort in-place, which is more space-efficient:

```javascript
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high]; // Choose the last element as the pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap the pivot element
    return i + 1;
}
```

### Example with In-place Quick Sort:

```javascript
let array = [10, 7, 8, 9, 1, 5];
console.log(quickSortInPlace(array)); // Output: [1, 5, 7, 8, 9, 10]
```

### Summary:
Quick Sort is an efficient, in-place sorting algorithm with an average time complexity of O(n log n). It's typically faster than Merge Sort for larger datasets due to its in-place sorting mechanism, which reduces memory overhead. However, it has a worst-case time complexity of O(n²), which can be mitigated by choosing better pivot strategies (e.g., using the median of three elements).



*/