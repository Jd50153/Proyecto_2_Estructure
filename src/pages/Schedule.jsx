// pages/Schedule.jsx
import React from 'react';
import { useAppContext } from '../context/TournamentContext';

export const Schedule = () => {
    const { teams, scheduleMatch, matches } = useAppContext();

    const handleGenerateMatches = () => {
        const matchQueue = [];
        for (let i = 0; i < teams.length; i += 2) {
            if (teams[i + 1]) {
                matchQueue.push([teams[i], teams[i + 1]]);
            }
        }
        matchQueue.forEach((match) => scheduleMatch(match));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Programación de Partidos</h1>
            <button
                onClick={handleGenerateMatches}
                className="p-2 bg-green-500 rounded text-white mb-4"
            >
                Generar Partidos
            </button>
            <div className="list-disc pl-6">
                {matches.map((match , i) => (
                    <div key={i} className='flex gap-8'>

                        <div className='flex items-center gap-2'>
                            <figure>
                                <img className='w-8' src={match[0].flag} alt="" />
                            </figure>
                            <p>

                                {match[0].name}
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center gap-2'>
                            <figure>
                                <img className='w-8' src={match[1].flag} alt="" />
                            </figure>
                            <p>

                                {match[1].name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


