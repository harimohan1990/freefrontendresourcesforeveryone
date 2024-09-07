function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of one element is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the middle point
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid));  // Recursively sort the right half

    return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare each element of the two arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate any remaining elements (if any) from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}


/*Merge Sort is a divide-and-conquer sorting algorithm that splits the array into smaller subarrays, sorts those subarrays, and then merges them back together to form the sorted array. It's efficient, stable, and works well with large datasets.

### Steps:
1. **Divide the array** into two halves until each subarray contains only one element (which is trivially sorted).
2. **Merge** the subarrays by comparing elements and arranging them in order.
3. **Repeat the process** until all subarrays are merged into a single sorted array.

### JavaScript Implementation:

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of one element is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the middle point
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid));  // Recursively sort the right half

    return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare each element of the two arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate any remaining elements (if any) from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

### Example:

```javascript
let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]
```

### Space and Time Complexity:

- **Time Complexity:**  
  - Worst-case: O(n log n)  
  - Best-case: O(n log n)  
  - Average-case: O(n log n)  
  - The time complexity is the same for all cases because the array is always divided into two halves, and merging takes linear time.

- **Space Complexity:** O(n)  
  - This is because the algorithm requires additional space to store the subarrays during the merging process.

Merge Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements. It's widely used due to its guaranteed O(n log n) performance, making it ideal for sorting large datasets. However, its space complexity can be a disadvantage in memory-constrained environments.
*/