function filterValues(arr, comparator) {
    return arr.filter(comparator);
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const result = filterValues(arr, x => x % 2 === 0);
console.log(result); // [2, 4]

