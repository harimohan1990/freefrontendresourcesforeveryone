const orangesRotting = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [];
    let freshOranges = 0;
    let minutes = 0;

    // Initialize the queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
    }

    // If there are no fresh oranges, return 0
    if (freshOranges === 0) return 0;

    // BFS to rot the oranges
    while (queue.length > 0) {
        let newQueue = [];
        for (let [r, c] of queue) {
            for (let [dr, dc] of directions) {
                const newR = r + dr;
                const newC = c + dc;

                // If the adjacent cell is a fresh orange, rot it and add to the new queue
                if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && grid[newR][newC] === 1) {
                    grid[newR][newC] = 2; // Mark as rotten
                    freshOranges--;
                    newQueue.push([newR, newC]);
                }
            }
        }
        if (newQueue.length > 0) {
            minutes++;
            queue = newQueue;
        } else {
            break;
        }
    }

    // If there are fresh oranges left, return -1
    return freshOranges === 0 ? minutes : -1;
};

// Example Usage:
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

console.log(orangesRotting(grid)); // Output: 4
