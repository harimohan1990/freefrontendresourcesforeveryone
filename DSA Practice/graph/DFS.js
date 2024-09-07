// Queue implementation using an array
function Stack() {
    let items = [];

    this.push = function(element) {
        items.push(element);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
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

    // Depth-First Search (DFS) using Stack
    this.dfs = function(v, callback) {
        var color = initializeColor();
        var stack = new Stack();
        stack.push(v);

        while (!stack.isEmpty()) {
            var u = stack.pop();

            if (color[u] === 'white') {
                color[u] = 'grey';
                if (callback) {
                    callback(u);
                }

                var neighbors = adjList[u];
                for (var i = neighbors.length - 1; i >= 0; i--) {
                    var w = neighbors[i];
                    if (color[w] === 'white') {
                        stack.push(w);
                    }
                }
            }
            color[u] = 'black';
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

// DFS traversal using stack
gr
