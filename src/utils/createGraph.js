// utils/createGraph.js
import { Graph } from './Graph';

export const createTournamentGraph = (matches) => {
  const graph = new Graph();

  matches.forEach(([team1, team2]) => {
    graph.addVertex(team1);
    graph.addVertex(team2);
    graph.addEdge(team1, team2);
  });

  return graph;
};
