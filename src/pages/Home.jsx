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
        { label: 'POR', value: 'portugal', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1920px-Flag_of_Portugal.svg.png' },
        { label: 'NED', value: 'netherlands', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg' },
        { label: 'RUS', value: 'russia', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg' },
        { label: 'CRO', value: 'croatia', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg' },
        { label: 'POL', value: 'poland', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg' },
        { label: 'SWE', value: 'sweden', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg' },
        { label: 'USA', value: 'united-states', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
        { label: 'CAN', value: 'canada', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg' },
        { label: 'EGY', value: 'egypt', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg' },
        { label: 'TUR', value: 'turkey', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg' },
        { label: 'SUI', value: 'switzerland', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg' },
        { label: 'ARG', value: 'argentina', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
        { label: 'BUL', value: 'bulgaria', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png' },
        { label: 'DAN', value: 'denmark', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg' },
        { label: 'SRB', value: 'serbia', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1920px-Flag_of_Serbia.svg.png' },
        { label: 'AUS', value: 'australia', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg' },
        { label: 'JAM', value: 'jamaica', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1920px-Flag_of_Jamaica.svg.png' },
        { label: 'CHI', value: 'hungary', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1920px-Flag_of_Chile.svg.png' },
        { label: 'IRN', value: 'iran', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg' },
        { label: 'SEN', value: 'senegal', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1920px-Flag_of_Senegal.svg.png' }
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
            <h1 className="lg:text-2xl text-xl font-bold mb-4">Registro de Equipos</h1>
            <div className="flex lg:flex-row flex-col gap-2 mb-4">
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
                    className="lg:w-1/2 w-full"
                    classNamePrefix="react-select"
                    isSearchable
                    components={{ SingleValue: customSingleValue, Option: customOption }}
                />
                <button
                    onClick={handleAddTeam}
                    className="p-2 lg:text-base text-sm bg-blue-500 rounded text-white"
                >
                    Agregar Equipo
                </button>
            </div>
            <h2 className="text-xl font-bold mb-2">Equipos Registrados:</h2>
            <ul className="list-disc pl-6 flex flex-col gap-5 mt-5">
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
