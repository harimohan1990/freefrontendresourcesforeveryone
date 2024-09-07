function Graph() {
    // Array to store the vertices
    var vertices = [];

    // Object to store adjacency list
    var adjList = {};

    // Method to add a vertex to the graph
    this.addVertex = function(v) {
        vertices.push(v);
        adjList[v] = [];
    }

    // Method to add an edge between two vertices
    this.addEdge = function(v, w) {
        adjList[v].push(w);
        adjList[w].push(v);
    }

    // Method to print the graph
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

// Print the graph
graph.printGraph();
