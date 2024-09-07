


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // After each pass, the next largest element is in place
        n--; // Reduce the range for the next pass
    } while (swapped);
    return arr;
}


/* Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. Here's a quick breakdown of the algorithm:

### Steps:
1. **Start from the first element** and compare it with the next element.
2. **If the current element is greater** than the next element, swap them.
3. Move to the next element and repeat step 2 until the end of the list.
4. After each pass, the largest element will "bubble up" to its correct position.
5. Repeat the process for the remaining elements until no more swaps are needed.

### JavaScript Implementation:

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // After each pass, the next largest element is in place
        n--; // Reduce the range for the next pass
    } while (swapped);
    return arr;
}
```

### Example:

```javascript
let array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

### Space and Time Complexity:

- **Time Complexity:**  
  - Worst-case: O(n²)  
  - Best-case: O(n) (when the array is already sorted)
  
- **Space Complexity:** O(1) (only a constant amount of extra space is used for swapping)

Bubble Sort is not the most efficient algorithm for large datasets but is easy to understand and implement. It's mainly useful for educational purposes or for small datasets.

*/

