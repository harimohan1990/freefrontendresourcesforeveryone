const numIslands = (grid) => {
    if (grid === null || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (r, c) => {
        // Base cases: if out of bounds or at a water cell, return
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        // Mark the cell as visited by setting it to '0'
        grid[r][c] = '0';

        // Visit all adjacent cells (up, down, left, right)
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    };

    // Traverse the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                // Found a new island, increment the counter
                islandCount++;
                // Perform DFS to mark the entire island as visited
                dfs(r, c);
            }
        }
    }

    return islandCount;
};

// Example Usage:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3
