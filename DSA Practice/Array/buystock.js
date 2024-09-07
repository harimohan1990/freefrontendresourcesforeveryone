function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate the current profit and update maxProfit if it's higher
            let currentProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }

    return maxProfit;
}


/*
The "Best Time to Buy and Sell Stock" problem involves finding the maximum profit that can be achieved by buying and then selling one share of a stock on different days. The goal is to find the best days to buy and sell to maximize your profit, given an array where each element represents the price of the stock on a particular day.

### Approach:
The problem can be solved in a single pass through the array:

1. **Initialize two variables:**
   - `minPrice`: Track the minimum price encountered so far as you iterate through the array.
   - `maxProfit`: Track the maximum profit that can be achieved.

2. **Iterate through the array:**
   - For each price, calculate the potential profit if you were to sell the stock at that price (`currentProfit = price - minPrice`).
   - Update `maxProfit` if `currentProfit` is greater than the current `maxProfit`.
   - Update `minPrice` if the current price is lower than the current `minPrice`.

3. **Return `maxProfit`:**
   - After iterating through the array, `maxProfit` will hold the maximum profit that can be achieved.

### JavaScript Implementation:

```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate the current profit and update maxProfit if it's higher
            let currentProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }

    return maxProfit;
}
```

### Example:

```javascript
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (Buy at 1 and sell at 6)
```

### Explanation:
- **Initialize:** `minPrice = Infinity`, `maxProfit = 0`
- **First Iteration:** `price = 7` → Update `minPrice = 7`
- **Second Iteration:** `price = 1` → Update `minPrice = 1`
- **Third Iteration:** `price = 5` → `currentProfit = 5 - 1 = 4`, update `maxProfit = 4`
- **Continue:** The process continues, updating `maxProfit` as necessary.

### Edge Cases:
- If the array is empty or has only one element, return `0` as no profit can be made.
- If prices are in descending order, the best profit is `0` since it's not possible to make a profit.

### Space and Time Complexity:

- **Time Complexity:** O(n)
  - The array is traversed only once.
  
- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of extra space.

### Summary:
This solution efficiently finds the maximum possible profit in linear time using a single pass through the array. It’s optimal and simple, making it a popular approach to solve the "Best Time to Buy and Sell Stock" problem.


*/