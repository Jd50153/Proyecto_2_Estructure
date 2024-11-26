import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths';
import { useAppContext } from '../context/TournamentContext';

export const Header = () => {
    const { pathname } = useLocation()
    const { teams , results } = useAppContext()
    console.log(teams);
    

    const getClassName = (path) => {
        return pathname === path ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white';
    }

    const navigate = useNavigate()

    const navigatePages = (path) => {
        if (teams.length < 2) {
            alert("Debes de crear minimo 2 equipos primero para ir a esta sección")
            return
        }
        navigate(path)

    }
    const navigateProgress = (path)=>{
        if (results.length === 0) {
            alert("Debes de crear crear resultados primero para ir a esta sección")
            return
        }
        navigate(path)
    }

    return (
        <ul className='bg-white w-full mb-4 rounded-xl flex justify-between py-4 px-9'>
            <Link to={paths.HOME} className={`p-3 rounded-md cursor-pointer font-bold ${getClassName('/')}`}>
                Registrar equipos
            </Link>
            <button onClick={() => navigatePages(paths.SCHEDULE)} className={`p-3 rounded-md cursor-pointer font-bold ${getClassName('/schedule')}`}>
                Generar partidos
            </button>
            <button onClick={() => navigatePages(paths.RESULTS)} className={`p-3 rounded-md cursor-pointer font-bold ${getClassName('/results')}`}>
                Resultados
            </button>
            <button onClick={() => navigateProgress(paths.PROGRESS)} className={`p-3 rounded-md cursor-pointer font-bold ${getClassName('/progress')}`}>
                Progreso
            </button>
        </ul>
    )
}
