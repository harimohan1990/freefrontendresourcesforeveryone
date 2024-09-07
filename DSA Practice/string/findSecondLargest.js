function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for a second largest
    }
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    
    return second === -Infinity ? null : second;
}

// Example usage:
const arr = [10, 5, 20, 8, 12];
console.log(findSecondLargest(arr)); // Output: 12
