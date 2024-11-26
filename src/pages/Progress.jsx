import React, { useEffect } from 'react';
import { useAppContext } from '../context/TournamentContext';

export const Progress = () => {
    const { tournamentTree, generateTournamentTree, matches } = useAppContext();
    
    useEffect(() => {
        if (matches.length > 0 && !tournamentTree) {
            generateTournamentTree(); // Genera el árbol si hay partidos y no existe un árbol
        }
    }, [matches, tournamentTree, generateTournamentTree]);

    const renderTree = (node) => {
        if (!node) return null;

        const team1 = node.value[0];
        const team2 = node.value[1];

        return (
            <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-500 rounded text-white flex items-center gap-1">
                    <span><img className='w-4' src={team1.flag} alt="" /></span> {team1.name} vs <span><img className='w-4' src={team2.flag} alt="" /></span> {team2.name}
                </div>
                <div className="flex mt-2">
                    <div className="mr-4">{renderTree(node.left)}</div>
                    <div>{renderTree(node.right)}</div>
                </div>
            </div>
        );
    };

   

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Progreso del Torneo</h1>
            {tournamentTree ? renderTree(tournamentTree.root) : <div>Cargando árbol del torneo...</div>}
            {console.log()
            }
        </div>
    );
};



