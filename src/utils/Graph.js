// utils/Graph.js
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(team) {
      if (!this.adjacencyList.has(team)) {
        this.adjacencyList.set(team, []);
      }
    }
  
    addEdge(team1, team2) {
      if (this.adjacencyList.has(team1)) {
        this.adjacencyList.get(team1).push(team2);
      }
    }
  
    getConnections(team) {
      return this.adjacencyList.get(team) || [];
    }
  }
  
  export { Graph };
  