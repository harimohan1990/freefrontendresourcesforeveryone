function maxSlidingWindow(nums, k) {
    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove elements not within the sliding window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements smaller than the current element from the deque
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // Add the current element at the end of the deque
        deque.push(i);

        // The element at the front of the deque is the maximum element of the window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
