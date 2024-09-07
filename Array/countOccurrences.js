function countOccurrences(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = (acc[obj[key]] || 0) + 1;
        return acc;
    }, {});
}

// Example usage
const arr = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Alice" },
    { name: "Charlie" }
];
const counts = countOccurrences(arr, 'name');
console.log(counts); // { Alice: 2, Bob: 1, Charlie: 1 }