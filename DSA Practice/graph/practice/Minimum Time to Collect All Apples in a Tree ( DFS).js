function minTime(n, edges, hasApple) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    function dfs(node, parent) {
        let time = 0;
        for (const child of graph[node]) {
            if (child !== parent) {
                time += dfs(child, node);
            }
        }
        if (time > 0 || hasApple[node]) {
            return time + (node !== 0 ? 2 : 0);
        }
        return 0;
    }

    return dfs(0, -1);
}
