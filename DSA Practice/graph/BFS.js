// Queue implementation using an array
function Queue() {
    let items = [];

    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

// Graph class
function Graph() {
    var vertices = [];
    var adjList = {};

    this.addVertex = function(v) {
        vertices.push(v);
        adjList[v] = [];
    }

    this.addEdge = function(v, w) {
        adjList[v].push(w);
        adjList[w].push(v); // Since this is an undirected graph
    }

    var initializeColor = function() {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    // Breadth-First Search (BFS) method
    this.bfs = function(v, callback) {
        var color = initializeColor();
        var queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            color[u] = 'grey';

            var neighbors = adjList[u];
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    this.printGraph = function() {
        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            var edges = adjList[vertex];
            console.log(vertex + " -> " + edges.join(", "));
        }
    }
}

// Create a new graph
var graph = new Graph();

// List of vertices
var myVertices = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I'];

// Add vertices to the graph
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

// Add edges to the graph
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'I');
graph.addEdge('E', 'I');

// BFS traversal
graph.bfs('A', function(vertex) {
    console.log('Visited vertex: ' + vertex);
});

// Print the graph
graph.printGraph();
