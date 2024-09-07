/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = -Infinity;
    let current_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        current_sum = Math.max(nums[i], current_sum + nums[i]);
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum;
};

// Example Usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray [4, -1, 2, 1])
