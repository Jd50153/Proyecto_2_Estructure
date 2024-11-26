import React, { useState } from 'react';
import { useAppContext } from '../context/TournamentContext';
import Select from 'react-select';

export const Results = () => {
    const { matches, recordResult, results } = useAppContext();
    const [selectedMatch, setSelectedMatch] = useState(null); // Inicializar con null
    const [score, setScore] = useState('');

    const handleSubmitResult = () => {
        if (selectedMatch !== null && score) {
            // Asegúrate de que recordResult recibe los valores correctos
            recordResult(selectedMatch, score);
            setSelectedMatch(null); // Reseteamos el seleccionado
            setScore('');
        }
    };

    // Generar las opciones para el select
    const matchOptions = matches.map((match, index) => ({
        value: index, // Usamos el índice como valor
        label: (
            <div className="flex gap-1">
                <div className="flex items-center gap-1">
                    <img className="w-5" src={match[0].flag} alt={match[0].name} />
                    <p>{match[0].name}</p>
                </div>
                vs
                <div className="flex items-center gap-1">
                    <img className="w-5" src={match[1].flag} alt={match[1].name} />
                    <p>{match[1].name}</p>
                </div>
            </div>
        ), // Mostramos los equipos
    }));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Registro de Resultados</h1>
            <div className="flex items-center gap-5 my-8">
                <Select
                    value={matchOptions.find(option => option.value === selectedMatch)} // Busca el valor seleccionado
                    onChange={(selectedOption) => setSelectedMatch(selectedOption ? selectedOption.value : null)} // Actualiza el valor del partido
                    options={matchOptions}
                    className="w-[200px]"
                    placeholder="Seleccionar Partido"
                />
                <input
                    type="text"
                    placeholder="Resultado (e.g., 3-2)"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="p-2 outline-none border text-black rounded"
                />
                <div>
                    <button
                        onClick={handleSubmitResult} // Llama la función para registrar el resultado
                        className="p-2 bg-blue-500 rounded text-white"
                    >
                        Registrar Resultado
                    </button>
                </div>
            </div>
            <h2 className="text-xl font-bold mt-4">Resultados Registrados:</h2>
            <ul className="list-disc pl-6">
                {results.map((result, index) => (
                    <li key={index}>
                        Partido {result.matchId}: {result.result}
                    </li>
                ))}
            </ul>
        </div>
    );
}
