function maxProbability(n, edges, succProb, start, end) {
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const prob = succProb[i];
        graph[u].push([v, prob]);
        graph[v].push([u, prob]);
    }

    const prob = Array(n).fill(0);
    prob[start] = 1;
    const pq = [[1, start]];

    while (pq.length) {
        const [currProb, node] = pq.shift();
        if (node === end) return currProb;

        for (const [neighbor, edgeProb] of graph[node]) {
            const newProb = currProb * edgeProb;
            if (newProb > prob[neighbor]) {
                prob[neighbor] = newProb;
                pq.push([newProb, neighbor]);
                pq.sort((a, b) => b[0] - a[0]);
            }
        }
    }

    return 0;
}
