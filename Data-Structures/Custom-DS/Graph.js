/*
## Graph

A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.

Trees are a specific type of graph data structure.

---

## Directed Graph

A graph in which the edges have a direction.

Edges are usually represented by arrows pointing in the direction the graph can be traversed.

---

## Undirected Graph

A graph in which the edges are bidirectional.

The graph can be traversed in either direction.

The absence of an arrow tells us that the graph is undirected.

---

## Graph Usage

* Google Maps
* Social media sites

## Graph Representation

* Adjacency Matrix
* Adjacency List


## Adjacency Matrix
An adjacency matrix is a **2D array of size V × V**, where **V** is the number of vertices in the graph.
Each row and column represents a vertex.
If the value of any element, say `matrix[i][j]`, is `1`, it represents that there is an edge connecting vertex `i` and vertex `j`.

## Adjacency Matrix vs Adjacency List

With an **adjacency list**, we only need to store the values for the edges that exist.

With an **adjacency matrix**, you store values irrespective of whether an edge exists or not. Storage-wise, an adjacency list is much more efficient.

With an **adjacency list**, inserting and finding adjacent nodes is **constant time complexity**, whereas with an **adjacency matrix**, it is **linear time complexity**.

An **adjacency list** allows you to store additional values with an edge, such as the **weight of the edge**. With an **adjacency matrix**, such information would have to be stored externally.

*/


const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

console.log(matrix[0][1]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);
console.log(matrix[0][0]);

const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
};

console.log(adjacencyList['A']);

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }


    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }


}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

graph.removeVertex("B");
graph.display();

graph.removeEdge("A", "B");
graph.display();
