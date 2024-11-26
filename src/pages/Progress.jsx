import React, { useEffect } from 'react';
import { useAppContext } from '../context/TournamentContext';

export const Progress = () => {
    const { tournamentTree, generateTournamentTree, matches } = useAppContext();
    
    useEffect(() => {
        if (matches.length > 0 && !tournamentTree) {
            generateTournamentTree();
        }
    }, [matches, tournamentTree, generateTournamentTree]);

    const renderTree = (node) => {
        if (!node) return null;

        const team1 = node.value[0];
        const team2 = node.value[1];

        return (
            <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-500 rounded text-white flex gap-4">
                    <div className="flex items-center gap-1">
                        <img className="w-5" src={team1.flag} alt={team1.name} />
                        <p>{team1.name}</p>
                    </div>
                    vs
                    <div className="flex items-center gap-1">
                        <img className="w-5" src={team2.flag} alt={team2.name} />
                        <p>{team2.name}</p>
                    </div>
                </div>
                {(node.left || node.right) && (
                    <div className="flex mt-2">
                        {node.left && <div className="mr-4">{renderTree(node.left)}</div>}
                        {node.right && <div>{renderTree(node.right)}</div>}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Progreso del Torneo</h1>
            {tournamentTree ? renderTree(tournamentTree.root) : <div>Cargando árbol del torneo...</div>}
        </div>
    );
};
