function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const arr = [3, 0, 1];
console.log(missingNumber(arr)); // Output: 2




//missingNumber


function missingNumber(nums) {
    const n = nums.length;
    
    for (let i = 0; i <= n; i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        }
    }
    
    return -1; // Just a fallback, it should never reach here if input is correct
}

// Example usage:
const arr = [3, 0, 1];
console.log(missingNumber(arr)); // Output: 2
