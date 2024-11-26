import { createContext, useContext, useMemo, useState } from "react";
import { createTournamentTree } from "../utils/createTournamentTree";

const AppContext = createContext();

export const AppProvider = (props) => {
    const [teams, setTeams] = useState([]); // Lista de equipos
    const [matches, setMatches] = useState([]); // Partidos programados
    const [results, setResults] = useState([]); // Resultados
    const [tournamentTree, setTournamentTree] = useState(null); // Árbol del torneo

    const addTeam = (team) => setTeams((prev) => [...prev, team]);

    const scheduleMatch = (match) => {
        setMatches((prev) => {
            const newMatches = [...prev, match];
            console.log("Partidos programados:", newMatches);  // Verifica si se agregan correctamente
            return newMatches;
        });
    };

    

    const recordResult = (matchId, result) => {
        setResults((prev) => [...prev, { matchId, result }]);
    };

    const generateTournamentTree = () => {
        if (matches.length === 0) {
            console.error('No hay partidos para generar el árbol del torneo.');
            return;
        }
        const tree = createTournamentTree(matches);
        console.log('Árbol generado:', tree); // Verifica el árbol antes de configurarlo
        setTournamentTree(tree);
    };

    const value = useMemo(() => {
        return ({
            teams,
            addTeam,
            matches,
            scheduleMatch,
            results,
            recordResult,
            tournamentTree,
            setTournamentTree,
            generateTournamentTree
        })
    }, [
        teams,
        addTeam,
        matches,
        scheduleMatch,
        results,
        recordResult,
        tournamentTree,
        setTournamentTree,
        generateTournamentTree
    ])
    return (
        <AppContext.Provider value={value} {...props} />
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('Este hook debe de estar dentro del provedor Api')
    }
    return context
}