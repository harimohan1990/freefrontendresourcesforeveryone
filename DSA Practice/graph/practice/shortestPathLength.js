const shortestPathLength = (graph) => {
    const n = graph.length;
    const allVisited = (1 << n) - 1; // Bitmask where all nodes are visited (e.g., 111...1)
    const queue = [];
    const visited = new Set();

    // Initialize the queue with all nodes as starting points
    for (let i = 0; i < n; i++) {
        const mask = 1 << i; // Bitmask for just the i-th node visited
        queue.push([i, mask, 0]); // [current_node, visited_mask, current_distance]
        visited.add(`${i},${mask}`);
    }

    // Perform BFS
    while (queue.length > 0) {
        const [current_node, current_mask, current_dist] = queue.shift();

        // If all nodes have been visited, return the current distance
        if (current_mask === allVisited) {
            return current_dist;
        }

        // Explore the neighbors
        for (const neighbor of graph[current_node]) {
            const new_mask = current_mask | (1 << neighbor); // Update the bitmask to include the neighbor

            if (!visited.has(`${neighbor},${new_mask}`)) {
                queue.push([neighbor, new_mask, current_dist + 1]);
                visited.add(`${neighbor},${new_mask}`);
            }
        }
    }

    return -1; // In case no solution is found (which shouldn't happen in a connected graph)
};

// Example Usage:
const graph = [
    [1, 2, 3], // Node 0 is connected to nodes 1, 2, 3
    [0, 2],    // Node 1 is connected to nodes 0, 2
    [0, 1, 3], // Node 2 is connected to nodes 0, 1, 3
    [0, 2]     // Node 3 is connected to nodes 0, 2
];

console.log(shortestPathLength(graph)); // Output: 4
