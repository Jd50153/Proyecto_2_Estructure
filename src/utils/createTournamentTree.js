// utils/createTournamentTree.js
import { BinaryTree } from "./BinaryTree";

export const createTournamentTree = (matches) => {
    const tree = new BinaryTree();
    
    matches.forEach((match) => {
        tree.insert(match); // Inserta cada partido en el árbol
    });

    return tree;
};
