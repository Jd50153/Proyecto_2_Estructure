import React, { useState } from 'react';
import { useAppContext } from '../context/TournamentContext';
import Select from 'react-select'; // Importar React-Select

export const Home = () => {
    const { teams, addTeam } = useAppContext();
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleAddTeam = () => {
        if (selectedTeam) {
            const newTeam = {
                name: selectedTeam.label,  // Nombre del equipo
                flag: selectedTeam.flag     // URL de la bandera
            };
            addTeam(newTeam);  // Se agrega el equipo con su nombre y bandera
            setSelectedTeam(null);  // Limpiar la selección después de agregar
        }
    };

    const teamOptions = [
        { label: 'ARG', value: 'argentina', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
        { label: 'BRA', value: 'brazil', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg' },
        { label: 'GER', value: 'germany', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
        { label: 'COL', value: 'colombia', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' },
        { label: 'FRA', value: 'france', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
        { label: 'ESP', value: 'spain', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg' },
        { label: 'ITA', value: 'italy', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' },
        { label: 'ENG', value: 'england', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png' },
        { label: 'BEL', value: 'belgium', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1920px-Flag_of_Belgium_%28civil%29.svg.png' },
        { label: 'MEX', value: 'mexico', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' },
        { label: 'URU', value: 'uruguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1920px-Flag_of_Uruguay.svg.png' },
        { label: 'JPN', value: 'japan', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' },
    ];


    const customSingleValue = ({ data }) => (
        <div className="flex items-center">
            <img src={data.flag} alt={data.label} className="w-6 h-6 mr-2" />
            {data.label}
        </div>
    );

    const customOption = (props) => {
        const { data, innerRef, innerProps } = props;
        return (
            <div ref={innerRef} {...innerProps} className="flex items-center p-2 cursor-pointer">
                <img src={data.flag} alt={data.label} className="w-6 h-6 mr-2" />
                {data.label}
            </div>
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Registro de Equipos</h1>
            <div className="flex gap-2 mb-4">
                <Select
                    value={selectedTeam}
                    onChange={setSelectedTeam}
                    options={teamOptions}
                    getOptionLabel={(e) => (
                        <div className="flex items-center">
                            <img src={e.flag} alt={e.label} className="w-6 h-6 mr-2" />
                            {e.label}
                        </div>
                    )}
                    className="w-1/2"
                    classNamePrefix="react-select"
                    isSearchable
                    components={{ SingleValue: customSingleValue, Option: customOption }}
                />
                <button
                    onClick={handleAddTeam}
                    className="p-2 bg-blue-500 rounded text-white"
                >
                    Agregar Equipo
                </button>
            </div>
            <h2 className="text-xl font-bold mb-2">Equipos Registrados:</h2>
            <ul className="list-disc pl-6">
                {teams.map((team, index) => (
                    <li key={index} className="flex items-center">
                        <img src={team.flag} alt={team.name} className="w-6 h-6 mr-2" />
                        {team.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
